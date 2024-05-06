import React from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { BlogPost } from '../types';
import { PLACEHOLDER_IMAGE } from '../constants/constants';

interface PostProps {
  post: BlogPost;
}

const Post: React.FC<PostProps> = ({ post }) => {
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

export default Post;
