import { images } from './business';

export interface ServicePage {
  slug: string;
  title: string;
  h1: string;
  metaDescription: string;
  shortTitle: string;
  summary: string;
  icon: string;
  image: string;
  imageAlt: string;
  intro: string[];
  benefits: { title: string; desc: string }[];
  process: { step: string; desc: string }[];
  faqs: { q: string; a: string }[];
}

export const services: ServicePage[] = [
  {
    slug: 'residential-electrician-tucson-az',
    title: 'Residential Electrician Tucson AZ | Felix Electric',
    h1: 'Residential Electrician in Tucson, AZ',
    metaDescription:
      'Licensed residential electrician in Tucson, AZ. Wiring, panel upgrades, lighting, safety inspections & more. Call Felix Electric at (520) 304-3644 for a free quote today.',
    shortTitle: 'Residential Electrician',
    summary:
      'Complete home electrical services — from new wiring to safety inspections — done right the first time.',
    icon: 'Home',
    image: images.wiring,
    imageAlt: 'Electrician installing wiring in a Tucson home',
    intro: [
      'Your home\'s electrical system powers everything you rely on daily, from lighting and appliances to chargers and HVAC. When something goes wrong, you need a residential electrician in Tucson who shows up on time, diagnoses the issue accurately, and fixes it to code — without cutting corners.',
      'Felix Electric has served Tucson homeowners for over 15 years with honest pricing, clean workmanship, and a commitment to safety. Whether you need a single outlet replaced or a full rewiring project, our licensed electricians treat your home with respect and leave the work area spotless.',
    ],
    benefits: [
      { title: 'Licensed & Insured', desc: 'AZ ROC #329844 — every job is fully permitted and inspected.' },
      { title: 'Upfront Pricing', desc: 'You approve the price before we start. No surprise charges, ever.' },
      { title: 'Clean & Respectful', desc: 'Drop cloths, shoe covers, and a spotless cleanup on every visit.' },
      { title: 'Code-Compliant Work', desc: 'Every installation meets current NEC and Tucson municipal codes.' },
    ],
    process: [
      { step: 'Schedule Online or by Phone', desc: 'Call (520) 304-3644 and pick a time that works for you — same-day slots available.' },
      { step: 'On-Site Diagnosis', desc: 'We inspect the issue, explain what\'s wrong, and give you a flat-rate quote.' },
      { step: 'Expert Repair', desc: 'Once approved, we complete the work efficiently and to code.' },
      { step: 'Final Walkthrough', desc: 'We test everything, clean up, and make sure you\'re 100% satisfied.' },
    ],
    faqs: [
      { q: 'Do you offer free estimates for residential electrical work?', a: 'Yes. For most residential projects we provide a free, no-obligation quote either over the phone or on-site. For large rewiring jobs we may charge a small diagnostic fee that is credited toward the work.' },
      { q: 'Are you licensed to work in Tucson?', a: 'Absolutely. Felix Electric holds Arizona ROC license #329844 and is fully insured and bonded for residential work throughout the Tucson metro area.' },
      { q: 'How quickly can you come out?', a: 'For most service calls we offer same-day or next-day appointments. Call (520) 304-3644 and we\'ll find the earliest available slot.' },
    ],
  },
  {
    slug: 'commercial-electrician-tucson-az',
    title: 'Commercial Electrician Tucson AZ | Felix Electric',
    h1: 'Commercial Electrician in Tucson, AZ',
    metaDescription:
      'Reliable commercial electrician in Tucson, AZ for offices, retail, restaurants & industrial facilities. Tenant build-outs, maintenance & emergency repairs. Call (520) 304-3644.',
    shortTitle: 'Commercial Electrician',
    summary:
      'Keep your business running with expert commercial electrical service, maintenance, and code compliance.',
    icon: 'Building2',
    image: images.commercial,
    imageAlt: 'Commercial electricians installing an electrical panel at a Tucson business',
    intro: [
      'Downtime costs your business money. Felix Electric provides Tucson businesses with fast, reliable commercial electrical service — from tenant build-outs and remodels to routine maintenance and emergency repairs. We work with property managers, general contractors, and business owners to keep operations running safely and up to code.',
      'Our team understands the demands of commercial environments: minimal disruption, strict timelines, and compliance with ADA, NEC, and local jurisdiction requirements. We coordinate with your team and deliver on schedule.',
    ],
    benefits: [
      { title: 'Minimal Downtime', desc: 'After-hours and weekend scheduling to keep your business open.' },
      { title: 'Tenant Build-Outs', desc: 'Full electrical design and installation for new commercial spaces.' },
      { title: 'Preventive Maintenance', desc: 'Scheduled inspections that catch problems before they cause outages.' },
      { title: 'Insurance & Code Reports', desc: 'Detailed documentation for insurers, inspectors, and landlords.' },
    ],
    process: [
      { step: 'Site Walk & Scope', desc: 'We assess your facility and define a clear scope of work with timeline.' },
      { step: 'Transparent Proposal', desc: 'Detailed line-item quote with materials, labor, and schedule.' },
      { step: 'Permitting & Scheduling', desc: 'We handle permits and coordinate around your business hours.' },
      { step: 'Completion & Handoff', desc: 'Final inspection, testing, and as-built documentation delivered.' },
    ],
    faqs: [
      { q: 'Do you work after hours for commercial clients?', a: 'Yes. We offer after-hours and weekend service so your business stays operational. Call (520) 304-3644 to schedule.' },
      { q: 'Can you handle multi-tenant buildings?', a: 'We routinely service multi-tenant retail, office, and industrial properties throughout Tucson and can coordinate with multiple tenants and property managers.' },
      { q: 'Do you provide maintenance contracts?', a: 'Yes — we offer customized preventive maintenance agreements that include scheduled inspections, priority response, and discounted rates.' },
    ],
  },
  {
    slug: 'electrical-repair-tucson-az',
    title: 'Electrical Repair Tucson AZ | Fast & Reliable | Felix Electric',
    h1: 'Electrical Repair in Tucson, AZ',
    metaDescription:
      'Fast electrical repair in Tucson, AZ. Flickering lights, dead outlets, breakers tripping, burning smell? Licensed electricians at (520) 304-3644. Same-day service available.',
    shortTitle: 'Electrical Repair',
    summary:
      'From tripping breakers to dead outlets, we diagnose and repair electrical problems fast — and fix the root cause.',
    icon: 'Wrench',
    image: images.repair,
    imageAlt: 'Electrician repairing an outdoor electrical fusebox in Tucson',
    intro: [
      'Electrical problems rarely fix themselves — and ignoring them can be dangerous. A flickering light might be a loose connection; a tripping breaker could mean an overloaded circuit; a warm outlet might be a fire hazard hiding behind the wall. Felix Electric provides thorough electrical repair in Tucson that finds the real problem, not just the symptom.',
      'Our electricians arrive in fully stocked vans, diagnose the issue on the spot, and give you a clear, upfront price before any work begins. Most repairs are completed in a single visit.',
    ],
    benefits: [
      { title: 'Same-Day Service', desc: 'Call before noon and we can often be at your door the same day.' },
      { title: 'Root-Cause Diagnosis', desc: 'We don\'t just patch symptoms — we find and fix the underlying issue.' },
      { title: 'Fully Stocked Vans', desc: 'Common parts on hand means most repairs done in one visit.' },
      { title: 'Safety First', desc: 'We flag hazards immediately and explain the risk in plain English.' },
    ],
    process: [
      { step: 'Call & Describe', desc: 'Tell us what\'s happening — we\'ll help assess urgency and schedule the right slot.' },
      { step: 'Diagnose On-Site', desc: 'We test circuits, outlets, and panels to pinpoint the fault.' },
      { step: 'Flat-Rate Quote', desc: 'You get a fixed price before any repair work starts.' },
      { step: 'Repair & Test', desc: 'We fix it, test it, and confirm everything works before we leave.' },
    ],
    faqs: [
      { q: 'What are signs I need electrical repair?', a: 'Flickering lights, breakers that trip repeatedly, warm or discolored outlets, burning smells, or outlets that don\'t work at all are all signs you should call an electrician right away.' },
      { q: 'Is electrical repair dangerous to DIY?', a: 'Yes. Without proper training and tools, DIY electrical work can cause shocks, fires, and failed inspections. Always hire a licensed electrician.' },
      { q: 'How much does electrical repair cost?', a: 'Most common repairs range from $150 to $500. You\'ll always get a flat-rate quote before we start — no hourly surprises.' },
    ],
  },
  {
    slug: 'emergency-electrician-tucson-az',
    title: 'Emergency Electrician Tucson AZ | 24/7 Fast Response | Felix Electric',
    h1: 'Emergency Electrician in Tucson, AZ',
    metaDescription:
      '24/7 emergency electrician in Tucson, AZ. Power out, sparking outlet, burning smell? Fast response from licensed electricians. Call (520) 304-3644 now.',
    shortTitle: 'Emergency Electrician',
    summary:
      'Electrical emergency? We respond fast to keep your home or business safe. Call (520) 304-3644 now.',
    icon: 'Siren',
    image: images.outdoorPanel,
    imageAlt: 'Emergency electrician working on an outdoor electrical panel in Tucson',
    intro: [
      'Electrical emergencies don\'t wait for business hours — and neither do we. If you have sparking outlets, a burning smell, a panel that\'s hot to the touch, or you\'ve lost power entirely, call Felix Electric immediately at (520) 304-3644. Our emergency electricians in Tucson respond fast to protect your safety and property.',
      'We prioritize emergency calls and can often have a licensed electrician at your door within the hour. Until we arrive, keep everyone away from the affected area and, if safe, turn off the breaker to that circuit.',
    ],
    benefits: [
      { title: 'Fast Response', desc: 'Emergency dispatch — often at your door within an hour.' },
      { title: '24/7 Availability', desc: 'Nights, weekends, and holidays — we answer the phone.' },
      { title: 'Safety Assessment', desc: 'We identify hazards and make the area safe before any repair.' },
      { title: 'Permanent Fix', desc: 'We don\'t just patch — we repair the underlying problem to code.' },
    ],
    process: [
      { step: 'Call Immediately', desc: 'Dial (520) 304-3644 — describe the emergency and we\'ll advise on immediate safety steps.' },
      { step: 'Rapid Dispatch', desc: 'Nearest available electrician is sent to your address right away.' },
      { step: 'Secure the Hazard', desc: 'We make the situation safe before any repair work begins.' },
      { step: 'Full Repair', desc: 'Once safe, we complete the repair and verify your system is sound.' },
    ],
    faqs: [
      { q: 'What counts as an electrical emergency?', a: 'Sparking, burning smells, smoke, hot panels, flooding near electrical, or a total power loss are all emergencies. When in doubt, call — it\'s better to be safe.' },
      { q: 'Do you charge extra for emergency calls?', a: 'Emergency service carries a premium for after-hours dispatch, but you\'ll always know the cost before we begin any repair work.' },
      { q: 'Should I turn off my breaker?', a: 'If you can safely reach your panel, turn off the breaker for the affected circuit. If you smell burning or see smoke, evacuate and call 911 first, then call us.' },
    ],
  },
  {
    slug: 'electrical-panel-upgrade-tucson-az',
    title: 'Electrical Panel Upgrade Tucson AZ | Felix Electric',
    h1: 'Electrical Panel Upgrade in Tucson, AZ',
    metaDescription:
      'Electrical panel upgrade & replacement in Tucson, AZ. Is your panel 100 amps or outdated? Upgrade to 200 amps for safety & capacity. Call (520) 304-3644 for a free quote.',
    shortTitle: 'Panel Upgrade',
    summary:
      'Upgrade your outdated electrical panel to 200 amps for safety, capacity, and modern appliance support.',
    icon: 'Zap',
    image: images.panel,
    imageAlt: 'Electrician upgrading an electrical panel in Tucson, AZ',
    intro: [
      'Your electrical panel is the heart of your home\'s power system. If it\'s over 25 years old, rated under 200 amps, or has Federal Pacific or Zinsco components, it may be a fire hazard and unable to keep up with modern demand. Felix Electric specializes in electrical panel upgrades in Tucson — replacing outdated, unsafe panels with safe, high-capacity systems that meet today\'s codes.',
      'A panel upgrade isn\'t just about capacity — it\'s about safety. Older panels are a leading cause of electrical fires. We assess your current panel, recommend the right amperage for your home, and complete the upgrade with minimal downtime.',
    ],
    benefits: [
      { title: 'Safety', desc: 'Eliminate fire hazards from outdated or recalled panels.' },
      { title: 'More Capacity', desc: 'Support EV chargers, AC units, and modern appliances without tripping.' },
      { title: 'Code Compliance', desc: 'New panels meet current NEC and Tucson code requirements.' },
      { title: 'Home Value', desc: 'A modern panel is a strong selling point for prospective buyers.' },
    ],
    process: [
      { step: 'Panel Assessment', desc: 'We inspect your panel, wiring, and load to recommend the right amperage.' },
      { step: 'Permit Pulled', desc: 'We handle all permits and utility coordination for you.' },
      { step: 'Upgrade Day', desc: 'Power is off for a few hours while we swap the panel and reconnect circuits.' },
      { step: 'Inspection', desc: 'We schedule the municipal inspection and confirm everything passes.' },
    ],
    faqs: [
      { q: 'How do I know if I need a panel upgrade?', a: 'Signs include frequent breaker trips, flickering lights, a panel rated under 200 amps, a panel over 25 years old, or a recalled brand like Federal Pacific or Zinsco. We can inspect and advise.' },
      { q: 'How long does a panel upgrade take?', a: 'Most panel upgrades are completed in a single day, with power off for about 4 to 6 hours.' },
      { q: 'How much does a panel upgrade cost in Tucson?', a: 'A standard 200-amp panel upgrade typically ranges from $2,500 to $4,500 depending on the panel location and wiring condition. You\'ll get a fixed quote before we start.' },
    ],
  },
  {
    slug: 'ev-charger-installation-tucson-az',
    title: 'EV Charger Installation Tucson AZ | Home Charging | Felix Electric',
    h1: 'EV Charger Installation in Tucson, AZ',
    metaDescription:
      'EV charger installation in Tucson, AZ. Tesla, ChargePoint, Grizzl-E & more. Level 2 home charging stations installed by licensed electricians. Call (520) 304-3644.',
    shortTitle: 'EV Charger Installation',
    summary:
      'Level 2 home EV charging stations installed by licensed electricians. Tesla, ChargePoint, Grizzl-E & more.',
    icon: 'BatteryCharging',
    image: images.evCharger,
    imageAlt: 'Home EV charger installed on a wall in Tucson, AZ',
    intro: [
      'Driving an electric vehicle in Tucson means you need reliable home charging. Felix Electric installs Level 2 EV chargers that fully recharge your vehicle overnight — far faster than a standard 120V outlet. We install all major brands including Tesla Wall Connector, ChargePoint, Grizzl-E, and JuiceBox, and we handle the permitting and inspection for you.',
      'Most homes need a dedicated 240V circuit and possibly a panel capacity check. We assess your electrical system, recommend the right charger and location, and complete a clean, code-compliant installation.',
    ],
    benefits: [
      { title: 'Overnight Charging', desc: 'Level 2 chargers add 25 to 40 miles of range per hour.' },
      { title: 'All Major Brands', desc: 'Tesla, ChargePoint, Grizzl-E, JuiceBox and more.' },
      { title: 'Permitting Included', desc: 'We pull permits and schedule the inspection — no hassle for you.' },
      { title: 'Outdoor-Rated', desc: 'Weatherproof installations for garage or driveway mounting.' },
    ],
    process: [
      { step: 'Load Assessment', desc: 'We verify your panel has capacity for a 240V/50A circuit.' },
      { step: 'Charger Selection', desc: 'We help you choose the right charger for your vehicle and budget.' },
      { step: 'Installation', desc: 'Dedicated circuit run, charger mounted, and connected to code.' },
      { step: 'Test & Inspect', desc: 'We test charging and schedule the municipal inspection.' },
    ],
    faqs: [
      { q: 'How much does EV charger installation cost in Tucson?', a: 'Typical installations range from $800 to $1,800 depending on the distance from your panel and whether a panel upgrade is needed. We provide a fixed quote upfront.' },
      { q: 'Can I use a Tesla Wall Connector with a non-Tesla EV?', a: 'With the right adapter, yes. We can also install a universal J1772 charger that works with all EVs.' },
      { q: 'Do I need a panel upgrade first?', a: 'Not always. We\'ll assess your panel capacity during the site visit. If an upgrade is needed, we\'ll include it in the quote.' },
    ],
  },
  {
    slug: 'lighting-installation-tucson-az',
    title: 'Lighting Installation Tucson AZ | Indoor & Outdoor | Felix Electric',
    h1: 'Lighting Installation in Tucson, AZ',
    metaDescription:
      'Lighting installation in Tucson, AZ — recessed lights, chandeliers, outdoor lighting, landscape & security lighting. Licensed electricians. Call (520) 304-3644.',
    shortTitle: 'Lighting Installation',
    summary:
      'Recessed lighting, chandeliers, outdoor and landscape lighting — installed safely and beautifully.',
    icon: 'Lightbulb',
    image: images.lighting,
    imageAlt: 'Stylish pendant light fixtures installed in a Tucson home',
    intro: [
      'The right lighting transforms a space — and the right installation keeps it safe. Felix Electric handles all types of lighting installation in Tucson, from recessed can lights and pendant fixtures to outdoor security lighting and landscape lighting. We install, replace, and rewire fixtures with clean, code-compliant work.',
      'Whether you\'re upgrading a single room or lighting an entire property, we help you choose the right fixtures, placement, and controls for beauty, efficiency, and safety.',
    ],
    benefits: [
      { title: 'Recessed Lighting', desc: 'Modern, efficient can lights that brighten any room.' },
      { title: 'Outdoor & Security', desc: 'Dusk-to-dawn and motion-activated lighting for safety.' },
      { title: 'Landscape Lighting', desc: 'Highlight your yard and improve curb appeal after dark.' },
      { title: 'Dimmer & Smart Controls', desc: 'Compatible with dimmers, smart switches, and home automation.' },
    ],
    process: [
      { step: 'Design Consult', desc: 'We discuss your goals, fixtures, and layout for the space.' },
      { step: 'Wiring & Mounting', desc: 'New circuits or fixture boxes installed cleanly and to code.' },
      { step: 'Fixture Install', desc: 'Fixtures mounted, connected, and adjusted for optimal light.' },
      { step: 'Test & Clean', desc: 'We test every fixture and leave the area spotless.' },
    ],
    faqs: [
      { q: 'Can you install a chandelier I already bought?', a: 'Yes. We install customer-supplied fixtures as long as they are UL-listed and suitable for the intended location.' },
      { q: 'Do you install outdoor lighting?', a: 'Absolutely — we install security lights, path lighting, and landscape lighting rated for outdoor use.' },
      { q: 'Can you add dimmer switches?', a: 'Yes, we install dimmer switches and smart lighting controls, including compatible LED dimmers.' },
    ],
  },
  {
    slug: 'outlet-switch-repair-tucson-az',
    title: 'Outlet & Switch Repair Tucson AZ | Felix Electric',
    h1: 'Outlet & Switch Repair in Tucson, AZ',
    metaDescription:
      'Outlet & switch repair in Tucson, AZ. Dead outlets, loose switches, GFCI/AFCI installation, USB outlets. Licensed electricians. Call (520) 304-3644.',
    shortTitle: 'Outlet & Switch Repair',
    summary:
      'Dead outlets, loose switches, or need GFCI protection? We repair and replace outlets and switches fast.',
    icon: 'ToggleRight',
    image: images.outlet,
    imageAlt: 'Electrician repairing an electrical outlet and switch in Tucson',
    intro: [
      'A dead outlet, a switch that feels loose, or a receptacle that\'s warm to the touch are more than annoyances — they can be safety hazards. Felix Electric provides outlet and switch repair in Tucson, from simple replacements to GFCI and AFCI upgrades that bring your home up to current code.',
      'We also install USB outlets, smart switches, and tamper-resistant receptacles. Every replacement is done to code, with the right device for the location — including GFCI protection where required.',
    ],
    benefits: [
      { title: 'GFCI & AFCI', desc: 'Required protection in kitchens, baths, and bedrooms — installed to code.' },
      { title: 'USB & Smart Outlets', desc: 'Modern outlets with USB ports or smart-home compatibility.' },
      { title: 'Tamper-Resistant', desc: 'Child-safe receptacles standard on every replacement.' },
      { title: 'Fast Service', desc: 'Most outlet and switch repairs completed the same day.' },
    ],
    process: [
      { step: 'Diagnose', desc: 'We test the outlet or switch and trace the cause of the problem.' },
      { step: 'Recommend', desc: 'We explain the fix and recommend the right device for the location.' },
      { step: 'Replace', desc: 'Old device removed, new one installed and grounded properly.' },
      { step: 'Test', desc: 'We verify correct operation and polarity before we leave.' },
    ],
    faqs: [
      { q: 'Why did my outlet stop working?', a: 'Common causes include a tripped GFCI, a loose wire connection, a blown fuse, or a failed breaker. We diagnose and fix the root cause.' },
      { q: 'Do I need GFCI outlets?', a: 'Current code requires GFCI protection in kitchens, bathrooms, garages, and outdoor locations. We can add or replace them to bring your home up to code.' },
      { q: 'Can you install a smart switch?', a: 'Yes — we install smart switches and dimmers, including those requiring a neutral wire. We\'ll verify your wiring is compatible first.' },
    ],
  },
  {
    slug: 'ceiling-fan-installation-tucson-az',
    title: 'Ceiling Fan Installation Tucson AZ | Felix Electric',
    h1: 'Ceiling Fan Installation in Tucson, AZ',
    metaDescription:
      'Ceiling fan installation in Tucson, AZ. Safe mounting, proper wiring, fan-rated boxes & remote controls. Licensed electricians. Call (520) 304-3644 to schedule.',
    shortTitle: 'Ceiling Fan Installation',
    summary:
      'Safe ceiling fan installation with fan-rated boxes, proper wiring, and remote control setup.',
    icon: 'Fan',
    image: images.ceilingFan,
    imageAlt: 'Ceiling fan installed in a Tucson living room',
    intro: [
      'A ceiling fan is one of the best ways to stay comfortable in Tucson while keeping energy costs down — but only if it\'s installed correctly. Felix Electric provides ceiling fan installation in Tucson with fan-rated boxes, proper balancing, and safe wiring so your fan runs quietly and safely for years.',
      'We install fans of all sizes, including those with light kits and remote controls. If your existing fan wobbles, hums, or was installed without a fan-rated box, we can fix it.',
    ],
    benefits: [
      { title: 'Fan-Rated Box', desc: 'Proper support rated for fan weight — no wobble, no risk.' },
      { title: 'Light Kit Wiring', desc: 'Integrated light kits wired to wall switch or remote.' },
      { title: 'Remote Control Setup', desc: 'We program and test remotes for easy operation.' },
      { title: 'Energy Savings', desc: 'Ceiling fans let you raise your AC setting and save on cooling.' },
    ],
    process: [
      { step: 'Assess Location', desc: 'We check the ceiling box, wiring, and fan weight requirements.' },
      { step: 'Install Box', desc: 'Fan-rated box installed and secured to ceiling joists.' },
      { step: 'Mount & Wire', desc: 'Fan assembled, mounted, and wired to the switch or remote.' },
      { step: 'Balance & Test', desc: 'We balance the fan and test all speeds and light functions.' },
    ],
    faqs: [
      { q: 'Can you install a fan where there is no existing wiring?', a: 'Yes. We can run new wiring and install a switch where no fixture exists, though this adds to the cost and time.' },
      { q: 'Why does my ceiling fan wobble?', a: 'Wobble is usually caused by an un fan-rated box, unbalanced blades, or a loose mounting. We can diagnose and fix it.' },
      { q: 'Do you install outdoor ceiling fans?', a: 'Yes — we install damp- and wet-rated fans on covered patios and pergolas.' },
    ],
  },
  {
    slug: 'electrical-inspection-tucson-az',
    title: 'Electrical Inspection Tucson AZ | Safety Inspection | Felix Electric',
    h1: 'Electrical Inspection in Tucson, AZ',
    metaDescription:
      'Electrical safety inspection in Tucson, AZ. Whole-home inspection, panel check, grounding, GFCI/AFCI audit & detailed report. Licensed electricians. Call (520) 304-3644.',
    shortTitle: 'Electrical Inspection',
    summary:
      'Whole-home electrical safety inspection with a detailed report — perfect for older homes or buyers.',
    icon: 'ShieldCheck',
    image: images.inspection,
    imageAlt: 'Electrician performing an electrical safety inspection in Tucson',
    intro: [
      'Whether you\'re buying a home, living in an older house, or just want peace of mind, a professional electrical inspection is one of the smartest investments you can make. Felix Electric provides thorough electrical inspections in Tucson — checking your panel, wiring, grounding, outlets, and safety devices, then delivering a clear written report.',
      'Our inspection covers the entire system: panel condition, breaker sizing, grounding and bonding, GFCI/AFCI protection, aluminum wiring, recalled panels, and more. You\'ll know exactly what\'s safe, what needs attention, and what can wait.',
    ],
    benefits: [
      { title: 'Whole-Home Coverage', desc: 'Panel, wiring, outlets, grounding, and safety devices checked.' },
      { title: 'Detailed Report', desc: 'Written findings with photos, priorities, and recommendations.' },
      { title: 'Pre-Purchase Peace of Mind', desc: 'Know what you\'re buying before you close escrow.' },
      { title: 'Hazard Identification', desc: 'We flag fire and shock risks with clear urgency levels.' },
    ],
    process: [
      { step: 'Schedule', desc: 'Book a 1 to 2 hour inspection window at your convenience.' },
      { step: 'Full Inspection', desc: 'We test every circuit, outlet, and the panel with professional tools.' },
      { step: 'On-Site Summary', desc: 'We walk you through findings and answer questions on the spot.' },
      { step: 'Written Report', desc: 'Detailed report delivered within 24 hours with photos and priorities.' },
    ],
    faqs: [
      { q: 'How much does an electrical inspection cost?', a: 'A whole-home electrical safety inspection is typically $200 to $400. If you proceed with recommended repairs, the inspection fee is often credited toward the work.' },
      { q: 'How long does an inspection take?', a: 'Most inspections take 1 to 2 hours depending on the size and age of the home.' },
      { q: 'Do you inspect for insurance or real estate transactions?', a: 'Yes. We provide detailed reports suitable for insurance underwriting and real estate transactions.' },
    ],
  },
];

