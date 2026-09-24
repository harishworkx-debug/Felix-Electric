import { Helmet } from 'react-helmet-async';
import { Phone, Star } from 'lucide-react';
import { business } from '@/data/business';
import { reviews } from '@/data/services';
import CTASection from '@/components/CTASection';

export default function Reviews() {
  const reviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'Electrician',
    name: business.name,
    aggregateRating: { '@type': 'AggregateRating', ratingValue: business.rating, reviewCount: business.reviewCount },
    review: reviews.map((r) => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: r.name },
      reviewRating: { '@type': 'Rating', ratingValue: r.rating },
      reviewBody: r.text,
    })),
  };

  return (
    <>
      <Helmet>
        <title>Reviews | Felix Electric Tucson AZ | (520) 929-0296</title>
        <meta name="description" content="Read real customer reviews of Felix Electric — Tucson's trusted electrician. 4.9-star rating from 180+ happy customers. Call (520) 929-0296." />
        <link rel="canonical" href="https://felixelectricaz.com/reviews" />
        <script type="application/ld+json">{JSON.stringify(reviewSchema)}</script>
      </Helmet>

      <section className="relative overflow-hidden pt-28 pb-12 md:pt-36 md:pb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-ink-900 to-ink-950" />
        <div className="relative container-x text-center">
          <span className="eyebrow"><Star className="h-3.5 w-3.5" /> Reviews</span>
          <h1 className="mt-5 font-display text-4xl font-extrabold text-white md:text-5xl">
            What Tucson Says About Us
          </h1>
          <div className="mt-4 flex items-center justify-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-6 w-6 text-spark-400" fill="currentColor" />)}
            </div>
            <span className="text-lg font-bold text-white">{business.rating}</span>
            <span className="text-ink-400">· {business.reviewCount} reviews</span>
          </div>
          <a href={`tel:${business.phoneRaw}`} className="btn-call-lg mt-8">
            <Phone className="h-5 w-5" /> Call {business.phoneDisplay}
          </a>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-x">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
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
        </div>
      </section>

      <CTASection />
    </>
  );
}
