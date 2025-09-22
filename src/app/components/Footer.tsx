import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        
        {/* Brand / About */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">MusicWeb</h3>
          <p className="text-sm leading-relaxed">
            Discover music that moves you. Stream, explore, and enjoy endless harmony at your fingertips.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li><a href="/upcoming" className="hover:text-white transition">Upcoming Music</a></li>
            <li><a href="/artists" className="hover:text-white transition">Artists</a></li>
            <li><a href="/testimonials" className="hover:text-white transition">Testimonials</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-4">Support</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/help" className="hover:text-white transition">Help Center</a></li>
            <li><a href="/faq" className="hover:text-white transition">FAQs</a></li>
            <li><a href="/contact" className="hover:text-white transition">Contact Us</a></li>
            <li><a href="/privacy" className="hover:text-white transition">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4 text-xl">
            <a href="https://facebook.com" className="hover:text-blue-500 transition"><Facebook size={22} /></a>
            <a href="https://twitter.com" className="hover:text-sky-400 transition"><Twitter size={22} /></a>
            <a href="https://instagram.com" className="hover:text-pink-500 transition"><Instagram size={22} /></a>
            <a href="https://youtube.com" className="hover:text-red-500 transition"><Youtube size={22} /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} MusicWeb. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer;
