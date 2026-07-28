import './WhyChooseUs.css';
import tasteIcon from '../../assets/icons/taste-icon.png';
import chefIcon from '../../assets/icons/chef-icon.png';
import discountIcon from '../../assets/icons/discount-icon.png';
import deliveryIcon from '../../assets/icons/delivery-icon.png';

const reasons = [
  {
    id: 1,
    icon: tasteIcon,
    title: 'Taste Matters',
    text: 'Use this space to promote the business, its dishes or its services.',
  },
  {
    id: 2,
    icon: chefIcon,
    title: 'The Best Chefs',
    text: 'Use this space to promote the business, its dishes or its services.',
  },
  {
    id: 3,
    icon: discountIcon,
    title: 'Discounts',
    text: 'Use this space to promote the business, its dishes or its services.',
  },
  {
    id: 4,
    icon: deliveryIcon,
    title: 'Express Delivery',
    text: 'Use this space to promote the business, its dishes or its services.',
  },
];

function WhyChooseUs() {
  return (
    <section className="why_choose_us_section">
      <h2 className="why_choose_us_heading">Why People Choose Us?</h2>
      <p className="why_choose_us_subtitle">
       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti quod omnis fugiat deleniti ipsam soluta, illo necessitatibus officia et natus voluptatum assumenda repellendus nobis dolores delectus totam dignissimos tempora enim.
      </p>

      <div className="why_choose_us_bg">
        <div className="why_choose_us_card">
          {reasons.map((reason) => (
            <div className="why_choose_us_item" key={reason.id}>
             <img className="why_choose_us_icon" src={reason.icon} alt={reason.title} />
              <h3>{reason.title}</h3>
              <p>{reason.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;