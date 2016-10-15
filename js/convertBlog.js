// should be ran from root with "npm run build"
const showdown  = require('showdown');
const fs = require('fs');
const path = require('path');
const converter = new showdown.Converter();

const blogPath = path.join('blog');
const srcPath = path.join(blogPath, 'src');
const header = fs.readFileSync(path.join(srcPath, 'header.html'), 'utf8');
const footer = fs.readFileSync(path.join(srcPath, 'footer.html'), 'utf8');

const blogTextMd = fs.readFileSync(path.join(srcPath, 'terminalAliases.md'), 'utf8');
const blogTextHtml = converter.makeHtml(blogTextMd);

const fullPageText = header + blogTextHtml + footer;

fs.writeFileSync(path.join(blogPath, 'terminalAliases.html'), fullPageText, 'utf8');
