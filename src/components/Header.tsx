
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Leaf, Menu, X } from 'lucide-react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Products', href: '#featured-products' },
    { name: 'Sellers', href: '#sellers' },
    { name: 'Pricing', href: '#featured-products' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    if (href === '#home') {
      // Scroll to the hero section headline
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const handleSwitchToSignup = () => {
    setIsLoginOpen(false);
    setIsSignupOpen(true);
  };

  const handleSwitchToLogin = () => {
    setIsSignupOpen(false);
    setIsLoginOpen(true);
  };

  return (
    <>
      <header className="bg-white shadow-sm sticky top-0 z-50" id="home">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection('#home')}>
              <Leaf className="h-8 w-8 text-farm-green" />
              <span className="text-2xl font-bold text-gray-800">FarmConnect</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-600 hover:text-farm-green transition-colors duration-200 cursor-pointer"
                >
                  {item.name}
                </button>
              ))}
            </nav>

            {/* Desktop Auth Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Button 
                variant="outline" 
                className="border-farm-green text-farm-green hover:bg-farm-green hover:text-white"
                onClick={() => setIsLoginOpen(true)}
              >
                Login
              </Button>
              <Button 
                className="bg-farm-green hover:bg-farm-dark-green text-white"
                onClick={() => setIsSignupOpen(true)}
              >
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
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="text-gray-600 hover:text-farm-green transition-colors duration-200 text-left"
                  >
                    {item.name}
                  </button>
                ))}
                <div className="flex flex-col space-y-2 pt-4">
                  <Button 
                    variant="outline" 
                    className="border-farm-green text-farm-green hover:bg-farm-green hover:text-white"
                    onClick={() => {
                      setIsMenuOpen(false);
                      setIsLoginOpen(true);
                    }}
                  >
                    Login
                  </Button>
                  <Button 
                    className="bg-farm-green hover:bg-farm-dark-green text-white"
                    onClick={() => {
                      setIsMenuOpen(false);
                      setIsSignupOpen(true);
                    }}
                  >
                    Sign Up
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Auth Modals */}
      <LoginForm 
        isOpen={isLoginOpen} 
        onClose={() => setIsLoginOpen(false)}
        onSwitchToSignup={handleSwitchToSignup}
      />
      <SignupForm 
        isOpen={isSignupOpen} 
        onClose={() => setIsSignupOpen(false)}
        onSwitchToLogin={handleSwitchToLogin}
      />
    </>
  );
};

export default Header;
