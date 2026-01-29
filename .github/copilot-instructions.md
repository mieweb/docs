# GitHub Copilot Instructions for Enterprise Health Documentation

## Project Overview

This is a documentation repository for Enterprise Health's medical software platform. The documentation is built using Hugo (a static site generator) and stored as Markdown files.

## Documentation Standards

### File Structure

- All documentation lives in the `content/` directory
- Use kebab-case for file and folder names (e.g., `system-administration.md`)
- Group related topics in subdirectories
- Index files are named `_index.md`

### Markdown Formatting

- Use ATX-style headers (`#`, `##`, `###`) not underlined headers
- Include front matter at the top of each file with required fields:
  - `id`: Google Drive document ID
  - `title`: Human-readable title
  - `date`: ISO 8601 timestamp
  - `version`: Version number
  - `mimeType`: Always `text/x-markdown`
  - `source`: Google Drive URL
  - `wikigdrive`: Version identifier

### Writing Style

- Write in clear, professional technical documentation style
- Use active voice when possible
- Target audience: Healthcare IT professionals, system administrators, and clinical staff
- Explain technical concepts but assume basic familiarity with medical software systems

### Hugo Shortcodes

- Use `{{% system-name %}}` to reference the system name dynamically
- Use `{{% syslink "Text" "f=path" %}}` for internal system links
- Use `{{% info %}}`, `{{% warning %}}`, `{{% tip %}}`, `{{% note %}}` for callout boxes

### Image References

- Images should be in a `.assets` folder next to the markdown file
- Use relative paths: `./filename.assets/image.png`
- Always include alt text for accessibility

### Links

- Use relative links for internal documentation: `../folder/file.md`
- Use absolute URLs for external resources
- Document all external links in the front matter `links:` array

## Code Patterns

### Configuration Files

- `config-eh.toml` and `config-wc.toml`: Hugo configuration for different environments
- `wikigdrive.toml`: WikiGDrive integration settings
- Never modify these without understanding the build pipeline

### Build Scripts

- `build.sh`: Builds the Hugo site
- `start-server.sh`: Runs local development server
- `wikigdrive-fetch.sh`: Syncs content from Google Drive
- `setup.sh`: Initial project setup
- `navigation2menu.js`: Converts navigation.md to Hugo menu format

### Starting the Local Development Server

To properly run the site locally with navigation working:

1. **Use the build script**: `./build.sh --live eh`
   - This generates the navigation menu from `content/navigation.md`
   - Creates `config/_default/menu.en.json`
   - Starts Hugo server at http://localhost:1313/
   - Enables live reload for content changes

2. **Do NOT run Hugo directly** without generating the menu first, as the left sidebar navigation will be empty

3. **Prerequisites**:
   - Hugo must be installed (`brew install hugo`)
   - npm dependencies installed (`npm install`)
   - Node.js available in PATH
   - `navigation2menu.js` must have correct shebang: `#!/usr/bin/env node`

## Topics Covered

This documentation covers:

- **Functions**: Core software features (e-chart, scheduling, orders, encounters, etc.)
- **Programs**: Compliance and medical programs
- **Rapid Deployment**: Implementation and configuration guides
- **Resources**: Additional reference materials

## Common Tasks

### Creating New Documentation

1. Create markdown file in appropriate `content/` subdirectory
2. Include complete front matter
3. Use appropriate Hugo shortcodes
4. Add images to corresponding `.assets` folder
5. Update navigation if adding new sections

### Updating Existing Documentation

1. Maintain existing front matter structure
2. Update `date` and `version` fields
3. Preserve Hugo shortcodes and formatting
4. Keep image references relative

### Working with Medical Terminology

- Use standard medical abbreviations (ICD, CPT, HL7, etc.)
- Spell out acronyms on first use in each document
- Follow HIPAA-compliant language for examples
- Never use real patient data in examples

## Tools and Extensions

This workspace uses the following MCP (Model Context Protocol) tools:

- **Playwright Browser**: For testing web interfaces and documentation links
- **Pylance**: Python language server (for build scripts)
- **Container MCP**: Docker integration for build environments

