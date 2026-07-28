import './OurStory.css';
import { Link } from 'react-router-dom';
import ourStoryImage from '../../assets/images/our-story.jpg';
import './OurStory.css';

function OurStory() {
  return (
    <section className="our_story_section">
      <div className="our_story_content">
        <h2>slow food, made<br />since 2004</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos qui animi error cum hic quam, laudantium consequatur sequi ad in voluptate fugit nisi impedit quasi, omnis quas minima! Fugiat, molestias.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem reiciendis aut repellendus laudantium libero quisquam inventore amet. Culpa, asperiores nihil architecto aspernatur, quo suscipit reiciendis, ipsum cumque hic animi voluptates?
        </p>
        <Link to="/menu" className="our_story_btn">view menu</Link>
      </div>
      <div className="our_story_image">
       <img
  src={ourStoryImage}
  alt="Restaurant interior"
/>
      </div>
    </section>
  );
}

export default OurStory;