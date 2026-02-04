/**
 * Ozwell AI Documentation Assistant
 *
 * A custom chat interface that properly renders markdown responses
 * with clickable links. Powered by ozwell.ai
 */

import * as React from "react";
import { marked } from "marked";
import DOMPurify from "dompurify";
import {
  AIChatTrigger,
  type AIMessage,
  type AISuggestedAction,
  type AIMessageContent,
} from "@mieweb/ui";

// Configure marked for safe HTML output
marked.setOptions({
  breaks: true,
  gfm: true,
});

// ============================================================================
// Types
// ============================================================================

interface ChatResponse {
  answer: string;
  sources: Array<{
    title: string;
    url: string;
    relevance: number;
  }>;
  conversationId?: string;
}

interface OzwellChatProps {
  apiUrl?: string;
  basePath?: string;
  brand?: "eh" | "wc";
  pulse?: boolean;
  position?: "bottom-right" | "bottom-left";
}

// ============================================================================
// Helpers
// ============================================================================

function parseMarkdown(text: string): string {
  const rawHtml = marked.parse(text) as string;
  return DOMPurify.sanitize(rawHtml, {
    ALLOWED_TAGS: [
      "p",
      "br",
      "strong",
      "em",
      "a",
      "ul",
      "ol",
      "li",
      "code",
      "pre",
      "h1",
      "h2",
      "h3",
      "h4",
      "blockquote",
    ],
    ALLOWED_ATTR: ["href", "target", "rel", "class"],
    ADD_ATTR: ["target"],
  });
}

// Add target="_blank" to all links
function addTargetBlank(html: string): string {
  return html.replace(/<a /g, '<a target="_blank" rel="noopener noreferrer" ');
}

// ============================================================================
// Suggested Actions
// ============================================================================

const defaultSuggestions: AISuggestedAction[] = [
  {
    id: "1",
    label: "How do I schedule an appointment?",
    prompt: "How do I schedule an appointment in the system?",
    icon: "calendar",
  },
  {
    id: "2",
    label: "How to create a patient chart?",
    prompt: "How do I create a new patient chart?",
    icon: "user",
  },
  {
    id: "3",
    label: "How to configure system settings?",
    prompt: "How do I configure system settings and preferences?",
    icon: "settings",
  },
  {
    id: "4",
    label: "How to manage documents?",
    prompt: "How do I upload and manage documents?",
    icon: "document",
  },
];

// ============================================================================
// API Client
// ============================================================================

interface PageContext {
  url: string;
  title?: string;
}

function getCurrentPageContext(): PageContext {
  return {
    url: window.location.pathname,
    title: document.title,
  };
}

