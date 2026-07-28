import './Timeline.css';

const milestones = [
  { id: 1, year: '2004', text: 'Opened as a small family kitchen with six tables.' },
  { id: 2, year: '2011', text: 'Expanded the dining room, added our signature wood-fire grill.' },
  { id: 3, year: '2017', text: 'Named one of the city\'s top dining spots for three years running.' },
  { id: 4, year: '2024', text: 'Two decades in, still family-run, still slow-cooked.' },
];

function Timeline() {
  return (
    <section className="timeline_section">
      <h2 className="timeline_heading">Our journey</h2>
      <div className="timeline_track">
        {milestones.map((item) => (
          <div className="timeline_item" key={item.id}>
            <div className="timeline_dot"></div>
            <h3>{item.year}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Timeline;