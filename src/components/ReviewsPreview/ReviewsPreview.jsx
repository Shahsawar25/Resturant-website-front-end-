import { useState } from 'react';
import './ReviewsPreview.css';
import { FaUserCircle } from 'react-icons/fa';

const reviews = [
  {
    id: 1,
    text: '"Every dish felt like it had a story behind it — smoky, rich, and unforgettable. The best meal we\'ve had in Islamabad this year."',
    name: 'Sarah Johnson',
    role: 'Food Blogger',
     },
  {
    id: 2,
    text: '"Warm hospitality, beautiful ambiance, and food that actually lives up to the atmosphere. We\'ll be back with the whole family."',
    name: 'Ahmed Khan',
    role: 'Regular Guest',
  },
  {
    id: 3,
    text: '"The truffle pasta alone is worth the visit. A hidden gem with the kind of attention to detail you rarely find anymore."',
    name: 'Emily Davis',
    role: 'Local Reviewer',
  },
  {
    id: 4,
    text: '"From the firelight glow to the last bite of dessert, everything about this place feels intentional and cared for."',
    name: 'Daniel Kim',
    role: 'CEO, Founder',
  },
];

function ReviewsPreview() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeReview = reviews[activeIndex];

  return (
    <section className="reviews_preview_section">
      <h2 className="reviews_preview_heading">Customer Reviews</h2>

      <p className="reviews_preview_text">{activeReview.text}</p>

      <div className="reviews_preview_avatar">
  <FaUserCircle />
</div>
      <h4 className="reviews_preview_name">{activeReview.name}</h4>
      <p className="reviews_preview_role">{activeReview.role}</p>

      <div className="reviews_preview_dots">
        {reviews.map((review, index) => (
          <button
            key={review.id}
            className={
              index === activeIndex
                ? 'reviews_preview_dot active'
                : 'reviews_preview_dot'
            }
            onClick={() => setActiveIndex(index)}
            aria-label={`Show review ${index + 1}`}
          ></button>
        ))}
      </div>
    </section>
  );
}

export default ReviewsPreview;