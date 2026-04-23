export default function StructuredData() {
  const businessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'SwiftMove®',
    description: 'Premium packers and movers with real-time tracking and AI-powered estimates',
    url: 'https://swiftmove.local',
    telephone: '+1-800-123-4567',
    areaServed: [
      {
        '@type': 'City',
        name: 'Mumbai',
      },
      {
        '@type': 'City',
        name: 'Bangalore',
      },
      {
        '@type': 'City',
        name: 'Delhi',
      },
    ],
    sameAs: [
      'https://www.facebook.com/swiftmove',
      'https://www.instagram.com/swiftmove',
      'https://www.linkedin.com/company/swiftmove',
    ],
    image: 'https://swiftmove.local/logo.png',
    priceRange: '$',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: 4.8,
      reviewCount: 247,
    },
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Professional Moving Services',
    provider: {
      '@type': 'LocalBusiness',
      name: 'SwiftMove®',
    },
    description: 'Premium relocation and moving services with white-glove care',
    areaServed: 'IN',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Moving Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Residential Moving',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Commercial Moving',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'International Relocation',
          },
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  );
}
