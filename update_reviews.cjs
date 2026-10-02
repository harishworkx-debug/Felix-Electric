const fs = require('fs');
let content = fs.readFileSync('src/data/services.ts', 'utf8');
const startIdx = content.indexOf('export const reviews = [');
const endIdx = content.indexOf('];', startIdx) + 2;

const newReviews = `export const reviews = [
  { name: 'Ana Grijalva', area: 'Tucson, AZ', rating: 5, text: 'Felix Electric came to install a chandelier on a 20+ ft ceiling. They were very efficient, knowledgeable and fast. Their work was super clean and professional. They showed up pretty quick also.' },
  { name: 'Michael Caverly', area: 'Tucson, AZ', rating: 5, text: 'Felix has been doing my work for a little over 5 yrs. Right from the beginning I thought he did great work and was reasonably priced. There was no need to look any further. Retired Home Builder' },
  { name: 'Jose Ibarra', area: 'Tucson, AZ', rating: 5, text: 'Hands down best electrical company in Tucson. Definitely will be using again in the future. 10/10, 100% recommend if you’re looking for any electrical work done look no further, Felix Electrical will have you covered' },
  { name: 'Sebastian Redondo', area: 'Tucson, AZ', rating: 5, text: 'Solid team that works diligently and professionally. Great work, passed inspection first time' },
  { name: 'Jose Dominguez', area: 'Tucson, AZ', rating: 5, text: '' }
];`;

content = content.substring(0, startIdx) + newReviews + content.substring(endIdx);
fs.writeFileSync('src/data/services.ts', content);
console.log('Done!');
