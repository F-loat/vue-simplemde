const fs = require('fs');

const html = fs.readFileSync('dist/demo.html').toString();

const hackedHtml = html.replace('<script src="https://unpkg.com/vue"></script>', `
<link rel="stylesheet" href="https://cdn.jsdelivr.net/simplemde/latest/simplemde.min.css">
<script src="https://unpkg.com/vue"></script>
<script src="https://cdn.jsdelivr.net/npm/marked@3.0.8/marked.min.js"></script>
<script src="https://cdn.jsdelivr.net/simplemde/latest/simplemde.min.js"></script>
`);

fs.writeFileSync('dist/demo.html', hackedHtml);
