/**
 * Main JavaScript for MIE Documentation
 * Handles: theme toggle, sidebar, search, scroll-to-top, feedback
 */

// ============================================
// Theme Management
// ============================================
const themeToggle = document.getElementById("theme-toggle");
const html = document.documentElement;

function setTheme(theme) {
  if (theme === "dark") {
    html.setAttribute("data-theme", "dark");
    html.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    html.removeAttribute("data-theme");
    html.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
}

function toggleTheme() {
  const isDark = html.getAttribute("data-theme") === "dark";
  setTheme(isDark ? "light" : "dark");
}

if (themeToggle) {
  themeToggle.addEventListener("click", toggleTheme);
}

// ============================================
// Sidebar Management
// ============================================
const sidebar = document.getElementById("sidebar");
const sidebarToggle = document.getElementById("sidebar-toggle");
const sidebarOverlay = document.getElementById("sidebar-overlay");

// Check if we're on desktop
function isDesktop() {
  return window.matchMedia("(min-width: 1024px)").matches;
}

// Mobile sidebar functions
function openSidebar() {
  sidebar?.classList.add("open");
  sidebarOverlay?.classList.remove("hidden");
  sidebarToggle?.setAttribute("aria-expanded", "true");
  document.body.style.overflow = "hidden";
}

function closeSidebar() {
  sidebar?.classList.remove("open");
  sidebarOverlay?.classList.add("hidden");
  sidebarToggle?.setAttribute("aria-expanded", "false");
  document.body.style.overflow = "";
}

// Desktop sidebar collapse functions
function collapseSidebarDesktop() {
  sidebar?.classList.add("collapsed");
  document.body.classList.add("sidebar-collapsed");
  sidebarToggle?.setAttribute("aria-expanded", "false");
  localStorage.setItem("sidebar-collapsed", "true");
}

function expandSidebarDesktop() {
  sidebar?.classList.remove("collapsed");
  document.body.classList.remove("sidebar-collapsed");
  sidebarToggle?.setAttribute("aria-expanded", "true");
  localStorage.setItem("sidebar-collapsed", "false");
}

// Initialize sidebar state from localStorage on desktop
if (isDesktop() && localStorage.getItem("sidebar-collapsed") === "true") {
  collapseSidebarDesktop();
}

sidebarToggle?.addEventListener("click", () => {
  if (isDesktop()) {
    // Desktop: toggle collapse
    const isCollapsed = sidebar?.classList.contains("collapsed");
    isCollapsed ? expandSidebarDesktop() : collapseSidebarDesktop();
  } else {
    // Mobile: toggle open/close
    const isOpen = sidebar?.classList.contains("open");
    isOpen ? closeSidebar() : openSidebar();
  }
});

sidebarOverlay?.addEventListener("click", closeSidebar);

// Handle window resize - restore appropriate state
window.addEventListener("resize", () => {
  if (isDesktop()) {
    // Switching to desktop - close mobile state
    closeSidebar();
    // Restore desktop collapsed state from localStorage
    if (localStorage.getItem("sidebar-collapsed") === "true") {
      collapseSidebarDesktop();
    }
  } else {
    // Switching to mobile - remove desktop collapsed state
    sidebar?.classList.remove("collapsed");
    document.body.classList.remove("sidebar-collapsed");
  }
});

// Sidebar navigation toggle
document.querySelectorAll(".sidebar-toggle").forEach((button) => {
  button.addEventListener("click", (_e) => {
    const targetId = button.getAttribute("data-target");
    const target = document.getElementById(targetId);
    const chevron = button.querySelector("svg");
    const isExpanded = button.getAttribute("aria-expanded") === "true";

    if (target) {
      target.classList.toggle("hidden");
      button.setAttribute("aria-expanded", !isExpanded);
      chevron?.classList.toggle("rotate-90");
    }
  });
});

// Expand sidebar to current page on load
function expandToCurrentPage() {
  const currentPath = window.location.pathname;
  const currentLink = sidebar?.querySelector(`a[href="${currentPath}"]`);

  if (currentLink) {
    // Walk up the DOM to expand all parent nav items
    let parent = currentLink.closest(".sidebar-nav-children");
    while (parent) {
      parent.classList.remove("hidden");
      const toggle = document.querySelector(`[data-target="${parent.id}"]`);
      if (toggle) {
        toggle.setAttribute("aria-expanded", "true");
        toggle.querySelector("svg")?.classList.add("rotate-90");
      }
      parent = parent.parentElement?.closest(".sidebar-nav-children");
    }
  }
}

expandToCurrentPage();

// ============================================
// Sidebar Search / Filter
// ============================================
(function initSidebarSearch() {
  if (!sidebar) return;

  // Create search UI
  const searchContainer = document.createElement("div");
  searchContainer.className = "sidebar-search px-4 py-3 border-b border-border";
  searchContainer.innerHTML = `
    <div class="relative flex items-center">
      <svg 
        class="absolute left-3 h-4 w-4 text-muted-foreground pointer-events-none" 
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
        class="w-full rounded-md border border-border bg-background pl-9 pr-9 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-colors"
        placeholder="Filter navigation..."
        aria-label="Filter sidebar navigation"
        autocomplete="off"
        spellcheck="false"
      />
      <button 
        type="button"
        id="sidebar-search-clear"
        class="absolute right-2 h-5 w-5 rounded-sm text-muted-foreground hover:text-foreground focus:outline-none focus:ring-2 focus:ring-ring hidden items-center justify-center z-10"
        aria-label="Clear search"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" aria-hidden="true">
          <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
        </svg>
      </button>
      <kbd class="absolute right-2 pointer-events-none sm:inline-flex h-5 select-none items-center gap-1 rounded border border-border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground" id="sidebar-search-kbd" aria-hidden="true">/</kbd>
    </div>
    <div id="sidebar-search-status" class="mt-2 text-xs text-muted-foreground hidden" role="status" aria-live="polite"></div>
  `;

  // Insert at the top of sidebar content
  const sidebarContent = sidebar.querySelector(".flex.h-full.flex-col");
  if (sidebarContent) {
    sidebarContent.insertBefore(searchContainer, sidebarContent.firstChild);
  }

  const sidebarSearchInput = document.getElementById("sidebar-search-input");
  const clearBtn = document.getElementById("sidebar-search-clear");
  const kbdHint = document.getElementById("sidebar-search-kbd");
  const statusEl = document.getElementById("sidebar-search-status");

  // Store original states
  const originalStates = new Map();
  const nav = sidebar.querySelector("nav");
  if (nav) {
    const items = nav.querySelectorAll("li");
    items.forEach((item) => {
      const toggle = item.querySelector(".sidebar-toggle");
      const childNav = item.querySelector(".sidebar-nav-children");
      originalStates.set(item, {
        hidden: item.classList.contains("hidden"),
        expanded: toggle?.getAttribute("aria-expanded") === "true",
        childHidden: childNav?.classList.contains("hidden") ?? true,
      });
    });
  }

  let debounceTimeout = null;

  // Store original text content for links to restore later
  const originalLinkText = new Map();

  /**
   * Escape HTML special characters to prevent XSS
   * @param {string} text - The text to escape
   * @returns {string} - HTML-escaped text
   */
  function escapeHtml(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
  }

  function highlightText(text, query) {
    if (!query) return escapeHtml(text);
    // First escape the text to prevent XSS
    const escapedText = escapeHtml(text);
    const escapedQuery = escapeHtml(query);
    const regex = new RegExp(
      `(${escapedQuery.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`,
      "gi"
    );
    // Use amber/orange tones that work well in both light and dark mode
    // Light: warm yellow background, Dark: semi-transparent amber for better contrast
    return escapedText.replace(
      regex,
      '<mark class="sidebar-search-highlight">$1</mark>'
    );
  }

  function performSearch(query) {
    const trimmedQuery = query.trim().toLowerCase();

    if (!trimmedQuery) {
      clearSearch();
      return;
    }

    let matchCount = 0;
    if (!nav) return;

    const allLinks = nav.querySelectorAll("a[href]");
    const matchedItems = new Set();

    // Find all matching items and highlight text
    allLinks.forEach((link) => {
      const text = link.textContent?.toLowerCase() ?? "";
      const listItem = link.closest("li");

      // Store original text if not already stored
      if (!originalLinkText.has(link)) {
        originalLinkText.set(link, link.textContent);
      }

      if (text.includes(trimmedQuery)) {
        matchCount++;
        // Highlight the matching text
        const originalText = originalLinkText.get(link) ?? link.textContent;
        link.innerHTML = highlightText(originalText, trimmedQuery);

        if (listItem) {
          matchedItems.add(listItem);
          // Also mark all parent list items as having matches
          let parent = listItem.parentElement?.closest("li");
          while (parent) {
            matchedItems.add(parent);
            parent = parent.parentElement?.closest("li");
          }
        }
      } else {
        // Restore original text for non-matching links
        const originalText = originalLinkText.get(link);
        if (originalText) {
          link.textContent = originalText;
        }
      }
    });

    // Update visibility
    const allListItems = nav.querySelectorAll("li");
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
  }

  function clearSearch() {
    if (!nav) return;

    // Restore original text for all links
    originalLinkText.forEach((originalText, link) => {
      link.textContent = originalText;
    });

    // Restore original states
    originalStates.forEach((state, item) => {
      item.classList.toggle("hidden", state.hidden);
      item.classList.remove("sidebar-search-match");

      const toggle = item.querySelector(".sidebar-toggle");
      if (toggle) {
        toggle.setAttribute("aria-expanded", state.expanded.toString());
        toggle
          .querySelector("svg")
          ?.classList.toggle("rotate-90", state.expanded);
      }

      const childNav = item.querySelector(".sidebar-nav-children");
      if (childNav) {
        childNav.classList.toggle("hidden", state.childHidden);
      }
    });

    // Hide status
    if (statusEl) {
      statusEl.classList.add("hidden");
      statusEl.textContent = "";
    }
  }

  // Input event with debounce
  sidebarSearchInput?.addEventListener("input", () => {
    if (debounceTimeout) clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => {
      performSearch(sidebarSearchInput?.value ?? "");
    }, 150);

    // Toggle clear button and kbd hint visibility
    const hasValue = (sidebarSearchInput?.value ?? "").length > 0;
    clearBtn?.classList.toggle("hidden", !hasValue);
    clearBtn?.classList.toggle("flex", hasValue);
    kbdHint?.classList.toggle("hidden", hasValue);
  });

  // Clear button
  clearBtn?.addEventListener("click", () => {
    if (sidebarSearchInput) {
      sidebarSearchInput.value = "";
      sidebarSearchInput.focus();
      clearSearch();
      clearBtn.classList.add("hidden");
      clearBtn.classList.remove("flex");
      kbdHint?.classList.remove("hidden");
    }
  });

  // Escape to clear and blur
  sidebarSearchInput?.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (sidebarSearchInput?.value) {
        sidebarSearchInput.value = "";
        clearSearch();
        clearBtn?.classList.add("hidden");
        clearBtn?.classList.remove("flex");
        kbdHint?.classList.remove("hidden");
      } else {
        sidebarSearchInput?.blur();
      }
      e.preventDefault();
    }
  });

  // Global "/" keyboard shortcut
  document.addEventListener("keydown", (e) => {
    // Don't trigger if already typing in an input/textarea or if search modal is open
    const target = e.target;
    if (
      target.tagName === "INPUT" ||
      target.tagName === "TEXTAREA" ||
      target.isContentEditable
    ) {
      return;
    }

    // Don't trigger if search modal is open
    if (!searchModal?.classList.contains("hidden")) {
      return;
    }

    if (e.key === "/") {
      e.preventDefault();
      sidebarSearchInput?.focus();
      sidebarSearchInput?.select();
    }
  });

  // Focus/blur events to manage kbd hint
  sidebarSearchInput?.addEventListener("focus", () => {
    if (!sidebarSearchInput?.value) {
      kbdHint?.classList.add("hidden");
    }
  });

  sidebarSearchInput?.addEventListener("blur", () => {
    if (!sidebarSearchInput?.value) {
      kbdHint?.classList.remove("hidden");
    }
  });
})();

