import type { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';
import LocationMap from '@/components/LocationMap';

export const metadata: Metadata = {
  title: 'Contact SM Heating & Plumbing Glasgow | Emergency Services Available',
  description: 'Contact SM Heating & Plumbing for a free quote. Gas Safe registered engineers available 24/7 for emergency heating and plumbing services in Glasgow and surrounding areas.',
};

export default function Contact() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-red-50 to-blue-50 text-gray-800 py-16 md:py-24 border-b-2 border-red-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">Contact Us</h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Get in touch with our team. We're ready to help with your heating and plumbing needs.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold mb-8">Get in Touch</h2>

              {/* Phone */}
              <div className="mb-6">
                <a
                  href="tel:+441234567890"
                  className="group block p-5 bg-gradient-to-br from-red-50 to-red-100 rounded-lg border border-red-200 hover:border-red-400 hover:shadow-md transition-all"
                >
                  <h3 className="text-lg font-bold mb-2 text-gray-800 group-hover:text-red-600 transition-colors">📞 Phone</h3>
                  <p className="text-gray-600 text-sm mb-3">Available 24/7 for emergencies</p>
                  <p className="text-red-600 font-bold text-lg group-hover:text-red-700">
                    +44 (0) 123 456 7890
                  </p>
                </a>
              </div>

              {/* Email */}
              <div className="mb-6">
                <a
                  href="mailto:info@smheating.co.uk"
                  className="group block p-5 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200 hover:border-blue-400 hover:shadow-md transition-all"
                >
                  <h3 className="text-lg font-bold mb-2 text-gray-800 group-hover:text-red-600 transition-colors">✉️ Email</h3>
                  <p className="text-gray-600 text-sm mb-3">We'll respond within 24 hours</p>
                  <p className="text-red-600 font-bold group-hover:text-red-700">
                    info@smheating.co.uk
                  </p>
                </a>
              </div>

              {/* Address */}
              <div className="mb-6">
                <a
                  href="https://www.google.com/maps/search/16+Duncansby+Road+Glasgow+G33+4QX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-5 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200 hover:border-red-300 hover:shadow-md hover:from-red-50 hover:to-red-100 transition-all"
                >
                  <h3 className="text-lg font-bold mb-2 text-gray-800 group-hover:text-red-600 transition-colors">📍 Location</h3>
                  <p className="text-gray-700 font-semibold mb-3">
                    16 Duncansby Road<br />
                    Glasgow G33 4QX
                  </p>
                  <p className="text-xs text-gray-500 group-hover:text-red-500 transition-colors">
                    Click to view on map →
                  </p>
                </a>
              </div>

              {/* Business Hours */}
              <div>
                <div className="p-5 bg-gradient-to-br from-green-50 to-green-100 rounded-lg border border-green-200">
                  <h3 className="text-lg font-bold mb-3 text-gray-800">🕐 Hours</h3>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li><span className="font-semibold">Mon - Fri:</span> 8:00 AM - 6:00 PM</li>
                    <li><span className="font-semibold">Saturday:</span> 9:00 AM - 4:00 PM</li>
                    <li><span className="font-semibold">Sunday:</span> Emergency Only</li>
                    <li className="font-semibold text-red-600 mt-3 pt-2 border-t border-green-300">🚨 24/7 Emergency Available</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 bg-blue-50 rounded-lg p-8 border border-blue-100">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Send us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Location Map */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6 text-center text-gray-800">Find Us on the Map</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            We're located in Glasgow and serve customers across the greater Glasgow area and surrounding regions. Visit us or call for directions.
          </p>
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <LocationMap />
          </div>
          <div className="mt-8 bg-blue-50 rounded-lg p-6 border border-blue-200">
            <h3 className="text-2xl font-bold mb-2 text-gray-800">Our Address</h3>
            <p className="text-lg text-gray-700 font-semibold mb-2">
              16 Duncansby Road<br />
              Glasgow G33 4QX
            </p>
            <p className="text-gray-600 mb-4">
              Located in the heart of Glasgow, we're easily accessible and ready to serve your heating and plumbing needs.
            </p>
            <a
              href="https://www.google.com/maps/search/16+Duncansby+Road+Glasgow+G33+4QX"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-red-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-red-700 transition-colors"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Areas We Cover</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            We are your expert local Glasgow and surrounding areas specialists. Our team provides professional service with the same commitment to excellence throughout our service regions.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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

          <p className="text-center text-gray-600 mt-8">
            Looking for service in another area? Contact us anyway – we may be able to help or recommend a trusted partner in your location.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>

          <div className="space-y-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-2">How quickly can you respond to emergencies?</h3>
              <p className="text-gray-600">
                We aim to respond to emergency call-outs within 2 hours. Call +44 (0) 123 456 7890 immediately for urgent issues.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-2">Do you offer free quotes?</h3>
              <p className="text-gray-600">
                Yes! We provide free consultations and quotes for all non-emergency work. Contact us to arrange a visit.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-2">Are you certified and insured?</h3>
              <p className="text-gray-600">
                Yes. All our technicians are <span className="font-semibold text-green-600">Gas Safe registered</span> and our work is fully insured. We're proud members of industry associations and maintain the highest safety and professional standards.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-2">What payment methods do you accept?</h3>
              <p className="text-gray-600">
                We accept cash, card payments, and bank transfers. We can also discuss payment plans for larger projects.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-2">Do you provide warranties on your work?</h3>
              <p className="text-gray-600">
                Absolutely. All our installations and repairs come with a comprehensive warranty. Details are provided with every job.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-2">Can you work on all boiler brands?</h3>
              <p className="text-gray-600">
                Yes. Our technicians are experienced with all major boiler manufacturers including Worcester, Vaillant, Baxi, and many others.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-red-100 to-blue-100 text-gray-800 py-16 border-t-2 border-red-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            Ready to Get Started?
          </h2>
          <p className="text-lg mb-8 text-gray-600">
            Fill out the form above or give us a call for immediate assistance.
          </p>
          <a
            href="tel:+441234567890"
            className="bg-red-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-red-700 transition-colors inline-block"
          >
            Call Now: +44 (0) 123 456 7890
          </a>
        </div>
      </section>
    </div>
  );
}
