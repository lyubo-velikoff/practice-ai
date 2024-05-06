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
      <Header />
      <div className="container flex-1 p-4 mx-auto">
        <Routes>
          <Route path="/" element={<BlogPostsContainer />} />
          <Route path="/about" element={<About />} />
          <Route path="/post/:id" element={<BlogPostDetail />} />{' '}
          <Route path="*" element={<NotFound />} />{' '}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
