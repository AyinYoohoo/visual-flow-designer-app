
import { Star, MapPin, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FeaturedSeller = () => {
  const handleContactSeller = () => {
    console.log('Contacting Green Valley Farm');
    alert('Opening contact form for Green Valley Farm');
  };

  const handleViewProducts = () => {
    console.log('Viewing Green Valley Farm products');
    alert('Showing all products from Green Valley Farm');
  };

  return (
    <section className="py-16 bg-white" id="sellers">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Seller</h2>
          <div className="w-24 h-1 bg-farm-green mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-farm-green to-farm-light-green rounded-lg shadow-xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3">
              <img 
                src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                alt="Green Valley Farm"
                className="w-full h-64 md:h-full object-cover"
              />
            </div>
            
            <div className="md:w-2/3 p-8 text-white">
              <div className="flex items-center mb-4">
                <Award className="h-8 w-8 text-yellow-300 mr-3" />
                <span className="text-lg font-semibold">Top Rated Seller</span>
              </div>
              
              <h3 className="text-3xl font-bold mb-4">Green Valley Farm</h3>
              
              <div className="flex items-center mb-4">
                <div className="flex items-center mr-6">
                  {[...Array(5)].map((_, index) => (
                    <Star key={index} className="h-5 w-5 text-yellow-300 fill-current" />
                  ))}
                  <span className="ml-2">4.9 (234 reviews)</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-1" />
                  <span>California, USA</span>
                </div>
              </div>
              
              <p className="text-lg mb-6">
                Organic farm specializing in fresh vegetables, fruits, and herbs. 
                Family-owned for over 30 years, committed to sustainable farming practices.
              </p>
              
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold">150+</div>
                  <div className="text-sm opacity-90">Products</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">30</div>
                  <div className="text-sm opacity-90">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">1000+</div>
                  <div className="text-sm opacity-90">Happy Customers</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="bg-white text-farm-green hover:bg-gray-100"
                  onClick={handleViewProducts}
                >
                  View Products
                </Button>
                <Button 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-farm-green"
                  onClick={handleContactSeller}
                >
                  Contact Seller
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSeller;