async function sendChatMessage(
  message: string,
  history: AIMessage[],
  apiUrl: string,
  brand: "eh" | "wc"
): Promise<ChatResponse> {
  const currentPage = getCurrentPageContext();

  const response = await fetch(`${apiUrl}/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message,
      brand,
      currentPage,
      history: history.map((m) => ({
        role: m.role,
        content: m.content
          .filter((c: AIMessageContent) => c.type === "text")
          .map((c: AIMessageContent) => c.text)
          .join("\n"),
      })),
    }),
  });

  if (!response.ok) {
    const error = await response
      .json()
      .catch(() => ({ error: "Unknown error" }));
    throw new Error(error.error || `HTTP ${response.status}`);
  }

  return response.json() as Promise<ChatResponse>;
}

// ============================================================================
// Sub-Components
// ============================================================================

/** Sparkles icon for AI branding */
function SparklesIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
    </svg>
  );
}

/** Typing indicator dots */
function TypingIndicator() {
  return (
    <div className="flex items-center gap-1.5 py-2">
      <span
        className="h-2 w-2 animate-bounce rounded-full bg-neutral-500 dark:bg-neutral-400"
        style={{ animationDelay: "0ms" }}
      />
      <span
        className="h-2 w-2 animate-bounce rounded-full bg-neutral-500 dark:bg-neutral-400"
        style={{ animationDelay: "150ms" }}
      />
      <span
        className="h-2 w-2 animate-bounce rounded-full bg-neutral-500 dark:bg-neutral-400"
        style={{ animationDelay: "300ms" }}
      />
    </div>
  );
}

/** Single message bubble with markdown rendering */
function MessageBubble({
  message,
  isUser,
  logoUrl,
}: {
  message: AIMessage;
  isUser: boolean;
  logoUrl: string;
}) {
  const isStreaming = message.status === "streaming";

  // Get text content from message
  const textContent = message.content
    .filter((c) => c.type === "text" && c.text)
    .map((c) => c.text)
    .join("\n");

  // Parse markdown for assistant messages
  const htmlContent = React.useMemo(() => {
    if (isUser || !textContent) return "";
    return addTargetBlank(parseMarkdown(textContent));
  }, [textContent, isUser]);

  return (
    <div className={`flex gap-3 ${isUser ? "flex-row-reverse" : "flex-row"}`}>
      {/* Avatar */}
      {isUser ? (
        <div className="bg-primary-100 text-primary-700 dark:bg-primary-900/50 dark:text-primary-300 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full">
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
        </div>
      ) : (
        <img
          src={logoUrl}
          alt="Ozwell AI"
          className="h-8 w-8 flex-shrink-0 rounded-full object-cover"
        />
      )}

      {/* Message content */}
      <div
        className={`max-w-[85%] rounded-2xl px-4 py-2.5 ${
          isUser
            ? "bg-primary-600 dark:bg-primary-500 text-white"
            : "bg-neutral-100 text-neutral-900 dark:bg-neutral-800 dark:text-white"
        }`}
      >
        {isStreaming ? (
          <TypingIndicator />
        ) : isUser ? (
          <p className="whitespace-pre-wrap">{textContent}</p>
        ) : (
          <div
            className="prose prose-sm dark:prose-invert prose-p:my-1 prose-ul:my-1 prose-li:my-0 prose-a:text-primary-600 dark:prose-a:text-primary-400 prose-a:underline prose-strong:text-inherit max-w-none"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        )}
      </div>
    </div>
  );
}

/** Suggested action button */
function SuggestionButton({
  suggestion,
  onClick,
}: {
  suggestion: AISuggestedAction;
  onClick: (prompt: string) => void;
}) {
  const getIcon = () => {
    switch (suggestion.icon) {
      case "calendar":
        return (
          <svg
            className="h-4 w-4 opacity-60"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
            />
          </svg>
        );
      case "user":
        return (
          <svg
            className="h-4 w-4 opacity-60"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
        );
      case "settings":
        return (
          <svg
            className="h-4 w-4 opacity-60"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        );
      case "document":
        return (
          <svg
            className="h-4 w-4 opacity-60"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
            />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <button
      type="button"
      onClick={() => onClick(suggestion.prompt)}
      className="flex items-center gap-2 rounded-xl border border-neutral-200 px-3 py-2 text-left text-sm transition-colors hover:bg-neutral-50 dark:border-neutral-700 dark:hover:bg-neutral-800"
    >
      {getIcon()}
      <span>{suggestion.label}</span>
    </button>
  );
}

/** Empty state with suggestions */
function EmptyState({
  suggestions,
  onSuggestionClick,
  logoUrl,
}: {
  suggestions: AISuggestedAction[];
  onSuggestionClick: (prompt: string) => void;
  logoUrl: string;
}) {
  return (
    <div className="flex h-full flex-col items-center justify-center p-4 text-center">
      <img
        src={logoUrl}
        alt="Ozwell AI"
        className="mb-4 h-16 w-16 rounded-full object-cover"
      />
      <h3 className="mb-2 text-lg font-semibold text-neutral-900 dark:text-white">
        How can I help you today?
      </h3>
      <p className="mb-6 text-sm text-neutral-500 dark:text-neutral-400">
        Ask me anything about patients, appointments, documents, or how to use
        the system.
      </p>
      <div className="flex w-full max-w-sm flex-col gap-2">
        <p className="mb-1 text-xs text-neutral-400 dark:text-neutral-500">
          Try asking:
        </p>
        {suggestions.map((suggestion) => (
          <SuggestionButton
            key={suggestion.id}
            suggestion={suggestion}
            onClick={onSuggestionClick}
          />
        ))}
      </div>
    </div>
  );
}

// ============================================================================
// Main Component
// ============================================================================

export function OzwellChat({
  apiUrl = "/api/ai-assistant",
  basePath = "",
  brand = "eh",
  pulse = false,
  position = "bottom-right",
}: OzwellChatProps) {
  // Logo path uses root path - static images don't use brand prefix
  const logoUrl = "/images/ai/ozwell.png";

  const [isOpen, setIsOpen] = React.useState(false);
  const [messages, setMessages] = React.useState<AIMessage[]>([]);
  const [isGenerating, setIsGenerating] = React.useState(false);
  const [inputValue, setInputValue] = React.useState("");
  const messagesEndRef = React.useRef<HTMLDivElement>(null);
  const textareaRef = React.useRef<HTMLTextAreaElement>(null);

  // Auto-scroll to bottom when messages change
  React.useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Focus input when modal opens
  React.useEffect(() => {
    if (isOpen) {
      setTimeout(() => textareaRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const handleSendMessage = React.useCallback(
    async (content: string) => {
      if (!content.trim() || isGenerating) return;

      setInputValue("");

      // Add user message
      const userMessage: AIMessage = {
        id: `user-${Date.now()}`,
        role: "user",
        content: [{ type: "text", text: content }],
        timestamp: new Date(),
        status: "complete",
      };
      setMessages((prev) => [...prev, userMessage]);

      // Add placeholder assistant message
      const assistantId = `assistant-${Date.now()}`;
      setMessages((prev) => [
        ...prev,
        {
          id: assistantId,
          role: "assistant",
          content: [],
          timestamp: new Date(),
          status: "streaming",
        },
      ]);

      setIsGenerating(true);

      try {
        const response = await sendChatMessage(
          content,
          messages,
          apiUrl,
          brand
        );

        // Build response with sources
        let fullResponse = response.answer;
        if (response.sources.length > 0) {
          fullResponse +=
            "\n\n**Sources:**\n" +
            response.sources
              .slice(0, 3)
              .map((s) => `- [${s.title}](${s.url})`)
              .join("\n");
        }

        setMessages((prev) =>
          prev.map((m) =>
            m.id === assistantId
              ? {
                  ...m,
                  content: [{ type: "text", text: fullResponse }],
                  status: "complete",
                }
              : m
          )
        );
      } catch (error) {
        setMessages((prev) =>
          prev.map((m) =>
            m.id === assistantId
              ? {
                  ...m,
                  content: [
                    {
                      type: "text",
                      text: `Sorry, I encountered an error. Please try again. ${
                        error instanceof Error ? error.message : ""
                      }`,
                    },
                  ],
                  status: "error",
                }
              : m
          )
        );
      } finally {
        setIsGenerating(false);
      }
    },
    [messages, apiUrl, brand, isGenerating]
  );

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage(inputValue);
    }
  };

  const handleClear = () => {
    setMessages([]);
  };

  const positionClasses =
    position === "bottom-left" ? "bottom-4 left-4" : "bottom-4 right-4";

  const modalPositionClasses =
    position === "bottom-left" ? "left-4 right-auto" : "right-4 left-auto";

  // Brand-specific display name
  const brandDisplayName =
    brand === "wc" ? "WebChart AI Assistant" : "Enterprise Health AI Assistant";

  return (
    <>
      {/* Trigger Button */}
      <div className={`fixed ${positionClasses} z-50`}>
        <AIChatTrigger
          isOpen={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          pulse={pulse && !isOpen}
          aria-label="Open AI Assistant"
        />
      </div>

      {/* Chat Modal */}
      {isOpen && (
        <>
          {/* Backdrop - subtle overlay, no blur to keep documentation visible */}
          <div
            className="fixed inset-0 z-40 bg-black/5 md:bg-transparent"
            onClick={() => setIsOpen(false)}
          />

          {/* Modal - positioned at very bottom right corner with fixed width */}
          <div
            className="fixed z-50 flex flex-col rounded-2xl border border-neutral-200 bg-white shadow-2xl dark:border-neutral-700 dark:bg-neutral-900"
            style={{
              right: "1rem",
              bottom: "1rem",
              maxHeight: "calc(100vh - 2rem)",
              height: "600px",
              width: "min(400px, calc(100vw - 2rem))",
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-neutral-200 p-4 dark:border-neutral-700">
              <div className="flex items-center gap-3">
                <img
                  src={logoUrl}
                  alt="Ozwell AI"
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div>
                  <h2 className="font-semibold text-neutral-900 dark:text-white">
                    {brandDisplayName}
                  </h2>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">
                    Powered by ozwell.ai
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                {messages.length > 0 && (
                  <button
                    type="button"
                    onClick={handleClear}
                    className="rounded-lg p-2 text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-neutral-600 dark:hover:bg-neutral-800 dark:hover:text-neutral-300"
                    aria-label="Clear chat"
                    title="Clear chat"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                      />
                    </svg>
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg p-2 text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-neutral-600 dark:hover:bg-neutral-800 dark:hover:text-neutral-300"
                  aria-label="Close chat"
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Messages Area - scrollable container */}
            <div className="min-h-0 flex-1 overflow-y-auto p-4">
              {messages.length === 0 ? (
                <EmptyState
                  suggestions={defaultSuggestions}
                  onSuggestionClick={handleSendMessage}
                  logoUrl={logoUrl}
                />
              ) : (
                <div className="space-y-4">
                  {messages.map((message) => (
                    <MessageBubble
                      key={message.id}
                      message={message}
                      isUser={message.role === "user"}
                      logoUrl={logoUrl}
                    />
                  ))}
                  <div ref={messagesEndRef} />
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="border-t border-neutral-200 p-4 dark:border-neutral-700">
              <div className="flex items-end gap-2">
                <textarea
                  ref={textareaRef}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask about the documentation..."
                  disabled={isGenerating}
                  rows={1}
                  className="focus:ring-primary-500 max-h-[120px] flex-1 resize-none rounded-2xl bg-neutral-100 px-4 py-2.5 text-neutral-900 transition-colors placeholder:text-neutral-400 focus:ring-2 focus:outline-none disabled:opacity-50 dark:bg-neutral-800 dark:text-neutral-100 dark:placeholder:text-neutral-500"
                  style={{
                    height: "auto",
                    minHeight: "44px",
                  }}
                  onInput={(e) => {
                    const target = e.target as HTMLTextAreaElement;
                    target.style.height = "auto";
                    target.style.height = `${Math.min(target.scrollHeight, 120)}px`;
                  }}
                />
                <button
                  type="button"
                  onClick={() => handleSendMessage(inputValue)}
                  disabled={!inputValue.trim() || isGenerating}
                  className="bg-primary-800 hover:bg-primary-700 rounded-full p-3 text-white transition-colors disabled:cursor-not-allowed disabled:opacity-50"
                  aria-label="Send message"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export type { OzwellChatProps };
