import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 text-gray-800 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo2.png"
                alt="SM Heating & Plumbing"
                width={32}
                height={32}
                className="h-8 w-auto"
              />
              <span className="font-bold text-lg text-gray-800">SM Heating & Plumbing</span>
            </div>
            <p className="text-gray-600 text-sm">
              Professional heating and plumbing services with over a decade of trusted expertise.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4 text-gray-800">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/" className="hover:text-red-600 transition-colors">Home</Link></li>
              <li><Link href="/services" className="hover:text-red-600 transition-colors">Services</Link></li>
              <li><Link href="/about" className="hover:text-red-600 transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-red-600 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold mb-4 text-gray-800">Services</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/services#boiler-installation" className="hover:text-red-600 transition-colors">Boiler Installation</Link></li>
              <li><Link href="/services#boiler-repair" className="hover:text-red-600 transition-colors">Boiler Repair</Link></li>
              <li><Link href="/services#central-heating" className="hover:text-red-600 transition-colors">Central Heating</Link></li>
              <li><Link href="/services#emergency" className="hover:text-red-600 transition-colors">Emergency Call-outs</Link></li>
              <li><Link href="/services#appliance-repair" className="hover:text-red-600 transition-colors">Appliance Repair & Maintenance</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold mb-4 text-gray-800">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Phone: <a href="tel:07487616462" className="text-red-600 hover:text-red-700">07487 616462</a></li>
              <li>WhatsApp: <a href="https://wa.me/447487616462" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700">07487 616462</a></li>
              <li>Email: <a href="mailto:info@smheating.co.uk" className="text-red-600 hover:text-red-700">info@smheating.co.uk</a></li>
              <li>Available 24/7 for emergencies</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">&copy; {currentYear} SM Heating & Plumbing. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0 text-sm text-gray-600">
              <a href="#" className="hover:text-red-600 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-red-600 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
