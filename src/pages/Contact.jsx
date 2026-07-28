import { useState } from 'react';
import PageBanner from '../components/PageBanner/PageBanner';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';
import usePageTitle from '../hooks/usePageTitle';
import './Contact.css';

function Contact() {
  usePageTitle('Contact Us');

  // Same pattern as Reservation.jsx: one object holding all form fields together
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // Tracks whether the form has been submitted yet
  const [submitted, setSubmitted] = useState(false);

  // Same generic handler as Reservation.jsx - works for ANY input,
  // because it reads which field changed from e.target.name
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();   // stop the browser's default page-reload behavior
    setSubmitted(true);   // switch UI to show the success message
  };

  return (
    <div>
      <PageBanner title="Contact Us" subtitle="Home / Contact" />

      <div className="contact_page">

        {/* SECTION 1: contact details - static, no state involved */}
        <div className="contact_info">
          <div className="contact_info_item">
            <FaMapMarkerAlt />
            <div>
              <h4>Location</h4>
              <p>F-7 Markaz, Islamabad, Pakistan</p>
            </div>
          </div>
          <div className="contact_info_item">
            <FaPhoneAlt />
            <div>
              <h4>Phone</h4>
              <p>+92 300 1234567</p>
            </div>
          </div>
          <div className="contact_info_item">
            <FaEnvelope />
            <div>
              <h4>Email</h4>
              <p>hello@aumbre.com</p>
            </div>
          </div>
          <div className="contact_info_item">
            <FaClock />
            <div>
              <h4>Hours</h4>
              <p>Mon–Fri: 12PM–11PM<br />Sat–Sun: 11AM–12AM</p>
            </div>
          </div>
        </div>

        {/* SECTION 2: the form itself */}
        <div className="contact_form_wrapper">
          {/* Same ternary pattern as Reservation.jsx: show success message OR form, never both */}
          {submitted ? (
            <p className="contact_success">
              Thank you, {formData.name || 'friend'}! We've received your message and will get back to you soon.
            </p>
          ) : (
            <form className="contact_form" onSubmit={handleSubmit}>
              <div className="contact_row">
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
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <button type="submit" className="contact_btn">Send message</button>
            </form>
          )}
        </div>

        {/* SECTION 3: map placeholder - purely visual, no real map integration */}
        <div className="contact_map_placeholder">
        </div>

      </div>
    </div>
  );
}

export default Contact;