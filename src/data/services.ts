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
  problems?: { title: string; desc: string }[];
}

export const services: ServicePage[] = [
  {
    slug: 'residential-electrician-tucson-az',
    title: 'Residential Electrician Tucson AZ | Felix Electric',
    h1: 'Residential Electrician in Tucson, AZ',
    metaDescription:
      'Licensed residential electrician in Tucson, AZ. Wiring, panel upgrades, lighting, safety inspections & more. Call Felix Electric at (520) 929-0296 for a free quote today.',
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
      { step: 'Schedule Online or by Phone', desc: 'Call (520) 929-0296 and pick a time that works for you — same-day slots available.' },
      { step: 'On-Site Diagnosis', desc: 'We inspect the issue, explain what\'s wrong, and give you a flat-rate quote.' },
      { step: 'Expert Repair', desc: 'Once approved, we complete the work efficiently and to code.' },
      { step: 'Final Walkthrough', desc: 'We test everything, clean up, and make sure you\'re 100% satisfied.' },
    ],
    faqs: [
      { q: 'Do you offer free estimates for residential electrical work?', a: 'Yes. For most residential projects we provide a free, no-obligation quote either over the phone or on-site. For large rewiring jobs we may charge a small diagnostic fee that is credited toward the work.' },
      { q: 'Are you licensed to work in Tucson?', a: 'Absolutely. Felix Electric holds Arizona ROC license #329844 and is fully insured and bonded for residential work throughout the Tucson metro area.' },
      { q: 'How quickly can you come out?', a: 'For most service calls we offer same-day or next-day appointments. Call (520) 929-0296 and we\'ll find the earliest available slot.' },
    ],
  },
  {
    slug: 'commercial-electrician-tucson-az',
    title: 'Commercial Electrician Tucson AZ | Felix Electric',
    h1: 'Commercial Electrician in Tucson, AZ',
    metaDescription:
      'Reliable commercial electrician in Tucson, AZ for offices, retail, restaurants & industrial facilities. Tenant build-outs, maintenance & emergency repairs. Call (520) 929-0296.',
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
      { q: 'Do you work after hours for commercial clients?', a: 'Yes. We offer after-hours and weekend service so your business stays operational. Call (520) 929-0296 to schedule.' },
      { q: 'Can you handle multi-tenant buildings?', a: 'We routinely service multi-tenant retail, office, and industrial properties throughout Tucson and can coordinate with multiple tenants and property managers.' },
      { q: 'Do you provide maintenance contracts?', a: 'Yes — we offer customized preventive maintenance agreements that include scheduled inspections, priority response, and discounted rates.' },
    ],
  },
  {
    slug: 'electrical-repair-tucson-az',
    title: 'Electrical Repair Tucson AZ | Fast & Reliable | Felix Electric',
    h1: 'Electrical Repair in Tucson, AZ',
    metaDescription:
      'Fast electrical repair in Tucson, AZ. Flickering lights, dead outlets, breakers tripping, burning smell? Licensed electricians at (520) 929-0296. Same-day service available.',
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
      '24/7 emergency electrician in Tucson, AZ. Power out, sparking outlet, burning smell? Fast response from licensed electricians. Call (520) 929-0296 now.',
    shortTitle: 'Emergency Electrician',
    summary:
      'Electrical emergency? We respond fast to keep your home or business safe. Call (520) 929-0296 now.',
    icon: 'Siren',
    image: images.outdoorPanel,
    imageAlt: 'Emergency electrician working on an outdoor electrical panel in Tucson',
    intro: [
      'Electrical emergencies don\'t wait for business hours — and neither do we. If you have sparking outlets, a burning smell, a panel that\'s hot to the touch, or you\'ve lost power entirely, call Felix Electric immediately at (520) 929-0296. Our emergency electricians in Tucson respond fast to protect your safety and property.',
      'We prioritize emergency calls and can often have a licensed electrician at your door within the hour. Until we arrive, keep everyone away from the affected area and, if safe, turn off the breaker to that circuit.',
    ],
    benefits: [
      { title: 'Fast Response', desc: 'Emergency dispatch — often at your door within an hour.' },
      { title: '24/7 Availability', desc: 'Nights, weekends, and holidays — we answer the phone.' },
      { title: 'Safety Assessment', desc: 'We identify hazards and make the area safe before any repair.' },
      { title: 'Permanent Fix', desc: 'We don\'t just patch — we repair the underlying problem to code.' },
    ],
    process: [
      { step: 'Call Immediately', desc: 'Dial (520) 929-0296 — describe the emergency and we\'ll advise on immediate safety steps.' },
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
      'Electrical panel upgrade & replacement in Tucson, AZ. Is your panel 100 amps or outdated? Upgrade to 200 amps for safety & capacity. Call (520) 929-0296 for a free quote.',
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
      'EV charger installation in Tucson, AZ. Tesla, ChargePoint, Grizzl-E & more. Level 2 home charging stations installed by licensed electricians. Call (520) 929-0296.',
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
      'Lighting installation in Tucson, AZ — recessed lights, chandeliers, outdoor lighting, landscape & security lighting. Licensed electricians. Call (520) 929-0296.',
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
    title: 'Electrical Outlet Repair Tucson AZ | Felix Electric',
    h1: 'Electrical Outlet Repair in Tucson, AZ',
    metaDescription:
      'Outlet & switch repair in Tucson, AZ. Dead outlets, loose switches, GFCI/AFCI installation, USB outlets. Licensed electricians. Call (520) 929-0296.',
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
      'Ceiling fan installation in Tucson, AZ. Safe mounting, proper wiring, fan-rated boxes & remote controls. Licensed electricians. Call (520) 929-0296 to schedule.',
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
      'Electrical safety inspection in Tucson, AZ. Whole-home inspection, panel check, grounding, GFCI/AFCI audit & detailed report. Licensed electricians. Call (520) 929-0296.',
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
  {
    slug: 'new-construction-electrician-tucson-az',
    title: 'New Construction Electrician Tucson AZ | Felix Electric',
    h1: 'New Construction Electrician in Tucson, AZ',
    metaDescription:
      'Reliable new construction electrician in Tucson, AZ. Custom home wiring, commercial builds, lighting design, and full electrical system installations. Call (520) 929-0296.',
    shortTitle: 'New Construction',
    summary:
      'Complete electrical design and installation for custom homes and new commercial builds, delivered on time and to code.',
    icon: 'Building2',
    image: images.wiring,
    imageAlt: 'Electricians roughing in wiring on a new construction framing in Tucson',
    intro: [
      'Building a new home or commercial property in Tucson requires an electrical contractor you can rely on to keep your project on schedule. Felix Electric provides comprehensive new construction electrical services, working seamlessly with general contractors, architects, and property owners from the ground up.',
      'From the initial temporary power pole to the final trim-out, our licensed electricians handle every phase of construction. We ensure flawless execution, code-compliant installations, and a final product that safely powers your property for decades.'
    ],
    benefits: [
      { title: 'Full-Service Design', desc: 'Custom lighting layouts, smart home wiring, and efficient load planning.' },
      { title: 'Strict Schedule Adherence', desc: 'We coordinate with other trades to keep your build on time.' },
      { title: 'Code Compliance', desc: 'Guaranteed to pass all municipal and county electrical inspections.' },
      { title: 'Temporary Power', desc: 'Setup of temporary job site power to keep construction moving.' }
    ],
    process: [
      { step: 'Plan Review', desc: 'We review blueprints and provide an accurate, detailed proposal.' },
      { step: 'Underground & Temp', desc: 'Trenching, underground conduit, and temporary power setup.' },
      { step: 'Rough-In', desc: 'Wiring pulled and boxes mounted before drywall goes up.' },
      { step: 'Trim-Out & Finish', desc: 'Installing fixtures, devices, panel completion, and final testing.' }
    ],
    faqs: [
      { q: 'Do you work directly with homeowners on custom builds?', a: 'Yes, we work with both general contractors and individual owner-builders to design and install custom electrical systems.' },
      { q: 'Can you wire for smart home automation during construction?', a: 'Absolutely. We can pre-wire for smart lighting, AV systems, security, and networking so your home is future-proofed from day one.' },
      { q: 'How do you handle permitting?', a: 'We handle all necessary electrical permits and coordinate inspections with the city of Tucson or Pima County.' }
    ]
  },
  {
    slug: 'electrical-remodeling-tucson-az',
    title: 'Electrical Remodeling Tucson AZ | Kitchens & Baths | Felix Electric',
    h1: 'Electrical Remodeling in Tucson, AZ',
    metaDescription:
      'Expert electrical remodeling in Tucson, AZ. Kitchen and bathroom electrical upgrades, home additions, lighting retrofits. Licensed electricians. Call (520) 929-0296.',
    shortTitle: 'Remodeling',
    summary:
      'Safe and code-compliant electrical upgrades for kitchen remodels, bathroom renovations, and home additions.',
    icon: 'Wrench',
    image: images.interior,
    imageAlt: 'Modern renovated kitchen with recessed lighting and under-cabinet lights',
    intro: [
      'A successful remodel isn\'t just about how it looks — it\'s about how it works. Whether you\'re updating a vintage Tucson kitchen, adding a master suite, or converting a garage, Felix Electric provides the specialized electrical remodeling services you need.',
      'Remodeling often uncovers old, unsafe wiring or overloaded circuits. Our licensed electricians assess your current system, run new dedicated circuits for modern appliances, add strategic lighting, and ensure your entire renovated space meets the latest National Electrical Code (NEC) standards.'
    ],
    benefits: [
      { title: 'Dedicated Circuits', desc: 'New circuits for microwaves, ovens, and heavy appliances.' },
      { title: 'Code Upgrades', desc: 'Upgrading ungrounded wiring and adding required GFCI/AFCI protection.' },
      { title: 'Lighting Design', desc: 'Under-cabinet lighting, recessed cans, and modern fixture installation.' },
      { title: 'Clean & Careful', desc: 'We respect your home and minimize dust and disruption during renovations.' }
    ],
    process: [
      { step: 'Consultation', desc: 'We walk through the space to understand your layout and power needs.' },
      { step: 'System Audit', desc: 'Evaluating your current panel to ensure it can handle the new load.' },
      { step: 'Demolition & Wiring', desc: 'Safely removing old electrical and pulling new wire during the open-wall phase.' },
      { step: 'Final Installation', desc: 'Installing outlets, switches, and fixtures once drywall and paint are done.' }
    ],
    faqs: [
      { q: 'Will I need a panel upgrade for my remodel?', a: 'It depends on your current panel capacity and what appliances you are adding. We will assess your load and advise you upfront.' },
      { q: 'Do you offer under-cabinet lighting for kitchens?', a: 'Yes, we specialize in custom lighting solutions including under-cabinet LEDs, recessed lighting, and pendant installations.' },
      { q: 'Can you fix wiring done by a previous homeowner?', a: 'Yes. Remodels often reveal DIY electrical work. We can correct code violations and make your system safe.' }
    ]
  }
];

export interface ServiceArea {
  slug: string;
  name: string;
  county: string;
  distance: string;
  description: string;
  uniqueParagraphs?: string[];
}

export const serviceAreas: ServiceArea[] = [
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
];

export const reviews = [
  { name: 'Ana Grijalva', area: 'Tucson, AZ', rating: 5, text: 'Felix Electric came to install a chandelier on a 20+ ft ceiling. They were very efficient, knowledgeable and fast. Their work was super clean and professional. They showed up pretty quick also.' },
  { name: 'Michael Caverly', area: 'Tucson, AZ', rating: 5, text: 'Felix has been doing my work for a little over 5 yrs. Right from the beginning I thought he did great work and was reasonably priced. There was no need to look any further. Retired Home Builder' },
  { name: 'Jose Ibarra', area: 'Tucson, AZ', rating: 5, text: 'Hands down best electrical company in Tucson. Definitely will be using again in the future. 10/10, 100% recommend if you’re looking for any electrical work done look no further, Felix Electrical will have you covered' },
  { name: 'Sebastian Redondo', area: 'Tucson, AZ', rating: 5, text: 'Solid team that works diligently and professionally. Great work, passed inspection first time' },
  { name: 'Jose Dominguez', area: 'Tucson, AZ', rating: 5, text: '' }
];

export const generalFaqs = [
  { q: 'What areas does Felix Electric serve?', a: 'We serve Tucson and surrounding areas including Marana, Oro Valley, Sahuarita, Green Valley, Catalina, Vail, South Tucson, and Casas Adobes.' },
  { q: 'Are you licensed and insured?', a: 'Yes. Felix Electric holds Arizona ROC license #329844 and is fully insured and bonded for your protection.' },
  { q: 'Do you offer same-day service?', a: 'For most repair calls we offer same-day or next-day appointments. Call (520) 929-0296 for current availability.' },
  { q: 'Do you provide free estimates?', a: 'Yes, we provide free, no-obligation quotes for most projects. For complex jobs we may charge a diagnostic fee that is credited toward the work.' },
  { q: 'What are your payment options?', a: 'We accept cash, check, and all major credit cards. For larger projects we offer financing options — ask for details.' },
  { q: 'Do you guarantee your work?', a: 'Yes. All work is backed by our workmanship guarantee. If something isn\'t right, we\'ll come back and fix it at no charge.' },
];
