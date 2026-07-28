// import routing tools from the react-router-dom
//broswer routwr enables routing across the whole map
// routes is container rhat picks which page to show
// route defines one url path and which component to show for it
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import components that appears in every page
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
// import all the 11 pages components
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Chefs from './pages/Chefs';
import Gallery from './pages/Gallery';
import Reservation from './pages/Reservation';
import Testimonials from './pages/Testimonials';
import Blog from './pages/Blog';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

// App is the main component the root of the whole site
function App() {
  return (
    // BroswerRouter wraps everything so routing works anywhere inside it 
    <BrowserRouter>
    {/*Navbar is outside Routes so it shows on every page */ }
    <Navbar />
    {/*Routes looks at the current url and renders one matching route */ }
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/chefs" element={<Chefs />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />

        {/* Catch-all route: matches any URL that didn't match above.
            Must be LAST, or it would block every other route. */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* Footer is also OUTSIDE <Routes>, so it shows on every page too */}
        <Footer />
    </BrowserRouter>
  );
}
// makes App available for the main.jsx to import and render
export default App;