import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  Phone, ChevronRight, Star, ShieldCheck, Clock, MapPin, ArrowRight, Zap, CheckCircle2,
} from 'lucide-react';
import { business, images } from '@/data/business';
import { services, serviceAreas, reviews } from '@/data/services';
import type { ServiceArea } from '@/data/services';
import CTASection from '@/components/CTASection';
import { useReveal } from '@/hooks/useReveal';

export default function LocationPage({ area, type }: { area: ServiceArea; type: 'electrician' | 'services' }) {
  const reveal = useReveal();
  const slug = type === 'electrician' ? `electrician-${area.slug}` : `electrical-services-${area.slug}`;
  const isElectrician = type === 'electrician';

  const title = isElectrician
    ? `Electrician ${area.name} AZ | Licensed Electrician | Felix Electric`
    : `Electrical Services ${area.name} AZ | Felix Electric`;
  const h1 = isElectrician
    ? `Electrician in ${area.name}, AZ`
    : `Electrical Services in ${area.name}, AZ`;
  const metaDesc = isElectrician
    ? `Licensed electrician in ${area.name}, AZ. Residential & commercial electrical repair, panel upgrades, EV chargers, emergency service. Call Felix Electric at (520) 929-0296.`
    : `Electrical services in ${area.name}, AZ — wiring, lighting, panel upgrades, inspections & emergency repair. Licensed, insured. Call Felix Electric at (520) 929-0296.`;

  const localReviews = reviews.slice(0, 3);
  const nearbyAreas = serviceAreas.filter((a) => a.slug !== area.slug).slice(0, 4);

  const localSchema = {
    '@context': 'https://schema.org',
    '@type': 'Electrician',
    name: business.name,
    telephone: business.phone,
    areaServed: { '@type': 'City', name: area.name },
    address: {
      '@type': 'PostalAddress',
      addressLocality: area.name,
      addressRegion: 'AZ',
      addressCountry: 'US',
    },
  };

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={metaDesc} />
        <link rel="canonical" href={`https://felixelectricaz.com/${slug}`} />
        <script type="application/ld+json">{JSON.stringify(localSchema)}</script>
      </Helmet>

      {/* HERO */}
      <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="absolute inset-0">
          <img src={images.hero} alt={images.heroAlt} className="h-full w-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/92 to-ink-950/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-ink-950/70" />
        </div>
        <div className="relative container-x">
          <nav className="flex items-center gap-2 text-xs text-ink-400 mb-5">
            <Link to="/" className="hover:text-volt-400">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/service-areas" className="hover:text-volt-400">Service Areas</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-volt-400">{area.name}</span>
          </nav>
          <div className="max-w-2xl">
            <span className="eyebrow"><MapPin className="h-3.5 w-3.5" /> {area.county} · {area.distance} from Tucson</span>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-tight text-white md:text-5xl">
              {h1}
            </h1>
            <p className="mt-5 text-lg text-ink-200">{area.description}</p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href={`tel:${business.phoneRaw}`} className="btn-call-lg">
                <Phone className="h-5 w-5" /> Call {business.phoneDisplay}
              </a>
              <Link to="/contact" className="btn-outline">
                Get a Free Quote <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-ink-300">
              <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-volt-400" /> Licensed & Insured</span>
              <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-volt-400" /> Same-Day Service</span>
              <span className="flex items-center gap-2"><Star className="h-4 w-4 text-spark-400" fill="currentColor" /> {business.rating} Rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="section-pad">
        <div className="container-x grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="font-display text-2xl font-extrabold text-white md:text-3xl">
              Your Trusted {area.name} Electrician
            </h2>
            <div className="mt-5 space-y-4 text-ink-200 leading-relaxed">
              <p>
                Felix Electric is proud to serve {area.name} and the surrounding communities in {area.county}.
                As a locally owned electrical company based in Tucson, we understand the unique needs of
                {area.name} homeowners and businesses — from the desert climate's impact on outdoor
                electrical systems to the older wiring found in many area homes.
              </p>
              <p>
                {isElectrician
                  ? `When you search for an electrician in ${area.name}, you want someone who's licensed, insured, and stands behind their work. That's exactly what you get with Felix Electric. We handle everything from simple outlet repairs to complete panel upgrades, and we respond fast because we know electrical issues can't wait.`
                  : `Our electrical services in ${area.name} cover the full range of residential and commercial needs — wiring, lighting, panel upgrades, EV charger installation, safety inspections, and 24/7 emergency repair. Every job is done to current NEC and local code, with upfront pricing and a workmanship guarantee.`}
              </p>
              <p>
                We're just {area.distance} from central Tucson, which means we can often reach your
                {area.name} home or business the same day you call. Contact us at (520) 929-0296 and
                let's get your electrical project handled.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                'Licensed & Insured (AZ ROC #329844)',
                'Upfront, Flat-Rate Pricing',
                'Same-Day & Emergency Service',
                'Workmanship Guarantee',
                'Clean, Professional Crew',
                `${business.yearsServing}+ Years in Southern Arizona`,
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-ink-200">
                  <CheckCircle2 className="h-5 w-5 text-volt-400 shrink-0" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <img src={images.portrait} alt={images.portraitAlt} className="w-full rounded-2xl object-cover shadow-card" loading="lazy" />
            <img src={images.fusebox} alt={images.fuseboxAlt} className="w-full rounded-2xl object-cover shadow-card" loading="lazy" />
          </div>
        </div>
      </section>

      {/* SERVICES OFFERED */}
      <section className="section-pad bg-ink-900/30">
        <div className="container-x">
          <div ref={reveal.ref} className={`reveal ${reveal.visible ? 'is-visible' : ''} text-center`}>
            <span className="eyebrow"><Zap className="h-3.5 w-3.5" /> Services in {area.name}</span>
            <h2 className="mt-4 font-display text-3xl font-extrabold text-white md:text-4xl">
              Electrical Services in {area.name}
            </h2>
            <p className="mt-4 text-lg text-ink-300 max-w-2xl mx-auto">
              We offer the full range of electrical services to {area.name} residents and businesses.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link key={s.slug} to={`/${s.slug}`} className="card group">
                <h3 className="font-display text-base font-bold text-white group-hover:text-volt-400">{s.shortTitle}</h3>
                <p className="mt-2 text-sm text-ink-400">{s.summary}</p>
                <span className="mt-3 flex items-center gap-1.5 text-sm font-semibold text-volt-400">
                  Explore {s.shortTitle} <ChevronRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={`Need an Electrician in ${area.name}?`}
        subtitle={`Call now for fast, reliable electrical service in ${area.name}, AZ. Same-day appointments available.`}
      />

      {/* REVIEWS */}
      <section className="section-pad">
        <div className="container-x">
          <div className="text-center">
            <span className="eyebrow"><Star className="h-3.5 w-3.5" /> Reviews</span>
            <h2 className="mt-4 font-display text-3xl font-extrabold text-white md:text-4xl">
              What {area.name} Customers Say
            </h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {localReviews.map((r, i) => (
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
        </div>
      </section>

      {/* NEARBY AREAS */}
      <section className="section-pad bg-ink-900/30">
        <div className="container-x">
          <div className="text-center">
            <span className="eyebrow"><MapPin className="h-3.5 w-3.5" /> Nearby Areas</span>
            <h2 className="mt-4 font-display text-2xl font-extrabold text-white md:text-3xl">
              We Also Serve These Nearby Areas
            </h2>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/electrician-tucson-az" className="btn-outline">Tucson</Link>
            {nearbyAreas.map((a) => (
              <Link key={a.slug} to={`/electrician-${a.slug}`} className="btn-outline">{a.name}</Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