## Important Notes

- This is a **documentation-only** repository - no production code
- Content is synced from Google Drive via WikiGDrive
- Local changes may be overwritten by sync - coordinate with team
- Hugo theme is in `themes/wc-eh-docs/`
- Do NOT modify the theme unless specifically requested
- Test locally with `./start-server.sh` before committing

## Contact & Resources

- Deployment team for major changes
- WikiGDrive documentation for sync issues
- Hugo documentation for theme/shortcode questions

## Commit Quality Principles

<!-- https://github.com/mieweb/template-mieweb-opensource/blob/main/.github/copilot-instructions.md -->

### 🎯 DRY (Don't Repeat Yourself)

- **Never duplicate code**: If you find yourself copying code, extract it into a reusable function
- **Single source of truth**: Each piece of knowledge should have one authoritative representation
- **Refactor mercilessly**: When you see duplication, eliminate it immediately
- **Shared utilities**: Common patterns should be abstracted into utility functions

### 💋 KISS (Keep It Simple, Stupid)

- **Simple solutions**: Prefer the simplest solution that works
- **Avoid over-engineering**: Don't add complexity for hypothetical future needs
- **Clear naming**: Functions and variables should be self-documenting
- **Small functions**: Break down complex functions into smaller, focused ones
- **Readable code**: Code should be obvious to understand at first glance

### 🧹 Folder Philosophy

- **Clear purpose**: Every folder should have a main thing that anchors its contents.
- **No junk drawers**: Don’t leave loose files without context or explanation.
- **Explain relationships**: If it’s not elegantly obvious how files fit together, add a README or note.
- **Immediate clarity**: Opening a folder should make its organizing principle clear at a glance.

### 🔄 Refactoring Guidelines

- **Continuous improvement**: Refactor as you work, not as a separate task
- **Safe refactoring**: Always run tests before and after refactoring
- **Incremental changes**: Make small, safe changes rather than large rewrites
- **Preserve behavior**: Refactoring should not change external behavior
- **Code reviews**: All refactoring should be reviewed for correctness

### ⚰️ Dead File Management

- **Immediate removal**: Delete unused code immediately when identified
- **Historical preservation**: Move significant dead code to `.attic/` directory with context
- **Documentation**: Include comments explaining why code was moved to attic
- **Regular cleanup**: Review and clean attic directory periodically
- **No accumulation**: Don't let dead code accumulate in active codebase

### 🌐 Testing with MCP Browser

- Use MCP browser in Playwright if available to test functionality
- **Never close the browser** after running MCP browser commands unless explicitly asked
- Let the user interact with the browser after navigation or testing
- Only use `browser_close` when the user specifically requests it

### 🏥 WebChart Testing Workflow

When testing WebChart features, documentation, or web pages, follow this standardized procedure:

#### 1. Initial Navigation

```javascript
// Navigate to the development environment
await page.goto("https://masterdaily.dev.webchart.app/");
```

#### 2. Authentication Flow

1. **Wait for user authentication** - The user will complete YubiKey authentication
2. **User confirms when logged in** - Wait for user confirmation before proceeding

#### 3. Accessing Features

- If testing a specific feature, navigate to the relevant page after login

#### 4. Testing Best Practices

- Always verify the page loaded correctly before interacting with elements
- Use `mcp_microsoft_pla_browser_snapshot` to inspect page structure and navigation
- Use `mcp_microsoft_pla_browser_take_screenshot` for visual confirmation only when authorized by the user
- Wait for dynamic content to load before assertions
- Check console messages for errors or important logs
- **When elements cannot be located**: The system may not be fully WCAG compliant. If standard accessibility selectors fail, ask the user to inspect the page and provide the specific element reference (from snapshot) or CSS selector to interact with. the user make need help doing this.

#### 5. Documentation Testing

When testing documentation changes:

1. Follow the authentication workflow above
2. Navigate to the feature being documented
3. Verify all documented steps work as described
4. Take screenshots if documentation includes visual references
5. Update documentation with any discrepancies found

## HTML & CSS Guidelines

