
import { Carrot, Apple, Wheat, Cow, Milk, Wrench } from 'lucide-react';

const Categories = () => {
  const categories = [
    { name: 'Vegetables', icon: Carrot, color: 'text-green-600' },
    { name: 'Fruits', icon: Apple, color: 'text-red-600' },
    { name: 'Grains', icon: Wheat, color: 'text-yellow-600' },
    { name: 'Livestock', icon: Cow, color: 'text-brown-600' },
    { name: 'Dairy', icon: Milk, color: 'text-blue-600' },
    { name: 'Equipment', icon: Wrench, color: 'text-gray-600' }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Shop by Category</h2>
          <div className="w-24 h-1 bg-farm-green mx-auto mb-4"></div>
          <p className="text-gray-600">Get the best sourced deals from our trusted farmers</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <div 
                key={category.name}
                className="flex flex-col items-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow duration-300 cursor-pointer group"
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className={`h-8 w-8 ${category.color}`} />
                </div>
                <span className="text-lg font-medium text-gray-800">{category.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;
