import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import AutoSlideshow from '@/components/AutoSlideshow';

export const metadata: Metadata = {
  title: 'About SM Heating & Plumbing | Gas Safe Certified Local Experts Glasgow',
  description: 'Trusted local heating and plumbing experts with over 15 years of experience. Gas Safe registered engineers serving Glasgow and surrounding areas. Professional workmanship and excellent customer service.',
};

export default function About() {
  const placeholderImage = '/images/testimonials/placeholder.svg';

  const testimonials = [
    {
      name: 'Aisha Khan',
      location: 'Glasgow East',
      rating: 5,
      review: 'Absolutely brilliant service! They fixed our boiler within hours of calling. Very professional and reasonably priced. Highly recommend to anyone in Glasgow.',
      image: '',
    },
    {
      name: 'Marcus Thompson',
      location: 'Motherwell',
      rating: 5,
      review: 'Outstanding workmanship. The team installed our new boiler system and everything was done to perfection. Clean, efficient, and the heating works brilliantly.',
      image: '',
    },
    {
      name: 'Sarah McDonald',
      location: 'Paisley',
      rating: 5,
      review: 'Called them for an emergency repair on a Sunday evening. They came out straight away and had us sorted in no time. Can\'t thank them enough!',
      image: '',
    },
    {
      name: 'Jamal Williams',
      location: 'Hamilton',
      rating: 5,
      review: 'Very impressed with their service from start to finish. Transparent pricing, no hidden costs, and the technician was very knowledgeable. Will definitely use again.',
      image: '',
    },
    {
      name: 'Muhammad Ali',
      location: 'Glasgow West',
      rating: 5,
      review: "Fantastic customer service and professional engineers. They serviced our boiler and explained everything clearly. Feel much safer knowing it's been checked properly.",
      image: '',
    },
    {
      name: "Jennifer O'Connor",
      location: 'East Kilbride',
      rating: 5,
      review: "Best heating company we've used in Glasgow. Quick response, fair prices, and they really care about getting it right. Our new central heating is working perfectly!",
      image: '',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-red-50 to-blue-50 text-gray-800 py-16 md:py-24 border-b-2 border-red-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">About SM Heating & Plumbing</h1>
          <p className="text-lg text-gray-600 max-w-2xl mb-4">
            Your trusted local partner for professional heating and plumbing solutions.
          </p>
          <p className="text-base text-gray-600">
            Areas we cover include <span className="font-semibold">Glasgow, Hamilton, Paisley, Wishaw, Lanark, Glasgow East, Glasgow West, Motherwell, Strathblane, Coatbridge, Chryston, East Kilbride, Giffnock,</span> and many other areas. We are your expert local Glasgow heating and plumbing specialists.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold mb-6">Who We Are</h2>
              <p className="text-gray-600 text-lg mb-4">
                SM Heating & Plumbing is a qualified and trusted engineering company with several years of experience in the heating and plumbing industry. We proudly serve Glasgow and surrounding areas, operating 24/7 to provide reliable and efficient services whenever our customers need us.
              </p>
              <p className="text-gray-600 text-lg mb-4">
                Our company is built on a fully committed team of highly skilled and proficient engineers who take pride in delivering high-quality workmanship, professional service, and complete customer satisfaction on every job.
              </p>
              <p className="text-gray-600 text-lg">
                Whether it's emergency repairs, planned installations, or routine maintenance, we approach every project with the same level of expertise and dedication to excellence that has made us a trusted name across Glasgow and the surrounding areas.
              </p>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-blue-50 rounded-2xl overflow-hidden">
              <AutoSlideshow />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Our Mission & Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're committed to providing heating and plumbing solutions that exceed expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow border border-blue-100 card-hover">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800">Our Mission</h3>
              <p className="text-gray-600">
                To deliver reliable, professional heating and plumbing services that keep families warm, safe, and comfortable throughout the year.
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow border border-blue-100 card-hover">
              <div className="text-5xl mb-4">💯</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800">Quality</h3>
              <p className="text-gray-600">
                We use only quality materials and employ certified technicians. Every job receives the same high standard of workmanship.
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow border border-blue-100 card-hover">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800">Customer Care</h3>
              <p className="text-gray-600">
                Your satisfaction is our priority. We listen to your needs and provide honest advice tailored to your situation.
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow border border-blue-100 card-hover">
              <div className="text-5xl mb-4">⏰</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800">Reliability</h3>
              <p className="text-gray-600">
                When we promise a time, we show up. When we commit to a solution, we deliver. You can count on us.
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow border border-blue-100 card-hover">
              <div className="text-5xl mb-4">💷</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800">Transparency</h3>
              <p className="text-gray-600">
                Clear pricing, honest assessments, and no hidden charges. We believe in building trust through transparency.
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow border border-blue-100 card-hover">
              <div className="text-5xl mb-4">🌱</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800">Innovation</h3>
              <p className="text-gray-600">
                We stay current with modern heating technology and energy-efficient solutions to benefit our customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gas Safe Register Certification */}
      <section className="py-20 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-800">Gas Safe Registered</h2>
              <p className="text-lg text-gray-600 mb-4">
                Your safety is our top priority. SM Heating & Plumbing is Gas Safe registered, ensuring all our work meets the highest industry standards and regulations.
              </p>
              <p className="text-gray-600 mb-6">
                Every member of our technical team holds current Gas Safe certification. We undergo regular inspections and audits to maintain our registration and guarantee that all heating work is performed safely and to code.
              </p>
              <div className="flex gap-4">
                <div className="text-green-600 font-bold text-lg">✓</div>
                <p className="text-gray-700"><span className="font-semibold">Gas Safe Registered Engineers</span> – All work complies with safety regulations</p>
              </div>
              <div className="flex gap-4 mt-4">
                <div className="text-green-600 font-bold text-lg">✓</div>
                <p className="text-gray-700"><span className="font-semibold">Regular Audits</span> – Our registration is actively maintained and verified</p>
              </div>
              <div className="flex gap-4 mt-4">
                <div className="text-green-600 font-bold text-lg">✓</div>
                <p className="text-gray-700"><span className="font-semibold">Complete Peace of Mind</span> – Work covered by our comprehensive warranty</p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="bg-white rounded-lg p-8 shadow-lg border border-green-100 hover:shadow-xl transition-shadow">
                <Image
                  src="/images/gas-safe-register.jpeg"
                  alt="Gas Safe Register Certification"
                  width={300}
                  height={300}
                  className="object-contain"
                />
                <p className="text-center text-sm text-gray-600 mt-4">
                  Certified and trusted by Gas Safe Register
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Why Choose Us?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group bg-white rounded-xl p-8 border border-gray-100 shadow-md hover:shadow-xl card-hover hover:border-red-200 transition-all duration-300">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">👨‍🔧</div>
              <h3 className="text-lg font-bold mb-3 text-gray-900 group-hover:text-red-600 transition-colors">Expert Team</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our technicians are fully certified with extensive experience across all boiler types and heating systems.
              </p>
            </div>

            <div className="group bg-white rounded-xl p-8 border border-gray-100 shadow-md hover:shadow-xl card-hover hover:border-red-200 transition-all duration-300">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">🚀</div>
              <h3 className="text-lg font-bold mb-3 text-gray-900 group-hover:text-red-600 transition-colors">Fast Response</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We understand that heating emergencies can't wait. Our team responds quickly to get you back on track.
              </p>
            </div>

            <div className="group bg-white rounded-xl p-8 border border-gray-100 shadow-md hover:shadow-xl card-hover hover:border-red-200 transition-all duration-300">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">✅</div>
              <h3 className="text-lg font-bold mb-3 text-gray-900 group-hover:text-red-600 transition-colors">Guaranteed Work</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Every job comes with our comprehensive warranty and satisfaction guarantee for complete peace of mind.
              </p>
            </div>

            <div className="group bg-white rounded-xl p-8 border border-gray-100 shadow-md hover:shadow-xl card-hover hover:border-red-200 transition-all duration-300">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">💰</div>
              <h3 className="text-lg font-bold mb-3 text-gray-900 group-hover:text-red-600 transition-colors">Competitive Pricing</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Transparent, competitive rates with no hidden charges. We offer the best value for quality work.
              </p>
            </div>

            <div className="group bg-white rounded-xl p-8 border border-gray-100 shadow-md hover:shadow-xl card-hover hover:border-red-200 transition-all duration-300">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">🗺️</div>
              <h3 className="text-lg font-bold mb-3 text-gray-900 group-hover:text-red-600 transition-colors">Local Knowledge</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                As a local business, we understand regional heating challenges and climate considerations.
              </p>
            </div>

            <div className="group bg-white rounded-xl p-8 border border-gray-100 shadow-md hover:shadow-xl card-hover hover:border-red-200 transition-all duration-300">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">🏆</div>
              <h3 className="text-lg font-bold mb-3 text-gray-900 group-hover:text-red-600 transition-colors">Trusted Partner</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Thousands of satisfied customers have trusted us with their most important systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">What Our Customers Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied customers across Glasgow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.name} className="group bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 border border-gray-100 shadow-md hover:shadow-xl card-hover hover:border-red-200 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-blue-100 rounded-full flex items-center justify-center border-2 border-red-200 overflow-hidden group-hover:scale-110 transition-transform duration-300">
                    <Image
                      src={testimonial.image || placeholderImage}
                      alt={testimonial.name}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-red-600 transition-colors">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                    <div className="flex gap-1 mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-500">⭐</span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed italic">"{testimonial.review}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Stats */}
      <section className="bg-gradient-to-r from-red-100 to-blue-100 text-gray-800 py-16 border-t-2 border-b-2 border-red-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-5xl font-bold text-red-600 mb-2">15+</p>
              <p className="text-lg text-gray-700">Years Experience</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-red-600 mb-2">2000+</p>
              <p className="text-lg text-gray-700">Homes Served</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-red-600 mb-2">10000+</p>
              <p className="text-lg text-gray-700">Jobs Completed</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-red-600 mb-2">98%</p>
              <p className="text-lg text-gray-700">Customer Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience the SM Difference?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today for professional heating and plumbing services you can trust.
          </p>
          <Link
            href="/contact"
            className="bg-red-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-red-700 transition-colors inline-block"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
