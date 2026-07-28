import { useState } from 'react';
import PageBanner from '../components/PageBanner/PageBanner';
import galleryData from '../data/galleryData';
import './Gallery.css';
import usePageTitle from '../hooks/usePageTitle';

const categories = ['All', 'Food', 'Interior', 'Drinks', 'Desserts'];

function Gallery() {
  usePageTitle('Gallery')
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages =
    activeCategory === 'All'
      ? galleryData
      : galleryData.filter((item) => item.category === activeCategory);

  return (
    <div>
      <PageBanner title="Gallery" subtitle="Home / Gallery" />
      <div className="gallery_page">
        <div className="gallery_filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`gallery_filter_btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="gallery_grid">
          {filteredImages.map((item) => (
            <div className="gallery_item" key={item.id}>
              <img src={item.image} alt={item.category} />
              <div className="gallery_overlay">
                <span>{item.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;