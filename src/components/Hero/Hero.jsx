import heroImage from '../../assets/images/hero_section.png';
import './Hero.css';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section
      className="hero_section"
      style={{ '--hero-bg-image': `url(${heroImage})` }}
    >
      <div className="hero_overlay">
        <h1 className="hero_heading">Savor the<br />Firelight</h1>
        <p className="hero_text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit<br />
         Recusandae earum tenetur animi officiis nihil.
        </p>
        <Link to="/reservation" className="hero_cta">Reserve a table</Link>
      </div>
    </section>
  );
}

export default Hero;