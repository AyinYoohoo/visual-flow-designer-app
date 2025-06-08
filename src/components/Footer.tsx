
import { Leaf, Facebook, Twitter, Instagram, Linkedin, CreditCard } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-farm-dark-green text-white" id="contact">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Leaf className="h-8 w-8" />
              <span className="text-2xl font-bold">FarmConnect</span>
            </div>
            <p className="text-gray-300 mb-4">
              Connecting farmers and consumers since 2020. Our platform makes it easy to buy and sell agricultural products directly.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 cursor-pointer hover:text-farm-light-green" />
              <Twitter className="h-6 w-6 cursor-pointer hover:text-farm-light-green" />
              <Instagram className="h-6 w-6 cursor-pointer hover:text-farm-light-green" />
              <Linkedin className="h-6 w-6 cursor-pointer hover:text-farm-light-green" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Products</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Sellers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Vegetables</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Fruits</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Grains</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Livestock</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Dairy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Equipment</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2 text-gray-300">
              <p>📍 Kuala Lumpur, Malaysia</p>
              <p>📞 +60 3-2345-6789</p>
              <p>✉️ hello@farmconnect.com</p>
              <p>🕒 Mon-Fri: 8AM - 6PM</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8">
          {/* Payment Methods */}
          <div className="flex justify-center items-center space-x-6 mb-4">
            <span className="text-gray-300 text-sm">We accept:</span>
            <div className="flex space-x-4">
              <CreditCard className="h-8 w-8 text-gray-300" />
              <div className="bg-blue-600 text-white px-3 py-1 rounded text-sm font-bold">VISA</div>
              <div className="bg-red-600 text-white px-3 py-1 rounded text-sm font-bold">MC</div>
              <div className="bg-blue-800 text-white px-3 py-1 rounded text-sm font-bold">AMEX</div>
              <div className="bg-yellow-500 text-black px-3 py-1 rounded text-sm font-bold">PP</div>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-gray-300">© 2023 FarmConnect. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
