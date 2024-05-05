import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../layouts/header';
import Footer from '../layouts/footer';
import About from '../pages/about';
import NotFound from '../pages/not-found';
import BlogPostDetail from '../pages/blog-post';
import BlogPostsContainer from '../containers/blog-post';

const App: React.FC = () => {
  return (
    <Router>
      <Header /> {/* Include Header component */}
      <div className="container flex-1 p-4 mx-auto">
        {' '}
        {/* Main content area */}
        <Routes>
          {' '}
          {/* Define routes for different pages */}
          <Route path="/" element={<BlogPostsContainer />} /> {/* Home page */}
          <Route path="/about" element={<About />} /> {/* About page */}
          <Route path="/post/:id" element={<BlogPostDetail />} />{' '}
          {/* Blog post detail by slug */}
          <Route path="*" element={<NotFound />} />{' '}
          {/* Not Found page for unmatched routes */}
        </Routes>
      </div>
      <Footer /> {/* Include Footer component */}
    </Router>
  );
};

export default App;
