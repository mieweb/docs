/**
 * Lightbox Component
 *
 * A modal-based image lightbox for viewing images in full screen.
 * Uses @mieweb/ui Modal component as the base.
 */

import React, { useState, useEffect, useCallback, useRef } from "react";
import { Modal, ModalBody, Button, cn } from "@mieweb/ui";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export interface LightboxImage {
  src: string;
  alt?: string;
  title?: string;
}

export interface LightboxProps {
  /** Array of images to display */
  images: LightboxImage[];
  /** Initial image index to display */
  initialIndex?: number;
  /** Whether the lightbox is open */
  open: boolean;
  /** Callback when lightbox should close */
  onClose: () => void;
  /** Whether to show navigation arrows */
  showNavigation?: boolean;
  /** Whether to show image counter */
  showCounter?: boolean;
  /** Whether to close on backdrop click */
  closeOnBackdropClick?: boolean;
  /** Callback when navigating between images */
  onNavigate?: (index: number) => void;
  /** Additional class names */
  className?: string;
}

export function Lightbox({
  images,
  initialIndex = 0,
  open,
  onClose,
  showNavigation = true,
  showCounter = true,
  closeOnBackdropClick = true,
  onNavigate,
  className,
}: LightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Reset to initial index when opening
  useEffect(() => {
    if (open) {
      setCurrentIndex(initialIndex);
    }
  }, [open, initialIndex]);

  const currentImage = images[currentIndex];
  const hasNext = currentIndex < images.length - 1;
  const hasPrev = currentIndex > 0;

  const goToNext = useCallback(() => {
    if (hasNext) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      onNavigate?.(newIndex);
    }
  }, [currentIndex, hasNext, onNavigate]);

  const goToPrev = useCallback(() => {
    if (hasPrev) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
      onNavigate?.(newIndex);
    }
  }, [currentIndex, hasPrev, onNavigate]);

  const goToIndex = useCallback(
    (index: number) => {
      if (index >= 0 && index < images.length) {
        setCurrentIndex(index);
        onNavigate?.(index);
      }
    },
    [images.length, onNavigate]
  );

  // Keyboard navigation
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "Escape":
          e.preventDefault();
          onClose();
          break;
        case "ArrowLeft":
          e.preventDefault();
          goToPrev();
          break;
        case "ArrowRight":
          e.preventDefault();
          goToNext();
          break;
        case "Home":
          e.preventDefault();
          goToIndex(0);
          break;
        case "End":
          e.preventDefault();
          goToIndex(images.length - 1);
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, goToNext, goToPrev, goToIndex, images.length, onClose]);

  // Touch swipe handling
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;

    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    const threshold = 50;

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        goToNext();
      } else {
        goToPrev();
      }
    }
    setTouchStart(null);
  };

  if (!currentImage) return null;

  const handleOpenChange = (isOpen: boolean) => {
    if (!isOpen) {
      onClose();
    }
  };

  return (
    <Modal
      open={open}
      onOpenChange={handleOpenChange}
      size="full"
      closeOnOverlayClick={closeOnBackdropClick}
      className={cn("lightbox-modal bg-black/95", className)}
    >
      <ModalBody className="relative flex h-full w-full items-center justify-center p-0">
        {/* Close button */}
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 h-10 w-10 rounded-full bg-white/10 text-white hover:bg-white/20"
          aria-label="Close lightbox"
        >
          <X className="h-6 w-6" />
        </Button>

        {/* Navigation arrows */}
        {showNavigation && images.length > 1 && (
          <>
            <Button
              variant="ghost"
              size="icon"
              onClick={goToPrev}
              disabled={!hasPrev}
              className="absolute top-1/2 left-4 z-10 h-12 w-12 -translate-y-1/2 rounded-full bg-white/10 text-white hover:bg-white/20 disabled:opacity-30"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={goToNext}
              disabled={!hasNext}
              className="absolute top-1/2 right-4 z-10 h-12 w-12 -translate-y-1/2 rounded-full bg-white/10 text-white hover:bg-white/20 disabled:opacity-30"
              aria-label="Next image"
            >
              <ChevronRight className="h-8 w-8" />
            </Button>
          </>
        )}

        {/* Image container */}
        <div
          ref={containerRef}
          className="flex h-full w-full items-center justify-center"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <img
            src={currentImage.src}
            alt={currentImage.alt || ""}
            title={currentImage.title}
            className="max-h-[calc(100vh-8rem)] max-w-[calc(100vw-4rem)] object-contain"
          />
        </div>

        {/* Caption */}
        {(currentImage.alt || currentImage.title) && (
          <div className="absolute bottom-16 left-1/2 -translate-x-1/2 rounded-lg bg-black/50 px-4 py-2 text-center text-sm text-white">
            {currentImage.title || currentImage.alt}
          </div>
        )}

        {/* Counter */}
        {showCounter && images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/50 px-4 py-2 text-sm text-white">
            {currentIndex + 1} of {images.length}
          </div>
        )}
      </ModalBody>
    </Modal>
  );
}

/**
 * Hook to manage lightbox state and auto-collect images from the page
 */
export function useLightbox(
  selector: string = "article img, .content img, main img"
) {
  const [isOpen, setIsOpen] = useState(false);
  const [images, setImages] = useState<LightboxImage[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Collect images on mount
  useEffect(() => {
    const collectImages = () => {
      const imgElements = document.querySelectorAll<HTMLImageElement>(selector);
      const collectedImages: LightboxImage[] = [];

      imgElements.forEach((img) => {
        // Skip small images (icons)
        if (img.naturalWidth < 100 && img.naturalHeight < 100) return;
        // Skip SVGs in objects
        if (img.closest('object[type*="svg"]')) return;

        collectedImages.push({
          src: img.src,
          alt: img.alt || undefined,
          title: img.title || undefined,
        });

        // Add click handler
        img.style.cursor = "zoom-in";
        img.dataset.lightboxIndex = String(collectedImages.length - 1);
        img.addEventListener("click", (e) => {
          e.preventDefault();
          const idx = parseInt(img.dataset.lightboxIndex || "0", 10);
          setCurrentIndex(idx);
          setIsOpen(true);
        });
      });

      setImages(collectedImages);
    };

    // Wait for images to load
    if (document.readyState === "complete") {
      collectImages();
    } else {
      window.addEventListener("load", collectImages);
      return () => window.removeEventListener("load", collectImages);
    }
  }, [selector]);

  const openLightbox = useCallback((index: number = 0) => {
    setCurrentIndex(index);
    setIsOpen(true);
  }, []);

  const closeLightbox = useCallback(() => {
    setIsOpen(false);
  }, []);

  return {
    isOpen,
    images,
    currentIndex,
    openLightbox,
    closeLightbox,
    setCurrentIndex,
  };
}

export default Lightbox;
