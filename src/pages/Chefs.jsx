import PageBanner from '../components/PageBanner/PageBanner';
import ChefCard from '../components/ChefCard/ChefCard';
import chefsData from '../data/chefsData';
import './Chefs.css';
import usePageTitle from '../hooks/usePageTitle'; 

function Chefs() {
  usePageTitle('Our Chefs');
  return (
    <div>
      <PageBanner title="Our Chefs" subtitle="Home / Chefs" />
      <div className="chefs_page">
        <div className="chefs_grid">
          {chefsData.map((chef) => (
            <ChefCard key={chef.id} chef={chef} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Chefs;