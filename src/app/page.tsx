import Link from 'next/link';

export default function Home() {
  const services = [
    {
      title: 'Boiler Installation',
      description: 'Expert installation of new boiler systems tailored to your home.',
      icon: '🔧',
    },
    {
      title: 'Boiler Repair',
      description: 'Fast and reliable repair services for all boiler types.',
      icon: '🛠️',
    },
    {
      title: 'Central Heating',
      description: 'Complete central heating maintenance and installation.',
      icon: '🌡️',
    },
    {
      title: 'Boiler Servicing',
      description: 'Annual servicing to keep your system running efficiently.',
      icon: '📋',
    },
    {
      title: 'Plumbing Services',
      description: 'Comprehensive plumbing solutions for all your needs.',
      icon: '💧',
    },
    {
      title: 'Emergency Call-outs',
      description: '24/7 emergency response for urgent heating issues.',
      icon: '🚨',
    },
  ];

  const whyChooseUs = [
    {
      title: 'Expert Technicians',
      description: 'Highly trained and certified professionals with years of experience.',
      icon: '👨‍🔧',
    },
    {
      title: '24/7 Availability',
      description: 'Available around the clock for emergencies and urgent repairs.',
      icon: '⏰',
    },
    {
      title: 'Fast Response',
      description: 'Quick response times to get your heating back up and running.',
      icon: '⚡',
    },
    {
      title: 'Transparent Pricing',
      description: 'Clear, honest pricing with no hidden charges or surprises.',
      icon: '💷',
    },
    {
      title: 'Quality Guarantee',
      description: 'All work comes with our comprehensive satisfaction guarantee.',
      icon: '✅',
    },
    {
      title: 'Local Expertise',
      description: 'Deep knowledge of local properties and climate conditions.',
      icon: '🗺️',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-700 via-red-600 to-blue-700 text-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Professional Heating & Plumbing Services
              </h1>
              <p className="text-lg mb-8 text-red-50">
                Trusted by homeowners across the UK. Expert boiler installation, repair, and servicing with 24/7 emergency support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-white text-red-700 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors text-center"
                >
                  Get a Free Quote
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-red-700 transition-colors text-center"
                >
                  Contact Us
                </Link>
              </div>
              <div className="mt-10 flex gap-8 text-sm">
                <div>
                  <p className="text-3xl font-bold">15+</p>
                  <p className="text-red-100">Years Experience</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">2000+</p>
                  <p className="text-red-100">Homes Served</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">24/7</p>
                  <p className="text-red-100">Emergency Support</p>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-gradient-to-br from-red-600 to-blue-600 rounded-lg h-96 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-6xl mb-4">🔥</p>
                  <p className="text-xl font-semibold">Professional Heating Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive heating and plumbing solutions tailored to meet all your needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-red-700 hover:shadow-lg transition-all"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="bg-red-700 text-white px-8 py-3 rounded-lg font-bold hover:bg-red-800 transition-colors inline-block"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose SM Heating & Plumbing?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We deliver exceptional service through professionalism, reliability, and customer care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((reason, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-4">{reason.icon}</div>
                <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-gradient-to-r from-red-700 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Don't Let Heating Issues Get You Down
          </h2>
          <p className="text-lg mb-8 text-red-50 max-w-2xl mx-auto">
            Contact us today for a free consultation and quote. Our team is ready to help you stay warm and comfortable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-red-700 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors text-center"
            >
              Contact Us Now
            </Link>
            <a
              href="tel:+441234567890"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-red-700 transition-colors text-center"
            >
              Call: +44 (0) 123 456 7890
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
