const fs = require('fs');

const services = [
  'residential-electrician-tucson-az',
  'commercial-electrician-tucson-az',
  'electrical-repair-tucson-az',
  'emergency-electrician-tucson-az',
  'electrical-panel-upgrade-tucson-az',
  'ev-charger-installation-tucson-az',
  'lighting-installation-tucson-az',
  'outlet-switch-repair-tucson-az',
  'ceiling-fan-installation-tucson-az',
  'electrical-inspection-tucson-az',
  'new-construction-electrician-tucson-az',
  'electrical-remodeling-tucson-az'
];

const serviceAreas = [
  'tucson-az',
  'marana-az',
  'oro-valley-az',
  'sahuarita-az',
  'green-valley-az',
  'catalina-az',
  'vail-az',
  'south-tucson-az',
  'casas-adobes-az'
];

const staticPages = [
  { path: '', changefreq: 'weekly', priority: '1.0' },
  { path: 'about', changefreq: 'monthly', priority: '0.8' },
  { path: 'contact', changefreq: 'monthly', priority: '0.8' },
  { path: 'services', changefreq: 'monthly', priority: '0.8' },
  { path: 'service-areas', changefreq: 'monthly', priority: '0.8' },
  { path: 'reviews', changefreq: 'monthly', priority: '0.8' },
  { path: 'faq', changefreq: 'monthly', priority: '0.8' }
];

let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

// Add static pages
xml += `  <!-- Static Pages -->\n`;
for (const page of staticPages) {
  const loc = page.path === '' ? 'https://felixelectricaz.com/' : `https://felixelectricaz.com/${page.path}`;
  xml += `  <url>\n    <loc>${loc}</loc>\n    <changefreq>${page.changefreq}</changefreq>\n    <priority>${page.priority}</priority>\n  </url>\n`;
}

// Add service pages
xml += `\n  <!-- Service Pages -->\n`;
for (const service of services) {
  xml += `  <url>\n    <loc>https://felixelectricaz.com/${service}</loc>\n    <changefreq>monthly</changefreq>\n    <priority>0.9</priority>\n  </url>\n`;
}

// Add consolidated service areas (single authoritative URL per area)
xml += `\n  <!-- Service Areas -->\n`;
for (const area of serviceAreas) {
  xml += `  <url>\n    <loc>https://felixelectricaz.com/electrician-${area}</loc>\n    <changefreq>monthly</changefreq>\n    <priority>0.9</priority>\n  </url>\n`;
}

xml += `</urlset>\n`;

fs.writeFileSync('public/sitemap.xml', xml);
console.log('Sitemap generated successfully!');
