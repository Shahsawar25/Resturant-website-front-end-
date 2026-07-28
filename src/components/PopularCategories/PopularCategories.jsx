import { useState, useRef } from 'react';
import './PopularCategories.css';

// One line per image - simple and clear
import starter1 from '../../assets/images/popular-categories/starter1.jpg';
import starter2 from '../../assets/images/popular-categories/starter2.jpg';
import starter3 from '../../assets/images/popular-categories/starter3.jpg';
import starter4 from '../../assets/images/popular-categories/starter4.jpg';

import main1 from '../../assets/images/popular-categories/main1.jpg';
import main2 from '../../assets/images/popular-categories/main2.jpg';
import main3 from '../../assets/images/popular-categories/main3.jpg';
import main4 from '../../assets/images/popular-categories/main4.jpg';

import dessert1 from '../../assets/images/popular-categories/dessert1.jpg';
import dessert2 from '../../assets/images/popular-categories/dessert2.jpg';
import dessert3 from '../../assets/images/popular-categories/dessert3.jpg';
import dessert4 from '../../assets/images/popular-categories/dessert4.jpg';

import drink1 from '../../assets/images/popular-categories/drink1.jpg';
import drink2 from '../../assets/images/popular-categories/drink2.jpg';
import drink3 from '../../assets/images/popular-categories/drink3.jpg';
import drink4 from '../../assets/images/popular-categories/drink4.jpg';

// An OBJECT (not an array) - each key is a category name,
// each value is an array of dishes belonging to that category
const categoriesData = {
  Starters: [
    { id: 1, name: 'Bruschetta', price: '1500', image: starter1 },
    { id: 2, name: 'Calamari', price: '1000', image: starter2 },
    { id: 3, name: 'Caesar Salad', price: '980', image: starter3 },
    { id: 4, name: 'Chicken Wings', price: '1100', image: starter4 },
  ],
  'Main Course': [
    { id: 5, name: 'Grilled chicken', price: '1000', image: main1 },
    { id: 6, name: 'BBQ chicken', price: '890', image : main2 },
    { id: 7, name: 'Truffle Pasta', price: '1600', image: main3 },
    { id: 8, name: 'Fried Rice', price: '1200', image: main4 },
  ],
  Desserts: [
    { id: 9, name: 'Chocolate Lava Cake', price: '800', image: dessert1 },
    { id: 10, name: 'Tiramisu', price: '900', image: dessert2 },
    { id: 11, name: 'Cheesecake', price: '700', image: dessert3},
    { id: 12, name: 'Apple Pie', price: '700', image: dessert4 },
  ],
  Beverages: [
    { id: 13, name: 'Iced Coffee', price: '500', image: drink1 },
    { id: 14, name: 'Mango Smoothie', price: '450', image: drink2 },
    { id: 15, name: 'Fresh Lemonade', price: '400', image: drink3 },
    { id: 16, name: 'Hot Chocolate', price: '520', image: drink4},
  ],
};
// Object.keys() extracts just the category names into an array:
// ['Starters', 'Main Course', 'Desserts', 'Beverages']
const categoryNames = Object.keys(categoriesData);

function PopularCategories() {
  const [activeCategory, setActiveCategory] = useState('Main Course');
  const [direction, setDirection] = useState('right');
  const prevIndexRef = useRef(categoryNames.indexOf('Main Course'));

  const handleCategoryClick = (name) => {
    const newIndex = categoryNames.indexOf(name);
    setDirection(newIndex > prevIndexRef.current ? 'right' : 'left');
    prevIndexRef.current = newIndex;
    setActiveCategory(name);
  };

  return (
    <section className="popular_categories_section">
      <div className="popular_categories_sidebar">
        <p className="popular_categories_eyebrow">select your meal</p>
        <h2 className="popular_categories_heading">Popular Categories</h2>
        <div className="popular_categories_buttons">
          {categoryNames.map((name) => (
            <button
              key={name}
              className={
                activeCategory === name
                  ? 'popular_categories_btn active'
                  : 'popular_categories_btn'
              }
              onClick={() => handleCategoryClick(name)}
            >
              {name}
            </button>
          ))}
        </div>
      </div>

      <div className="popular_categories_content">
        <h3 className="popular_categories_title">{activeCategory}</h3>
        <div
          className={
            direction === 'right'
              ? 'popular_categories_grid slide_right'
              : 'popular_categories_grid slide_left'
          }
          key={activeCategory}
        >
          {categoriesData[activeCategory].map((item) => (
            <div className="popular_categories_card" key={item.id}>
              <img src={item.image} alt={item.name} />
              <h4>{item.name}</h4>
              <p>{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PopularCategories;