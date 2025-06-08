
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  const handleLearnMore = () => {
    console.log('Learning more about FarmConnect');
    alert('Opening detailed information about FarmConnect');
  };

  return (
    <section className="py-16 bg-gray-50" id="about">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About FarmConnect</h2>
          <div className="w-24 h-1 bg-farm-green mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-gray-600 mb-6">
            FarmConnect is a digital marketplace connecting farmers directly with buyers, eliminating middlemen and 
            ensuring fair prices for both producers and consumers.
          </p>
          
          <p className="text-lg text-gray-600 mb-6">
            Founded in 2020, our mission is to support sustainable agriculture by making it easier for farmers to sell their 
            products and for buyers to access fresh, local produce.
          </p>
          
          <p className="text-lg text-gray-600 mb-8">
            We believe in transparency, quality, and building lasting partnerships between farmers and their customers.
          </p>
          
          <Button 
            className="bg-farm-green hover:bg-farm-dark-green text-white px-8 py-3 text-lg"
            onClick={handleLearnMore}
          >
            Learn More About Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
