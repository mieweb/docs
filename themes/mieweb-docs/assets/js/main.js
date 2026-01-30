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

sidebarToggle?.addEventListener("click", () => {
  const isOpen = sidebar?.classList.contains("open");
  isOpen ? closeSidebar() : openSidebar();
});

sidebarOverlay?.addEventListener("click", closeSidebar);

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

  function highlightText(text, query) {
    if (!query) return text;
    const regex = new RegExp(
      `(${query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`,
      "gi"
    );
    // Use amber/orange tones that work well in both light and dark mode
    // Light: warm yellow background, Dark: semi-transparent amber for better contrast
    return text.replace(
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

// ============================================
// Image Lightbox
// ============================================
(function initLightbox() {
  // Collect all content images
  const imageSelector = "article img, .content img, main img, .prose img";
  const images = Array.from(document.querySelectorAll(imageSelector)).filter(
    (img) => {
      // Skip SVGs (object or inline)
      if (img.closest("object[type*='svg']")) return false;
      // Skip very small images (likely icons)
      const minSize = 100;
      // Check natural dimensions or fall back to rendered dimensions
      const width = img.naturalWidth || img.width;
      const height = img.naturalHeight || img.height;
      if (width < minSize && height < minSize) return false;
      return true;
    }
  );

  if (images.length === 0) return;

  // Create lightbox element
  const lightbox = document.createElement("div");
  lightbox.id = "lightbox";
  lightbox.className = "lightbox";
  lightbox.setAttribute("role", "dialog");
  lightbox.setAttribute("aria-modal", "true");
  lightbox.setAttribute("aria-label", "Image lightbox");
  lightbox.innerHTML = `
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
  document.body.appendChild(lightbox);

  // State
  let currentIndex = 0;
  let isOpen = false;
  let touchStartX = 0;
  let touchEndX = 0;

  // Elements
  const backdrop = lightbox.querySelector(".lightbox-backdrop");
  const closeBtn = lightbox.querySelector(".lightbox-close");
  const prevBtn = lightbox.querySelector(".lightbox-prev");
  const nextBtn = lightbox.querySelector(".lightbox-next");
  const lightboxImage = lightbox.querySelector(".lightbox-image");
  const captionEl = lightbox.querySelector(".lightbox-caption");
  const currentCounter = lightbox.querySelector(".lightbox-current");
  const totalCounter = lightbox.querySelector(".lightbox-total");
  const content = lightbox.querySelector(".lightbox-content");

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

  // Image click handlers
  images.forEach((img, index) => {
    img.setAttribute("data-lightbox-index", index);
    img.style.cursor = "zoom-in";
    img.addEventListener("click", (e) => {
      e.preventDefault();
      openLightbox(index);
    });
  });

  // Lightbox event listeners
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
// Utility Functions
// ============================================
function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

// ============================================
// Code Copy Button
// ============================================
document.querySelectorAll("pre code").forEach((block) => {
  const pre = block.parentElement;
  if (!pre) return;

  pre.style.position = "relative";

  const copyBtn = document.createElement("button");
  copyBtn.className =
    "absolute right-2 top-2 rounded bg-muted px-2 py-1 text-xs text-muted-foreground hover:bg-muted-foreground/20 hover:text-foreground";
  copyBtn.textContent = "Copy";
  copyBtn.setAttribute("aria-label", "Copy code");

  copyBtn.addEventListener("click", async () => {
    await navigator.clipboard.writeText(block.textContent || "");
    copyBtn.textContent = "Copied!";
    setTimeout(() => {
      copyBtn.textContent = "Copy";
    }, 2000);
  });

  pre.appendChild(copyBtn);
});
