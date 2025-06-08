
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Leaf, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = ['Home', 'Products', 'Sellers', 'Pricing', 'About', 'Contact'];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Leaf className="h-8 w-8 text-farm-green" />
            <span className="text-2xl font-bold text-gray-800">FarmConnect</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-600 hover:text-farm-green transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="border-farm-green text-farm-green hover:bg-farm-green hover:text-white">
              Login
            </Button>
            <Button className="bg-farm-green hover:bg-farm-dark-green text-white">
              Sign Up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t pt-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-600 hover:text-farm-green transition-colors duration-200"
                >
                  {item}
                </a>
              ))}
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" className="border-farm-green text-farm-green hover:bg-farm-green hover:text-white">
                  Login
                </Button>
                <Button className="bg-farm-green hover:bg-farm-dark-green text-white">
                  Sign Up
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
