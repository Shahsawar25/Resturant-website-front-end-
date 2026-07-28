import './AboutPreview.css';
import { Link } from 'react-router-dom';
import ourStoryImage from '../../assets/images/our-story.jpg'

function AboutPreview() {
  return (
    <section className="about_preview_section">
      <div className="about_preview_image">
        <img
  src={ourStoryImage}
  alt="Restaurant interior"
/>
      </div>
      <div className="about_preview_content">
        <h2>Our story</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam necessitatibus ratione molestiae.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus ad officiis dolores. 
        </p>
        <Link to="/about" className="about_preview_link">Read more →</Link>
      </div>
    </section>
  );
}

export default AboutPreview;