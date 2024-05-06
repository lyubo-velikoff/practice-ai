import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { BlogPost } from '../types';
import NotFound from './not-found';
import { ARTICLE_API_URL, PLACEHOLDER_IMAGE } from '../constants/constants';

const BlogPostDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`${ARTICLE_API_URL}/articles/${id}`);
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data: BlogPost = await response.json();
        setPost(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return <p>Loading blog post...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!post) {
    return <NotFound />;
  }

  return (
    <div className="container px-4 mx-auto">
      <nav className="mb-4 text-sm text-gray-700">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        / <span className="font-bold">{post.title}</span>
      </nav>

      <img
        src={post.cover_image || PLACEHOLDER_IMAGE}
        alt={post.title}
        className="object-cover w-full h-64 mb-4 rounded-lg"
      />

      <h1 className="mb-4 text-3xl font-bold">{post.title}</h1>
      <p className="text-gray-600">{`Published on ${post.readable_publish_date} by ${post.user.name}`}</p>

      {post.body_markdown && (
        <div className="markdown-content">
          <ReactMarkdown>{post.body_markdown}</ReactMarkdown>
        </div>
      )}

      <a
        href={post.canonical_url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 copy hover:underline"
      >
        Read the full article
      </a>
    </div>
  );
};

export default BlogPostDetail;
