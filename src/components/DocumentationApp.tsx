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
    SearchApiUrl?: string;
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

interface WorkerSearchResult {
  id: string;
  title: string;
  url: string;
  section?: string;
  snippet: string;
  score: number;
}

interface WorkerSearchResponse {
  results: WorkerSearchResult[];
  query: string;
}

// Inner component that uses the command palette context
function DocumentationSearch() {
  const { isOpen, setItems, setCategories } = useCommandPalette();
  const [isLoading, setIsLoading] = useState(false);
  const abortRef = React.useRef<AbortController | null>(null);

  const apiUrl =
    (typeof window !== "undefined" ? window.SearchApiUrl : undefined) ||
    "/api/ai-assistant/search";
  const brand: "eh" | "wc" =
    (typeof window !== "undefined" ? window.BrandCode : "eh") === "wc"
      ? "wc"
      : "eh";

  // Set up categories
  useEffect(() => {
    const categories: CommandPaletteCategory[] = [
      { id: "pages", label: "Pages", icon: "📄" },
      { id: "navigation", label: "Quick Navigation", icon: "🔗" },
    ];
    setCategories(categories);
  }, [setCategories]);

  // Handle search — triggered by parent via context
  const performSearch = useCallback(
    async (query: string) => {
      const trimmed = query.trim();
      if (!trimmed) {
        setItems([]);
        return;
      }

      // Cancel any in-flight request
      if (abortRef.current) {
        abortRef.current.abort();
      }
      const controller = new AbortController();
      abortRef.current = controller;

      setIsLoading(true);

      try {
        const response = await fetch(apiUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: trimmed, brand, limit: 10 }),
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`Search failed: ${response.status}`);
        }

        const data = (await response.json()) as WorkerSearchResponse;
        if (abortRef.current !== controller) return;

        const items: CommandPaletteItem[] = (data.results || []).map(
          (result) =>
            ({
              id: result.id,
              label: result.title,
              description: result.snippet,
              category: "pages",
              onSelect: () => {
                window.location.href = result.url;
              },
            }) as CommandPaletteItem
        );

        setItems(items);
      } catch (error) {
        if ((error as { name?: string })?.name === "AbortError") return;
        console.error("Search error:", error);
        setItems([]);
      } finally {
        if (abortRef.current === controller) {
          abortRef.current = null;
          setIsLoading(false);
        }
      }
    },
    [apiUrl, brand, setItems]
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
  void performSearch;

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
