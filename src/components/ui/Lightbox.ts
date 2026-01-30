/**
 * Lightbox Component
 * @module @mieweb/ui
 *
 * A lightbox/modal component for viewing images:
 * - Click images to open in lightbox
 * - Navigate between images with arrow keys or buttons
 * - Close with Escape key, click outside, or close button
 * - Supports touch gestures for mobile
 */

export interface LightboxOptions {
  /** Selector for images to include in the lightbox */
  imageSelector?: string;
  /** Whether to show navigation arrows */
  showNavigation?: boolean;
  /** Whether to show image counter (e.g., "1 of 5") */
  showCounter?: boolean;
  /** Whether to close lightbox when clicking outside the image */
  closeOnBackdropClick?: boolean;
  /** Callback when lightbox opens */
  onOpen?: (index: number, image: HTMLImageElement) => void;
  /** Callback when lightbox closes */
  onClose?: () => void;
  /** Callback when navigating between images */
  onNavigate?: (index: number, image: HTMLImageElement) => void;
}

export class Lightbox {
  private options: Required<LightboxOptions>;
  private images: HTMLImageElement[] = [];
  private currentIndex: number = 0;
  private lightboxEl: HTMLElement | null = null;
  private isOpen: boolean = false;

  // Touch handling
  private touchStartX: number = 0;
  private touchEndX: number = 0;

  constructor(options: LightboxOptions = {}) {
    this.options = {
      imageSelector:
        options.imageSelector ?? "article img, .content img, main img",
      showNavigation: options.showNavigation ?? true,
      showCounter: options.showCounter ?? true,
      closeOnBackdropClick: options.closeOnBackdropClick ?? true,
      onOpen: options.onOpen ?? (() => {}),
      onClose: options.onClose ?? (() => {}),
      onNavigate: options.onNavigate ?? (() => {}),
    };

    this.init();
  }

  private init(): void {
    this.collectImages();
    this.createLightboxElement();
    this.attachImageClickHandlers();
    this.attachKeyboardHandlers();
  }

  private collectImages(): void {
    const selector = this.options.imageSelector;
    const imgs = document.querySelectorAll<HTMLImageElement>(selector);

    // Filter out small images (icons, etc.) and SVGs
    this.images = Array.from(imgs).filter((img) => {
      // Skip SVGs (object or inline)
      if (img.closest("object[type*='svg']")) return false;
      // Skip very small images (likely icons)
      const minSize = 100;
      if (img.naturalWidth < minSize && img.naturalHeight < minSize) {
        return false;
      }
      return true;
    });
  }

  private createLightboxElement(): void {
    // Create lightbox container
    const lightbox = document.createElement("div");
    lightbox.id = "lightbox";
    lightbox.className = "lightbox";
    lightbox.setAttribute("role", "dialog");
    lightbox.setAttribute("aria-modal", "true");
    lightbox.setAttribute("aria-label", "Image lightbox");
    lightbox.innerHTML = `
      <div class="lightbox-backdrop" aria-hidden="true"></div>
      <div class="lightbox-content">
        <button 
          type="button" 
          class="lightbox-close" 
          aria-label="Close lightbox"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6" aria-hidden="true">
            <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
          </svg>
        </button>
        ${
          this.options.showNavigation
            ? `
        <button 
          type="button" 
          class="lightbox-nav lightbox-prev" 
          aria-label="Previous image"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-8 w-8" aria-hidden="true">
            <path d="m15 18-6-6 6-6"/>
          </svg>
        </button>
        <button 
          type="button" 
          class="lightbox-nav lightbox-next" 
          aria-label="Next image"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-8 w-8" aria-hidden="true">
            <path d="m9 18 6-6-6-6"/>
          </svg>
        </button>
        `
            : ""
        }
        <div class="lightbox-image-container">
          <img class="lightbox-image" src="" alt="" />
        </div>
        ${
          this.options.showCounter
            ? `
        <div class="lightbox-counter" aria-live="polite">
          <span class="lightbox-current">1</span> of <span class="lightbox-total">1</span>
        </div>
        `
            : ""
        }
        <div class="lightbox-caption" aria-live="polite"></div>
      </div>
    `;

    // Add styles
    this.injectStyles();

    // Append to body
    document.body.appendChild(lightbox);
    this.lightboxEl = lightbox;

    // Attach event listeners
    this.attachLightboxEventListeners();
  }

