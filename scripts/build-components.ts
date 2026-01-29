/**
 * Build script for pre-rendering React components to static HTML
 * This is used for the fully static build approach
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, "..");

interface ComponentDefinition {
  name: string;
  outputPath: string;
  html: string;
}

/**
 * Pre-rendered component HTML snippets
 * These are static HTML versions of React components for Hugo to include
 */
const components: ComponentDefinition[] = [
  // Add any pre-rendered component HTML here if needed
  // For now, all components are rendered directly in Hugo templates with Tailwind classes
];

async function buildComponents(): Promise<void> {
  console.log("Building static component snippets...");

  for (const component of components) {
    const outputDir = dirname(join(rootDir, component.outputPath));

    if (!existsSync(outputDir)) {
      mkdirSync(outputDir, { recursive: true });
    }

    writeFileSync(join(rootDir, component.outputPath), component.html);
    console.log(`✓ Built ${component.name}`);
  }

  console.log("Done!");
}

buildComponents().catch(console.error);
