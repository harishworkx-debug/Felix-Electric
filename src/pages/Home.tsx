import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  Phone, Zap, ShieldCheck, Clock, Star, Home as HomeIcon, Building2, Wrench, Siren,
  BatteryCharging, Lightbulb, ToggleRight, Fan, MapPin, ChevronRight,
  CheckCircle2, Award, ThumbsUp, ArrowRight,
} from 'lucide-react';
import { business, images } from '@/data/business';
import { services, serviceAreas, reviews, generalFaqs } from '@/data/services';
import CTASection from '@/components/CTASection';
import { useReveal } from '@/hooks/useReveal';

const iconMap: Record<string, typeof HomeIcon> = {
  Home: HomeIcon, Building2, Wrench, Siren, Zap, BatteryCharging, Lightbulb, ToggleRight, Fan, ShieldCheck,
};

export default function Home() {
  const trustReveal = useReveal();
  const servicesReveal = useReveal();
  const areasReveal = useReveal();
  const reviewsReveal = useReveal();

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: generalFaqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <>
      <Helmet>
        <title>Felix Electric | Licensed Electrician Tucson AZ | Call (520) 929-0296</title>
        <meta name="description" content="Felix Electric — licensed electrician in Tucson, AZ. Residential & commercial electrical service, panel upgrades, EV chargers, emergency repairs. Call (520) 929-0296 for same-day service." />
        <link rel="canonical" href="https://felixelectricaz.com/" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Electrician',
            name: business.name,
            telephone: business.phone,
            email: business.email,
            url: 'https://felixelectricaz.com',
            image: images.hero,
            priceRange: '$$',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Tucson',
              addressRegion: 'AZ',
              postalCode: '85701',
              addressCountry: 'US',
            },
            areaServed: ['Tucson', 'Marana', 'Oro Valley', 'Sahuarita', 'Green Valley', 'Catalina', 'Vail'],
            aggregateRating: { '@type': 'AggregateRating', ratingValue: business.rating, reviewCount: business.reviewCount },
            openingHoursSpecification: [
              { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '07:00', closes: '19:00' },
              { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '08:00', closes: '17:00' },
            ],
          })}
        </script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* HERO */}
      <section className="relative min-h-[100svh] overflow-hidden">
        <div className="absolute inset-0">
          <img src={images.hero} alt={images.heroAlt} className="h-full w-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/90 to-ink-950/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-ink-950/60" />
        </div>

        <div className="relative container-x flex min-h-[100svh] flex-col justify-center pt-24 pb-16">
          <div className="max-w-2xl">
            <div className="eyebrow animate-fade-in">
              <Zap className="h-3.5 w-3.5" />
              Licensed Electrician in Tucson, AZ
            </div>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl md:text-6xl animate-fade-up">
              Tucson’s Most Trusted & Reliable{' '}
              <span className="text-volt-400">Electricians</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-200 animate-fade-up" style={{ animationDelay: '0.1s' }}>
              Don't let electrical issues disrupt your life. From fast emergency repairs and panel upgrades to complete rewiring, Felix Electric delivers premium, code-compliant solutions for homes and businesses across Southern Arizona.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <a href={`tel:${business.phoneRaw}`} className="btn-call-lg">
                <Phone className="h-5 w-5" />
                Call {business.phoneDisplay}
              </a>
              <Link to="/contact" className="btn-outline">
                Get a Free Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-ink-300 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <span className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-volt-400" />
                {business.license}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-volt-400" />
                Same-Day Service
              </span>
              <span className="flex items-center gap-2">
                <Star className="h-4 w-4 text-spark-400" fill="currentColor" />
                {business.rating} · {business.reviewCount} Reviews
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="border-y border-ink-800 bg-ink-900/50 py-6">
        <div className="container-x">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {[
              { icon: Award, value: `${business.yearsServing} Years`, label: 'Serving Tucson' },
              { icon: ShieldCheck, value: 'Licensed', label: business.license },
              { icon: Clock, value: '24/7', label: 'Emergency Service' },
              { icon: Star, value: business.rating, label: `${business.reviewCount} Google Reviews` },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-volt-500/10">
                  <item.icon className="h-5 w-5 text-volt-400" />
                </div>
                <div>
                  <div className="font-display text-lg font-bold text-white">{item.value}</div>
                  <div className="text-xs text-ink-400">{item.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section-pad">
        <div className="container-x">
          <div ref={servicesReveal.ref} className={`reveal ${servicesReveal.visible ? 'is-visible' : ''} mx-auto max-w-2xl text-center`}>
            <span className="eyebrow"><Zap className="h-3.5 w-3.5" /> Our Services</span>
            <h2 className="mt-4 font-display text-3xl font-extrabold text-white md:text-4xl">
              Premium Electrical Services for Every Need
            </h2>
            <p className="mt-4 text-lg text-ink-300">
              From rapid troubleshooting and simple outlet repairs to complex commercial build-outs, our licensed electricians are equipped to handle any challenge with safety and precision.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => {
              const Icon = iconMap[s.icon] || Zap;
              return (
                <Link
                  key={s.slug}
                  to={`/${s.slug}`}
                  className="card group flex flex-col"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-volt-500/10 transition group-hover:bg-volt-500/20">
                      <Icon className="h-6 w-6 text-volt-400" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-white group-hover:text-volt-400 transition">
                      {s.shortTitle}
                    </h3>
                  </div>
                  <p className="flex-1 text-sm leading-relaxed text-ink-400">{s.summary}</p>
                  <span className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-volt-400">
                    Explore {s.shortTitle} <ChevronRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section-pad bg-ink-900/30">
        <div className="container-x">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div ref={trustReveal.ref} className={`reveal ${trustReveal.visible ? 'is-visible' : ''}`}>
              <span className="eyebrow"><ShieldCheck className="h-3.5 w-3.5" /> Why Choose Felix Electric</span>
              <h2 className="mt-4 font-display text-3xl font-extrabold text-white md:text-4xl">
                Why We Are Tucson’s Top Choice
              </h2>
              <p className="mt-4 text-lg text-ink-300">
                With over 15 years of hands-on experience, Felix Electric sets the gold standard for electrical contractors. We provide lasting peace of mind through unwavering professionalism and crystal-clear pricing.
              </p>
              <div className="mt-8 space-y-5">
                {[
                  { icon: ShieldCheck, title: 'Licensed, Insured & Bonded', desc: `Arizona ROC #329844 — every job is permitted, inspected, and guaranteed.` },
                  { icon: ThumbsUp, title: 'Upfront Flat-Rate Pricing', desc: 'You approve the price before we start. No hourly surprises, no hidden fees.' },
                  { icon: Clock, title: 'Same-Day & Emergency Service', desc: 'Electrical problems can\'t wait. We offer same-day appointments and 24/7 emergency response.' },
                  { icon: Award, title: 'Clean, Professional Work', desc: 'Drop cloths, shoe covers, and a spotless cleanup on every visit — every time.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-volt-500/10">
                      <item.icon className="h-5 w-5 text-volt-400" />
                    </div>
                    <div>
                      <h3 className="font-display text-base font-bold text-white">{item.title}</h3>
                      <p className="mt-1 text-sm text-ink-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img src={images.portrait} alt={images.portraitAlt} className="w-full rounded-2xl object-cover shadow-card" loading="lazy" />
                  <img src={images.lighting} alt={images.lightingAlt} className="w-full rounded-2xl object-cover shadow-card" loading="lazy" />
                </div>
                <div className="space-y-4 pt-8">
                  <img src={images.panel} alt={images.panelAlt} className="w-full rounded-2xl object-cover shadow-card" loading="lazy" />
                  <img src={images.evCharger} alt={images.evChargerAlt} className="w-full rounded-2xl object-cover shadow-card" loading="lazy" />
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 right-4 rounded-2xl border border-volt-600/30 bg-ink-950/90 p-5 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-volt-500 shadow-glow-sm">
                    <Zap className="h-6 w-6 text-ink-950" fill="currentColor" />
                  </div>
                  <div>
                    <div className="font-display text-xl font-extrabold text-white">{business.yearsServing}+ Years</div>
                    <div className="text-xs text-ink-400">Serving Tucson & Southern Arizona</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />

      {/* REVIEWS */}
      <section className="section-pad">
        <div className="container-x">
          <div ref={reviewsReveal.ref} className={`reveal ${reviewsReveal.visible ? 'is-visible' : ''} mx-auto max-w-2xl text-center`}>
            <span className="eyebrow"><Star className="h-3.5 w-3.5" /> Customer Reviews</span>
            <h2 className="mt-4 font-display text-3xl font-extrabold text-white md:text-4xl">
              What Tucson Says About Felix Electric
            </h2>
            <div className="mt-4 flex items-center justify-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 text-spark-400" fill="currentColor" />)}
              </div>
              <span className="text-sm font-semibold text-ink-200">{business.rating} · {business.reviewCount} reviews</span>
            </div>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((r, i) => (
              <div key={i} className="card">
                <div className="flex gap-1 mb-3">
                  {[...Array(r.rating)].map((_, j) => <Star key={j} className="h-4 w-4 text-spark-400" fill="currentColor" />)}
                </div>
                <p className="text-sm leading-relaxed text-ink-200">"{r.text}"</p>
                <div className="mt-4 flex items-center gap-3 border-t border-ink-800 pt-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-volt-500/15 font-bold text-volt-400">
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">{r.name}</div>
                    <div className="text-xs text-ink-400">{r.area}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/reviews" className="btn-outline">
              Read More Reviews <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="section-pad bg-ink-900/30">
        <div className="container-x">
          <div ref={areasReveal.ref} className={`reveal ${areasReveal.visible ? 'is-visible' : ''} mx-auto max-w-2xl text-center`}>
            <span className="eyebrow"><MapPin className="h-3.5 w-3.5" /> Service Areas</span>
            <h2 className="mt-4 font-display text-3xl font-extrabold text-white md:text-4xl">
              Proudly Serving Tucson & Southern Arizona
            </h2>
            <p className="mt-4 text-lg text-ink-300">
              Fast, reliable electrical service across the greater Tucson metro area. Click your area
              for local service information.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Link to="/electrician-tucson-az" className="card group flex items-center justify-between">
              <div>
                <div className="font-display text-base font-bold text-white group-hover:text-volt-400">Tucson</div>
                <div className="text-xs text-ink-400">Pima County</div>
              </div>
              <ChevronRight className="h-5 w-5 text-ink-500 group-hover:text-volt-400 transition" />
            </Link>
            {serviceAreas.map((area) => (
              <Link key={area.slug} to={`/electrician-${area.slug}`} className="card group flex items-center justify-between">
                <div>
                  <div className="font-display text-base font-bold text-white group-hover:text-volt-400">{area.name}</div>
                  <div className="text-xs text-ink-400">{area.distance} · {area.county}</div>
                </div>
                <ChevronRight className="h-5 w-5 text-ink-500 group-hover:text-volt-400 transition" />
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/service-areas" className="btn-outline">
              View All Service Areas <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad">
        <div className="container-x max-w-3xl">
          <div className="text-center">
            <span className="eyebrow">FAQ</span>
            <h2 className="mt-4 font-display text-3xl font-extrabold text-white md:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="mt-10 space-y-4">
            {generalFaqs.map((f, i) => (
              <details key={i} className="card group cursor-pointer">
                <summary className="flex items-center justify-between font-display text-base font-bold text-white list-none">
                  {f.q}
                  <ChevronRight className="h-5 w-5 shrink-0 text-volt-400 transition group-open:rotate-90" />
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-ink-300">{f.a}</p>
              </details>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-ink-300">Still have questions?</p>
            <a href={`tel:${business.phoneRaw}`} className="btn-call mt-4">
              <Phone className="h-4 w-4" /> Call {business.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      {/* MAP + CONTACT PREVIEW */}
      <section className="section-pad bg-ink-900/30">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <span className="eyebrow"><MapPin className="h-3.5 w-3.5" /> Find Us</span>
              <h2 className="mt-4 font-display text-3xl font-extrabold text-white">
                Serving Tucson & All of Southern Arizona
              </h2>
              <p className="mt-4 text-ink-300">
                Based in Tucson, we serve homeowners and businesses throughout Pima County and the
                surrounding areas. Call us — we'll come to you.
              </p>
              <div className="mt-6 space-y-3">
                {[
                  { icon: Phone, label: business.phoneDisplay, href: `tel:${business.phoneRaw}` },
                  { icon: MapPin, label: `${business.city}, ${business.state}` },
                  { icon: Clock, label: 'Mon–Fri 7AM–7PM · Sat 8AM–5PM' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-ink-200">
                    <item.icon className="h-5 w-5 text-volt-400" />
                    {item.href ? (
                      <a href={item.href} className="font-semibold hover:text-volt-400">{item.label}</a>
                    ) : (
                      <span className="font-semibold">{item.label}</span>
                    )}
                  </div>
                ))}
              </div>
              <a href={`tel:${business.phoneRaw}`} className="btn-call-lg mt-8">
                <Phone className="h-5 w-5" /> Call {business.phoneDisplay}
              </a>
            </div>
            <div className="overflow-hidden rounded-2xl border border-ink-800 shadow-card">
              <iframe
                src={business.mapsEmbed}
                width="100%"
                height="400"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Felix Electric service area map - Tucson, AZ"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