  private injectStyles(): void {
    if (document.getElementById("lightbox-styles")) return;

    const styles = document.createElement("style");
    styles.id = "lightbox-styles";
    styles.textContent = `
      .lightbox {
        position: fixed;
        inset: 0;
        z-index: 9999;
        display: none;
        align-items: center;
        justify-content: center;
      }

      .lightbox.open {
        display: flex;
      }

      .lightbox-backdrop {
        position: absolute;
        inset: 0;
        background-color: rgba(0, 0, 0, 0.9);
        backdrop-filter: blur(4px);
      }

      .lightbox-content {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        padding: 1rem;
      }

      .lightbox-close {
        position: absolute;
        top: 1rem;
        right: 1rem;
        z-index: 10;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 2.5rem;
        height: 2.5rem;
        border: none;
        border-radius: 9999px;
        background-color: rgba(255, 255, 255, 0.1);
        color: white;
        cursor: pointer;
        transition: background-color 0.2s;
      }

      .lightbox-close:hover,
      .lightbox-close:focus {
        background-color: rgba(255, 255, 255, 0.2);
        outline: none;
      }

      .lightbox-close:focus-visible {
        outline: 2px solid white;
        outline-offset: 2px;
      }

      .lightbox-nav {
        position: absolute;
        top: 50%;
        z-index: 10;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 3rem;
        height: 3rem;
        border: none;
        border-radius: 9999px;
        background-color: rgba(255, 255, 255, 0.1);
        color: white;
        cursor: pointer;
        transform: translateY(-50%);
        transition: background-color 0.2s, opacity 0.2s;
      }

      .lightbox-nav:hover,
      .lightbox-nav:focus {
        background-color: rgba(255, 255, 255, 0.2);
        outline: none;
      }

      .lightbox-nav:focus-visible {
        outline: 2px solid white;
        outline-offset: 2px;
      }

      .lightbox-nav:disabled {
        opacity: 0.3;
        cursor: not-allowed;
      }

      .lightbox-prev {
        left: 1rem;
      }

      .lightbox-next {
        right: 1rem;
      }

      .lightbox-image-container {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        max-width: calc(100% - 6rem);
        max-height: calc(100% - 6rem);
        overflow: hidden;
      }

      .lightbox-image {
        max-width: 100%;
        max-height: calc(100vh - 8rem);
        object-fit: contain;
        border-radius: 0.5rem;
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
      }

      .lightbox-counter {
        position: absolute;
        bottom: 1rem;
        left: 50%;
        transform: translateX(-50%);
        padding: 0.5rem 1rem;
        border-radius: 9999px;
        background-color: rgba(0, 0, 0, 0.5);
        color: white;
        font-size: 0.875rem;
      }

      .lightbox-caption {
        position: absolute;
        bottom: 3.5rem;
        left: 50%;
        transform: translateX(-50%);
        max-width: 80%;
        padding: 0.5rem 1rem;
        border-radius: 0.5rem;
        background-color: rgba(0, 0, 0, 0.5);
        color: white;
        font-size: 0.875rem;
        text-align: center;
        opacity: 0;
        transition: opacity 0.2s;
      }

      .lightbox-caption.visible {
        opacity: 1;
      }

      /* Make clickable images show a cursor hint */
      [data-lightbox-index] {
        cursor: zoom-in;
        transition: opacity 0.2s;
      }

      [data-lightbox-index]:hover {
        opacity: 0.9;
      }

      /* Mobile adjustments */
      @media (max-width: 640px) {
        .lightbox-nav {
          width: 2.5rem;
          height: 2.5rem;
        }

        .lightbox-prev {
          left: 0.5rem;
        }

        .lightbox-next {
          right: 0.5rem;
        }

        .lightbox-image-container {
          max-width: calc(100% - 3rem);
        }

        .lightbox-close {
          top: 0.5rem;
          right: 0.5rem;
        }
      }
    `;

    document.head.appendChild(styles);
  }

  private attachImageClickHandlers(): void {
    this.images.forEach((img, index) => {
      // Add data attribute for index
      img.setAttribute("data-lightbox-index", String(index));

      // Click handler
      img.addEventListener("click", (e) => {
        e.preventDefault();
        this.open(index);
      });
    });
  }

  private attachLightboxEventListeners(): void {
    if (!this.lightboxEl) return;

    // Close button
    const closeBtn = this.lightboxEl.querySelector(".lightbox-close");
    closeBtn?.addEventListener("click", () => this.close());

    // Backdrop click
    if (this.options.closeOnBackdropClick) {
      const backdrop = this.lightboxEl.querySelector(".lightbox-backdrop");
      backdrop?.addEventListener("click", () => this.close());
    }

    // Navigation buttons
    const prevBtn = this.lightboxEl.querySelector(".lightbox-prev");
    const nextBtn = this.lightboxEl.querySelector(".lightbox-next");

    prevBtn?.addEventListener("click", () => this.prev());
    nextBtn?.addEventListener("click", () => this.next());

    // Touch handling for swipe
    const content = this.lightboxEl.querySelector(".lightbox-content");

    content?.addEventListener(
      "touchstart",
      (e) => {
        this.touchStartX = (e as TouchEvent).changedTouches[0].screenX;
      },
      { passive: true }
    );

    content?.addEventListener(
      "touchend",
      (e) => {
        this.touchEndX = (e as TouchEvent).changedTouches[0].screenX;
        this.handleSwipe();
      },
      { passive: true }
    );
  }

