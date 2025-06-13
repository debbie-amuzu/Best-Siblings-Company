import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';
import HealthBenefits from '../components/HealthBenefits';

const Home = () => {
  return (
    <div className="bg-white">
      {/* Hero Banner Section */}
      <Hero />
      
      {/* Featured Products Section */}
      <FeaturedProducts />
      
      {/* Health Benefits Section */}
      <HealthBenefits />
      
      {/* Customer Testimonials */}
      <Testimonials />
      
      {/* Newsletter Signup */}
      <Newsletter />
    </div>
  );
};

export default Home;