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

  // Get the absolute path to React in node_modules to force single instance
  const reactPath = join(rootDir, "node_modules/react");
  const reactDomPath = join(rootDir, "node_modules/react-dom");

  try {
    // Build the main bundle - React will be bundled together and deduped
    const result = await esbuild.build({
      entryPoints: [entryPoint],
      bundle: true,
      minify: process.env.NODE_ENV === "production",
      sourcemap: process.env.NODE_ENV !== "production",
      format: "iife",
      globalName: "DocComponents",
      target: ["es2020", "chrome90", "firefox88", "safari14"],
      outfile: join(outDir, "components.js"),
      // Force all React imports to use the same instance from docs' node_modules
      alias: {
        react: reactPath,
        "react-dom": reactDomPath,
        "react/jsx-runtime": join(reactPath, "jsx-runtime.js"),
        "react/jsx-dev-runtime": join(reactPath, "jsx-dev-runtime.js"),
        "ag-grid-react": join(rootDir, "src/stubs/ag-grid-react.ts"),
        "ag-grid-community": join(rootDir, "src/stubs/ag-grid-community.ts"),
        "wavesurfer.js": join(rootDir, "src/stubs/wavesurfer.ts"),
      },
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
      // Ensure all React imports resolve to the same module
      mainFields: ["module", "main"],
      // Process node_modules to ensure React is bundled correctly
      packages: "bundle",
    });

    // Log bundle info
    const outputs = Object.keys(result.metafile?.outputs ?? {});
    console.log("✓ Built React component bundle:");
    outputs.forEach((output) => {
      const bytes = result.metafile?.outputs[output]?.bytes ?? 0;
      const kb = (bytes / 1024).toFixed(2);
      console.log(`  - ${output} (${kb} KB)`);
    });

    // Create a simple React mount helper that works with IIFE bundle
    const mountHelper = `
/**
 * React Mount Helper
 * Provides utilities for mounting React components in Hugo templates
 * 
 * The DocComponents global is provided by the IIFE bundle (components.js)
 */
(function() {
  // Wait for DocComponents to be available
  if (typeof DocComponents === 'undefined') {
    console.warn('DocComponents not loaded yet');
    return;
  }

  const React = DocComponents.React || window.React;
  const createRoot = DocComponents.createRoot || (window.ReactDOM && window.ReactDOM.createRoot);
  
  // Store for all mounted roots
  const roots = new Map();

  /**
   * Mount a React component to a DOM element
   * @param {string} componentName - Name of the component to mount
   * @param {string|HTMLElement} selector - CSS selector or DOM element
   * @param {object} props - Props to pass to the component
   */
  function mountComponent(componentName, selector, props) {
    props = props || {};
    const element = typeof selector === 'string' 
      ? document.querySelector(selector) 
      : selector;
      
    if (!element) {
      console.warn('Mount target not found:', selector);
      return null;
    }
    
    const Component = DocComponents[componentName];
    if (!Component) {
      console.warn('Component not found:', componentName);
      console.log('Available components:', Object.keys(DocComponents));
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
  function unmountComponent(selector) {
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
  function autoMount() {
    const elements = document.querySelectorAll('[data-react-component]');
    
    elements.forEach(function(element) {
      const componentName = element.getAttribute('data-react-component');
      const propsAttr = element.getAttribute('data-react-props');
      const props = propsAttr ? JSON.parse(propsAttr) : {};
      
      if (componentName) {
        mountComponent(componentName, element, props);
      }
    });
  }

  // Export to window for use in templates
  window.DocComponents = DocComponents;
  window.mountComponent = mountComponent;
  window.unmountComponent = unmountComponent;
  window.autoMount = autoMount;

  // Auto-mount on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', autoMount);
  } else {
    autoMount();
  }
})();
`;

    writeFileSync(join(outDir, "mount.js"), mountHelper.trim());
    console.log("✓ Created React mount helper: mount.js");

    console.log("\n✓ React components built successfully!");
    console.log("\nUsage in Hugo templates:");
    console.log(
      '  1. Include the bundle: <script src="{{ "js/react/components.js" | absURL }}"></script>'
    );
    console.log(
      '  2. Include the mount helper: <script src="{{ "js/react/mount.js" | absURL }}"></script>'
    );
    console.log(
      '  3. Add mount points: <div data-react-component="Lightbox" data-react-props=\'{"images": [...]}\'></div>'
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
    format: "iife",
    globalName: "DocComponents",
    target: ["es2020"],
    outfile: join(outDir, "components.js"),
    alias: {
      "ag-grid-react": join(rootDir, "src/stubs/ag-grid-react.ts"),
      "ag-grid-community": join(rootDir, "src/stubs/ag-grid-community.ts"),
      "wavesurfer.js": join(rootDir, "src/stubs/wavesurfer.ts"),
    },
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