// ============================================
// Search Modal
// ============================================
const searchModal = document.getElementById("search-modal");
const searchTrigger = document.getElementById("search-trigger");
const searchTriggerDesktop = document.getElementById("search-trigger-desktop");
const searchInput = document.getElementById("search-input");
const searchResults = document.getElementById("search-results");
const searchBackdrop = document.getElementById("search-modal-backdrop");
const searchResultTemplate = document.getElementById("search-result-template");

let searchIndex = null;
let searchDocs = [];
let selectedIndex = -1;

function openSearchModal() {
  searchModal?.classList.remove("hidden");
  searchInput?.focus();
  document.body.style.overflow = "hidden";
  loadSearchIndex(); // Ensure index is loaded when modal opens
}

function closeSearchModal() {
  searchModal?.classList.add("hidden");
  document.body.style.overflow = "";
  if (searchInput) searchInput.value = "";
  if (searchResults) {
    searchResults.innerHTML = `
      <div class="px-2 py-8 text-center text-sm text-muted-foreground">
        <p>Start typing to search...</p>
        <p class="mt-2 text-xs">
          Use <kbd class="rounded border border-border bg-muted px-1">↑</kbd> <kbd class="rounded border border-border bg-muted px-1">↓</kbd> to navigate, <kbd class="rounded border border-border bg-muted px-1">Enter</kbd> to select
        </p>
      </div>
    `;
  }
  selectedIndex = -1;
}

