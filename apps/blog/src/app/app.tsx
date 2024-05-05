
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../layouts/header';
import Footer from '../layouts/footer';
import About from '../pages/about';
import Home from '../pages/home';
import NotFound from '../pages/not-found';
import BlogPostPage from '../pages/blog-post';

const App: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Introduction to React',
      excerpt: 'Learn the basics of React and how to get started.',
      author: 'John Doe',
      date: '2024-05-05',
    },
    {
      id: 2,
      title: 'Getting Started with TypeScript',
      excerpt: 'A quick guide to understanding TypeScript.',
      author: 'Jane Smith',
      date: '2024-05-06',
    },
    // Additional blog posts can be added here
  ];

  return (
    <Router>
      <Header /> {/* Include Header component */}
      <div className="container flex-1 p-4 mx-auto"> {/* Main content area */}
        <Routes> {/* Define routes for different pages */}
          <Route path="/" element={<Home posts={blogPosts} />} /> {/* Home page */}
          <Route path="/about" element={<About />} /> {/* About page */}
          <Route path="/post/:postId" element={<BlogPostPage posts={blogPosts} />} /> {/* Blog Post page */}
          <Route path="*" element={<NotFound />} /> {/* Not Found page for unmatched routes */}
        </Routes>
      </div>
      <Footer /> {/* Include Footer component */}
    </Router>
  );
};

export default App;
