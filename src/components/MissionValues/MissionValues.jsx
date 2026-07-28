import './MissionValues.css';
import { FaHeart, FaSeedling, FaHandsHelping } from 'react-icons/fa';

const values = [
  {
    id: 1,
    icon: <FaHeart />,
    title: 'passion',
    text: 'We pour our heart into every dish we create.',
  },
  {
    id: 2,
    icon: <FaSeedling />,
    title: 'sustainability',
    text: 'We source responsibly from local, trusted farms.',
  },
  {
    id: 3,
    icon: <FaHandsHelping />,
    title: 'community',
    text: 'We believe great food brings people together.',
  },
];

function MissionValues() {
  return (
    <section className="mission_values_section">
      <h2 className="mission_values_heading">Our Values</h2>
      <div className="mission_values_grid">
        {values.map((value) => (
          <div className="mission_values_card" key={value.id}>
            <div className="mission_values_icon">{value.icon}</div>
            <h3>{value.title}</h3>
            <p>{value.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MissionValues;