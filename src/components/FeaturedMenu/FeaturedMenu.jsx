import './FeaturedMenu.css';
import { Link } from 'react-router-dom';

// Reusing the same photos from Popular Categories
import main1 from '../../assets/images/popular-categories/main1.jpg';
import main2 from '../../assets/images/popular-categories/main2.jpg';
import starter1 from '../../assets/images/popular-categories/starter1.jpg';



const featuredItems = [
  {
    id: 1,
    name: 'Grilled Chicken',
    image: main1,
  },
  {
    id: 2,
    name: 'Truffle Pasta',
    image: main2,
  },
  {
    id: 3,
    name: 'Classic Burger',
    image: starter1,
  },
];

function FeaturedMenu() {
  return (
    <section className="featured_menu_section">
      <p className="featured_menu_eyebrow">Carnivore Tasty Offer</p>
      <h2 className="featured_menu_heading">
        <span className="featured_menu_flourish">........</span>
        Our Menu
        <span className="featured_menu_flourish">........</span>
      </h2>

      <div className="featured_menu_grid">
        {featuredItems.map((item) => (
          <div className="featured_menu_card" key={item.id}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <Link to="/menu" className="featured_menu_btn">read more</Link>
          </div>
        ))}
      </div>

      <p className="featured_menu_description">
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae inventore voluptatibus iure error itaque numquam necessitatibus autem tempore optio. Dolores voluptate consectetur quidem voluptas labore delectus eligendi reprehenderit earum quaerat?
      </p>
    </section>
  );
}

export default FeaturedMenu;