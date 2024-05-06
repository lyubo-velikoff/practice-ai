import React, { useEffect, useState } from 'react';
import { BlogPost } from '../types';
import Home from '../pages/home';
import { ARTICLE_API_URL } from '../constants/constants';

const BlogPostsContainer: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`${ARTICLE_API_URL}/articles`);
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data: BlogPost[] = await response.json();
        setPosts(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <p>Loading blog posts...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return <Home posts={posts} />;
};

export default BlogPostsContainer;
