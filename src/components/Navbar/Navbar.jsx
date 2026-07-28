
// useState lets this component "remember" whether the mobile menu is open or closedimport { useState } from 'react';
import { useState } from 'react';
import './Navbar.css';
// NavLink works like Link, but automatically knows if its page is the current page
// FaUserCircle, FaBars, FaTimes are icon components from react-icons
import { NavLink } from 'react-router-dom';
import { FaUserCircle, FaBars, FaTimes } from 'react-icons/fa';

// menuOpen starts as false (mobile menu closed by default)
// setMenuOpen is the function we call to change it
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Just the site name/logo text */}
      <div className="navbar_wordmark">Aumbre</div>
{/* Hamburger button - only visible on small screens  */}
      {/* Clicking it flips menuOpen between true and false */}
      <button className="navbar_toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      <div className={`navbar_center ${menuOpen ? 'open' : ''}`}>
        <div className="navbar_logo_badge">à</div>

       <ul className="navbar_links">
        {/* Each NavLink automatically gets an "active" class when its page is current */}
          {/* onClick closes the mobile menu after clicking a link */}
  <li><NavLink to="/" onClick={() => setMenuOpen(false)}>home</NavLink></li>
  <li><NavLink to="/about" onClick={() => setMenuOpen(false)}>about</NavLink></li>
  <li><NavLink to="/menu" onClick={() => setMenuOpen(false)}>menu</NavLink></li>
  <li><NavLink to="/chefs" onClick={() => setMenuOpen(false)}>chefs</NavLink></li>
  <li><NavLink to="/gallery" onClick={() => setMenuOpen(false)}>gallery</NavLink></li>
  <li><NavLink to="/testimonials" onClick={() => setMenuOpen(false)}>testimonials</NavLink></li>
    <li><NavLink to="/blog" onClick={() => setMenuOpen(false)}>blog</NavLink></li>
    <li><NavLink to="/faq" onClick={() => setMenuOpen(false)}>faq</NavLink></li>
  <li><NavLink to="/contact" onClick={() => setMenuOpen(false)}>contact</NavLink></li>
</ul>

        <NavLink to="/reservation" className="navbar_reserve_btn" onClick={() => setMenuOpen(false)}>
          Reserve table
        </NavLink>
      </div>
{/* Profile icon on the far right */}
      <div className="navbar_profile">
        <FaUserCircle />
      </div>
    </nav>
  );
}

export default Navbar;