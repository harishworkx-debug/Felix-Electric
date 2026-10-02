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
  '',
  'about/',
  'contact/',
  'services/',
  'service-areas/',
  'reviews/',
  'faq/'
];

let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

// Add static pages
xml += `  <!-- Static Pages -->\n`;
for (const page of staticPages) {
  xml += `  <url>\n    <loc>https://felixelectricaz.com/${page}</loc>\n    <changefreq>${page === '' ? 'weekly' : 'monthly'}</changefreq>\n    <priority>${page === '' ? '1.0' : '0.8'}</priority>\n  </url>\n`;
}

// Add service pages
xml += `\n  <!-- Service Pages -->\n`;
for (const service of services) {
  xml += `  <url>\n    <loc>https://felixelectricaz.com/${service}/</loc>\n    <changefreq>monthly</changefreq>\n    <priority>0.9</priority>\n  </url>\n`;
}

// Add service areas
xml += `\n  <!-- Service Areas -->\n`;
for (const area of serviceAreas) {
  xml += `  <url>\n    <loc>https://felixelectricaz.com/electrician-${area}/</loc>\n    <changefreq>monthly</changefreq>\n    <priority>0.9</priority>\n  </url>\n`;
  xml += `  <url>\n    <loc>https://felixelectricaz.com/electrical-services-${area}/</loc>\n    <changefreq>monthly</changefreq>\n    <priority>0.9</priority>\n  </url>\n`;
}

xml += `</urlset>\n`;

fs.writeFileSync('public/sitemap.xml', xml);
console.log('Sitemap generated successfully!');
