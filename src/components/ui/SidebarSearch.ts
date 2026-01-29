/**
 * SidebarSearch Component
 * @module @mieweb/ui
 *
 * A search/filter component for sidebar navigation that:
 * - Filters sidebar items as you type
 * - Responds to "/" keyboard shortcut
 * - Shows/hides items based on search query
 * - Expands matching parent sections automatically
 */

export interface SidebarSearchOptions {
  /** The sidebar element or selector */
  sidebar: HTMLElement | string;
  /** Placeholder text for the search input */
  placeholder?: string;
  /** Debounce delay in milliseconds */
  debounceMs?: number;
  /** Callback when search is performed */
  onSearch?: (query: string, matchCount: number) => void;
}

export class SidebarSearch {
  private sidebar: HTMLElement;
  private searchInput: HTMLInputElement | null = null;
  private searchContainer: HTMLElement | null = null;
  private options: Required<SidebarSearchOptions>;
  private debounceTimeout: ReturnType<typeof setTimeout> | null = null;
  private originalStates: Map<
    HTMLElement,
    { hidden: boolean; expanded: boolean }
  > = new Map();

  constructor(options: SidebarSearchOptions) {
    const sidebar =
      typeof options.sidebar === "string"
        ? document.querySelector<HTMLElement>(options.sidebar)
        : options.sidebar;

    if (!sidebar) {
      throw new Error("SidebarSearch: Sidebar element not found");
    }

    this.sidebar = sidebar;
    this.options = {
      sidebar: sidebar,
      placeholder: options.placeholder ?? "Filter navigation...",
      debounceMs: options.debounceMs ?? 150,
      onSearch: options.onSearch ?? (() => {}),
    };

    this.init();
  }

  private init(): void {
    this.createSearchUI();
    this.bindEvents();
    this.saveOriginalStates();
  }

  private createSearchUI(): void {
    // Create search container
    this.searchContainer = document.createElement("div");
    this.searchContainer.className =
      "sidebar-search px-4 py-3 border-b border-border";
    this.searchContainer.innerHTML = `
      <div class="relative">
        <svg 
          class="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          stroke-width="2" 
          stroke-linecap="round" 
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="8"/>
          <path d="m21 21-4.3-4.3"/>
        </svg>
        <input 
          type="text" 
          id="sidebar-search-input"
          class="w-full rounded-md border border-border bg-background pl-9 pr-8 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-colors"
          placeholder="${this.options.placeholder}"
          aria-label="Filter sidebar navigation"
          autocomplete="off"
          spellcheck="false"
        />
        <button 
          type="button"
          id="sidebar-search-clear"
          class="absolute right-2 top-1/2 -translate-y-1/2 h-5 w-5 rounded-sm text-muted-foreground hover:text-foreground focus:outline-none focus:ring-2 focus:ring-ring hidden items-center justify-center"
          aria-label="Clear search"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" aria-hidden="true">
            <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
          </svg>
        </button>
        <kbd class="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none hidden sm:inline-flex h-5 select-none items-center gap-1 rounded border border-border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground" id="sidebar-search-kbd" aria-hidden="true">/</kbd>
      </div>
      <div id="sidebar-search-status" class="mt-2 text-xs text-muted-foreground hidden" role="status" aria-live="polite"></div>
    `;

    // Insert at the top of sidebar content
    const sidebarContent = this.sidebar.querySelector(".flex.h-full.flex-col");
    if (sidebarContent) {
      sidebarContent.insertBefore(
        this.searchContainer,
        sidebarContent.firstChild
      );
    }

    this.searchInput = this.searchContainer.querySelector(
      "#sidebar-search-input"
    );
  }

