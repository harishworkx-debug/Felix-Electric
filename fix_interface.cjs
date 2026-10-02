const fs = require('fs');
let content = fs.readFileSync('src/data/services.ts', 'utf8');
content = content.replace(
  /export interface ServiceArea\s*\{[\s\S]*?description:\s*string;\s*\}/,
  `export interface ServiceArea {
  slug: string;
  name: string;
  county: string;
  distance: string;
  description: string;
  uniqueParagraphs?: string[];
}`
);
fs.writeFileSync('src/data/services.ts', content);
console.log('Fixed interface!');
