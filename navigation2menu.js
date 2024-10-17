#!/usr/bin/node

// Work on POSIX and Windows
const fs = require('fs');
const stdinBuffer = fs.readFileSync(0); // STDIN_FILENO = 0

const markdown = stdinBuffer.toString();

let weight = 10;

const parentStack = [];
const menu = [];

let lastContent = 'First line';

for (const line of markdown.split('\n')) {
    if (!line.match(/^ *\* /)) {
        continue;
    }
    const indentPart = line.replace(/(^ *\* ).*/, '$1');
    const markdownLink = line.substring(indentPart.length)
         .replace(/#.*$/, '');
    const matched = markdownLink.match(/\[([^\]]+)\]\(([^)]+)\)/);
    if (!matched) {
        console.warn(`Warning: navigation.md menu has "${markdownLink}" without url near: "${lastContent}"`);
        continue;
    }
    const [_, name, pageRef] = matched;
    const level = (indentPart.length - 2)/3;

    while (parentStack.length > level) {
        parentStack.pop();
    }

    let identifier = pageRef;

    if (pageRef.startsWith('http://') || pageRef.startsWith('https://') || fs.existsSync('./content/' + pageRef)) {
        if (pageRef.indexOf('//') === -1) {
            const md = fs.readFileSync('./content/' + pageRef).toString().split('\n');
            for (const line of md) {
                if (line.startsWith('id: ')) {
                    identifier = line.substring('id: '.length).replace(/['"]/g, '').trim() || identifier;
                }
            }
        }

        menu.push({
            identifier,
            name,
            pageRef,
            parent: parentStack[parentStack.length - 1],
            weight
        });
    } else {
        console.warn(`Warning: navigation.md menu has "${markdownLink}" without file: "${pageRef}"`);
    }

    weight += 10;
    parentStack.push(identifier);
    lastContent = markdownLink;
}

console.log(JSON.stringify({ main: menu }, null, 4));