searchTrigger?.addEventListener("click", openSearchModal);
searchTriggerDesktop?.addEventListener("click", openSearchModal);
searchBackdrop?.addEventListener("click", closeSearchModal);

// Keyboard shortcuts
document.addEventListener("keydown", (e) => {
  // Open search with Cmd/Ctrl + K
  if ((e.metaKey || e.ctrlKey) && e.key === "k") {
    e.preventDefault();
    openSearchModal();
  }

  // Close with Escape
  if (e.key === "Escape" && !searchModal?.classList.contains("hidden")) {
    closeSearchModal();
  }

  // Navigate results with arrow keys
  if (!searchModal?.classList.contains("hidden")) {
    const results = searchResults?.querySelectorAll(".search-result");

    if (e.key === "ArrowDown") {
      e.preventDefault();
      selectedIndex = Math.min(selectedIndex + 1, (results?.length || 0) - 1);
      updateSelectedResult(results);
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      selectedIndex = Math.max(selectedIndex - 1, 0);
      updateSelectedResult(results);
    }

    if (e.key === "Enter" && selectedIndex >= 0 && results?.[selectedIndex]) {
      e.preventDefault();
      results[selectedIndex].click();
    }
  }
});

function updateSelectedResult(results) {
  results?.forEach((result, index) => {
    if (index === selectedIndex) {
      result.classList.add("bg-muted");
      result.scrollIntoView({ block: "nearest" });
    } else {
      result.classList.remove("bg-muted");
    }
  });
}

