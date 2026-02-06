#!/usr/bin/env node

import { EOL } from "os";
import { readFileSync, existsSync } from "fs";
import { dirname, join, normalize } from "path";

// Support both file argument and stdin
let markdown;
if (process.argv[2]) {
  // File path provided as argument
  const filePath = process.argv[2];
  if (!existsSync(filePath)) {
    console.error(`Error: File not found: ${filePath}`);
    process.exit(1);
  }
  console.error(`Reading: ${filePath}`);
  markdown = readFileSync(filePath, "utf-8");
} else {
  // Read from stdin (original behavior)
  console.error("Reading from stdin...");
  const stdinBuffer = readFileSync(0); // STDIN_FILENO = 0
  markdown = stdinBuffer.toString();
}

let weight = 10;

const parentStack = [];
const menu = [];
const missingFiles = [];

let lastContent = "First line";
let processedCount = 0;
const lines = markdown.split(EOL);
const totalLines = lines.length;

console.error(`Processing ${totalLines} lines...`);

for (const line of lines) {
  // Support both * and - as list markers, but only for markdown links (must have [ after marker)
  if (!line.match(/^ *[-*] \[/)) {
    continue;
  }
  const indentPart = line.replace(/(^ *[-*] ).*/, "$1");
  const markdownLink = line
    .substring(indentPart.length)
    .replace(/#[^)]*\)$/, ")");
  const matched = markdownLink.match(/\[([^\]]+)\]\(([^)]+)\)/);
  if (!matched) {
    console.warn(
      `Warning: navigation.md menu has "${markdownLink}" without url near: "${lastContent}"`
    );
    continue;
  }
  const [_, name, pageRef] = matched;
  // Calculate level based on indentation: 4-space indent = level 1
  // For "* " (2 chars) level=0, "    * " (6 chars) level=1, etc.
  const level = (indentPart.length - 2) / 4;

  while (parentStack.length > level) {
    parentStack.pop();
  }

  let identifier = pageRef;

  if (
    pageRef.startsWith("http://") ||
    pageRef.startsWith("https://") ||
    existsSync("./content/" + pageRef)
  ) {
    let resolvedPageRef = pageRef;
    if (pageRef.indexOf("//") === -1) {
      const md = readFileSync("./content/" + pageRef)
        .toString()
        .split("\n");
      let isRedirect = false;
      for (const line of md) {
        if (line.startsWith("id: ")) {
          identifier =
            line.substring("id: ".length).replace(/['"]/g, "").trim() ||
            identifier;
        }
        if (line.startsWith("redirectTo:")) {
          isRedirect = true;
        }
      }
      // Follow redirect: resolve the target path from the markdown link in the body
      if (isRedirect) {
        const linkMatch = md.join("\n").match(/\[([^\]]+)\]\(([^)]+)\)/);
        if (linkMatch) {
          const targetPath = normalize(join(dirname(pageRef), linkMatch[2]));
          if (existsSync("./content/" + targetPath)) {
            resolvedPageRef = targetPath;
            // Re-read the target file for its id
            const targetMd = readFileSync("./content/" + targetPath)
              .toString()
              .split("\n");
            for (const line of targetMd) {
              if (line.startsWith("id: ")) {
                identifier =
                  line.substring("id: ".length).replace(/['"]/g, "").trim() ||
                  identifier;
              }
            }
            console.error(`  Redirect: ${pageRef} → ${resolvedPageRef}`);
          }
        }
      }
    }

    menu.push({
      identifier,
      name,
      pageRef: resolvedPageRef,
      parent: parentStack[parentStack.length - 1],
      weight,
    });
  } else {
    console.warn(
      `Warning: navigation.md menu has "${markdownLink}" without file: "${pageRef}"`
    );
    missingFiles.push(pageRef);
    // Re-parent children of this missing entry to the current parent (grandparent)
    // so they don't become orphaned in the menu.
    identifier = parentStack[parentStack.length - 1];
  }

  weight += 10;
  parentStack.push(identifier);
  lastContent = markdownLink;

  // Progress every 100 items
  processedCount++;
  if (processedCount % 100 === 0) {
    console.error(`  Processed ${processedCount} menu items...`);
  }
}

if (missingFiles.length > 0) {
  console.error(`\nWarning: ${missingFiles.length} missing file(s) skipped:`);
  for (const f of missingFiles) {
    console.error(`  - ${f}`);
  }
  console.error(
    "Their children have been re-parented to the nearest existing ancestor.\n"
  );
}
console.error(`Done! Generated ${menu.length} menu items.`);
console.log(JSON.stringify({ main: menu }, null, 4));
