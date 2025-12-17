import type { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us | SM Heating & Plumbing',
  description: 'Get in touch with SM Heating & Plumbing. Call, email, or fill out our contact form for a free quote.',
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
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2 text-gray-800">📞 Phone</h3>
                <p className="text-gray-600 mb-2">Available 24/7 for emergencies</p>
                <a
                  href="tel:+441234567890"
                  className="text-red-600 font-bold text-lg hover:text-red-700"
                >
                  +44 (0) 123 456 7890
                </a>
              </div>

              {/* Email */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2 text-gray-800">✉️ Email</h3>
                <p className="text-gray-600 mb-2">We'll respond within 24 hours</p>
                <a
                  href="mailto:info@smheating.co.uk"
                  className="text-red-600 font-bold hover:text-red-700"
                >
                  info@smheating.co.uk
                </a>
              </div>

              {/* Address */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">📍 Location</h3>
                <p className="text-gray-600">
                  Serving customers across the UK<br />
                  Local service, professional standards
                </p>
              </div>

              {/* Business Hours */}
              <div>
                <h3 className="text-xl font-bold mb-2">🕐 Hours</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>Monday - Friday: 8:00 AM - 6:00 PM</li>
                  <li>Saturday: 9:00 AM - 4:00 PM</li>
                  <li>Sunday: Emergency Only</li>
                  <li className="font-semibold text-red-600 mt-2">24/7 Emergency Available</li>
                </ul>
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

      {/* Service Areas */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">We Serve Across the UK</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Whether you're in a major city or a remote rural area, SM Heating & Plumbing provides professional service with the same commitment to excellence.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              'London',
              'Manchester',
              'Birmingham',
              'Leeds',
              'Glasgow',
              'Sheffield',
              'Bristol',
              'Edinburgh',
              'Liverpool',
              'Newcastle',
              'Nottingham',
              'Leicester',
            ].map((city, index) => (
              <div
                key={index}
                className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center hover:border-red-300 hover:shadow-md transition-all"
              >
                <p className="font-semibold text-gray-800">{city}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-600 mt-8">
            Not listed? Contact us anyway – we may be able to help or recommend a trusted partner in your area.
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
                Yes. All our technicians are Gas Safe registered and our work is fully insured. We're proud members of industry associations.
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