// Load search index
async function loadSearchIndex() {
  if (searchIndex) return;

  try {
    const response = await fetch(`${window.BaseURL}search.json`);
    searchDocs = await response.json();

    searchIndex = lunr(function () {
      this.ref("href");
      this.field("title", { boost: 10 });
      this.field("content");

      searchDocs.forEach((doc) => {
        this.add(doc);
      });
    });
  } catch (error) {
    console.error("Failed to load search index:", error);
  }
}

// Perform search
function performSearch(query) {
  if (!searchIndex || !query.trim()) {
    searchResults.innerHTML = `
      <div class="px-2 py-8 text-center text-sm text-muted-foreground">
        <p>Start typing to search...</p>
      </div>
    `;
    return;
  }

  const results = searchIndex.search(query + "*");
  selectedIndex = -1;

  if (results.length === 0) {
    searchResults.innerHTML = `
      <div class="px-2 py-8 text-center text-sm text-muted-foreground">
        <p>No results found for "<strong>${escapeHtml(query)}</strong>"</p>
      </div>
    `;
    return;
  }

  searchResults.innerHTML = "";

  results.slice(0, 10).forEach((result, index) => {
    const doc = searchDocs.find((d) => d.href === result.ref);
    if (!doc || !searchResultTemplate) return;

    const clone = searchResultTemplate.content.cloneNode(true);
    const link = clone.querySelector("a");
    const title = clone.querySelector(".search-result-title");
    const summary = clone.querySelector(".search-result-summary");

    if (link) link.href = doc.href;
    if (title) title.textContent = doc.title;
    if (summary) summary.textContent = doc.content?.substring(0, 150) + "...";

    link?.setAttribute("data-index", index);

    searchResults.appendChild(clone);
  });
}

// Debounce search input
let searchTimeout;
searchInput?.addEventListener("input", (e) => {
  clearTimeout(searchTimeout);
  searchTimeout = setTimeout(() => {
    performSearch(e.target.value);
  }, 200);
});

// Load search index when search modal opens
searchTrigger?.addEventListener("click", loadSearchIndex);
searchTriggerDesktop?.addEventListener("click", loadSearchIndex);

