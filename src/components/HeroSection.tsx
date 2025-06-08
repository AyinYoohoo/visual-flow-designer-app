
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative h-[600px] bg-gradient-to-r from-black/50 to-black/30 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex items-center justify-center">
        <div className="text-center text-white animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Buy Fresh Direct from Farmers!
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Connect with local farmers and get the freshest produce at the best prices
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-farm-green hover:bg-farm-dark-green text-white px-8 py-3 text-lg">
              Shop Now
            </Button>
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-gray-800 px-8 py-3 text-lg"
            >
              Sell Your Produce
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
