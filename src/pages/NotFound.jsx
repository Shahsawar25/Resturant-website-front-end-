import { Link } from 'react-router-dom';
import './NotFound.css';
import usePageTitle from '../hooks/usePageTitle';

function NotFound() {
  usePageTitle('Page Not Found');
  return (
    <div className="not_found_page">
      <h1 className="not_found_code">404</h1>
      <h2 className="not_found_title">This table isn't set</h2>
      <p className="not_found_text">
        The page you're looking for doesn't exist, or may have been moved.
        Let's get you back to something delicious.
      </p>
      <Link to="/" className="not_found_btn">back to home</Link>
    </div>
  );
}

export default NotFound;