// ============================================
// Image Lightbox
// ============================================
(function initLightbox() {
  // Track if lightbox has been initialized
  let lightboxInitialized = false;
  let images = [];
  let currentIndex = 0;
  let isOpen = false;
  let touchStartX = 0;
  let touchEndX = 0;

  // Elements (will be set after lightbox is created)
  let lightbox, backdrop, closeBtn, prevBtn, nextBtn;
  let lightboxImage, captionEl, currentCounter, totalCounter, content;

  function collectImages() {
    const imageSelector = "article img, .content img, main img, .prose img";
    return Array.from(document.querySelectorAll(imageSelector)).filter(
      (img) => {
        // Skip SVGs (object or inline)
        if (img.closest("object[type*='svg']")) return false;
        // Skip images already processed
        if (img.hasAttribute("data-lightbox-bound")) return true;
        // Skip very small images (likely icons)
        const minSize = 100;
        // Check natural dimensions or fall back to rendered dimensions
        const width = img.naturalWidth || img.width;
        const height = img.naturalHeight || img.height;
        if (width < minSize && height < minSize) return false;
        return true;
      }
    );
  }

  function createLightboxElement() {
    // Check if lightbox already exists
    const existing = document.getElementById("lightbox");
    if (existing) {
      return existing;
    }

    const el = document.createElement("div");
    el.id = "lightbox";
    el.className = "lightbox";
    el.setAttribute("role", "dialog");
    el.setAttribute("aria-modal", "true");
    el.setAttribute("aria-label", "Image lightbox");
    el.innerHTML = `
      <div class="lightbox-backdrop" aria-hidden="true"></div>
      <div class="lightbox-content">
        <button type="button" class="lightbox-close" aria-label="Close lightbox">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6" aria-hidden="true">
            <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
          </svg>
        </button>
        <button type="button" class="lightbox-nav lightbox-prev" aria-label="Previous image">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-8 w-8" aria-hidden="true">
            <path d="m15 18-6-6 6-6"/>
          </svg>
        </button>
        <button type="button" class="lightbox-nav lightbox-next" aria-label="Next image">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-8 w-8" aria-hidden="true">
            <path d="m9 18 6-6-6-6"/>
          </svg>
        </button>
        <div class="lightbox-image-container">
          <img class="lightbox-image" src="" alt="" />
        </div>
        <div class="lightbox-counter" aria-live="polite">
          <span class="lightbox-current">1</span> of <span class="lightbox-total">1</span>
        </div>
        <div class="lightbox-caption" aria-live="polite"></div>
      </div>
    `;
    document.body.appendChild(el);
    return el;
  }

  function updateLightbox() {
    const img = images[currentIndex];
    if (!img) return;

    lightboxImage.src = img.src;
    lightboxImage.alt = img.alt || "";

    // Caption from alt text
    const caption = img.alt || img.title || "";
    if (caption) {
      captionEl.textContent = caption;
      captionEl.classList.add("visible");
    } else {
      captionEl.classList.remove("visible");
    }

    // Counter
    currentCounter.textContent = currentIndex + 1;
    totalCounter.textContent = images.length;

    // Navigation states
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === images.length - 1;
    prevBtn.style.opacity = currentIndex === 0 ? "0.3" : "1";
    nextBtn.style.opacity = currentIndex === images.length - 1 ? "0.3" : "1";
  }

  function openLightbox(index) {
    currentIndex = Math.max(0, Math.min(index, images.length - 1));
    isOpen = true;
    updateLightbox();
    lightbox.classList.add("open");
    document.body.style.overflow = "hidden";
    closeBtn?.focus();
  }

  function closeLightbox() {
    isOpen = false;
    lightbox.classList.remove("open");
    document.body.style.overflow = "";
    images[currentIndex]?.focus();
  }

  function nextImage() {
    if (currentIndex < images.length - 1) {
      currentIndex++;
      updateLightbox();
    }
  }

  function prevImage() {
    if (currentIndex > 0) {
      currentIndex--;
      updateLightbox();
    }
  }

  function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) nextImage();
      else prevImage();
    }
  }

  function bindImageClickHandlers() {
    images.forEach((img, index) => {
      // Skip if already bound
      if (img.hasAttribute("data-lightbox-bound")) return;

      img.setAttribute("data-lightbox-index", index);
      img.setAttribute("data-lightbox-bound", "true");
      img.style.cursor = "zoom-in";
      img.addEventListener("click", (e) => {
        e.preventDefault();
        // Re-collect images to get fresh indices
        images = collectImages();
        const clickedIndex = images.indexOf(img);
        if (clickedIndex !== -1) {
          openLightbox(clickedIndex);
        }
      });
    });
  }

  function setupLightbox() {
    // Create or get lightbox element
    lightbox = createLightboxElement();

    // Get element references
    backdrop = lightbox.querySelector(".lightbox-backdrop");
    closeBtn = lightbox.querySelector(".lightbox-close");
    prevBtn = lightbox.querySelector(".lightbox-prev");
    nextBtn = lightbox.querySelector(".lightbox-next");
    lightboxImage = lightbox.querySelector(".lightbox-image");
    captionEl = lightbox.querySelector(".lightbox-caption");
    currentCounter = lightbox.querySelector(".lightbox-current");
    totalCounter = lightbox.querySelector(".lightbox-total");
    content = lightbox.querySelector(".lightbox-content");

    // Only bind lightbox event listeners once
    if (!lightboxInitialized) {
      closeBtn?.addEventListener("click", closeLightbox);
      backdrop?.addEventListener("click", closeLightbox);
      prevBtn?.addEventListener("click", prevImage);
      nextBtn?.addEventListener("click", nextImage);

      // Touch handling
      content?.addEventListener(
        "touchstart",
        (e) => {
          touchStartX = e.changedTouches[0].screenX;
        },
        { passive: true }
      );

      content?.addEventListener(
        "touchend",
        (e) => {
          touchEndX = e.changedTouches[0].screenX;
          handleSwipe();
        },
        { passive: true }
      );

      // Keyboard handling
      document.addEventListener("keydown", (e) => {
        if (!isOpen) return;
        switch (e.key) {
          case "Escape":
            e.preventDefault();
            closeLightbox();
            break;
          case "ArrowLeft":
            e.preventDefault();
            prevImage();
            break;
          case "ArrowRight":
            e.preventDefault();
            nextImage();
            break;
          case "Home":
            e.preventDefault();
            currentIndex = 0;
            updateLightbox();
            break;
          case "End":
            e.preventDefault();
            currentIndex = images.length - 1;
            updateLightbox();
            break;
        }
      });

      lightboxInitialized = true;
    }
  }

  function initImages() {
    images = collectImages();
    if (images.length === 0) return;

    setupLightbox();
    bindImageClickHandlers();
  }

  // Initialize when images are loaded
  function waitForImages() {
    const imageSelector = "article img, .content img, main img, .prose img";
    const imgElements = document.querySelectorAll(imageSelector);

    if (imgElements.length === 0) return;

    // Check if all images are loaded
    let loadedCount = 0;
    const totalImages = imgElements.length;

    imgElements.forEach((img) => {
      if (img.complete) {
        loadedCount++;
      } else {
        img.addEventListener(
          "load",
          () => {
            loadedCount++;
            if (loadedCount === totalImages) {
              initImages();
            }
          },
          { once: true }
        );
        img.addEventListener(
          "error",
          () => {
            loadedCount++;
            if (loadedCount === totalImages) {
              initImages();
            }
          },
          { once: true }
        );
      }
    });

    // If all images already loaded, init immediately
    if (loadedCount === totalImages) {
      initImages();
    }

    // Fallback: init after a short delay even if some images haven't loaded
    setTimeout(() => {
      initImages();
    }, 1000);
  }

  // Handle bfcache (back-forward cache) restoration
  window.addEventListener("pageshow", (event) => {
    if (event.persisted) {
      // Page was restored from bfcache, re-initialize
      initImages();
    }
  });

  // Initial setup
  if (document.readyState === "complete") {
    waitForImages();
  } else {
    window.addEventListener("load", waitForImages);
  }
})();