export interface ServiceArea {
  slug: string;
  name: string;
  county: string;
  distance: string;
  description: string;
}

export const serviceAreas: ServiceArea[] = [
  { slug: 'tucson-az', name: 'Tucson', county: 'Pima County', distance: 'Main Hub', description: 'Full-service licensed electrician serving all of Tucson, from downtown to the Foothills. Same-day electrical repair, panel upgrades, EV charger installation, and more.' },
  { slug: 'marana-az', name: 'Marana', county: 'Pima County', distance: '25 min NW', description: 'Fast residential and commercial electrical service across Marana, from Continental Ranch to Dove Mountain.' },
  { slug: 'oro-valley-az', name: 'Oro Valley', county: 'Pima County', distance: '20 min N', description: 'Licensed electricians serving Oro Valley homes and businesses with panel upgrades, repairs, and EV charger installs.' },
  { slug: 'sahuarita-az', name: 'Sahuarita', county: 'Pima County', distance: '30 min S', description: 'Electrical repair, lighting, and inspection services for Sahuarita and Rancho Sahuarita residents.' },
  { slug: 'green-valley-az', name: 'Green Valley', county: 'Pima County', distance: '40 min S', description: 'Trusted electrician for Green Valley homes — safety inspections, outlet repair, and panel service.' },
  { slug: 'catalina-az', name: 'Catalina', county: 'Pima County', distance: '20 min N', description: 'Electrical service, emergency repair, and installations for Catalina and SaddleBrooke.' },
  { slug: 'vail-az', name: 'Vail', county: 'Pima County', distance: '25 min SE', description: 'Residential and commercial electrician serving Vail and the growing Rita Ranch area.' },
  { slug: 'south-tucson-az', name: 'South Tucson', county: 'Pima County', distance: '5 min S', description: 'Same-day electrical repair and installation services for South Tucson and surrounding neighborhoods.' },
  { slug: 'casas-adobes-az', name: 'Casas Adobes', county: 'Pima County', distance: '15 min N', description: 'Panel upgrades, lighting, and electrical repair for Casas Adobes and northern Tucson.' },
];

