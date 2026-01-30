/**
 * SidebarSearch Component
 *
 * A search/filter component for sidebar navigation.
 * Uses @mieweb/ui Input component as the base.
 */

import React, { useState, useEffect, useCallback, useRef } from "react";
import { Button, cn } from "@mieweb/ui";
import { Search, X } from "lucide-react";

export interface SidebarSearchProps {
  /** Placeholder text for the search input */
  placeholder?: string;
  /** Debounce delay in milliseconds */
  debounceMs?: number;
  /** Callback when search is performed */
  onSearch?: (query: string, matchCount: number) => void;
  /** Additional class names */
  className?: string;
  /** Whether to show keyboard shortcut hint */
  showKeyboardHint?: boolean;
}

interface NavItem {
  element: HTMLElement;
  text: string;
  link: HTMLAnchorElement | null;
  originalHidden: boolean;
  originalExpanded: boolean;
  childNav: HTMLElement | null;
  childOriginalHidden: boolean;
}

export function SidebarSearch({
  placeholder = "Filter navigation...",
  debounceMs = 150,
  onSearch,
  className,
  showKeyboardHint = true,
}: SidebarSearchProps) {
  const [query, setQuery] = useState("");
  const [matchCount, setMatchCount] = useState(0);
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navItemsRef = useRef<NavItem[]>([]);
  const originalLinkTextRef = useRef<Map<HTMLAnchorElement, string>>(new Map());

  // Initialize - collect nav items and save original states
  useEffect(() => {
    const sidebar = document.getElementById("sidebar");
    if (!sidebar) return;

    const nav = sidebar.querySelector("nav");
    if (!nav) return;

    const items = nav.querySelectorAll("li");
    const navItems: NavItem[] = [];

    items.forEach((item) => {
      const link = item.querySelector("a[href]") as HTMLAnchorElement | null;
      const toggle = item.querySelector(".sidebar-toggle");
      const childNav = item.querySelector(
        ".sidebar-nav-children"
      ) as HTMLElement | null;

      navItems.push({
        element: item as HTMLElement,
        text: link?.textContent?.toLowerCase() ?? "",
        link,
        originalHidden: item.classList.contains("hidden"),
        originalExpanded: toggle?.getAttribute("aria-expanded") === "true",
        childNav,
        childOriginalHidden: childNav?.classList.contains("hidden") ?? true,
      });

      // Store original link text
      if (link && !originalLinkTextRef.current.has(link)) {
        originalLinkTextRef.current.set(link, link.textContent ?? "");
      }
    });

    navItemsRef.current = navItems;
  }, []);

  // Highlight matching text
  const highlightText = useCallback(
    (text: string, searchQuery: string): string => {
      if (!searchQuery) return text;
      const regex = new RegExp(
        `(${searchQuery.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`,
        "gi"
      );
      return text.replace(
        regex,
        '<mark class="bg-yellow-200 dark:bg-yellow-800 rounded px-0.5">$1</mark>'
      );
    },
    []
  );

  // Perform search
  const performSearch = useCallback(
    (searchQuery: string) => {
      const trimmedQuery = searchQuery.trim().toLowerCase();
      const navItems = navItemsRef.current;
      const originalLinkText = originalLinkTextRef.current;

      if (!trimmedQuery) {
        // Restore original states
        navItems.forEach((item) => {
          item.element.classList.toggle("hidden", item.originalHidden);
          item.element.classList.remove("sidebar-search-match");

          const toggle = item.element.querySelector(".sidebar-toggle");
          if (toggle) {
            toggle.setAttribute("aria-expanded", String(item.originalExpanded));
            toggle
              .querySelector("svg")
              ?.classList.toggle("rotate-90", item.originalExpanded);
          }

          if (item.childNav) {
            item.childNav.classList.toggle("hidden", item.childOriginalHidden);
          }

          // Restore original link text
          if (item.link) {
            const origText = originalLinkText.get(item.link);
            if (origText) {
              item.link.textContent = origText;
            }
          }
        });

        setMatchCount(0);
        onSearch?.("", 0);
        return;
      }

      // Find matches
      let count = 0;
      const matchedItems = new Set<HTMLElement>();

      navItems.forEach((item) => {
        if (item.text.includes(trimmedQuery)) {
          count++;
          matchedItems.add(item.element);

          // Mark parent items as having matches
          let parent = item.element.parentElement?.closest(
            "li"
          ) as HTMLElement | null;
          while (parent) {
            matchedItems.add(parent);
            parent = parent.parentElement?.closest("li") as HTMLElement | null;
          }

          // Highlight matching text
          if (item.link) {
            const origText =
              originalLinkText.get(item.link) ?? item.link.textContent ?? "";
            item.link.innerHTML = highlightText(origText, trimmedQuery);
          }
        } else {
          // Restore original text for non-matches
          if (item.link) {
            const origText = originalLinkText.get(item.link);
            if (origText) {
              item.link.textContent = origText;
            }
          }
        }
      });

      // Update visibility
      navItems.forEach((item) => {
        if (matchedItems.has(item.element)) {
          item.element.classList.remove("hidden");
          item.element.classList.add("sidebar-search-match");

          // Expand parent groups
          if (item.childNav) {
            item.childNav.classList.remove("hidden");
            const toggle = item.element.querySelector(".sidebar-toggle");
            if (toggle) {
              toggle.setAttribute("aria-expanded", "true");
              toggle.querySelector("svg")?.classList.add("rotate-90");
            }
          }
        } else {
          item.element.classList.add("hidden");
          item.element.classList.remove("sidebar-search-match");
        }
      });

      setMatchCount(count);
      onSearch?.(searchQuery, count);
    },
    [highlightText, onSearch]
  );

  // Debounced search
  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setQuery(value);

      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }

      debounceRef.current = setTimeout(() => {
        performSearch(value);
      }, debounceMs);
    },
    [debounceMs, performSearch]
  );

  // Clear search
  const handleClear = useCallback(() => {
    setQuery("");
    performSearch("");
    inputRef.current?.focus();
  }, [performSearch]);

  // Keyboard shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if typing in an input/textarea
      const target = e.target as HTMLElement;
      if (
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.isContentEditable
      ) {
        return;
      }

      // "/" to focus search
      if (e.key === "/") {
        e.preventDefault();
        inputRef.current?.focus();
        inputRef.current?.select();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Escape to clear/blur
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Escape") {
        if (query) {
          handleClear();
        } else {
          inputRef.current?.blur();
        }
        e.preventDefault();
      }
    },
    [query, handleClear]
  );

  const showKbd = showKeyboardHint && !isFocused && !query;

  return (
    <div
      className={cn(
        "sidebar-search border-border border-b px-4 py-3",
        className
      )}
    >
      <div className="relative">
        <Search
          className="text-muted-foreground pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2"
          aria-hidden="true"
        />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          className="border-border bg-background text-foreground placeholder:text-muted-foreground focus:ring-ring w-full rounded-md border py-2 pr-9 pl-9 text-sm transition-colors focus:border-transparent focus:ring-2 focus:outline-none"
          aria-label="Filter sidebar navigation"
          autoComplete="off"
          spellCheck={false}
        />
        {query ? (
          <Button
            variant="ghost"
            size="icon"
            onClick={handleClear}
            className="text-muted-foreground hover:text-foreground absolute top-1/2 right-1 h-7 w-7 -translate-y-1/2"
            aria-label="Clear search"
          >
            <X className="h-4 w-4" />
          </Button>
        ) : showKbd ? (
          <kbd
            className="border-border bg-muted text-muted-foreground pointer-events-none absolute top-1/2 right-2 inline-flex h-5 -translate-y-1/2 items-center gap-1 rounded border px-1.5 font-mono text-[10px] font-medium select-none"
            aria-hidden="true"
          >
            /
          </kbd>
        ) : null}
      </div>
      {query && (
        <div
          className="text-muted-foreground mt-2 text-xs"
          role="status"
          aria-live="polite"
        >
          {matchCount === 0
            ? "No results found"
            : `${matchCount} ${matchCount === 1 ? "result" : "results"} found`}
        </div>
      )}
    </div>
  );
}

export default SidebarSearch;
