import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  Phone, CheckCircle2, ChevronRight, Star, ShieldCheck, Clock, MapPin, ArrowRight, Zap,
} from 'lucide-react';
import { business, images } from '@/data/business';
import { services, serviceAreas } from '@/data/services';
import type { ServicePage as ServicePageType } from '@/data/services';
import CTASection from '@/components/CTASection';
import { useReveal } from '@/hooks/useReveal';

export default function ServicePage({ service }: { service: ServicePageType }) {
  const benefitsReveal = useReveal();
  const processReveal = useReveal();

  const relatedServices = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.shortTitle,
    provider: {
      '@type': 'Electrician',
      name: business.name,
      telephone: business.phone,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Tucson',
        addressRegion: 'AZ',
        postalCode: '85701',
        addressCountry: 'US',
      },
    },
    areaServed: { '@type': 'City', name: 'Tucson' },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <>
      <Helmet>
        <title>{service.title}</title>
        <meta name="description" content={service.metaDescription} />
        <link rel="canonical" href={`https://felixelectricaz.com/${service.slug}`} />
        <meta property="og:title" content={service.title} />
        <meta property="og:description" content={service.metaDescription} />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* HERO */}
      <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="absolute inset-0">
          <img src={service.image} alt={service.imageAlt} className="h-full w-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/92 to-ink-950/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-ink-950/70" />
        </div>
        <div className="relative container-x">
          <nav className="flex items-center gap-2 text-xs text-ink-400 mb-5">
            <Link to="/" className="hover:text-volt-400">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/services" className="hover:text-volt-400">Services</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-volt-400">{service.shortTitle}</span>
          </nav>
          <div className="max-w-2xl">
            <span className="eyebrow"><Zap className="h-3.5 w-3.5" /> Tucson, AZ</span>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-tight text-white md:text-5xl">
              {service.h1}
            </h1>
            <p className="mt-5 text-lg text-ink-200">{service.summary}</p>
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
        <div className="container-x max-w-3xl">
          {service.intro.map((p, i) => (
            <p key={i} className="mb-5 text-lg leading-relaxed text-ink-200">{p}</p>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="section-pad bg-ink-900/30">
        <div className="container-x">
          <div ref={benefitsReveal.ref} className={`reveal ${benefitsReveal.visible ? 'is-visible' : ''} mx-auto max-w-2xl text-center`}>
            <span className="eyebrow">Why Choose Us</span>
            <h2 className="mt-4 font-display text-3xl font-extrabold text-white md:text-4xl">
              The Felix Electric Difference
            </h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {service.benefits.map((b, i) => (
              <div key={i} className="card">
                <CheckCircle2 className="h-8 w-8 text-volt-400 mb-3" />
                <h3 className="font-display text-base font-bold text-white">{b.title}</h3>
                <p className="mt-2 text-sm text-ink-400">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section-pad">
        <div className="container-x">
          <div ref={processReveal.ref} className={`reveal ${processReveal.visible ? 'is-visible' : ''} mx-auto max-w-2xl text-center`}>
            <span className="eyebrow">How It Works</span>
            <h2 className="mt-4 font-display text-3xl font-extrabold text-white md:text-4xl">
              Simple, Stress-Free Process
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {service.process.map((p, i) => (
              <div key={i} className="relative">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-volt-500 font-display text-lg font-extrabold text-ink-950 shadow-glow-sm">
                  {i + 1}
                </div>
                <h3 className="mt-4 font-display text-base font-bold text-white">{p.step}</h3>
                <p className="mt-2 text-sm text-ink-400">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={`Ready for ${service.shortTitle} in Tucson?`}
        subtitle="Call now for a free quote. Same-day appointments available — we'll get your electrical project done right."
      />

      {/* FAQ */}
      <section className="section-pad">
        <div className="container-x max-w-3xl">
          <div className="text-center">
            <span className="eyebrow">FAQ</span>
            <h2 className="mt-4 font-display text-3xl font-extrabold text-white md:text-4xl">
              {service.shortTitle} Questions & Answers
            </h2>
          </div>
          <div className="mt-10 space-y-4">
            {service.faqs.map((f, i) => (
              <details key={i} className="card group cursor-pointer">
                <summary className="flex items-center justify-between font-display text-base font-bold text-white list-none">
                  {f.q}
                  <ChevronRight className="h-5 w-5 shrink-0 text-volt-400 transition group-open:rotate-90" />
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-ink-300">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="section-pad bg-ink-900/30">
        <div className="container-x">
          <h2 className="font-display text-2xl font-extrabold text-white md:text-3xl text-center">
            Other Services You Might Need
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {relatedServices.map((s) => (
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

      {/* SERVICE AREAS */}
      <section className="section-pad">
        <div className="container-x">
          <div className="text-center">
            <span className="eyebrow"><MapPin className="h-3.5 w-3.5" /> Service Areas</span>
            <h2 className="mt-4 font-display text-2xl font-extrabold text-white md:text-3xl">
              We Serve All of Tucson & Southern Arizona
            </h2>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/electrician-tucson-az" className="btn-outline">Tucson</Link>
            {serviceAreas.map((a) => (
              <Link key={a.slug} to={`/electrician-${a.slug}`} className="btn-outline">{a.name}</Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
