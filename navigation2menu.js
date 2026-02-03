#!/usr/bin/env node

import { EOL } from "os";
import { readFileSync, existsSync } from "fs";

// Work on POSIX and Windows
const stdinBuffer = readFileSync(0); // STDIN_FILENO = 0

const markdown = stdinBuffer.toString();

let weight = 10;

const parentStack = [];
const menu = [];

let lastContent = "First line";

for (const line of markdown.split(EOL)) {
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
}

console.log(JSON.stringify({ main: menu }, null, 4));
