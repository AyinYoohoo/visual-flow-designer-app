
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Star, Heart } from 'lucide-react';

interface ProductCardProps {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  rating: number;
  reviews: number;
  image: string;
  inStock: boolean;
}

const ProductCard = ({ name, price, originalPrice, rating, reviews, image, inStock }: ProductCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-shadow duration-300">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-gray-50">
          <Heart className="h-4 w-4 text-gray-400" />
        </button>
      </div>
      
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-2">{name}</h3>
        <div className="flex items-center mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
              />
            ))}
          </div>
          <span className="text-sm text-gray-500 ml-2">({reviews})</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-xl font-bold text-farm-green">{price}</span>
          {originalPrice && (
            <span className="text-sm text-gray-500 line-through">{originalPrice}</span>
          )}
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0 flex gap-2">
        {inStock ? (
          <>
            <Button className="flex-1 bg-farm-green hover:bg-farm-dark-green text-white">
              Buy Now
            </Button>
            <Button variant="outline" className="flex-1 border-farm-green text-farm-green hover:bg-farm-green hover:text-white">
              Contact Seller
            </Button>
          </>
        ) : (
          <Button disabled className="w-full">
            Out of Stock
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
