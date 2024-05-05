import React, { useEffect, useState } from 'react';
import { BlogPost } from '../types'; // BlogPost interface
import Home from '../pages/home';

const BlogPostsContainer: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]); // State to hold the blog posts
  const [loading, setLoading] = useState<boolean>(true); // Loading state
  const [error, setError] = useState<string | null>(null); // Error state

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://dev.to/api/articles'); // Fetch blog posts from API
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`); // Handle HTTP errors
        }
        const data: BlogPost[] = await response.json(); // Parse JSON response
        setPosts(data); // Set the fetched data to the state
      } catch (err: any) {
        setError(err.message); // Set error state if an error occurs
      } finally {
        setLoading(false); // Set loading to false after completion
      }
    };

    fetchPosts(); // Fetch the blog posts when the component mounts
  }, []); // Empty dependency array to ensure effect runs only once

  if (loading) {
    return <p>Loading blog posts...</p>; // Display a loading message
  }

  if (error) {
    return <p>Error: {error}</p>; // Display an error message
  }

  return <Home posts={posts} />; // Pass the fetched blog posts to the Home component
};

export default BlogPostsContainer;
