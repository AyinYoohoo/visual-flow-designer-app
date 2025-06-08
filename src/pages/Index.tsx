
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import SearchBar from '@/components/SearchBar';
import FeaturedProducts from '@/components/FeaturedProducts';
import Categories from '@/components/Categories';
import FeaturedSeller from '@/components/FeaturedSeller';
import Testimonials from '@/components/Testimonials';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <SearchBar />
      <FeaturedProducts />
      <Categories />
      <FeaturedSeller />
      <Testimonials />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default Index;
