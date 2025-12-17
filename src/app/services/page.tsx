import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Services | SM Heating & Plumbing',
  description: 'Boiler installation, repair, servicing, central heating, plumbing, and 24/7 emergency call-outs.',
};

export default function Services() {
  const services = [
    {
      id: 'boiler-installation',
      title: 'Boiler Installation',
      icon: '🔧',
      description:
        'Our team specializes in the professional installation of high-efficiency boiler systems for residential properties. We assess your home\'s heating requirements, recommend the most suitable system, and complete the installation with precision and care. We ensure optimal performance and energy efficiency for your new heating system.',
      features: [
        'System assessment and recommendations',
        'Professional installation by certified technicians',
        'Efficiency optimization and performance testing',
        'Warranty and after-sales support',
      ],
    },
    {
      id: 'boiler-repair',
      title: 'Boiler Repair',
      icon: '🛠️',
      description:
        'When your boiler breaks down, our rapid response team is ready to help. We diagnose issues quickly and provide effective solutions to restore your heating system. From minor repairs to complete system overhauls, we handle all types of boiler problems with expertise.',
      features: [
        'Emergency repair availability',
        'Rapid diagnostics and troubleshooting',
        'All boiler types and brands supported',
        'Quality parts and professional workmanship',
      ],
    },
    {
      id: 'boiler-servicing',
      title: 'Boiler Servicing',
      icon: '📋',
      description:
        'Regular boiler servicing is essential for maintaining efficiency, safety, and reliability. Our comprehensive servicing includes inspection, cleaning, testing, and adjustments to ensure your system operates at peak performance throughout the year.',
      features: [
        'Annual maintenance plans available',
        'Full system inspection and testing',
        'Component cleaning and adjustment',
        'Safety certificate and documentation',
      ],
    },
    {
      id: 'central-heating',
      title: 'Central Heating Services',
      icon: '🌡️',
      description:
        'We provide complete central heating solutions including installation, repair, and maintenance. Our services ensure consistent, comfortable warmth throughout your home while maintaining energy efficiency and safety standards.',
      features: [
        'System design and installation',
        'Radiator and pipe repair/replacement',
        'Pressure and temperature optimization',
        'System flushing and updates',
      ],
    },
    {
      id: 'plumbing',
      title: 'Plumbing Services',
      icon: '💧',
      description:
        'From simple repairs to complex installations, our plumbing team handles all water system needs. We provide reliable solutions for leaks, blockages, installations, and more, ensuring your water systems function flawlessly.',
      features: [
        'Leak detection and repair',
        'Drain cleaning and unblocking',
        'Fixture installation and replacement',
        'Water system maintenance',
      ],
    },
    {
      id: 'emergency',
      title: 'Emergency Call-outs',
      icon: '🚨',
      description:
        'Heating emergencies don\'t wait, and neither do we. Our 24/7 emergency service ensures that help is just a phone call away, any time of day or night. We respond quickly to get your heating back on track as soon as possible.',
      features: [
        'Available 24 hours, 7 days a week',
        'Rapid response times',
        'Expert problem solving',
        'Transparent emergency pricing',
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-red-50 to-blue-50 text-gray-800 py-16 md:py-24 border-b-2 border-red-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">Our Services</h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Comprehensive heating and plumbing solutions designed to keep your home comfortable and safe year-round.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'md:grid-cols-2' : ''
                }`}
              >
                {/* Text on left for odd items, right for even */}
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="text-6xl mb-4">{service.icon}</div>
                  <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                  <p className="text-gray-600 text-lg mb-6">{service.description}</p>
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <span className="text-red-600 font-bold mt-1">✓</span>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    href="/contact"
                    className="bg-red-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700 transition-colors inline-block"
                  >
                    Get Started
                  </Link>
                </div>

                {/* Image/Icon area */}
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <div className="bg-gradient-to-br from-red-50 to-blue-50 rounded-lg h-72 flex items-center justify-center border border-red-100">
                    <div className="text-center">
                      <p className="text-8xl mb-4">{service.icon}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-red-100 to-blue-100 text-gray-800 py-16 border-t-2 border-red-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            Ready to Get Your Heating Fixed?
          </h2>
          <p className="text-lg mb-8 text-gray-600 max-w-2xl mx-auto">
            Contact our team today for a free consultation. We're ready to help with all your heating and plumbing needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-red-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-red-700 transition-colors text-center"
            >
              Get a Free Quote
            </Link>
            <a
              href="tel:+441234567890"
              className="border-2 border-red-600 text-red-600 px-8 py-3 rounded-lg font-bold hover:bg-red-50 transition-colors text-center"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
