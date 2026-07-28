import './ChefCard.css';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

// Receives one "chef" object as a prop, same pattern as MenuCard receiving "item"
function ChefCard({ chef }) {
  return (
    <div className="chef_card">
      <img src={chef.image} alt={chef.name} className="chef_card_image" />

      <div className="chef_card_body">
        <h3>{chef.name}</h3>
        <p className="chef_card_position">{chef.position}</p>

        {/* Combining two pieces of data with a separator dot, inline */}
        <p className="chef_card_meta">{chef.experience} · {chef.specialty}</p>

        <p className="chef_card_bio">{chef.bio}</p>

        {/* These social icons are the same for every chef - not driven by data,
            just decorative/placeholder links (href="#") */}
        <div className="chef_card_socials">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaLinkedinIn /></a>
        </div>
      </div>
    </div>
  );
}

export default ChefCard;