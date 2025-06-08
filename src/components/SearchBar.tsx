
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search } from 'lucide-react';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');

  return (
    <div className="bg-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto">
          <div className="flex-1">
            <Input
              placeholder="What are you looking for?"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="h-12 text-lg"
            />
          </div>
          <div className="w-full md:w-48">
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="h-12">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="vegetables">Vegetables</SelectItem>
                <SelectItem value="fruits">Fruits</SelectItem>
                <SelectItem value="grains">Grains</SelectItem>
                <SelectItem value="livestock">Livestock</SelectItem>
                <SelectItem value="dairy">Dairy</SelectItem>
                <SelectItem value="equipment">Equipment</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button className="bg-farm-green hover:bg-farm-dark-green text-white h-12 px-8">
            <Search className="mr-2 h-5 w-5" />
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