export const reviews = [
  { name: 'Maria G.', area: 'Oro Valley, AZ', rating: 5, text: 'Felix Electric upgraded our panel from 100 to 200 amps. They were on time, explained everything, and the price was exactly what they quoted. Highly recommend!' },
  { name: 'James T.', area: 'Tucson, AZ', rating: 5, text: 'Called them on a Saturday morning when my outlets stopped working. They came out the same day, found a loose neutral wire, and fixed it in an hour. True professionals.' },
  { name: 'Sarah K.', area: 'Marana, AZ', rating: 5, text: 'Installed a Tesla Wall Connector in my garage. Clean install, got the permit, and passed inspection first try. Will use them again for future projects.' },
  { name: 'Robert L.', area: 'Vail, AZ', rating: 5, text: 'Had them install recessed lighting throughout my living room and kitchen. The work is flawless and they left no mess. Couldn\'t be happier.' },
  { name: 'Patricia M.', area: 'Sahuarita, AZ', rating: 5, text: 'After a scary burning smell from my outlet, I called Felix Electric. They came out within the hour, found an overloaded circuit, and made it safe. Lifesavers.' },
  { name: 'David R.', area: 'Catalina, AZ', rating: 5, text: 'Honest and reliable. They did a whole-home inspection before I bought my house and caught an outdated panel the home inspector missed. Saved me thousands.' },
];

export const generalFaqs = [
  { q: 'What areas does Felix Electric serve?', a: 'We serve Tucson and surrounding areas including Marana, Oro Valley, Sahuarita, Green Valley, Catalina, Vail, South Tucson, and Casas Adobes.' },
  { q: 'Are you licensed and insured?', a: 'Yes. Felix Electric holds Arizona ROC license #329844 and is fully insured and bonded for your protection.' },
  { q: 'Do you offer same-day service?', a: 'For most repair calls we offer same-day or next-day appointments. Call (520) 304-3644 for current availability.' },
  { q: 'Do you provide free estimates?', a: 'Yes, we provide free, no-obligation quotes for most projects. For complex jobs we may charge a diagnostic fee that is credited toward the work.' },
  { q: 'What are your payment options?', a: 'We accept cash, check, and all major credit cards. For larger projects we offer financing options — ask for details.' },
  { q: 'Do you guarantee your work?', a: 'Yes. All work is backed by our workmanship guarantee. If something isn\'t right, we\'ll come back and fix it at no charge.' },
];
