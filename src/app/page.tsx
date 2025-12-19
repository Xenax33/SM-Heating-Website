import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const services = [
    {
      title: 'Boiler Installation',
      description: 'Expert installation of new boiler systems tailored to your home.',
      image: '/images/boiler-heating-system.jpg',
    },
    {
      title: 'Boiler Repair',
      description: 'Fast and reliable repair services for all boiler types.',
      image: '/images/boiler-repair.jpeg',
    },
    {
      title: 'Central Heating',
      description: 'Complete central heating maintenance and installation.',
      image: '/images/central-heating.jpeg',
    },
    {
      title: 'Boiler Servicing',
      description: 'Annual servicing to keep your system running efficiently.',
      image: '/images/boiler-services.jpeg',
    },
    {
      title: 'Plumbing Services',
      description: 'Comprehensive plumbing solutions for all your needs.',
      image: '/images/plumbing-professional-doing-his-job.jpg',
    },
    {
      title: 'Emergency Call-outs',
      description: '24/7 emergency response for urgent heating issues.',
      image: '/images/worker-repairing-water-heater.jpg',
    },
    {
      title: 'Appliance Repair & Maintenance',
      description: 'Professional repair and maintenance for home appliances including fridges, washing machines, and more.',
      image: '/images/high-angle-man-working-as-plumber.jpg',
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
      <section className="bg-gradient-to-r from-red-50 to-blue-50 text-gray-800 py-20 md:py-32 border-b-2 border-red-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-gray-800">
                <span className="text-red-600">SM</span> Professional Heating & Plumbing Services
              </h1>
              <p className="text-lg mb-8 text-gray-600">
                Trusted by homeowners across the UK. Expert boiler installation, repair, and servicing with 24/7 emergency support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-red-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-red-700 transition-colors text-center"
                >
                  Get a Free Quote
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-red-600 text-red-600 px-8 py-3 rounded-lg font-bold hover:bg-red-50 transition-colors text-center"
                >
                  Contact Us
                </Link>
              </div>
              <div className="mt-10 flex gap-8 text-sm">
                <div>
                  <p className="text-3xl font-bold text-red-600">15+</p>
                  <p className="text-gray-600">Years Experience</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-red-600">2000+</p>
                  <p className="text-gray-600">Homes Served</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-red-600">24/7</p>
                  <p className="text-gray-600">Emergency Support</p>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-gradient-to-br from-red-100 to-blue-100 rounded-lg h-96 flex items-center justify-center overflow-hidden shadow-2xl image-hover">
                <Image
                  src="/images/boiler-heating-system.jpg"
                  alt="Professional heating solutions"
                  width={500}
                  height={400}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gas Safe Certified Badge */}
      <section className="bg-green-50 py-12 border-b-2 border-green-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="flex-shrink-0">
              <div className="bg-white rounded-lg p-4 shadow-md">
                <Image
                  src="/images/gas-safe-register.jpeg"
                  alt="Gas Safe Register Certification"
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Gas Safe Registered</h3>
              <p className="text-gray-600 max-w-md">
                All our technicians are fully Gas Safe certified. Your safety is our top priority, and every job meets the highest industry standards.
              </p>
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
                className={`group relative overflow-hidden rounded-xl shadow-lg card-hover ${
                  index === services.length - 1 ? 'lg:col-span-3' : ''
                }`}
                style={{
                  backgroundImage: `url(${service.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                {/* Image with overlay */}
                <Image
                  src={service.image}
                  alt={service.title}
                  width={400}
                  height={350}
                  className="w-full h-80 object-cover"
                />
                
                {/* Gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-300"></div>
                
                {/* Accent border on hover */}
                <div className="absolute inset-0 rounded-xl border-2 border-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                
                {/* Number badge */}
                <div className="absolute top-4 right-4 bg-red-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
                  {index + 1}
                </div>
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:mb-3 transition-all duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-100 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0 transform">
                    {service.description}
                  </p>
                  
                  {/* Learn More Link */}
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0 transform">
                    <Link 
                      href="/services"
                      className="inline-flex items-center text-red-400 hover:text-red-300 font-semibold text-sm transition-colors"
                    >
                      Learn More
                      <span className="ml-2">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="bg-red-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-red-700 transition-colors inline-block"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Why Choose SM Heating & Plumbing?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We deliver exceptional service through professionalism, reliability, and customer care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((reason, index) => (
              <div 
                key={index} 
                className="group relative bg-gradient-to-br from-white to-gray-50 rounded-xl overflow-hidden border border-gray-100 card-hover hover:border-red-200 shadow-md hover:shadow-2xl transition-all duration-300"
              >
                {/* Animated gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-50/0 to-blue-50/0 group-hover:from-red-50 group-hover:to-blue-50 transition-all duration-500 pointer-events-none"></div>
                
                {/* Accent line at top */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-red-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Number circle */}
                <div className="absolute -top-3 -right-3 w-16 h-16 bg-red-600 rounded-full flex items-center justify-center font-bold text-white text-lg shadow-lg group-hover:scale-110 transition-transform duration-300 origin-center">
                  {index + 1}
                </div>
                
                {/* Content */}
                <div className="relative p-8">
                  <div className="mb-6">
                    <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                      {reason.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-red-600 transition-colors duration-300">
                    {reason.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {reason.description}
                  </p>
                  
                  {/* Hover indicator line */}
                  <div className="mt-4 h-1 w-0 bg-gradient-to-r from-red-600 to-blue-600 group-hover:w-12 transition-all duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-gradient-to-r from-red-100 to-blue-100 text-gray-800 py-16 border-t-2 border-b-2 border-red-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Don't Let Heating Issues Get You Down
          </h2>
          <p className="text-lg mb-8 text-gray-600 max-w-2xl mx-auto">
            Contact us today for a free consultation and quote. Our team is ready to help you stay warm and comfortable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-red-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-red-700 transition-colors text-center"
            >
              Contact Us Now
            </Link>
            <a
              href="tel:+441234567890"
              className="border-2 border-red-600 text-red-600 px-8 py-3 rounded-lg font-bold hover:bg-red-50 transition-colors text-center"
            >
              Call: +44 (0) 123 456 7890
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
