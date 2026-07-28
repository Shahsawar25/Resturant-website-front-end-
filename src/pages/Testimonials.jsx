import { useState } from 'react';
import PageBanner from '../components/PageBanner/PageBanner';
import testimonialsData from '../data/testimonialsData';
import './Testimonials.css';
import usePageTitle from '../hooks/usePageTitle';
import { FaUserCircle } from 'react-icons/fa';
const achievements = [
  { id: 1, number: '20+', label: 'years of service' },
  { id: 2, number: '15k+', label: 'happy guests' },
  { id: 3, number: '30', label: 'signature dishes' },
  { id: 4, number: '6', label: 'awards won' },
];

function Testimonials() {
  usePageTitle('Testimonials');
  const [activeIndex, setActiveIndex] = useState(0);
  const activeReview = testimonialsData[activeIndex];

  return (
    <div>
      <PageBanner title="Testimonials" subtitle="Home / Testimonials" />

      <div className="testimonials_page">
        <div className="testimonials_preview">
          <p className="testimonials_text">"{activeReview.text}"</p>

          <div className="testimonials_avatar">
  <FaUserCircle />
</div>
          <h4 className="testimonials_name">{activeReview.name}</h4>
          <p className="testimonials_role">{activeReview.role}</p>

          <div className="testimonials_dots">
            {testimonialsData.map((review, index) => (
              <button
                key={review.id}
                className={
                  index === activeIndex
                    ? 'testimonials_dot active'
                    : 'testimonials_dot'
                }
                onClick={() => setActiveIndex(index)}
                aria-label={`Show review ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>

        <div className="achievements_strip">
          {achievements.map((item) => (
            <div className="achievement_item" key={item.id}>
              <h3>{item.number}</h3>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;