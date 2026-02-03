/**
 * SearchModal Component
 *
 * A command-palette style search modal for the documentation site.
 * Uses @mieweb/ui Modal and Input components.
 */

import React, { useState, useEffect, useCallback, useRef } from "react";
import { Modal, ModalHeader, ModalBody, Spinner, cn } from "@mieweb/ui";
import { Search, FileText, Hash, ArrowRight } from "lucide-react";

export interface SearchResult {
  id: string;
  title: string;
  url: string;
  content?: string;
  section?: string;
  score?: number;
}

export interface SearchModalProps {
  /** Whether the modal is open */
  open: boolean;
  /** Callback when modal should close */
  onClose: () => void;
  /** Search index URL */
  searchIndexUrl?: string;
  /** Callback when a result is selected */
  onSelect?: (result: SearchResult) => void;
  /** Placeholder text */
  placeholder?: string;
  /** Additional class names */
  className?: string;
}

export function SearchModal({
  open,
  onClose,
  searchIndexUrl = "/search.json",
  onSelect,
  placeholder = "Search documentation...",
  className,
}: SearchModalProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [searchIndex, setSearchIndex] = useState<unknown[] | null>(null);
  const [lunrIndex, setLunrIndex] = useState<unknown>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  // Load search index
  useEffect(() => {
    if (!open || searchIndex) return;

    const loadIndex = async () => {
      try {
        const response = await fetch(searchIndexUrl);
        const data = await response.json();
        setSearchIndex(data);

        // Build lunr index if available
        if (
          typeof window !== "undefined" &&
          (window as unknown as { lunr?: unknown }).lunr
        ) {
          type LunrBuilder = {
            ref: (field: string) => void;
            field: (field: string, options?: { boost?: number }) => void;
            add: (doc: unknown) => void;
          };
          type LunrFunction = (config: (this: LunrBuilder) => void) => unknown;
          const lunr = (window as unknown as { lunr: LunrFunction }).lunr;
          const idx = lunr(function (this: LunrBuilder) {
            this.ref("id");
            this.field("title", { boost: 10 });
            this.field("content");

            data.forEach(
              (doc: { id: string; title: string; content?: string }) => {
                this.add(doc);
              }
            );
          });
          setLunrIndex(idx);
        }
      } catch (error) {
        console.error("Failed to load search index:", error);
      }
    };

    loadIndex();
  }, [open, searchIndex, searchIndexUrl]);

  // Focus input when modal opens
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 100);
      setQuery("");
      setResults([]);
      setSelectedIndex(0);
    }
  }, [open]);

  // Perform search
  const performSearch = useCallback(
    (searchQuery: string) => {
      if (!searchQuery.trim() || !searchIndex) {
        setResults([]);
        return;
      }

      setIsLoading(true);
      const trimmedQuery = searchQuery.toLowerCase().trim();

      try {
        let searchResults: SearchResult[];

        if (
          lunrIndex &&
          typeof (
            lunrIndex as {
              search: (q: string) => Array<{ ref: string; score: number }>;
            }
          ).search === "function"
        ) {
          // Use lunr for search
          const lunrResults = (
            lunrIndex as {
              search: (q: string) => Array<{ ref: string; score: number }>;
            }
          ).search(trimmedQuery);
          searchResults = lunrResults
            .slice(0, 10)
            .map((result) => {
              const doc = (
                searchIndex as Array<{
                  id: string;
                  title: string;
                  url: string;
                  content?: string;
                  section?: string;
                }>
              ).find((d) => d.id === result.ref);
              return doc
                ? ({ ...doc, score: result.score } as SearchResult)
                : null;
            })
            .filter((r): r is SearchResult => r !== null);
        } else {
          // Fallback to simple search
          searchResults = (
            searchIndex as Array<{
              id: string;
              title: string;
              url: string;
              content?: string;
              section?: string;
            }>
          )
            .filter((doc) => {
              const titleMatch = doc.title
                ?.toLowerCase()
                .includes(trimmedQuery);
              const contentMatch = doc.content
                ?.toLowerCase()
                .includes(trimmedQuery);
              return titleMatch || contentMatch;
            })
            .slice(0, 10)
            .map((doc) => ({ ...doc, score: 1 }));
        }

        setResults(searchResults);
        setSelectedIndex(0);
      } catch (error) {
        console.error("Search error:", error);
        setResults([]);
      } finally {
        setIsLoading(false);
      }
    },
    [searchIndex, lunrIndex]
  );

  // Debounced search
  useEffect(() => {
    const timer = setTimeout(() => {
      performSearch(query);
    }, 200);

    return () => clearTimeout(timer);
  }, [query, performSearch]);

  // Select result
  const handleSelect = useCallback(
    (result: SearchResult) => {
      onSelect?.(result);
      onClose();
      // Navigate to the result
      window.location.href = result.url;
    },
    [onSelect, onClose]
  );

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          setSelectedIndex((prev) => Math.min(prev + 1, results.length - 1));
          break;
        case "ArrowUp":
          e.preventDefault();
          setSelectedIndex((prev) => Math.max(prev - 1, 0));
          break;
        case "Enter":
          e.preventDefault();
          if (results[selectedIndex]) {
            handleSelect(results[selectedIndex]);
          }
          break;
        case "Escape":
          e.preventDefault();
          onClose();
          break;
      }
    },
    [results, selectedIndex, onClose, handleSelect]
  );

  // Scroll selected item into view
  useEffect(() => {
    const selectedElement = resultsRef.current?.querySelector(
      `[data-index="${selectedIndex}"]`
    );
    selectedElement?.scrollIntoView({ block: "nearest" });
  }, [selectedIndex]);

  const handleOpenChange = (isOpen: boolean) => {
    if (!isOpen) {
      onClose();
    }
  };

  return (
    <Modal
      open={open}
      onOpenChange={handleOpenChange}
      size="lg"
      className={cn("search-modal", className)}
    >
      <ModalHeader className="border-border border-b p-0">
        <div className="relative">
          <Search className="text-muted-foreground absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            className="w-full border-0 bg-transparent py-4 pr-4 pl-12 text-base focus:ring-0 focus:outline-none"
            aria-label="Search documentation"
            autoComplete="off"
            spellCheck={false}
          />
          {isLoading && (
            <Spinner
              size="sm"
              className="absolute top-1/2 right-4 -translate-y-1/2"
            />
          )}
        </div>
      </ModalHeader>
      <ModalBody className="max-h-[60vh] overflow-y-auto p-0">
        {results.length > 0 ? (
          <div ref={resultsRef} className="divide-border divide-y">
            {results.map((result, index) => (
              <button
                key={result.id}
                data-index={index}
                onClick={() => handleSelect(result)}
                className={cn(
                  "hover:bg-muted w-full px-4 py-3 text-left transition-colors focus:outline-none",
                  index === selectedIndex && "bg-muted"
                )}
              >
                <div className="flex items-center gap-3">
                  <FileText className="text-muted-foreground h-4 w-4 flex-shrink-0" />
                  <div className="min-w-0 flex-1">
                    <div className="text-foreground truncate font-medium">
                      {result.title}
                    </div>
                    {result.section && (
                      <div className="text-muted-foreground flex items-center gap-1 text-xs">
                        <Hash className="h-3 w-3" />
                        {result.section}
                      </div>
                    )}
                  </div>
                  <ArrowRight className="text-muted-foreground h-4 w-4 flex-shrink-0 opacity-0 group-hover:opacity-100" />
                </div>
              </button>
            ))}
          </div>
        ) : query && !isLoading ? (
          <div className="text-muted-foreground p-8 text-center">
            No results found for "{query}"
          </div>
        ) : !query ? (
          <div className="text-muted-foreground p-8 text-center">
            <p className="mb-2">Start typing to search</p>
            <p className="text-xs">
              Press{" "}
              <kbd className="rounded border px-1.5 py-0.5 text-xs">↑</kbd>{" "}
              <kbd className="rounded border px-1.5 py-0.5 text-xs">↓</kbd> to
              navigate,{" "}
              <kbd className="rounded border px-1.5 py-0.5 text-xs">Enter</kbd>{" "}
              to select
            </p>
          </div>
        ) : null}
      </ModalBody>
    </Modal>
  );
}

export default SearchModal;
