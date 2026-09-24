import { Helmet } from 'react-helmet-async';
import { Phone, ChevronRight } from 'lucide-react';
import { business } from '@/data/business';
import { generalFaqs } from '@/data/services';
import CTASection from '@/components/CTASection';

export default function FAQ() {
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
        <title>FAQ | Felix Electric Tucson AZ | (520) 929-0296</title>
        <meta name="description" content="Frequently asked questions about electrical service in Tucson, AZ. Licensing, pricing, same-day service, warranties & more. Call Felix Electric at (520) 929-0296." />
        <link rel="canonical" href="https://felixelectricaz.com/faq" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <section className="relative overflow-hidden pt-28 pb-12 md:pt-36 md:pb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-ink-900 to-ink-950" />
        <div className="relative container-x text-center">
          <span className="eyebrow">FAQ</span>
          <h1 className="mt-5 font-display text-4xl font-extrabold text-white md:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-ink-300">
            Got questions? We've got answers. Still need help? Call us anytime.
          </p>
          <a href={`tel:${business.phoneRaw}`} className="btn-call-lg mt-8">
            <Phone className="h-5 w-5" /> Call {business.phoneDisplay}
          </a>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-x max-w-3xl">
          <div className="space-y-4">
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
        </div>
      </section>

      <CTASection />
    </>
  );
}
