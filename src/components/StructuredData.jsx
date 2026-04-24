export default function StructuredData() {
  const businessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Basaveshwara Packers & Movers',
    description: 'Specialist in House Hold Goods & Domestic goods Shifting Services',
    url: 'https://basaveshwarapackers.in',
    telephone: '+91-86606-16322',
    areaServed: [
      {
        '@type': 'City',
        name: 'Doddaballapur',
      },
      {
        '@type': 'City',
        name: 'Bangalore',
      },
      {
        '@type': 'State',
        name: 'Karnataka',
      },
    ],
    sameAs: [
      'https://www.facebook.com/basaveshwarapackers',
      'https://www.instagram.com/basaveshwarapackers',
      'https://www.linkedin.com/company/basaveshwarapackers',
    ],
    image: 'https://basaveshwarapackers.in/logo.png',
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
    name: 'House Hold & Domestic Shifting Services',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Basaveshwara Packers & Movers',
    },
    description: 'Specialist in House Hold Goods & Domestic goods Shifting Services',
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
