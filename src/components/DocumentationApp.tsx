/**
 * Documentation App Root Component
 *
 * Wraps the entire application with @mieweb/ui providers.
 * This component provides:
 * - ThemeProvider for light/dark mode
 * - CommandPaletteProvider for ⌘K search
 * - Enterprise Health brand theming
 */

import React, { useEffect, useState, useCallback } from "react";
import {
  ThemeProvider,
  CommandPaletteProvider,
  CommandPalette,
  CommandPaletteTrigger,
  useCommandPalette,
  type CommandPaletteItem,
  type CommandPaletteCategory,
} from "@mieweb/ui";
import { enterpriseHealthBrand } from "@mieweb/ui/brands";
import type { BrandConfig } from "@mieweb/ui/brands/types";

declare global {
  interface Window {
    BaseURL?: string;
    BrandCode?: string;
    lunr?: typeof import("lunr");
  }
}

/**
 * Apply brand CSS variables to the document root.
 * This function injects a style tag with the brand's design tokens.
 */
function applyBrandStyles(brand: BrandConfig, isDark: boolean): void {
  const colors = brand.colors;
  const semanticColors = isDark ? colors.dark : colors.light;

  // Remove any existing brand style tag
  const existingStyle = document.getElementById("mieweb-brand-styles");
  if (existingStyle) {
    existingStyle.remove();
  }

  // Create a style tag with the brand variables
  const styleTag = document.createElement("style");
  styleTag.id = "mieweb-brand-styles";
  styleTag.textContent = `
    :root, [data-theme="light"], [data-theme="dark"] {
      --mieweb-primary-50: ${colors.primary[50]};
      --mieweb-primary-100: ${colors.primary[100]};
      --mieweb-primary-200: ${colors.primary[200]};
      --mieweb-primary-300: ${colors.primary[300]};
      --mieweb-primary-400: ${colors.primary[400]};
      --mieweb-primary-500: ${colors.primary[500]};
      --mieweb-primary-600: ${colors.primary[600]};
      --mieweb-primary-700: ${colors.primary[700]};
      --mieweb-primary-800: ${colors.primary[800]};
      --mieweb-primary-900: ${colors.primary[900]};
      --mieweb-primary-950: ${colors.primary[950]};
      --mieweb-background: ${semanticColors.background};
      --mieweb-foreground: ${semanticColors.foreground};
      --mieweb-card: ${semanticColors.card};
      --mieweb-card-foreground: ${semanticColors.cardForeground};
      --mieweb-muted: ${semanticColors.muted};
      --mieweb-muted-foreground: ${semanticColors.mutedForeground};
      --mieweb-border: ${semanticColors.border};
      --mieweb-input: ${semanticColors.input};
      --mieweb-ring: ${semanticColors.ring};
      --mieweb-destructive: ${semanticColors.destructive};
      --mieweb-destructive-foreground: ${semanticColors.destructiveForeground};
      --mieweb-success: ${semanticColors.success};
      --mieweb-success-foreground: ${semanticColors.successForeground};
      --mieweb-warning: ${semanticColors.warning};
      --mieweb-warning-foreground: ${semanticColors.warningForeground};
      --mieweb-font-sans: ${brand.typography.fontFamily.sans.map((f) => (f.includes(" ") ? `"${f}"` : f)).join(", ")};
      ${brand.typography.fontFamily.mono ? `--mieweb-font-mono: ${brand.typography.fontFamily.mono.map((f) => (f.includes(" ") ? `"${f}"` : f)).join(", ")};` : ""}
      --mieweb-radius-none: ${brand.borderRadius.none};
      --mieweb-radius-sm: ${brand.borderRadius.sm};
      --mieweb-radius-md: ${brand.borderRadius.md};
      --mieweb-radius-lg: ${brand.borderRadius.lg};
      --mieweb-radius-xl: ${brand.borderRadius.xl};
      --mieweb-radius-2xl: ${brand.borderRadius["2xl"]};
      --mieweb-radius-full: ${brand.borderRadius.full};
      --mieweb-shadow-card: ${brand.boxShadow.card};
      --mieweb-shadow-dropdown: ${brand.boxShadow.dropdown};
      --mieweb-shadow-modal: ${brand.boxShadow.modal};
    }
  `;
  document.head.appendChild(styleTag);
}

interface SearchResult {
  title: string;
  uri: string;
  content: string;
}

interface SearchIndex {
  search: (query: string) => Array<{ ref: string; score: number }>;
}