  private attachKeyboardHandlers(): void {
    document.addEventListener("keydown", (e) => {
      if (!this.isOpen) return;

      switch (e.key) {
        case "Escape":
          e.preventDefault();
          this.close();
          break;
        case "ArrowLeft":
          e.preventDefault();
          this.prev();
          break;
        case "ArrowRight":
          e.preventDefault();
          this.next();
          break;
        case "Home":
          e.preventDefault();
          this.goTo(0);
          break;
        case "End":
          e.preventDefault();
          this.goTo(this.images.length - 1);
          break;
      }
    });
  }

  private handleSwipe(): void {
    const swipeThreshold = 50;
    const diff = this.touchStartX - this.touchEndX;

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        this.next();
      } else {
        this.prev();
      }
    }
  }

  private updateLightbox(): void {
    if (!this.lightboxEl || this.images.length === 0) return;

    const currentImage = this.images[this.currentIndex];
    const lightboxImage =
      this.lightboxEl.querySelector<HTMLImageElement>(".lightbox-image");
    const captionEl = this.lightboxEl.querySelector(".lightbox-caption");
    const currentCounter = this.lightboxEl.querySelector(".lightbox-current");
    const totalCounter = this.lightboxEl.querySelector(".lightbox-total");
    const prevBtn =
      this.lightboxEl.querySelector<HTMLButtonElement>(".lightbox-prev");
    const nextBtn =
      this.lightboxEl.querySelector<HTMLButtonElement>(".lightbox-next");

    if (lightboxImage) {
      lightboxImage.src = currentImage.src;
      lightboxImage.alt = currentImage.alt || "";
    }

    // Update caption
    if (captionEl) {
      const caption = currentImage.alt || currentImage.title || "";
      if (caption) {
        captionEl.textContent = caption;
        captionEl.classList.add("visible");
      } else {
        captionEl.classList.remove("visible");
      }
    }

    // Update counter
    if (currentCounter)
      currentCounter.textContent = String(this.currentIndex + 1);
    if (totalCounter) totalCounter.textContent = String(this.images.length);

    // Update navigation buttons
    if (prevBtn) {
      prevBtn.disabled = this.currentIndex === 0;
    }
    if (nextBtn) {
      nextBtn.disabled = this.currentIndex === this.images.length - 1;
    }
  }

  public open(index: number = 0): void {
    if (this.images.length === 0) return;

    this.currentIndex = Math.max(0, Math.min(index, this.images.length - 1));
    this.isOpen = true;
    this.updateLightbox();
    this.lightboxEl?.classList.add("open");
    document.body.style.overflow = "hidden";

    // Focus the close button for accessibility
    const closeBtn =
      this.lightboxEl?.querySelector<HTMLButtonElement>(".lightbox-close");
    setTimeout(() => closeBtn?.focus(), 100);

    this.options.onOpen(this.currentIndex, this.images[this.currentIndex]);
  }

  public close(): void {
    this.isOpen = false;
    this.lightboxEl?.classList.remove("open");
    document.body.style.overflow = "";

    // Return focus to the image that was clicked
    const originalImage = this.images[this.currentIndex];
    originalImage?.focus();

    this.options.onClose();
  }

  public next(): void {
    if (this.currentIndex < this.images.length - 1) {
      this.goTo(this.currentIndex + 1);
    }
  }

  public prev(): void {
    if (this.currentIndex > 0) {
      this.goTo(this.currentIndex - 1);
    }
  }

  public goTo(index: number): void {
    if (index < 0 || index >= this.images.length) return;
    this.currentIndex = index;
    this.updateLightbox();
    this.options.onNavigate(this.currentIndex, this.images[this.currentIndex]);
  }

  public refresh(): void {
    // Re-collect images (useful if DOM has changed)
    this.collectImages();
    this.attachImageClickHandlers();
  }

  public destroy(): void {
    // Remove event listeners from images
    this.images.forEach((img) => {
      img.removeAttribute("data-lightbox-index");
    });

    // Remove lightbox element
    this.lightboxEl?.remove();

    // Remove styles
    document.getElementById("lightbox-styles")?.remove();
  }
}

/**
 * Initialize Lightbox with default options
 */
export function initLightbox(options?: LightboxOptions): Lightbox {
  return new Lightbox(options);
}
