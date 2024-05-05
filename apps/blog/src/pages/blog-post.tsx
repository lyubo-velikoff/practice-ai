import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { BlogPost } from '../types';
import NotFound from './not-found'; // Not found page

export const placeholderImage =
  'https://via.placeholder.com/640x360.png?text=No+Image+Available'; // Placeholder image

const BlogPostDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Get the blog post ID from the URL
  const [post, setPost] = useState<BlogPost | null>(null); // State to hold the blog post
  const [loading, setLoading] = useState<boolean>(true); // Loading state
  const [error, setError] = useState<string | null>(null); // Error state

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`https://dev.to/api/articles/${id}`); // Fetch the blog post by ID
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`); // Handle HTTP errors
        }
        const data: BlogPost = await response.json(); // Parse JSON response
        setPost(data); // Store the fetched blog post
      } catch (err: any) {
        setError(err.message); // Store the error message
      } finally {
        setLoading(false); // Loading is complete
      }
    };

    fetchPost(); // Fetch the blog post when the component mounts
  }, [id]); // Re-run effect when ID changes

  if (loading) {
    return <p>Loading blog post...</p>; // Display a loading message
  }

  if (error) {
    return <p>Error: {error}</p>; // Display an error message
  }

  if (!post) {
    return <NotFound />; // Display a "Not Found" page if the blog post doesn't exist
  }

  return (
    <div className="container px-4 mx-auto">
      {/* Breadcrumbs */}
      <nav className="mb-4 text-sm text-gray-700">
        <Link to="/" className="hover:underline">
          Home
        </Link>{' '}
        / <span className='font-bold'>{post.title}</span>
      </nav>
      {/* Image (use placeholder if cover image is not available) */}
      <img
        src={post.cover_image || placeholderImage}
        alt={post.title}
        className="object-cover w-full h-64 mb-4 rounded-lg"
      />
      {/* Blog Post Content */}
      <h1 className="mb-4 text-3xl font-bold">{post.title}</h1>
      <p className="text-gray-600">{`Published on ${post.readable_publish_date} by ${post.user.name}`}</p>{' '}
      {/* Metadata */}
      {/* Render the body_markdown as Markdown content */}
      {post.body_markdown && (
        <div className="markdown-content">
          <ReactMarkdown>{post.body_markdown}</ReactMarkdown>
        </div>
      )}
      {/* Link to full article */}
      <a
        href={post.canonical_url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 text-blue-600 hover:text-blue-800"
      >
        Read the full article
      </a>
    </div>
  );
};

export default BlogPostDetail;
