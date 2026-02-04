#!/usr/bin/env node

import { EOL } from "os";
import { readFileSync, existsSync } from "fs";

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
  // Calculate level based on indentation: 2-space indent = level 1
  // For "- " (2 chars) level=0, "  - " (4 chars) level=1, etc.
  const level = (indentPart.length - 2) / 2;

  while (parentStack.length > level) {
    parentStack.pop();
  }

  let identifier = pageRef;

  if (
    pageRef.startsWith("http://") ||
    pageRef.startsWith("https://") ||
    existsSync("./content/" + pageRef)
  ) {
    if (pageRef.indexOf("//") === -1) {
      const md = readFileSync("./content/" + pageRef)
        .toString()
        .split("\n");
      for (const line of md) {
        if (line.startsWith("id: ")) {
          identifier =
            line.substring("id: ".length).replace(/['"]/g, "").trim() ||
            identifier;
        }
      }
    }

    menu.push({
      identifier,
      name,
      pageRef,
      parent: parentStack[parentStack.length - 1],
      weight,
    });
  } else {
    console.warn(
      `Warning: navigation.md menu has "${markdownLink}" without file: "${pageRef}"`
    );
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

console.error(`Done! Generated ${menu.length} menu items.`);
console.log(JSON.stringify({ main: menu }, null, 4));
