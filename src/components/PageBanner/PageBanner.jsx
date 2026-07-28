import './PageBanner.css';

function PageBanner({ title, subtitle }) {
  return (
    <div className="page_banner">
      <p className="page_banner_subtitle">{subtitle}</p>
      <h1 className="page_banner_title">{title}</h1>
    </div>
  );
}

export default PageBanner;