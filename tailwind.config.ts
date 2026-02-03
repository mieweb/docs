import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

/**
 * Tailwind CSS 4 configuration for MIE Documentation
 *
 * This config supports multi-brand theming via CSS custom properties.
 * Brand-specific colors are loaded via separate CSS files and use
 * the --mieweb-* CSS variable namespace from @mieweb/ui.
 */
const config: Config = {
  content: [
    "./src/**/*.{ts,tsx}",
    "./themes/mieweb-docs/layouts/**/*.html",
    "./themes/mieweb-docs/assets/**/*.{js,ts}",
  ],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        // Brand colors via CSS custom properties (set per-brand)
        primary: {
          50: "var(--mieweb-primary-50, #fef3e2)",
          100: "var(--mieweb-primary-100, #fde4bc)",
          200: "var(--mieweb-primary-200, #fbd391)",
          300: "var(--mieweb-primary-300, #f9c165)",
          400: "var(--mieweb-primary-400, #f8b244)",
          500: "var(--mieweb-primary-500, #f7941e)",
          600: "var(--mieweb-primary-600, #f68c1a)",
          700: "var(--mieweb-primary-700, #f58116)",
          800: "var(--mieweb-primary-800, #f37712)",
          900: "var(--mieweb-primary-900, #f0650a)",
          950: "var(--mieweb-primary-950, #c44d00)",
          DEFAULT: "var(--mieweb-primary-500, #f7941e)",
        },
        // Semantic colors
        background: "var(--mieweb-background, #ffffff)",
        foreground: "var(--mieweb-foreground, #0a0a0a)",
        card: {
          DEFAULT: "var(--mieweb-card, #ffffff)",
          foreground: "var(--mieweb-card-foreground, #0a0a0a)",
        },
        muted: {
          DEFAULT: "var(--mieweb-muted, #f5f5f5)",
          foreground: "var(--mieweb-muted-foreground, #737373)",
        },
        accent: {
          DEFAULT: "var(--mieweb-accent, #f5f5f5)",
          foreground: "var(--mieweb-accent-foreground, #171717)",
        },
        border: "var(--mieweb-border, #e5e5e5)",
        input: "var(--mieweb-input, #e5e5e5)",
        ring: "var(--mieweb-ring, #f7941e)",
        destructive: {
          DEFAULT: "var(--mieweb-destructive, #dc2626)",
          foreground: "var(--mieweb-destructive-foreground, #fafafa)",
        },
        success: {
          DEFAULT: "var(--mieweb-success, #16a34a)",
          foreground: "var(--mieweb-success-foreground, #fafafa)",
        },
        warning: {
          DEFAULT: "var(--mieweb-warning, #d97706)",
          foreground: "var(--mieweb-warning-foreground, #fafafa)",
        },
        info: {
          DEFAULT: "var(--mieweb-info, #2563eb)",
          foreground: "var(--mieweb-info-foreground, #fafafa)",
        },
        // Sidebar specific
        sidebar: {
          DEFAULT: "var(--mieweb-sidebar, #fafafa)",
          foreground: "var(--mieweb-sidebar-foreground, #0a0a0a)",
          active: "var(--mieweb-sidebar-active, #f7941e)",
          "active-foreground":
            "var(--mieweb-sidebar-active-foreground, #ffffff)",
          border: "var(--mieweb-sidebar-border, #e5e5e5)",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        mono: [
          "JetBrains Mono",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "Liberation Mono",
          "Courier New",
          "monospace",
        ],
      },
      typography: {
        DEFAULT: {
          css: {
            "--tw-prose-body": "var(--mieweb-foreground)",
            "--tw-prose-headings": "var(--mieweb-foreground)",
            "--tw-prose-lead": "var(--mieweb-muted-foreground)",
            "--tw-prose-links": "var(--mieweb-primary-500)",
            "--tw-prose-bold": "var(--mieweb-foreground)",
            "--tw-prose-counters": "var(--mieweb-muted-foreground)",
            "--tw-prose-bullets": "var(--mieweb-muted-foreground)",
            "--tw-prose-hr": "var(--mieweb-border)",
            "--tw-prose-quotes": "var(--mieweb-foreground)",
            "--tw-prose-quote-borders": "var(--mieweb-border)",
            "--tw-prose-captions": "var(--mieweb-muted-foreground)",
            "--tw-prose-code": "var(--mieweb-foreground)",
            "--tw-prose-pre-code": "var(--mieweb-card-foreground)",
            "--tw-prose-pre-bg": "var(--mieweb-muted)",
            "--tw-prose-th-borders": "var(--mieweb-border)",
            "--tw-prose-td-borders": "var(--mieweb-border)",
            // Link styles
            a: {
              color: "var(--mieweb-primary-500)",
              textDecoration: "none",
              fontWeight: "500",
              "&:hover": {
                textDecoration: "underline",
              },
            },
            // Code block styles
            "code::before": {
              content: '""',
            },
            "code::after": {
              content: '""',
            },
            code: {
              backgroundColor: "var(--mieweb-muted)",
              padding: "0.125rem 0.25rem",
              borderRadius: "0.25rem",
              fontWeight: "400",
            },
            // Table styles
            table: {
              width: "100%",
              borderCollapse: "collapse",
            },
            "th, td": {
              padding: "0.75rem 1rem",
              borderBottom: "1px solid var(--mieweb-border)",
            },
            th: {
              fontWeight: "600",
              textAlign: "left",
              backgroundColor: "var(--mieweb-muted)",
            },
          },
        },
      },
      borderRadius: {
        lg: "var(--radius, 0.5rem)",
        md: "calc(var(--radius, 0.5rem) - 2px)",
        sm: "calc(var(--radius, 0.5rem) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [typography],
};

export default config;
