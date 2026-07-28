import './TeamIntro.css';
import { Link } from 'react-router-dom';

function TeamIntro() {
  return (
    <section className="team_intro_section">
      <h2 className="team_intro_heading">The hands behind it</h2>
      <p className="team_intro_text">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium fugiat omnis quo minus ipsa odio accusamus, unde ad id porro delectus magnam voluptatibus. Repellendus voluptas illum sequi exercitationem quisquam molestiae!
      </p>
      <Link to="/chefs" className="team_intro_link">Meet the Chefs →</Link>
    </section>
  );
}

export default TeamIntro;