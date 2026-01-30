# MIE Documentation Theme (mieweb-docs)

A modern Hugo theme for MIE documentation built with **Tailwind CSS 4** and **React 19** components from the [@mieweb/ui](https://github.com/mieweb/ui) library.

## Overview

This theme was migrated from Bootstrap to Tailwind CSS to provide:

- Modern, utility-first CSS approach
- Smaller bundle sizes with tree-shaking
- Consistent design system via CSS custom properties
- Better accessibility (WCAG 2.1 AA compliant)
- Improved performance (LCP ~70ms)

## Features

- **Tailwind CSS 4** for styling with utility classes
- **React 19 components** pre-rendered to static HTML via esbuild
- **@mieweb/ui component library** for consistent UI patterns
- **Multi-brand support** (WebChart, Enterprise Health) via CSS custom properties
- **Lucide icons** for consistent iconography
- **Lunr.js search** with CommandPalette-style UI
- **Dark mode support** (automatic based on system preference)
- **Responsive design** with mobile-first approach
- **Accessible components** with ARIA labels and keyboard navigation
- **Image lightbox** for enlarged image viewing
- **Async font loading** for improved performance

## Brand Configuration

Brands are configured via Hugo params in `config-eh.toml` or `config-wc.toml`:

```toml
[params.brand]
  name = 'Enterprise Health'
  abbr = 'EH'
  code = 'eh'
```

Available brand codes:

- `wc` - WebChart (orange theme, primary: #F97316)
- `eh` - Enterprise Health (purple theme, primary: #6E2B68)

## Directory Structure

```
themes/mieweb-docs/
├── assets/
│   ├── css/
│   │   ├── main.css          # Compiled Tailwind CSS output
│   │   └── tailwind.css      # Tailwind source with @mieweb/ui imports
│   └── js/
│       ├── main.js           # Main JavaScript (sidebar, search, lightbox)
│       ├── react/
│       │   ├── components.js  # Bundled React components
│       │   └── mount.js       # React component mounting logic
│       └── vendor/
│           └── lunr.min.js    # Search indexing library
├── layouts/
│   ├── _default/
│   │   ├── _markup/
│   │   │   ├── render-heading.html  # Anchor links for headings
│   │   │   └── render-image.html    # Accessible image rendering
│   │   ├── baseof.html        # Base template with async fonts
│   │   ├── list.html          # Section listing pages
│   │   ├── single.html        # Individual content pages
│   │   └── search.json        # Search index output
│   ├── index.html             # Homepage template
│   ├── 404.html               # Error page
│   ├── partials/              # Reusable template parts
│   └── shortcodes/            # Hugo shortcodes (see SHORTCODES.md)
└── static/
    └── images/brand/          # Brand logos and favicons
```

## Development

### Building CSS

Tailwind CSS is built using the Tailwind CLI:

```bash
npx @tailwindcss/cli -i themes/mieweb-docs/assets/css/tailwind.css -o themes/mieweb-docs/assets/css/main.css --watch
```

### Building React Components

React components are bundled using esbuild:

```bash
npm run build:components
```

### Running Locally

Use the build script which handles navigation menu generation:

```bash
./build.sh --live eh  # or wc for WebChart brand
```

Do **not** run Hugo directly without generating the menu first, as the sidebar navigation will be empty.

## CSS Architecture

The theme uses Tailwind CSS with the @mieweb/ui design tokens:

```css
@import "tailwindcss";
@import "@mieweb/ui/dist/enterprise-health.css";  /* or webchart.css */
```

Key utility classes used throughout:

- `card`, `card-interactive` - Card components with hover states
- `btn`, `btn-primary`, `btn-secondary` - Button variants
- `text-foreground`, `text-muted-foreground` - Text colors
- `bg-background`, `bg-muted`, `bg-card` - Background colors
- `border-border` - Border colors

## Accessibility

This theme is tested with axe-core and passes WCAG 2.1 AA requirements:

- Proper heading hierarchy (h1 → h2 → h3)
- ARIA labels on interactive elements
- Color contrast ratios meet AA standards
- Keyboard navigation support
- Skip-to-content link
- Focus indicators on all interactive elements

## Performance

Optimizations implemented:

- Async font loading with `media="print"` trick
- Preload hints for critical resources
- Tree-shaken Tailwind CSS (only used utilities)
- Minified JavaScript bundles
- LFS for large images

Typical metrics (on localhost):
- LCP: ~70ms
- CLS: 0.01
- TTFB: <5ms