  private bindEvents(): void {
    if (!this.searchInput || !this.searchContainer) return;

    const clearBtn = this.searchContainer.querySelector(
      "#sidebar-search-clear"
    ) as HTMLButtonElement;
    const kbdHint = this.searchContainer.querySelector(
      "#sidebar-search-kbd"
    ) as HTMLElement;

    // Input event with debounce
    this.searchInput.addEventListener("input", () => {
      if (this.debounceTimeout) clearTimeout(this.debounceTimeout);
      this.debounceTimeout = setTimeout(() => {
        this.performSearch(this.searchInput?.value ?? "");
      }, this.options.debounceMs);

      // Toggle clear button and kbd hint visibility
      const hasValue = (this.searchInput?.value ?? "").length > 0;
      clearBtn?.classList.toggle("hidden", !hasValue);
      clearBtn?.classList.toggle("flex", hasValue);
      kbdHint?.classList.toggle("hidden", hasValue);
    });

    // Clear button
    clearBtn?.addEventListener("click", () => {
      if (this.searchInput) {
        this.searchInput.value = "";
        this.searchInput.focus();
        this.clearSearch();
        clearBtn.classList.add("hidden");
        clearBtn.classList.remove("flex");
        kbdHint?.classList.remove("hidden");
      }
    });

    // Escape to clear and blur
    this.searchInput.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        if (this.searchInput?.value) {
          this.searchInput.value = "";
          this.clearSearch();
          clearBtn?.classList.add("hidden");
          clearBtn?.classList.remove("flex");
          kbdHint?.classList.remove("hidden");
        } else {
          this.searchInput?.blur();
        }
        e.preventDefault();
      }
    });

    // Global "/" keyboard shortcut
    document.addEventListener("keydown", (e) => {
      // Don't trigger if already typing in an input/textarea
      const target = e.target as HTMLElement;
      if (
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.isContentEditable
      ) {
        return;
      }

      if (e.key === "/") {
        e.preventDefault();
        this.searchInput?.focus();
        this.searchInput?.select();
      }
    });

    // Focus/blur events to manage kbd hint
    this.searchInput.addEventListener("focus", () => {
      if (!this.searchInput?.value) {
        kbdHint?.classList.add("hidden");
      }
    });

    this.searchInput.addEventListener("blur", () => {
      if (!this.searchInput?.value) {
        kbdHint?.classList.remove("hidden");
      }
    });
  }

  private saveOriginalStates(): void {
    // Save original visibility states of all nav items and groups
    const items = this.sidebar.querySelectorAll<HTMLElement>(
      ".sidebar-item-group, .sidebar-item, .sidebar-nav-children li"
    );
    items.forEach((item) => {
      const toggle = item.querySelector(".sidebar-toggle");
      this.originalStates.set(item, {
        hidden: item.classList.contains("hidden"),
        expanded: toggle?.getAttribute("aria-expanded") === "true",
      });
    });
  }

  private performSearch(query: string): void {
    const trimmedQuery = query.trim().toLowerCase();
    const statusEl = this.searchContainer?.querySelector(
      "#sidebar-search-status"
    );

    if (!trimmedQuery) {
      this.clearSearch();
      return;
    }

    let matchCount = 0;
    const nav = this.sidebar.querySelector("nav");
    if (!nav) return;

    // Get all navigable links
    const allLinks = nav.querySelectorAll<HTMLAnchorElement>("a[href]");
    const matchedItems = new Set<HTMLElement>();

    // Find all matching items
    allLinks.forEach((link) => {
      const text = link.textContent?.toLowerCase() ?? "";
      const listItem = link.closest("li");

      if (text.includes(trimmedQuery)) {
        matchCount++;
        if (listItem) {
          matchedItems.add(listItem as HTMLElement);
          // Also mark all parent list items as having matches
          let parent = listItem.parentElement?.closest("li");
          while (parent) {
            matchedItems.add(parent as HTMLElement);
            parent = parent.parentElement?.closest("li");
          }
        }
      }
    });

    // Update visibility
    const allListItems = nav.querySelectorAll<HTMLElement>("li");
    allListItems.forEach((item) => {
      if (matchedItems.has(item)) {
        item.classList.remove("hidden");
        item.classList.add("sidebar-search-match");

        // Expand parent groups
        const childNav = item.querySelector(".sidebar-nav-children");
        if (childNav) {
          childNav.classList.remove("hidden");
          const toggle = item.querySelector(".sidebar-toggle");
          if (toggle) {
            toggle.setAttribute("aria-expanded", "true");
            toggle.querySelector("svg")?.classList.add("rotate-90");
          }
        }
      } else {
        item.classList.add("hidden");
        item.classList.remove("sidebar-search-match");
      }
    });

    // Update status
    if (statusEl) {
      statusEl.classList.remove("hidden");
      statusEl.textContent =
        matchCount === 0
          ? "No results found"
          : `${matchCount} ${matchCount === 1 ? "result" : "results"} found`;
    }

    this.options.onSearch(trimmedQuery, matchCount);
  }

  private clearSearch(): void {
    const nav = this.sidebar.querySelector("nav");
    if (!nav) return;

    // Restore original states
    this.originalStates.forEach((state, item) => {
      item.classList.toggle("hidden", state.hidden);
      item.classList.remove("sidebar-search-match");

      const toggle = item.querySelector(".sidebar-toggle");
      if (toggle) {
        toggle.setAttribute("aria-expanded", state.expanded.toString());
        toggle
          .querySelector("svg")
          ?.classList.toggle("rotate-90", state.expanded);
      }
    });

    // Also restore sidebar-nav-children visibility
    const childNavs = nav.querySelectorAll<HTMLElement>(
      ".sidebar-nav-children"
    );
    childNavs.forEach((childNav) => {
      const parentLi = childNav.closest("li");
      const toggle = parentLi?.querySelector(".sidebar-toggle");
      const isExpanded = toggle?.getAttribute("aria-expanded") === "true";
      childNav.classList.toggle("hidden", !isExpanded);
    });

    // Hide status
    const statusEl = this.searchContainer?.querySelector(
      "#sidebar-search-status"
    );
    if (statusEl) {
      statusEl.classList.add("hidden");
      statusEl.textContent = "";
    }

    this.options.onSearch("", 0);
  }

  /** Focus the search input */
  public focus(): void {
    this.searchInput?.focus();
  }

  /** Clear the search and restore original state */
  public clear(): void {
    if (this.searchInput) {
      this.searchInput.value = "";
    }
    this.clearSearch();
  }

  /** Get the current search query */
  public getQuery(): string {
    return this.searchInput?.value ?? "";
  }

  /** Destroy the component and clean up */
  public destroy(): void {
    this.clearSearch();
    this.searchContainer?.remove();
    this.originalStates.clear();
  }
}

// Auto-initialize if DOM is ready
export function initSidebarSearch(
  options?: Partial<SidebarSearchOptions>
): SidebarSearch | null {
  const sidebar = document.getElementById("sidebar");
  if (!sidebar) return null;

  return new SidebarSearch({
    sidebar,
    ...options,
  });
}

export default SidebarSearch;
