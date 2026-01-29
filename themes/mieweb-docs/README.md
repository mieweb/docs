# MIE Documentation Theme

A Hugo theme for MIE documentation built with Tailwind CSS 4 and React 19 components.

## Features

- Tailwind CSS 4 for styling
- React 19 components pre-rendered to static HTML
- Multi-brand support (WebChart, Enterprise Health) via CSS custom properties
- Lucide icons
- Lunr.js search with CommandPalette UI
- Dark mode support
- Responsive design
- Accessible components

## Brand Configuration

Brands are configured via Hugo params:

```toml
[params.brand]
  name = 'WebChart'
  abbr = 'WC'
  code = 'wc'
```

Available brand codes:

- `wc` - WebChart (orange theme)
- `eh` - Enterprise Health (blue theme)