- **Semantic Naming**: Every `<div>` and other structural element must use a meaningful, semantic class name that clearly indicates its purpose or role within the layout.
- **CSS Simplicity**: Styles should avoid global resets or overrides that affect unrelated components or default browser behavior. Keep changes scoped and minimal.
- **SASS-First Approach**: All styles should be written in SASS (SCSS) whenever possible. Each component should have its own dedicated SASS file to promote modularity and maintainability.

## Accessibility (ARIA Labeling)

### 🎯 Interactive Elements

- **All interactive elements** (buttons, links, forms, dialogs) must include appropriate ARIA roles and labels
- **Use ARIA attributes**: Implement aria-label, aria-labelledby, and aria-describedby to provide clear, descriptive information for screen readers
- **Semantic HTML**: Use semantic HTML wherever possible to enhance accessibility

### 📢 Dynamic Content

- **Announce updates**: Ensure all dynamic content updates (modals, alerts, notifications) are announced to assistive technologies using aria-live regions
- **Maintain tab order**: Maintain logical tab order and keyboard navigation for all features
- **Visible focus**: Provide visible focus indicators for all interactive elements

## Internationalization (I18N)

### 🌍 Text and Language Support

- **Externalize text**: All user-facing text must be externalized for translation
- **Multiple languages**: Support multiple languages, including right-to-left (RTL) languages such as Arabic and Hebrew
- **Language selector**: Provide a language selector for users to choose their preferred language

### 🕐 Localization

- **Format localization**: Ensure date, time, number, and currency formats are localized based on user settings
- **UI compatibility**: Test UI layouts for text expansion and RTL compatibility
- **Unicode support**: Use Unicode throughout to support international character sets

## Documentation Preferences

### Diagrams and Visual Documentation

- **Always use Mermaid diagrams** instead of ASCII art for workflow diagrams, architecture diagrams, and flowcharts
- **Use memorable names** instead of single letters in diagrams (e.g., `Engine`, `Auth`, `Server` instead of `A`, `B`, `C`)
- Use appropriate Mermaid diagram types:
  - `graph TB` or `graph LR` for workflow architectures
  - `flowchart TD` for process flows
  - `sequenceDiagram` for API interactions
  - `gitgraph` for branch/release strategies
- Include styling with `classDef` for better visual hierarchy
- Add descriptive comments and emojis sparingly for clarity

### Documentation Standards

- Keep documentation DRY (Don't Repeat Yourself) - reference other docs instead of duplicating
- Use clear cross-references between related documentation files
- Update the main architecture document when workflow structure changes

## Working with GitHub Actions Workflows

### Development Philosophy

- **Script-first approach**: All workflows should call scripts that can be run locally
- **Local development parity**: Developers should be able to run the exact same commands locally as CI runs
- **Simple workflows**: GitHub Actions should be thin wrappers around scripts, not contain complex logic
- **Easy debugging**: When CI fails, developers can reproduce the issue locally by running the same script

## Quick Reference

### 🪶 All Changes should be considered for Pull Request Philosophy

- **Smallest viable change**: Always make the smallest change that fully solves the problem.
- **Fewest files first**: Start with the minimal number of files required.
- **No sweeping edits**: Broad refactors or multi-module changes must be split or proposed as new components.
- **Isolated improvements**: If a change grows complex, extract it into a new function, module, or component instead of modifying multiple areas.
- **Direct requests only**: Large refactors or architectural shifts should only occur when explicitly requested.

### Code Quality Checklist

- [ ] **DRY**: No code duplication - extracted reusable functions?
- [ ] **KISS**: Simplest solution that works?
- [ ] **Minimal Changes**: Smallest viable change made for PR?
- [ ] **Naming**: Self-documenting function/variable names?
- [ ] **Size**: Functions small and focused?
- [ ] **Dead Code**: Removed or archived appropriately?
- [ ] **Accessibility**: ARIA labels and semantic HTML implemented?
- [ ] **I18N**: User-facing text externalized for translation?
- [ ] **Lint**: Run linter if appropriate
- [ ] **Test**: Run tests
