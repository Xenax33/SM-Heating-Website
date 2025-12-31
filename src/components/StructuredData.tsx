export default function StructuredData() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        '@id': 'https://www.smheatingplumbing.co.uk',
        'name': 'SM Heating & Plumbing',
        'description': 'Professional Gas Safe registered boiler, heating, and plumbing services across Glasgow and surrounding areas',
        'url': 'https://www.smheatingplumbing.co.uk',
        'image': 'https://www.smheatingplumbing.co.uk/images/gas-safe-register.jpeg',
        'telephone': '+44-7487-616462',
        'email': 'info@smheating.co.uk',
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': '16 Duncansby Road',
          'addressLocality': 'Glasgow',
          'postalCode': 'G33 4QX',
          'addressCountry': 'GB',
        },
        'areaServed': [
          { '@type': 'City', 'name': 'Glasgow' },
          { '@type': 'City', 'name': 'Hamilton' },
          { '@type': 'City', 'name': 'Paisley' },
          { '@type': 'City', 'name': 'Wishaw' },
          { '@type': 'City', 'name': 'Lanark' },
          { '@type': 'City', 'name': 'Motherwell' },
          { '@type': 'City', 'name': 'Coatbridge' },
          { '@type': 'City', 'name': 'East Kilbride' },
        ],
        'priceRange': '$$',
        'openingHoursSpecification': [
          {
            '@type': 'OpeningHoursSpecification',
            'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            'opens': '08:00',
            'closes': '18:00',
          },
          {
            '@type': 'OpeningHoursSpecification',
            'dayOfWeek': 'Saturday',
            'opens': '09:00',
            'closes': '16:00',
          },
        ],
        'geo': {
          '@type': 'GeoCoordinates',
          'latitude': '55.856479205013734',
          'longitude': '-4.149371813436323',
        },
        'aggregateRating': {
          '@type': 'AggregateRating',
          'ratingValue': '5',
          'reviewCount': '6',
        },
        'sameAs': [],
      },
      {
        '@type': 'Organization',
        '@id': 'https://www.smheatingplumbing.co.uk',
        'name': 'SM Heating & Plumbing',
        'url': 'https://www.smheatingplumbing.co.uk',
        'logo': 'https://www.smheatingplumbing.co.uk/logo.png',
        'description': 'Professional Gas Safe registered heating and plumbing services',
      },
      {
        '@type': 'Service',
        'name': 'Boiler Installation',
        'description': 'Expert installation of new boiler systems tailored to your home',
        'provider': {
          '@type': 'LocalBusiness',
          '@id': 'https://www.smheatingplumbing.co.uk',
        },
      },
      {
        '@type': 'Service',
        'name': 'Boiler Repair',
        'description': 'Fast and reliable repair services for all boiler types',
        'provider': {
          '@type': 'LocalBusiness',
          '@id': 'https://www.smheatingplumbing.co.uk',
        },
      },
      {
        '@type': 'Service',
        'name': 'Central Heating Services',
        'description': 'Complete central heating maintenance and installation',
        'provider': {
          '@type': 'LocalBusiness',
          '@id': 'https://www.smheatingplumbing.co.uk',
        },
      },
      {
        '@type': 'Service',
        'name': 'Emergency Plumbing & Heating',
        'description': '24/7 emergency call-out service for urgent heating and plumbing issues',
        'provider': {
          '@type': 'LocalBusiness',
          '@id': 'https://www.smheatingplumbing.co.uk',
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
