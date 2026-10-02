const fs = require('fs');
let content = fs.readFileSync('src/data/services.ts', 'utf8');

// Replace ServiceArea interface
content = content.replace(
  'export interface ServiceArea {\n  slug: string;\n  name: string;\n  county: string;\n  distance: string;\n  description: string;\n}',
  'export interface ServiceArea {\n  slug: string;\n  name: string;\n  county: string;\n  distance: string;\n  description: string;\n  uniqueParagraphs?: string[];\n}'
);

const serviceAreasStr = `export const serviceAreas: ServiceArea[] = [
  { 
    slug: 'tucson-az', name: 'Tucson', county: 'Pima County', distance: 'Main Hub', 
    description: 'Full-service licensed electrician serving all of Tucson, from downtown to the Foothills. Same-day electrical repair, panel upgrades, EV charger installation, and more.',
    uniqueParagraphs: [
      "As our primary service area, Tucson relies on Felix Electric for everything from historic home rewiring to new commercial build-outs.",
      "Whether you're dealing with older electrical panels in the central neighborhoods or need EV charger installations in the Foothills, our team provides code-compliant, same-day service.",
      "We understand the unique demands the Arizona heat puts on your electrical systems, especially HVAC circuits and outdoor lighting."
    ]
  },
  { 
    slug: 'marana-az', name: 'Marana', county: 'Pima County', distance: '25 min NW', 
    description: 'Fast residential and commercial electrical service across Marana, from Continental Ranch to Dove Mountain.',
    uniqueParagraphs: [
      "Marana's rapid growth means many homes need modern electrical upgrades to support new appliances and electric vehicles.",
      "From Continental Ranch to Dove Mountain, we help Marana residents with panel upgrades, dedicated circuits, and ceiling fan installations.",
      "Our response times in Marana are fast because we know that losing power or having a faulty AC circuit in the desert heat is a true emergency."
    ]
  },
  { 
    slug: 'oro-valley-az', name: 'Oro Valley', county: 'Pima County', distance: '20 min N', 
    description: 'Licensed electricians serving Oro Valley homes and businesses with panel upgrades, repairs, and EV charger installs.',
    uniqueParagraphs: [
      "Oro Valley homeowners trust Felix Electric to maintain and upgrade their residential electrical systems safely and professionally.",
      "We frequently help Oro Valley residents with aesthetic lighting upgrades, smart home integrations, and whole-home surge protection.",
      "If you're remodeling your kitchen or need a reliable 240V outlet for an electric vehicle, our licensed electricians are just a short drive away."
    ]
  },
  { 
    slug: 'sahuarita-az', name: 'Sahuarita', county: 'Pima County', distance: '30 min S', 
    description: 'Electrical repair, lighting, and inspection services for Sahuarita and Rancho Sahuarita residents.',
    uniqueParagraphs: [
      "Serving Sahuarita and the Rancho Sahuarita master-planned community, we provide dependable electrical troubleshooting and repairs.",
      "Many modern homes in Sahuarita benefit from our LED lighting upgrades and dedicated circuit installations for home offices or workshops.",
      "We pride ourselves on transparent pricing and clean, professional work for every Sahuarita family we serve."
    ]
  },
  { 
    slug: 'green-valley-az', name: 'Green Valley', county: 'Pima County', distance: '40 min S', 
    description: 'Trusted electrician for Green Valley homes — safety inspections, outlet repair, and panel service.',
    uniqueParagraphs: [
      "Green Valley is a vibrant community, and we specialize in safety-focused electrical updates for older homes and retirement properties.",
      "From adding accessible outlets and switches to upgrading outdated breaker panels, we ensure your home is completely safe and up to current NEC code.",
      "We offer flexible scheduling and clear communication, making us the preferred electrician for Green Valley residents."
    ]
  },
  { 
    slug: 'catalina-az', name: 'Catalina', county: 'Pima County', distance: '20 min N', 
    description: 'Electrical service, emergency repair, and installations for Catalina and SaddleBrooke.',
    uniqueParagraphs: [
      "Whether you live in Catalina or SaddleBrooke, you need an electrician who understands both residential and semi-rural electrical needs.",
      "We handle everything from securing outdoor lighting against monsoons to upgrading main service panels for increased capacity.",
      "Our team arrives fully stocked to handle most Catalina electrical repairs on the very first visit."
    ]
  },
  { 
    slug: 'vail-az', name: 'Vail', county: 'Pima County', distance: '25 min SE', 
    description: 'Residential and commercial electrician serving Vail and the growing Rita Ranch area.',
    uniqueParagraphs: [
      "Vail and Rita Ranch are expanding quickly, and Felix Electric is here to support both new construction and existing home electrical needs.",
      "We routinely assist Vail homeowners with hot tub wiring, EV chargers, and comprehensive safety inspections.",
      "Don't let amateur wiring risk your property; trust our fully licensed and bonded team for all your electrical projects in Vail."
    ]
  },
  { 
    slug: 'south-tucson-az', name: 'South Tucson', county: 'Pima County', distance: '5 min S', 
    description: 'Same-day electrical repair and installation services for South Tucson and surrounding neighborhoods.',
    uniqueParagraphs: [
      "South Tucson properties often require specialized care, especially when updating historic or legacy wiring systems.",
      "We provide fast, affordable electrical repairs, code corrections, and complete rewiring services for South Tucson businesses and homes.",
      "Our commitment to the local community means you get honest assessments and reliable workmanship every single time."
    ]
  },
  { 
    slug: 'casas-adobes-az', name: 'Casas Adobes', county: 'Pima County', distance: '15 min N', 
    description: 'Panel upgrades, lighting, and electrical repair for Casas Adobes and northern Tucson.',
    uniqueParagraphs: [
      "From custom lighting designs to complex electrical troubleshooting, we are the go-to electricians for Casas Adobes.",
      "Many homes in this area feature beautiful architecture that requires careful, minimally invasive electrical work during renovations.",
      "We ensure your Casas Adobes property is equipped with safe, modern electrical infrastructure that meets all modern energy demands."
    ]
  }
];`;

const startIdx = content.indexOf('export const serviceAreas: ServiceArea[] = [');
const endIdx = content.indexOf('export const reviews = [');

if (startIdx !== -1 && endIdx !== -1) {
  content = content.slice(0, startIdx) + serviceAreasStr + '\n\n' + content.slice(endIdx);
  fs.writeFileSync('src/data/services.ts', content);
  console.log('Successfully updated service areas with unique paragraphs.');
} else {
  console.log('Could not find markers.');
}
