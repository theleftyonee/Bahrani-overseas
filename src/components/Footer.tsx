
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-behrani-800 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Column */}
          <div>
            <h3 className="text-xl font-bold mb-4">Behrani Overseas Education</h3>
            <p className="text-gray-300 mb-4">
              Your trusted partner for overseas education consultancy, providing end-to-end assistance for students aspiring to study abroad.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a>
              </li>
              <li>
                <a href="#education" className="text-gray-300 hover:text-white transition-colors">Education</a>
              </li>
              <li>
                <a href="#locations" className="text-gray-300 hover:text-white transition-colors">Destinations</a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#news" className="text-gray-300 hover:text-white transition-colors">Latest Updates</a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#faq" className="text-gray-300 hover:text-white transition-colors">FAQs</a>
              </li>
            </ul>
          </div>
          
          {/* Study Destinations */}
          <div>
            <h3 className="text-xl font-bold mb-4">Study Destinations</h3>
            <ul className="space-y-2">
              <li>
                <a href="#uk" className="text-gray-300 hover:text-white transition-colors">United Kingdom</a>
              </li>
              <li>
                <a href="#us" className="text-gray-300 hover:text-white transition-colors">United States</a>
              </li>
              <li>
                <a href="#canada" className="text-gray-300 hover:text-white transition-colors">Canada</a>
              </li>
              <li>
                <a href="#australia" className="text-gray-300 hover:text-white transition-colors">Australia</a>
              </li>
              <li>
                <a href="#newzealand" className="text-gray-300 hover:text-white transition-colors">New Zealand</a>
              </li>
              <li>
                <a href="#europe" className="text-gray-300 hover:text-white transition-colors">Europe</a>
              </li>
              <li>
                <a href="#singapore" className="text-gray-300 hover:text-white transition-colors">Singapore</a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-1 text-behrani-300" />
                <span className="text-gray-300">
                  123 Education Avenue, Overseas Plaza<br />
                  Mumbai, Maharashtra - 400001
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-behrani-300" />
                <span className="text-gray-300">+91 9876 543 210</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-behrani-300" />
                <span className="text-gray-300">info@behranioverseas.com</span>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="inline-flex mt-2 bg-white/10 hover:bg-white/20 text-white py-2 px-4 rounded transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-gray-700 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            &copy; {currentYear} Behrani Overseas Education. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
