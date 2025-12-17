import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us | SM Heating & Plumbing',
  description: 'Learn about SM Heating & Plumbing – trusted local experts in heating and plumbing with over 15 years of experience.',
};

export default function About() {
  const team = [
    {
      name: 'Michael Smith',
      role: 'Lead Technician & Founder',
      bio: 'With 20+ years in the heating industry, Michael established SM Heating & Plumbing to deliver exceptional service to local customers.',
    },
    {
      name: 'Sarah Johnson',
      role: 'Operations Manager',
      bio: 'Sarah ensures every customer receives professional, timely service with attention to detail and satisfaction guaranteed.',
    },
    {
      name: 'James Wilson',
      role: 'Senior Technician',
      bio: 'James specializes in complex heating system installations and repairs with certifications across all major boiler brands.',
    },
    {
      name: 'Emma Davis',
      role: 'Customer Service Lead',
      bio: 'Emma coordinates emergency calls and ensures customers receive rapid response and clear communication throughout their service.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-red-700 via-red-600 to-blue-700 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About SM Heating & Plumbing</h1>
          <p className="text-lg text-red-50 max-w-2xl">
            Your trusted local partner for professional heating and plumbing solutions.
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
                SM Heating & Plumbing has been serving homeowners across the UK for over 15 years. Founded on principles of professionalism, reliability, and customer care, we've built our reputation by consistently delivering exceptional service.
              </p>
              <p className="text-gray-600 text-lg mb-4">
                Our team of certified technicians combines modern expertise with traditional craftsmanship to solve even the most challenging heating and plumbing issues. Whether it's emergency repairs or planned installations, we approach every job with the same commitment to excellence.
              </p>
              <p className="text-gray-600 text-lg">
                We believe that every customer deserves transparent pricing, expert advice, and work that stands the test of time. That's the SM Heating & Plumbing difference.
              </p>
            </div>
            <div className="bg-gradient-to-br from-red-100 to-blue-50 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center">
                <p className="text-8xl mb-4">🏢</p>
                <p className="text-xl font-semibold text-gray-700">Established 2010</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Mission & Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're committed to providing heating and plumbing solutions that exceed expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-3">Our Mission</h3>
              <p className="text-gray-600">
                To deliver reliable, professional heating and plumbing services that keep families warm, safe, and comfortable throughout the year.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="text-5xl mb-4">💯</div>
              <h3 className="text-2xl font-bold mb-3">Quality</h3>
              <p className="text-gray-600">
                We use only quality materials and employ certified technicians. Every job receives the same high standard of workmanship.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-2xl font-bold mb-3">Customer Care</h3>
              <p className="text-gray-600">
                Your satisfaction is our priority. We listen to your needs and provide honest advice tailored to your situation.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="text-5xl mb-4">⏰</div>
              <h3 className="text-2xl font-bold mb-3">Reliability</h3>
              <p className="text-gray-600">
                When we promise a time, we show up. When we commit to a solution, we deliver. You can count on us.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="text-5xl mb-4">💷</div>
              <h3 className="text-2xl font-bold mb-3">Transparency</h3>
              <p className="text-gray-600">
                Clear pricing, honest assessments, and no hidden charges. We believe in building trust through transparency.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="text-5xl mb-4">🌱</div>
              <h3 className="text-2xl font-bold mb-3">Innovation</h3>
              <p className="text-gray-600">
                We stay current with modern heating technology and energy-efficient solutions to benefit our customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Why Choose Us?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <p className="text-4xl">👨‍🔧</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Expert Team</h3>
                <p className="text-gray-600">
                  Our technicians are fully certified with extensive experience across all boiler types and heating systems.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <p className="text-4xl">🚀</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Fast Response</h3>
                <p className="text-gray-600">
                  We understand that heating emergencies can't wait. Our team responds quickly to get you back on track.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <p className="text-4xl">✅</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Guaranteed Work</h3>
                <p className="text-gray-600">
                  Every job comes with our comprehensive warranty and satisfaction guarantee for complete peace of mind.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <p className="text-4xl">💰</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Competitive Pricing</h3>
                <p className="text-gray-600">
                  Transparent, competitive rates with no hidden charges. We offer the best value for quality work.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <p className="text-4xl">🗺️</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Local Knowledge</h3>
                <p className="text-gray-600">
                  As a local business, we understand regional heating challenges and climate considerations.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <p className="text-4xl">🏆</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Trusted Partner</h3>
                <p className="text-gray-600">
                  Thousands of satisfied customers have trusted us with their most important systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Meet Our Team</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
                <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-red-100 to-blue-50 rounded-full flex items-center justify-center">
                  <p className="text-5xl">👤</p>
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-red-600 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Stats */}
      <section className="bg-gradient-to-r from-red-700 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-5xl font-bold mb-2">15+</p>
              <p className="text-lg">Years Experience</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">2000+</p>
              <p className="text-lg">Homes Served</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">10000+</p>
              <p className="text-lg">Jobs Completed</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">98%</p>
              <p className="text-lg">Customer Satisfaction</p>
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
            className="bg-red-700 text-white px-8 py-3 rounded-lg font-bold hover:bg-red-800 transition-colors inline-block"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
