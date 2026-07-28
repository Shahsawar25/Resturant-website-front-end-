import starter1 from '../assets/images/popular-categories/starter1.jpg';
import starter2 from '../assets/images/popular-categories/starter2.jpg';
import main1 from '../assets/images/popular-categories/main1.jpg';
import main2 from '../assets/images/popular-categories/main2.jpg';
import dessert1 from '../assets/images/popular-categories/dessert1.jpg';
import dessert2 from '../assets/images/popular-categories/dessert2.jpg';
import drink1 from '../assets/images/popular-categories/drink1.jpg';
import drink2 from '../assets/images/popular-categories/drink2.jpg';

const menuData = [
  // Main Course (10 items) - alternate main1 / main2
  { id: 1, name: 'Grilled Salmon', category: 'Main Course', price: '1100', calories: 420, image: main1, recommended: true },
  { id: 2, name: 'Truffle Pasta', category: 'Main Course', price: '900', calories: 510, image: main2, recommended: true },
  { id: 3, name: 'Classic Burger', category: 'Main Course', price: '800', calories: 650, image: main1, recommended: false },
  { id: 4, name: 'Margherita Pizza', category: 'Main Course', price: '1500', calories: 580, image: main2, recommended: false },
  { id: 5, name: 'BBQ Ribs', category: 'Main Course', price: '720', calories: 720, image: main1, recommended: true },
  { id: 6, name: 'Chicken Alfredo', category: 'Main Course', price: '700', calories: 600, image: main2, recommended: false },
  { id: 7, name: 'Beef Steak', category: 'Main Course', price: '650', calories: 780, image: main1, recommended: true },
  { id: 8, name: 'Vegetable Stir Fry', category: 'Main Course', price: '400', calories: 380, image: main2, recommended: false },
  { id: 9, name: 'Shrimp Scampi', category: 'Main Course', price: '200', calories: 490, image: main1, recommended: false },
  { id: 10, name: 'Lamb Chops', category: 'Main Course', price: '200', calories: 690, image: main2, recommended: true },

  // Starters (8 items) - alternate starter1 / starter2
  { id: 11, name: 'Bruschetta', category: 'Starters', price: '900', calories: 220, image: starter1, recommended: false },
  { id: 12, name: 'Calamari', category: 'Starters', price: '1000', calories: 340, image: starter2, recommended: true },
  { id: 13, name: 'Spring Rolls', category: 'Starters', price: '750', calories: 260, image: starter1, recommended: false },
  { id: 14, name: 'Garlic Bread', category: 'Starters', price: '600', calories: 300, image: starter2, recommended: false },
  { id: 15, name: 'Caesar Salad', category: 'Starters', price: '900', calories: 280, image: starter1, recommended: true },
  { id: 16, name: 'Stuffed Mushrooms', category: 'Starters', price: '900', calories: 250, image: starter2, recommended: false },
  { id: 17, name: 'Onion Rings', category: 'Starters', price: '670', calories: 400, image: starter1, recommended: false },
  { id: 18, name: 'Chicken Wings', category: 'Starters', price: '1000', calories: 480, image: starter2, recommended: true },

  // Desserts (6 items) - alternate dessert1 / dessert2
  { id: 19, name: 'Chocolate Lava Cake', category: 'Desserts', price: '900', calories: 450, image: dessert1, recommended: true },
  { id: 20, name: 'Tiramisu', category: 'Desserts', price: '900', calories: 420, image: dessert2, recommended: false },
  { id: 21, name: 'Cheesecake', category: 'Desserts', price: '800', calories: 400, image: dessert1, recommended: true },
  { id: 22, name: 'Ice Cream Sundae', category: 'Desserts', price: '700', calories: 380, image: dessert2, recommended: false },
  { id: 23, name: 'Apple Pie', category: 'Desserts', price: '980', calories: 360, image: dessert1, recommended: false },
  { id: 24, name: 'Panna Cotta', category: 'Desserts', price: '800', calories: 340, image: dessert2, recommended: false },

  // Beverages (6 items) - alternate drink1 / drink2
  { id: 25, name: 'Fresh Lemonade', category: 'Beverages', price: '400', calories: 120, image: drink1, recommended: false },
  { id: 26, name: 'Iced Coffee', category: 'Beverages', price: '500', calories: 150, image: drink2, recommended: true },
  { id: 27, name: 'Mango Smoothie', category: 'Beverages', price: '600', calories: 220, image: drink1, recommended: false },
  { id: 28, name: 'Mint Mojito (Virgin)', category: 'Beverages', price: '600', calories: 140, image: drink2, recommended: false },
  { id: 29, name: 'Hot Chocolate', category: 'Beverages', price: '600', calories: 260, image: drink1, recommended: false },
  { id: 30, name: 'Fresh Orange Juice', category: 'Beverages', price: '400', calories: 110, image: drink2, recommended: true },
];

export default menuData;