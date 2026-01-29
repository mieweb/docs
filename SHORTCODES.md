# Hugo Shortcodes Documentation

This document provides a comprehensive reference for all Hugo shortcodes available in the WebChart/Enterprise Health documentation site.

## Table of Contents

- [Alert and Notice Shortcodes](#alert-and-notice-shortcodes)
  - [info](#info)
  - [note](#note)
  - [tip](#tip)
  - [warning](#warning)
- [Layout Shortcodes](#layout-shortcodes)
  - [row](#row)
  - [column](#column)
  - [section](#section)
- [Brand-Specific Shortcodes](#brand-specific-shortcodes)
  - [system-name](#system-name)
  - [sys-name](#sys-name)
  - [only](#only)
- [Media Shortcodes](#media-shortcodes)
  - [youtube](#youtube)
  - [gvideo](#gvideo)
- [Navigation Shortcodes](#navigation-shortcodes)
  - [children](#children)
  - [toc](#toc)
- [Utility Shortcodes](#utility-shortcodes)
  - [anchor](#anchor)
  - [attachments](#attachments)
  - [contentbylabel](#contentbylabel)
  - [drawio](#drawio)
  - [index](#index)
  - [panel](#panel)
  - [pre](#pre)
  - [syslink](#syslink)

---

## Alert and Notice Shortcodes

These shortcodes create styled notification boxes to highlight important information.

### info

Creates an informational callout box with a blue theme and info icon.

**Usage:**

```
{{% info %}}
This is an informational message that provides helpful context.
{{% /info %}}
```

**Parameters:** None

**Supports Markdown:** Yes (content is rendered as Markdown)

**Example Output:** A card-style alert box with blue styling, an info icon, and the title "Info".

---

### note

Creates a note callout box with dark styling and a sticky note icon.

**Usage:**

```
{{% note %}}
This is an important note to remember.
{{% /note %}}
```

**Parameters:** None

**Supports Markdown:** Yes (content is rendered as Markdown)

**Example Output:** A dark-themed card-style alert box with a note icon and the title "Note".

---

### tip

Creates a tip callout box with green/success styling and a lightbulb icon.

**Usage:**

```
{{% tip %}}
Here's a helpful tip to improve your workflow.
{{% /tip %}}
```

**Parameters:** None

**Supports Markdown:** Yes (content is rendered as Markdown)

**Example Output:** A green card-style alert box with a lightbulb icon and the title "Tip".

---

### warning

Creates a warning callout box with yellow/warning styling and an exclamation triangle icon.

**Usage:**

```
{{% warning %}}
This is an important warning. Please read carefully.
{{% /warning %}}
```

**Parameters:** None

**Supports Markdown:** Yes (content is rendered as Markdown)

**Example Output:** A yellow card-style alert box with a warning icon and the title "Warning".

---

## Layout Shortcodes

These shortcodes help structure content in rows and columns using Bootstrap grid classes.

### row

Creates a container for columns using Bootstrap row classes.

**Usage:**

```
{{% row %}}
{{% column %}}
Content in first column
{{% /column %}}
{{% column %}}
Content in second column
{{% /column %}}
{{% /row %}}
```

**Parameters:** None

**Notes:** Should be used as a wrapper for `column` shortcodes to create multi-column layouts.

---

### column

Creates a column within a row. Supports optional width parameter.

**Usage:**

```
{{% column %}}
Default width column content
{{% /column %}}
```

**With width parameter:**

```
{{% column width="30" %}}
This column takes 30% width
{{% /column %}}
```

**Parameters:**

- `width` (optional): Percentage width for the column (e.g., "30" for 30%)

**Default:** If no width is specified, uses Bootstrap's auto-sizing columns (`col-xs-12 col-sm-auto`)

**Notes:** When width is specified, the column uses `col-xs-12 col-sm` with inline style for width percentage.

---

### section

Creates a row container for content sections.

**Usage:**

```
{{% section %}}
Section content here
{{% /section %}}
```

**Parameters:** None

**Notes:** Similar to `row`, wraps content in a Bootstrap row div.

---

## Brand-Specific Shortcodes

These shortcodes handle brand-specific content for WebChart (WC) and Enterprise Health (EH).

### system-name

Displays the full brand name based on the current site configuration.

**Usage:**

```
Welcome to {{% system-name %}}!
```

**Parameters:** None

**Output:**

- On WebChart site: "WebChart"
- On Enterprise Health site: "Enterprise Health"

**Notes:** Reads from `$.Site.Params.Brand.name` configuration parameter. Commonly used inline within sentences.

---

### sys-name

Displays the brand abbreviation based on the current site configuration.

**Usage:**

```
The {{% sys-name %}} system offers...
```

**Parameters:** None

**Output:**

- On WebChart site: "WC"
- On Enterprise Health site: "EH"

**Notes:** Reads from `$.Site.Params.Brand.abbr` configuration parameter.

---

### only

Conditionally displays content only for a specific brand/system.

**Usage:**

```
{{% only sys="wc" %}}
This content only appears on the WebChart site.
{{% /only %}}

{{% only sys="eh" %}}
This content only appears on the Enterprise Health site.
{{% /only %}}
```

**Parameters:**

- `sys` (required): Brand code - either "wc" or "eh"

**Notes:** Useful for maintaining shared content files that have brand-specific sections. Content is completely hidden if the `sys` parameter doesn't match the current site's brand code.

---

## Media Shortcodes

These shortcodes embed videos and media content.

### youtube

Embeds a YouTube video with responsive 16:9 aspect ratio.

**Usage:**

```
{{< youtube "dQw4w9WgXcQ" >}}
```

**Alternative usage with named parameter:**

```
{{< youtube id="dQw4w9WgXcQ" >}}
```

**Parameters:**

- `id` or first positional parameter: YouTube video ID (the part after `v=` in YouTube URLs)

**Example:** For the URL `https://www.youtube.com/watch?v=dQw4w9WgXcQ`, use the ID `dQw4w9WgXcQ`

**Notes:** Creates a responsive iframe embed that maintains 16:9 aspect ratio across devices.

---

### gvideo

Embeds a Google Drive video with responsive 16:9 aspect ratio.

**Usage:**

```
{{< gvideo id="1ABC123xyz456" >}}
```

**Parameters:**

- `id` (required): Google Drive file ID

**Notes:**

- Extracts the file ID from Google Drive URLs (the part after `/d/` or in the `id=` parameter)
- Example Google Drive URL: `https://drive.google.com/file/d/1ABC123xyz456/view`
- Uses the ID: `1ABC123xyz456`

---

## Navigation Shortcodes

These shortcodes help with site navigation and content organization.

### children

Displays a list of child pages in the site hierarchy.

**Usage:**

```
{{% children %}}
```

**With specific page parameter:**

```
{{% children page="Custom Page Name" %}}
```

**Parameters:**

- `page` (optional): Specify a page name to show its children. If omitted, shows children of the current page.

**Notes:**

- Generates an unordered list of links to child pages
- Uses the site's menu structure to determine hierarchy
- Page names are converted to lowercase with spaces replaced by hyphens for lookup

---

### toc

Placeholder for a table of contents.

**Usage:**

```
{{% toc %}}
```

**Parameters:** None

**Notes:** Currently displays a placeholder message "TOC HERE". This shortcode may need further implementation or is meant for future use.

---

## Utility Shortcodes

Various utility shortcodes for specific purposes.

### anchor

Creates an empty styled span element.

**Usage:**

```
{{< anchor >}}
```

**Parameters:** None

**Notes:** Generates an empty `<span>` element. Limited practical use in current implementation.

---

### attachments

Creates a column div for attachments.

**Usage:**

```
{{< attachments >}}
Content here
{{< /attachments >}}
```

**Parameters:** None

**Notes:** Wraps content in a `<div class="col">` element. Similar functionality to the `column` shortcode.

---

### contentbylabel

Placeholder for content filtering by label.

**Usage:**

```
{{% contentbylabel %}}
Label content here
{{% /contentbylabel %}}
```

**Parameters:** None

**Notes:** Currently displays a placeholder alert "contentbylabel list here". This shortcode may need further implementation.

---

### drawio

Placeholder for Draw.io diagrams.

**Usage:**

```
{{< drawio >}}
```

**Parameters:** None

**Notes:** Currently displays an informational alert stating "Unable to load diagram." This shortcode may need further implementation or is meant for future Draw.io integration.

---

### index

Creates a column with specified width for index content.

**Usage:**

```
{{< index width="50" >}}
Index content here
{{< /index >}}
```

**Parameters:**

- `width` (required): Percentage width for the column

**Supports Markdown:** Yes

**Notes:** Similar to `column` but always requires a width parameter and renders inner content as Markdown.

---

### panel

Creates a styled tip panel (alias for tip).

**Usage:**

```
{{% panel %}}
Panel content here
{{% /panel %}}
```

**Parameters:** None

**Supports Markdown:** Yes

**Notes:** Renders the same as the `tip` shortcode - a green card with lightbulb icon and "Tip" header.

---

### pre

Renders inner content without any wrapping or modification.

**Usage:**

```
{{% pre %}}
Raw content that will be rendered as-is
{{% /pre %}}
```

**Parameters:** None

**Notes:** Simply outputs the inner content without any HTML wrapper. Useful for passing through raw HTML or preventing Hugo from processing content.

---

### syslink

Creates a system-specific link with placeholder for dynamic system URL.

**Usage:**

```
{{< syslink "Link Text" "cgi-bin/path" >}}
```

**Parameters:**

- First parameter: Link text to display
- Second parameter: CGI path/endpoint

**Notes:**

- Creates a link with class `slink` and title "Set your system URL"
- The `href` is set to `#` as a placeholder
- The `data-cgi` attribute stores the CGI path
- Intended for JavaScript-based dynamic URL generation based on user's system instance

---

## Best Practices

1. **Use semantic shortcodes:** Choose the right alert type (info, note, tip, warning) based on the message importance and context.

2. **Brand consistency:** Use `system-name` and `only` shortcodes to maintain content that works for both WebChart and Enterprise Health sites.

3. **Responsive layouts:** When using `row` and `column`, consider mobile viewports. Columns stack vertically on small screens.

4. **Markdown support:** Shortcodes with `{{% %}}` delimiters support Markdown in their content. Those with `{{< >}}` do not process inner Markdown.

5. **Video IDs:** Always double-check video IDs when using `youtube` or `gvideo` shortcodes to ensure they embed correctly.

## Shortcode Syntax

Hugo supports two types of shortcode delimiters:

- `{{< shortcode >}}` - Does NOT process Markdown in inner content
- `{{% shortcode %}}` - DOES process Markdown in inner content

Use the appropriate delimiter based on whether you need Markdown processing.

## Contributing

When adding new shortcodes:

1. Create the shortcode file in `themes/wc-eh-docs/layouts/shortcodes/`
2. Document it in this file with usage examples
3. Test on both WC and EH configurations if brand-specific
4. Update the table of contents above

## Questions or Issues?

If you encounter issues with any shortcodes or need clarification, please open an issue in the repository or contact the documentation team.
