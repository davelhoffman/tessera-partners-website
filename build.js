'use strict';

const fs = require('fs');
const path = require('path');
const { renderTemplate } = require('./src/template.js');

const contentPath = path.join(__dirname, 'content', 'site.json');
const srcDir = path.join(__dirname, 'src');
const outDir = path.join(__dirname, 'public');

const content = JSON.parse(fs.readFileSync(contentPath, 'utf-8'));
const html = renderTemplate(content);

fs.mkdirSync(outDir, { recursive: true });

fs.writeFileSync(path.join(outDir, 'index.html'), html, 'utf-8');
fs.copyFileSync(path.join(srcDir, 'styles.css'), path.join(outDir, 'styles.css'));
fs.copyFileSync(path.join(srcDir, 'main.js'), path.join(outDir, 'main.js'));

console.log('✓ Build complete → public/');
