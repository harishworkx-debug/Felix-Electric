import { Helmet } from 'react-helmet-async';
import { business } from '@/data/business';

interface SEOProps {
  title: string;
  description: string;
  canonical: string;
  schema?: object;
}

export default function SEO({ title, description, canonical, schema }: SEOProps) {
  const url = `https://felixelectricaz.com${canonical}`;
  const baseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Electrician',
    name: business.name,
    telephone: business.phone,
    email: business.email,
    url: 'https://felixelectricaz.com',
    image: 'https://felixelectricaz.com/og-image.jpg',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: business.city,
      addressRegion: business.stateShort,
      postalCode: '85701',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 32.2226,
      longitude: -110.9747,
    },
    areaServed: ['Tucson', 'Marana', 'Oro Valley', 'Sahuarita', 'Green Valley', 'Catalina', 'Vail', 'South Tucson', 'Casas Adobes'],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '07:00',
        closes: '19:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '08:00',
        closes: '17:00',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: business.rating,
      reviewCount: business.reviewCount,
    },
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <script type="application/ld+json">
        {JSON.stringify(schema || baseSchema)}
      </script>
    </Helmet>
  );
}
