import { Helmet } from 'react-helmet-async';

const BASE_URL = 'https://thomaswindow.com';
const DEFAULT_OG_IMAGE = `${BASE_URL}/thomas-logo.png`;
const SITE_NAME = 'Thomas Window Cleaning';

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  schema?: Record<string, unknown> | Record<string, unknown>[];
  noindex?: boolean;
}

export const SEOHead = ({
  title,
  description,
  canonical,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = 'website',
  schema,
  noindex = false,
}: SEOHeadProps) => {
  const fullCanonical = canonical ? `${BASE_URL}${canonical}` : undefined;

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: SITE_NAME,
    image: DEFAULT_OG_IMAGE,
    telephone: '+1-847-404-3398',
    url: BASE_URL,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Wheeling',
      addressRegion: 'IL',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 42.1392,
      longitude: -87.9290,
    },
    areaServed: [
      'Wheeling', 'Arlington Heights', 'Schaumburg', 'Des Plaines',
      'Palatine', 'Glenview', 'Buffalo Grove', 'Mount Prospect',
      'Northbrook', 'Prospect Heights', 'Elk Grove Village', 'Rolling Meadows',
    ].map(city => ({ '@type': 'City', name: `${city}, IL` })),
    priceRange: '$$',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '07:00',
      closes: '18:00',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '200',
    },
  };

  const schemas = schema
    ? Array.isArray(schema) ? [localBusinessSchema, ...schema] : [localBusinessSchema, schema]
    : [localBusinessSchema];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {fullCanonical && <link rel="canonical" href={fullCanonical} />}
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={SITE_NAME} />
      {fullCanonical && <meta property="og:url" content={fullCanonical} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
};
