
import { Star, ShoppingCart, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProductCardProps {
  name: string;
  price: string;
  rating: number;
  farmer: string;
  image: string;
  location: string;
}

const ProductCard = ({ name, price, rating, farmer, image, location }: ProductCardProps) => {
  const handleBuyNow = () => {
    console.log(`Buying ${name} for ${price}`);
    alert(`Added ${name} to cart for ${price}`);
  };

  const handleContactFarmer = () => {
    console.log(`Contacting farmer: ${farmer}`);
    alert(`Opening chat with ${farmer}`);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{name}</h3>
        <p className="text-2xl font-bold text-farm-green mb-2">{price}</p>
        
        <div className="flex items-center mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                className={`h-4 w-4 ${
                  index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="ml-2 text-sm text-gray-600">({rating}.0)</span>
        </div>
        
        <p className="text-sm text-gray-600 mb-1">By {farmer}</p>
        <p className="text-sm text-gray-500 mb-4">{location}</p>
        
        <div className="space-y-2">
          <Button 
            className="w-full bg-farm-green hover:bg-farm-dark-green text-white"
            onClick={handleBuyNow}
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Buy Now
          </Button>
          <Button 
            variant="outline" 
            className="w-full border-farm-green text-farm-green hover:bg-farm-green hover:text-white"
            onClick={handleContactFarmer}
          >
            <MessageCircle className="h-4 w-4 mr-2" />
            Contact Farmer
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
