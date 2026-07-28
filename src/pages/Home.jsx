// Import each section component - Home.jsx itself doesn't contain any content,
// it just decides WHICH sections appear and in WHAT order
import Hero from '../components/Hero/Hero';
import AboutPreview from '../components/AboutPreview/AboutPreview';
import FeaturedMenu from '../components/FeaturedMenu/FeaturedMenu';
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs';
import PopularCategories from '../components/PopularCategories/PopularCategories';
import ReviewsPreview from '../components/ReviewsPreview/ReviewsPreview';
import usePageTitle from '../hooks/usePageTitle';
function Home() {
  usePageTitle('Home');
  return (
    <div>
      {/* Each of these renders one full section, stacked top to bottom */}
      <Hero />
      <AboutPreview />
      <FeaturedMenu />
      <WhyChooseUs />
      <PopularCategories />
      <ReviewsPreview />
    </div>
  );
}

export default Home;