// ============================================
// Scroll to Top
// ============================================
const scrollToTopBtn = document.getElementById("scroll-to-top");

function toggleScrollToTop() {
  if (window.scrollY > 300) {
    scrollToTopBtn?.classList.remove("hidden");
    scrollToTopBtn?.classList.add("flex");
  } else {
    scrollToTopBtn?.classList.add("hidden");
    scrollToTopBtn?.classList.remove("flex");
  }
}

window.addEventListener("scroll", toggleScrollToTop);

scrollToTopBtn?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ============================================
// Share Button
// ============================================
const shareBtn = document.getElementById("btn-share");

shareBtn?.addEventListener("click", async () => {
  const url = window.location.href;
  const title = document.title;

  if (navigator.share) {
    try {
      await navigator.share({ title, url });
    } catch (_err) {
      // User cancelled
    }
  } else {
    // Fallback: copy to clipboard
    await navigator.clipboard.writeText(url);
    showToast("Link copied to clipboard!");
  }
});

// ============================================
// Feedback Modal
// ============================================
const feedbackModal = document.getElementById("feedback-modal");
const feedbackBackdrop = document.getElementById("feedback-modal-backdrop");
const feedbackCloseBtn = document.getElementById("feedback-modal-close");
const feedbackCancelBtn = document.getElementById("feedback-cancel");
const feedbackForm = document.getElementById("feedback-form");
const feedbackBtns = document.querySelectorAll(".btn-feedback");

