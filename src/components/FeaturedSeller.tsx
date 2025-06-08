
import { Star, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const FeaturedSeller = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Seller</h2>
          <div className="w-24 h-1 bg-farm-green mx-auto"></div>
        </div>
        
        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                  alt="Siti Nurain Binti Daud"
                  className="w-32 h-32 rounded-full object-cover"
                />
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold mb-2">Siti Nurain Binti Daud</h3>
                <div className="flex items-center justify-center md:justify-start mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="ml-2 text-gray-600">(4.9)</span>
                  <CheckCircle className="h-5 w-5 text-farm-green ml-2" />
                  <span className="text-farm-green ml-1">Verified Seller</span>
                </div>
                
                <p className="text-gray-600 mb-6">
                  Organic farmer specializing in seasonal vegetables and fruits. Committed to 
                  sustainable farming practices.
                </p>
                
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-farm-green">5,000+</div>
                    <div className="text-sm text-gray-600">Transactions</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-farm-green">98%</div>
                    <div className="text-sm text-gray-600">Positive Reviews</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-farm-green">5 yrs</div>
                    <div className="text-sm text-gray-600">Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default FeaturedSeller;
