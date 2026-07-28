import PageBanner from '../components/PageBanner/PageBanner';
import blogData from '../data/blogData';
import './Blog.css';
import usePageTitle from '../hooks/usePageTitle';

function Blog() {
  usePageTitle('Blog');
  return (
    <div>
      <PageBanner title="Blog" subtitle="Home / Blog" />
      <div className="blog_page">
        <div className="blog_grid">
          {/* Same as Gallery - card markup written directly inline,
              no separate BlogCard.jsx file, since it's used in only one place */}
          {blogData.map((post) => (
            <div className="blog_card" key={post.id}>
              <img src={post.image} alt={post.title} />
              <div className="blog_card_body">
                <span className="blog_card_category">{post.category}</span>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <span className="blog_card_date">{post.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;