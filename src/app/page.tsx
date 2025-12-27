import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import HeroSlideshow from '@/components/HeroSlideshow';
import LocationMap from '@/components/LocationMap';

export const metadata: Metadata = {
  title: 'SM Heating & Plumbing | Gas Safe Certified Services in Glasgow',
  description: 'Expert Gas Safe registered boiler installation, repair, and servicing across Glasgow and surrounding areas. 24/7 emergency support for heating and plumbing issues.',
};

export default function Home() {
  const placeholderImage = '/images/testimonials/placeholder.svg';

  const testimonials = [
    {
      name: 'Aisha Khan',
      location: 'Glasgow East',
      rating: 5,
      review: 'Absolutely brilliant service! They fixed our boiler within hours of calling. Very professional and reasonably priced.',
      image: '',
    },
    {
      name: 'Marcus Thompson',
      location: 'Motherwell',
      rating: 5,
      review: 'Outstanding workmanship. The team installed our new boiler system and everything was done to perfection.',
      image: '',
    },
    {
      name: 'Sarah McDonald',
      location: 'Paisley',
      rating: 5,
      review: 'Called them for an emergency repair on a Sunday evening. They came out straight away and had us sorted in no time.',
      image: '',
    },
    {
      name: 'Jamal Williams',
      location: 'Hamilton',
      rating: 5,
      review: 'Very impressed with their service from start to finish. Transparent pricing, no hidden costs.',
      image: '',
    },
    {
      name: 'Muhammad Ali',
      location: 'Glasgow West',
      rating: 5,
      review: 'Fantastic customer service and professional engineers. Feel much safer knowing our boiler has been checked properly.',
      image: '',
    },
    {
      name: "Jennifer O'Connor",
      location: 'East Kilbride',
      rating: 5,
      review: "Best heating company we've used in Glasgow. Quick response, fair prices, and they really care about getting it right.",
      image: '',
    },
  ];

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
      {/* Animated Banner Hero Section - Full Width */}
      <section className="relative w-full">
        <HeroSlideshow />
        {/* Content Overlay on Banner */}
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none pt-20 md:pt-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex items-center pointer-events-auto">
            <div className="w-full">
              <div className="max-w-2xl">
                <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight drop-shadow-2xl text-white">
                  <span className="text-red-600 drop-shadow-2xl">SM</span> Heating & Plumbing Services
                </h1>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl mb-4 sm:mb-6 md:mb-8 drop-shadow-2xl text-white leading-relaxed hidden sm:block">
                  Professional boiler, heating, plumbing, and domestic appliance repair, services, and maintenance across Glasgow and surrounding areas. With a skilled and fully committed team, we operate 24/7, delivering reliable, high-quality workmanship and excellent customer service.
                </p>
                {/* Shorter description for mobile */}
                <p className="text-xs mb-3 drop-shadow-2xl text-white leading-relaxed sm:hidden">
                  Professional heating, plumbing, and appliance services across Glasgow. Available 24/7.
                </p>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6">
                  <Link
                    href="/contact"
                    className="bg-red-600 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-lg font-bold hover:bg-red-700 transition-colors text-center shadow-lg hover:shadow-xl text-xs sm:text-sm md:text-base"
                  >
                    Get a Free Quote
                  </Link>
                  <Link
                    href="/contact"
                    className="border-2 border-white text-white px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-lg font-bold hover:bg-white hover:text-gray-800 transition-colors text-center shadow-lg hover:shadow-xl backdrop-blur-sm text-xs sm:text-sm md:text-base"
                  >
                    Contact Us
                  </Link>
                </div>
                <div className="hidden md:flex flex-wrap gap-2 sm:gap-3 md:gap-4 lg:gap-6">
                  <div className="bg-red-600/40 backdrop-blur-md px-3 sm:px-4 md:px-5 lg:px-6 py-1.5 sm:py-2 md:py-2.5 lg:py-3 rounded-lg sm:rounded-xl border border-red-400/30 shadow-lg hover:bg-red-600/50 transition-colors">
                    <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white">15+</p>
                    <p className="text-white font-semibold text-[10px] sm:text-xs md:text-sm whitespace-nowrap">Years Experience</p>
                  </div>
                  <div className="bg-red-600/40 backdrop-blur-md px-3 sm:px-4 md:px-5 lg:px-6 py-1.5 sm:py-2 md:py-2.5 lg:py-3 rounded-lg sm:rounded-xl border border-red-400/30 shadow-lg hover:bg-red-600/50 transition-colors">
                    <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white">2000+</p>
                    <p className="text-white font-semibold text-[10px] sm:text-xs md:text-sm whitespace-nowrap">Homes Served</p>
                  </div>
                  <div className="bg-red-600/40 backdrop-blur-md px-3 sm:px-4 md:px-5 lg:px-6 py-1.5 sm:py-2 md:py-2.5 lg:py-3 rounded-lg sm:rounded-xl border border-red-400/30 shadow-lg hover:bg-red-600/50 transition-colors">
                    <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white">24/7</p>
                    <p className="text-white font-semibold text-[10px] sm:text-xs md:text-sm whitespace-nowrap">Emergency Support</p>
                  </div>
                </div>
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

      {/* Customer Testimonials */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">What Our Customers Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied customers across Glasgow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.name} className="group bg-white rounded-xl p-6 border border-gray-100 shadow-md hover:shadow-xl card-hover hover:border-red-200 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-blue-100 rounded-full flex items-center justify-center border-2 border-red-200 overflow-hidden group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <Image
                      src={testimonial.image || placeholderImage}
                      alt={testimonial.name}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="ml-4 flex-1">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-red-600 transition-colors">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                    <div className="flex gap-1 mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-500">⭐</span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed italic">\"{testimonial.review}\"</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/about"
              className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-red-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Read More Reviews
            </Link>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6 text-center text-gray-800">Find Us in Glasgow</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Located in the heart of Glasgow with service coverage across the surrounding areas. Easily accessible and ready to serve your heating and plumbing needs.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Map */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <LocationMap />
            </div>
            {/* Location Info */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-red-50 to-blue-50 rounded-2xl p-8 border-2 border-red-200 shadow-lg">
                <h3 className="text-3xl font-bold mb-4 text-gray-800">📍 Our Location</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm uppercase tracking-wider font-semibold text-red-600 mb-2">Address</p>
                    <p className="text-lg text-gray-700 font-semibold">
                      16 Duncansby Road<br />
                      Glasgow G33 4QX
                    </p>
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-wider font-semibold text-red-600 mb-2">Phone</p>
                    <a href="tel:+441234567890" className="text-lg text-gray-700 hover:text-red-600 font-semibold transition-colors">
                      +44 (0) 123 456 7890
                    </a>
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-wider font-semibold text-red-600 mb-2">Email</p>
                    <a href="mailto:info@smheating.co.uk" className="text-lg text-gray-700 hover:text-red-600 font-semibold transition-colors">
                      info@smheating.co.uk
                    </a>
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-wider font-semibold text-red-600 mb-2">Business Hours</p>
                    <ul className="text-gray-700 space-y-1">
                      <li>Monday - Friday: 8:00 AM - 6:00 PM</li>
                      <li>Saturday: 9:00 AM - 4:00 PM</li>
                      <li className="font-semibold text-red-600 mt-2">24/7 Emergency Available</li>
                    </ul>
                  </div>
                </div>
                <a
                  href="https://www.google.com/maps/search/16+Duncansby+Road+Glasgow+G33+4QX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block bg-red-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700 transition-colors shadow-lg hover:shadow-xl"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Areas We Serve</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional heating and plumbing services across Glasgow and surrounding areas. Same quality service wherever you are.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
            {[
              'Glasgow',
              'Hamilton',
              'Paisley',
              'Wishaw',
              'Lanark',
              'Glasgow East',
              'Glasgow West',
              'Motherwell',
              'Strathblane',
              'Coatbridge',
              'Chryston',
              'East Kilbride',
              'Giffnock',
            ].map((city, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-lg p-4 text-center hover:border-red-300 hover:shadow-md hover:from-red-50 hover:to-red-100 transition-all duration-300"
              >
                <p className="font-semibold text-gray-800">📍 {city}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-600 mb-8">
            Looking for service in another area? <Link href="/contact" className="text-red-600 font-semibold hover:text-red-700">Contact us</Link> – we may be able to help or recommend a trusted partner in your location.
          </p>

          <div className="text-center">
            <Link
              href="/contact"
              className="bg-red-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-red-700 transition-colors inline-block"
            >
              Get Service in Your Area
            </Link>
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
