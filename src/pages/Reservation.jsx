import { useState } from 'react';
import './Reservation.css';
import usePageTitle from '../hooks/usePageTitle';

function Reservation() {
  usePageTitle('Reservation');
  // One state object holding ALL form fields together, instead of separate useState for each
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    guests: '',
  });
// Tracks whether the form has been successfully submitted
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="reservation_hero">
      <div className="reservation_hero_left">
        <h1>Reserve Your Table for a Night by the Fire</h1>
        <p>
          Book ahead and settle into an evening of smoke-kissed dishes,
          slow-cooked spice, and warm firelight — a table set for lingering.
        </p>
      </div>

      <div className="reservation_card">
        {/* Conditional rendering: show success message OR the form, never both */}
        {submitted ? (
          <p className="reservation_success">
            Thank you, {formData.name || 'guest'}! Your table for{' '}
            {formData.guests} on {formData.date} has been requested.
          </p>
        ) : (
          <form className="reservation_form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
           <input
  type="text"
  name="date"
  placeholder="Select Date & Time"
  value={formData.date}
  onChange={handleChange}
  required
/>
<input
  type="text"
  name="guests"
  placeholder="Number of Guests"
  value={formData.guests}
  onChange={handleChange}
  required
/>

            <button type="submit" className="reservation_btn">make reservation</button>
          </form>
        )}
      </div>
    </section>
  );
}

export default Reservation;