// Inner component that uses the command palette context
function DocumentationSearch() {
  const { isOpen, setItems, setCategories } = useCommandPalette();
  const [isLoading, setIsLoading] = useState(false);
  const [searchIndex, setSearchIndex] = useState<SearchIndex | null>(null);
  const [searchData, setSearchData] = useState<Map<string, SearchResult>>(
    new Map()
  );

  // Load search index
  useEffect(() => {
    async function loadSearchIndex() {
      try {
        const baseURL = window.BaseURL || "/";
        const response = await fetch(`${baseURL}search.json`);
        const data: SearchResult[] = await response.json();

        // Build lunr index if available
        if (window.lunr) {
          const lunr = window.lunr;
          const idx = lunr(function (this: import("lunr").Builder) {
            this.ref("uri");
            this.field("title", { boost: 10 });
            this.field("content");

            data.forEach((doc) => {
              this.add(doc);
            });
          });

          setSearchIndex(idx);
          setSearchData(new Map(data.map((d) => [d.uri, d])));
        }
      } catch (error) {
        console.error("Failed to load search index:", error);
      }
    }

    loadSearchIndex();
  }, []);

  // Set up categories
  useEffect(() => {
    const categories: CommandPaletteCategory[] = [
      { id: "pages", label: "Pages", icon: "📄" },
      { id: "navigation", label: "Quick Navigation", icon: "🔗" },
    ];
    setCategories(categories);
  }, [setCategories]);

  // Handle search - triggered by parent via context
  const performSearch = useCallback(
    (query: string) => {
      if (!searchIndex || !query.trim()) {
        setItems([]);
        return;
      }

      setIsLoading(true);

      try {
        const results = searchIndex.search(query + "*");
        const items: CommandPaletteItem[] = results
          .slice(0, 10)
          .map((result) => {
            const doc = searchData.get(result.ref);
            const href = result.ref;
            return {
              id: result.ref,
              label: doc?.title || result.ref,
              description: doc?.content?.substring(0, 150) + "...",
              category: "pages",
              onSelect: () => {
                window.location.href = href;
              },
            } as CommandPaletteItem;
          });

        setItems(items);
      } finally {
        setIsLoading(false);
      }
    },
    [searchIndex, searchData, setItems]
  );

  // Subscribe to search changes
  useEffect(() => {
    if (!isOpen) return;

    // Initial hint state
    setItems([
      {
        id: "hint",
        label: "Start typing to search documentation...",
        category: "navigation",
      } as CommandPaletteItem,
    ]);
  }, [isOpen, setItems]);

  // Note: performSearch would be connected to the CommandPalette's search input
  // The CommandPalette handles its own internal search state

  return (
    <CommandPalette
      placeholder="Search documentation..."
      isLoading={isLoading}
      emptyState={
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <span className="mb-4 text-4xl">🔍</span>
          <p className="text-muted-foreground">No results found</p>
          <p className="text-muted-foreground mt-1 text-sm">
            Try a different search term
          </p>
        </div>
      }
    />
  );
}

export interface DocumentationAppProps {
  children?: React.ReactNode;
  /** Brand configuration to use. Defaults to Enterprise Health. */
  brand?: BrandConfig;
}

/**
 * Brand initializer component that applies brand styles on mount.
 */
function BrandInitializer({ brand }: { brand: BrandConfig }) {
  useEffect(() => {
    // Detect current theme
    const isDark =
      document.documentElement.classList.contains("dark") ||
      document.documentElement.getAttribute("data-theme") === "dark";

    // Apply brand styles
    applyBrandStyles(brand, isDark);

    // Listen for theme changes
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (
          mutation.type === "attributes" &&
          (mutation.attributeName === "class" ||
            mutation.attributeName === "data-theme")
        ) {
          const newIsDark =
            document.documentElement.classList.contains("dark") ||
            document.documentElement.getAttribute("data-theme") === "dark";
          applyBrandStyles(brand, newIsDark);
        }
      }
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class", "data-theme"],
    });

    return () => observer.disconnect();
  }, [brand]);

  return null;
}

export function DocumentationApp({
  children,
  brand = enterpriseHealthBrand,
}: DocumentationAppProps) {
  return (
    <ThemeProvider defaultTheme="system">
      <BrandInitializer brand={brand} />
      <CommandPaletteProvider enableShortcut={true}>
        {children}
        <DocumentationSearch />
      </CommandPaletteProvider>
    </ThemeProvider>
  );
}

// Export the trigger component for use in the header
export function SearchTrigger() {
  return <CommandPaletteTrigger placeholder="Search documentation..." />;
}

export default DocumentationApp;
