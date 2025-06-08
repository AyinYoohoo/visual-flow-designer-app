
import ProductCard from './ProductCard';

const FeaturedProducts = () => {
  const products = [
    {
      id: '1',
      name: 'Fresh Tomatoes',
      price: 'RM5.50/kg',
      rating: 5,
      reviews: 220,
      image: 'https://images.unsplash.com/photo-1546094096-0df4bcaaa337?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      inStock: true
    },
    {
      id: '2', 
      name: 'Organic Wheat',
      price: 'RM18.80/kg',
      rating: 4,
      reviews: 156,
      image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      inStock: true
    },
    {
      id: '3',
      name: 'Free Range Eggs',
      price: 'RM8.20/dozen',
      rating: 5,
      reviews: 189,
      image: 'https://images.unsplash.com/photo-1518569656558-1f25e69d93d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      inStock: true
    },
    {
      id: '4',
      name: 'Farm Tool Set',
      price: 'RM95.00',
      rating: 4,
      reviews: 78,
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      inStock: true
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Products</h2>
          <div className="w-24 h-1 bg-farm-green mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
