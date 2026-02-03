/**
 * MIE Documentation - Types
 * These types are used for the documentation site
 */

export interface BrandConfig {
  name: string;
  abbr: string;
  code: "wc" | "eh";
}

export interface SearchResult {
  href: string;
  title: string;
  content: string;
}

export interface AlertVariant {
  variant: "info" | "warning" | "tip" | "note";
  title?: string;
}

export interface ToastConfig {
  message: string;
  type?: "success" | "error" | "info";
  duration?: number;
}
