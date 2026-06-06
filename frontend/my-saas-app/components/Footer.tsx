import Link from "next/link";
import { Sparkles, Mail, Globe } from "lucide-react";
import { FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-white">
      <div className="max-w-6xl mx-auto px-6 pt-20 pb-12">
        
        <div className="grid md:grid-cols-12 gap-10">
          
          {/* Brand Column */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-9 h-9 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="font-semibold text-3xl tracking-tighter">DevAgency</span>
            </div>
            
            <p className="text-gray-400 max-w-md">
              We design and build high-converting digital experiences that help ambitious brands grow faster.
            </p>

            {/* Social Links */}
            <div className="flex gap-5 mt-8">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaTwitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Globe className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h4 className="font-semibold text-lg mb-6 text-white">Company</h4>
            <div className="space-y-4 text-gray-400">
              <Link href="/about" className="block hover:text-white transition-colors">About Us</Link>
              <Link href="/portfolio" className="block hover:text-white transition-colors">Work</Link>
              <Link href="/services" className="block hover:text-white transition-colors">Services</Link>
              <Link href="/journal" className="block hover:text-white transition-colors">Journal</Link>
            </div>
          </div>

          {/* Services */}
          <div className="md:col-span-2">
            <h4 className="font-semibold text-lg mb-6 text-white">Services</h4>
            <div className="space-y-4 text-gray-400">
              <Link href="/services#web" className="block hover:text-white transition-colors">Web Development</Link>
              <Link href="/services#seo" className="block hover:text-white transition-colors">SEO Optimization</Link>
              <Link href="/services#marketing" className="block hover:text-white transition-colors">Digital Marketing</Link>
              <Link href="/services#ecommerce" className="block hover:text-white transition-colors">E-Commerce</Link>
            </div>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h4 className="font-semibold text-lg mb-6 text-white">Get in Touch</h4>
            
            <div className="space-y-3 text-gray-400">
              <a href="mailto:hello@devagency.com" className="block hover:text-white transition-colors">
                hello@devagency.com
              </a>
              <a href="tel:+919876543210" className="block hover:text-white transition-colors">
                +91 98765 43210
              </a>
            </div>

            <div className="mt-8">
              <p className="text-sm text-gray-500 mb-3">Ahmedabad, Gujarat</p>
              <a 
                href="/contact"
                className="inline-block bg-white text-black px-6 py-3 rounded-2xl font-medium hover:bg-gray-200 transition-colors"
              >
                Schedule a Call
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-6">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} DevAgency. All rights reserved.</p>
          
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gray-300 transition-colors">Terms of Service</Link>
          </div>
          
          <p className="mt-4 md:mt-0">Crafted with ❤️ in India</p>
        </div>
      </div>
    </footer>
  );
}