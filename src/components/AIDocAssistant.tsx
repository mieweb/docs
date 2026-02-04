/**
 * AI Documentation Assistant Component
 *
 * Integrates @mieweb/ui FloatingAIChat with the Cloudflare Worker backend
 * to provide RAG-powered Q&A for documentation.
 */

import * as React from "react";
import {
  FloatingAIChat,
  type AIMessage,
  type AISuggestedAction,
  type MCPResourceLink,
  type MCPResource,
  type AIMessageContent,
} from "@mieweb/ui";

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

interface AIDocAssistantProps {
  /** API endpoint URL for the AI worker */
  apiUrl?: string;
  /** Brand context: 'eh' for Enterprise Health, 'wc' for WebChart */
  brand?: "eh" | "wc";
  /** Initial pulse animation */
  pulse?: boolean;
  /** Position of the floating button */
  position?: "bottom-right" | "bottom-left";
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

async function sendChatMessage(
  message: string,
  history: AIMessage[],
  apiUrl: string,
  brand: "eh" | "wc"
): Promise<ChatResponse> {
  const response = await fetch(`${apiUrl}/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message,
      brand,
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
// Component
// ============================================================================

/**
 * AI Documentation Assistant with floating chat interface
 */
export function AIDocAssistant({
  apiUrl = "/api/ai-assistant",
  brand = "eh",
  pulse = true,
  position = "bottom-right",
}: AIDocAssistantProps) {
  const [messages, setMessages] = React.useState<AIMessage[]>([]);
  const [isGenerating, setIsGenerating] = React.useState(false);

  /**
   * Handle sending a message to the AI
   */
  const handleSendMessage = React.useCallback(
    async (content: string) => {
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

        // Build response content with sources
        const responseContent: AIMessage["content"] = [
          { type: "text", text: response.answer },
        ];

        // Add sources as links if available
        if (response.sources.length > 0) {
          const sourcesText =
            "\n\n**Sources:**\n" +
            response.sources
              .slice(0, 3)
              .map((s) => `- [${s.title}](${s.url})`)
              .join("\n");
          responseContent.push({ type: "text", text: sourcesText });
        }

        // Update assistant message with response
        setMessages((prev) =>
          prev.map((m) =>
            m.id === assistantId
              ? { ...m, content: responseContent, status: "complete" }
              : m
          )
        );
      } catch (error) {
        // Update assistant message with error
        setMessages((prev) =>
          prev.map((m) =>
            m.id === assistantId
              ? {
                  ...m,
                  content: [
                    {
                      type: "text",
                      text:
                        "Sorry, I encountered an error. Please try again. " +
                        (error instanceof Error ? error.message : ""),
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
    [messages, apiUrl, brand]
  );

  /**
   * Handle clicking a resource link (navigate to doc)
   */
  const handleResourceClick = React.useCallback(
    (resource: MCPResourceLink | MCPResource) => {
      // Handle both MCPResourceLink (has href) and MCPResource (has uri)
      const href = "href" in resource ? resource.href : resource.uri;
      if (!href) return;

      if (href.startsWith("http")) {
        window.open(href, "_blank");
      } else {
        window.location.href = href;
      }
    },
    []
  );

  /**
   * Handle clearing the chat
   */
  const handleClear = React.useCallback(() => {
    setMessages([]);
  }, []);

  const brandName = brand === "eh" ? "Enterprise Health" : "WebChart";

  return (
    <FloatingAIChat
      messages={messages}
      suggestions={defaultSuggestions}
      isGenerating={isGenerating}
      title={`${brandName} AI Assistant`}
      userName="You"
      inputPlaceholder="Ask about the documentation..."
      pulse={pulse}
      buttonPosition={position}
      position={position}
      onSendMessage={handleSendMessage}
      onResourceClick={handleResourceClick}
      onClear={handleClear}
    />
  );
}

export type { AIDocAssistantProps };
