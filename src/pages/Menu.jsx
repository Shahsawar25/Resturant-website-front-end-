// useState lets us track which category filter is currently selected
import { useState } from 'react';
import PageBanner from '../components/PageBanner/PageBanner';
import MenuCard from '../components/MenuCard/MenuCard';
import menuData from '../data/menuData'; // the array of 30 dish objects
import './Menu.css';
import usePageTitle from '../hooks/usePageTitle';



const categories = ['All', 'Starters', 'Main Course', 'Desserts', 'Beverages'];

function Menu() {
  // Sets the browser tab title to "Menu | Àumbre Restaurant"
  usePageTitle('Menu');
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems =
    activeCategory === 'All'
      ? menuData
      : menuData.filter((item) => item.category === activeCategory);

  return (
    <div>
      <PageBanner title="Our Menu" subtitle="Home / Menu" />
      <div className="menu_page">
        <div className="menu_filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`menu_filter_btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="menu_grid">
           {/* .map() loops through filteredItems (already narrowed down above) */}
          {/* and renders one MenuCard component per dish, passing the dish data as a prop */}
          {filteredItems.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Menu;