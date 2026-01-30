/**
 * Build script for React components using esbuild
 * Bundles React components for use in Hugo templates
 */

import * as esbuild from "esbuild";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { existsSync, mkdirSync, writeFileSync } from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, "..");

// Output directory for bundled React components
const outDir = join(rootDir, "themes/mieweb-docs/assets/js/react");

// Entry point for all React components
const entryPoint = join(rootDir, "src/components/index.tsx");

async function buildComponents(): Promise<void> {
  console.log("Building React components with esbuild...\n");

  // Ensure output directory exists
  if (!existsSync(outDir)) {
    mkdirSync(outDir, { recursive: true });
  }

  try {
    // Build the main bundle
    const result = await esbuild.build({
      entryPoints: [entryPoint],
      bundle: true,
      minify: process.env.NODE_ENV === "production",
      sourcemap: process.env.NODE_ENV !== "production",
      format: "esm",
      target: ["es2020", "chrome90", "firefox88", "safari14"],
      outfile: join(outDir, "components.js"),
      external: [
        // Mark @mieweb/ui optional peer dependencies as external
        "ag-grid-react",
        "ag-grid-community",
        "wavesurfer.js",
      ],
      jsx: "automatic",
      loader: {
        ".tsx": "tsx",
        ".ts": "ts",
        ".jsx": "jsx",
        ".js": "js",
      },
      define: {
        "process.env.NODE_ENV": `"${process.env.NODE_ENV || "development"}"`,
      },
      metafile: true,
    });

    // Log bundle info
    const outputs = Object.keys(result.metafile?.outputs ?? {});
    console.log("✓ Built React component bundle:");
    outputs.forEach((output) => {
      const bytes = result.metafile?.outputs[output]?.bytes ?? 0;
      const kb = (bytes / 1024).toFixed(2);
      console.log(`  - ${output} (${kb} KB)`);
    });

    // Create a simple React mount helper
    const mountHelper = `
/**
 * React Mount Helper
 * Provides utilities for mounting React components in Hugo templates
 */
import React from 'react';
import { createRoot } from 'react-dom/client';
import * as Components from './components.js';

// Store for all mounted roots
const roots = new Map();

/**
 * Mount a React component to a DOM element
 * @param {string} componentName - Name of the component to mount
 * @param {string|HTMLElement} selector - CSS selector or DOM element
 * @param {object} props - Props to pass to the component
 */
export function mountComponent(componentName, selector, props = {}) {
  const element = typeof selector === 'string' 
    ? document.querySelector(selector) 
    : selector;
    
  if (!element) {
    console.warn(\`Mount target not found: \${selector}\`);
    return null;
  }
  
  const Component = Components[componentName];
  if (!Component) {
    console.warn(\`Component not found: \${componentName}\`);
    return null;
  }
  
  // Clean up existing root if any
  if (roots.has(element)) {
    roots.get(element).unmount();
  }
  
  const root = createRoot(element);
  root.render(React.createElement(Component, props));
  roots.set(element, root);
  
  return root;
}

/**
 * Unmount a React component from a DOM element
 */
export function unmountComponent(selector) {
  const element = typeof selector === 'string' 
    ? document.querySelector(selector) 
    : selector;
    
  if (element && roots.has(element)) {
    roots.get(element).unmount();
    roots.delete(element);
    return true;
  }
  return false;
}

/**
 * Auto-mount components based on data attributes
 * Looks for elements with data-react-component attribute
 */
export function autoMount() {
  const elements = document.querySelectorAll('[data-react-component]');
  
  elements.forEach(element => {
    const componentName = element.getAttribute('data-react-component');
    const propsAttr = element.getAttribute('data-react-props');
    const props = propsAttr ? JSON.parse(propsAttr) : {};
    
    if (componentName) {
      mountComponent(componentName, element, props);
    }
  });
}

// Export components for direct access
export { Components };

// Auto-mount on DOM ready
if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', autoMount);
  } else {
    autoMount();
  }
}
`;

    writeFileSync(join(outDir, "mount.js"), mountHelper.trim());
    console.log("✓ Created React mount helper: mount.js");

    console.log("\n✓ React components built successfully!");
    console.log("\nUsage in Hugo templates:");
    console.log(
      '  1. Include the bundle: <script type="module" src="{{ "js/react/components.js" | absURL }}"></script>'
    );
    console.log(
      '  2. Add mount points: <div data-react-component="Lightbox" data-react-props=\'{"images": [...]}\'>'
    );
  } catch (error) {
    console.error("Build failed:", error);
    process.exit(1);
  }
}

// Watch mode
async function watchComponents(): Promise<void> {
  console.log("Watching React components for changes...\n");

  const ctx = await esbuild.context({
    entryPoints: [entryPoint],
    bundle: true,
    minify: false,
    sourcemap: true,
    format: "esm",
    target: ["es2020"],
    outfile: join(outDir, "components.js"),
    external: ["ag-grid-react", "ag-grid-community", "wavesurfer.js"],
    jsx: "automatic",
    loader: {
      ".tsx": "tsx",
      ".ts": "ts",
    },
    define: {
      "process.env.NODE_ENV": '"development"',
    },
  });

  await ctx.watch();
  console.log("Watching for changes...");
}

// Run based on args
const isWatch = process.argv.includes("--watch");
if (isWatch) {
  watchComponents().catch(console.error);
} else {
  buildComponents().catch(console.error);
}