function openFeedbackModal() {
  feedbackModal?.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeFeedbackModal() {
  feedbackModal?.classList.add("hidden");
  document.body.style.overflow = "";
  feedbackForm?.reset();
}

feedbackBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const isHelpful = btn.getAttribute("data-helpful") === "true";
    if (isHelpful) {
      showToast("Thank you for your feedback!");
    } else {
      openFeedbackModal();
    }
  });
});

feedbackBackdrop?.addEventListener("click", closeFeedbackModal);
feedbackCloseBtn?.addEventListener("click", closeFeedbackModal);
feedbackCancelBtn?.addEventListener("click", closeFeedbackModal);

feedbackForm?.addEventListener("submit", (e) => {
  e.preventDefault();
  // TODO: Submit feedback to backend
  closeFeedbackModal();
  showToast("Thank you for your feedback!");
});

// ============================================
// Toast Notifications
// ============================================
const toast = document.getElementById("toast");
const toastMessage = document.getElementById("toast-message");

function showToast(message, duration = 3000) {
  if (toastMessage) toastMessage.textContent = message;
  toast?.classList.remove("hidden");

  setTimeout(() => {
    toast?.classList.add("hidden");
  }, duration);
}

// ============================================
// Table of Contents Scrollspy
// ============================================
(function initTocScrollspy() {
  const tocNav = document.getElementById("toc-nav");
  if (!tocNav) return;

  const tocLinks = tocNav.querySelectorAll("a[href*='#']");
  if (tocLinks.length === 0) return;

  // Get all headings that are in the TOC
  const headingIds = Array.from(tocLinks)
    .map((link) => {
      const href = link.getAttribute("href");
      const hash = href?.split("#")[1];
      return hash ? decodeURIComponent(hash) : null;
    })
    .filter(Boolean);

  const headings = headingIds
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  if (headings.length === 0) return;

  let currentActive = null;

  // Create IntersectionObserver to track which heading is in view
  const observer = new IntersectionObserver(
    (entries) => {
      // Find all headings currently intersecting
      const visibleHeadings = entries
        .filter((entry) => entry.isIntersecting)
        .map((entry) => entry.target);

      // If we have visible headings, use the first one (topmost)
      if (visibleHeadings.length > 0) {
        // Sort by their position in the document
        visibleHeadings.sort((a, b) => {
          const aTop = a.getBoundingClientRect().top;
          const bTop = b.getBoundingClientRect().top;
          return aTop - bTop;
        });

        const activeHeading = visibleHeadings[0];
        setActiveLink(activeHeading.id);
      } else {
        // No headings visible, find the one we just scrolled past
        // by checking which heading is closest above the viewport
        const scrollTop = window.scrollY;
        let closestHeading = null;
        let closestDistance = Infinity;

        headings.forEach((heading) => {
          const headingTop = heading.offsetTop;
          const distance = scrollTop - headingTop;
          // Only consider headings above the current scroll position
          if (distance >= -100 && distance < closestDistance) {
            closestDistance = distance;
            closestHeading = heading;
          }
        });

        if (closestHeading) {
          setActiveLink(closestHeading.id);
        }
      }
    },
    {
      // Trigger when heading enters the top 20% of the viewport
      rootMargin: "-80px 0px -70% 0px",
      threshold: 0,
    }
  );

  // Observe all headings
  headings.forEach((heading) => observer.observe(heading));

  function setActiveLink(id) {
    if (currentActive === id) return;
    currentActive = id;

    // Remove active class from all links
    tocLinks.forEach((link) => link.classList.remove("active"));

    // Find and activate the matching link
    const activeLink = tocNav.querySelector(`a[href*="#${CSS.escape(id)}"]`);
    if (activeLink) {
      activeLink.classList.add("active");

      // Scroll the TOC container (not the page) to keep active item visible
      const tocAside = tocNav.closest(".toc-aside");
      if (tocAside) {
        const linkRect = activeLink.getBoundingClientRect();
        const asideRect = tocAside.getBoundingClientRect();

        // Check if link is outside visible area of the TOC aside
        if (
          linkRect.top < asideRect.top + 60 ||
          linkRect.bottom > asideRect.bottom - 20
        ) {
          // Calculate scroll position within the TOC aside
          const linkOffsetTop = activeLink.offsetTop - tocAside.offsetTop;
          const scrollTarget =
            linkOffsetTop - asideRect.height / 2 + linkRect.height / 2;
          tocAside.scrollTo({ top: scrollTarget, behavior: "smooth" });
        }
      }
    }
  }

  // Handle click on TOC links for smooth scrolling
  tocLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      const hash = href?.split("#")[1];
      if (!hash) return;

      const target = document.getElementById(decodeURIComponent(hash));
      if (target) {
        e.preventDefault();

        // Update URL without scrolling
        history.pushState(null, "", href);

        // Smooth scroll to target with offset for header
        const headerOffset = 100;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });

        // Set active immediately for better UX
        setActiveLink(hash);
      }
    });
  });

  // Set initial active state based on URL hash or first heading
  if (window.location.hash) {
    const hash = decodeURIComponent(window.location.hash.slice(1));
    setActiveLink(hash);
  } else if (headings[0]) {
    // Small delay to let the page settle
    setTimeout(() => {
      if (window.scrollY < 100) {
        setActiveLink(headings[0].id);
      }
    }, 100);
  }
})();

// ============================================
// Utility Functions
// ============================================
function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

// ============================================
// Code Block Enhancement
// ============================================
(function initCodeBlocks() {
  // Language display names
  const languageNames = {
    js: "JavaScript",
    javascript: "JavaScript",
    ts: "TypeScript",
    typescript: "TypeScript",
    html: "HTML",
    css: "CSS",
    scss: "SCSS",
    json: "JSON",
    yaml: "YAML",
    yml: "YAML",
    bash: "Bash",
    sh: "Shell",
    shell: "Shell",
    python: "Python",
    py: "Python",
    sql: "SQL",
    xml: "XML",
    markdown: "Markdown",
    md: "Markdown",
    go: "Go",
    rust: "Rust",
    java: "Java",
    c: "C",
    cpp: "C++",
    csharp: "C#",
    php: "PHP",
    ruby: "Ruby",
    swift: "Swift",
    kotlin: "Kotlin",
    plaintext: "Text",
    text: "Text",
    csv: "CSV",
  };

  // Copy icon SVG
  const copyIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>`;

  // Check icon SVG
  const checkIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`;

  // Code icon SVG
  const codeIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`;

  document.querySelectorAll(".prose pre").forEach((pre) => {
    // Skip if already wrapped
    if (pre.closest(".code-block-wrapper")) return;

    const code = pre.querySelector("code");
    if (!code) return;

    // Detect language from class
    let language = "";
    const classList = code.className.split(" ");
    for (const cls of classList) {
      if (cls.startsWith("language-")) {
        language = cls.replace("language-", "");
        break;
      }
    }

    // Create wrapper
    const wrapper = document.createElement("div");
    wrapper.className = "code-block-wrapper";

    // Create header
    const header = document.createElement("div");
    header.className = "code-block-header";

    // Language label
    const langLabel = document.createElement("span");
    langLabel.className = "code-block-language";
    langLabel.innerHTML = `${codeIcon}<span>${languageNames[language] || language || "Code"}</span>`;

    // Copy button
    const copyBtn = document.createElement("button");
    copyBtn.className = "code-copy-btn";
    copyBtn.innerHTML = `${copyIcon}<span>Copy</span>`;
    copyBtn.setAttribute("aria-label", "Copy code to clipboard");
    copyBtn.type = "button";

    copyBtn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(code.textContent || "");
        copyBtn.classList.add("copied");
        copyBtn.innerHTML = `${checkIcon}<span>Copied!</span>`;

        setTimeout(() => {
          copyBtn.classList.remove("copied");
          copyBtn.innerHTML = `${copyIcon}<span>Copy</span>`;
        }, 2000);
      } catch (err) {
        console.error("Failed to copy:", err);
      }
    });

    header.appendChild(langLabel);
    header.appendChild(copyBtn);

    // Wrap the pre element
    pre.parentNode.insertBefore(wrapper, pre);
    wrapper.appendChild(header);
    wrapper.appendChild(pre);

    // Remove old inline styles
    pre.style.position = "";
  });
})();
