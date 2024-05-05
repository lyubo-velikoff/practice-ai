import React from 'react';
import { Link } from 'react-router-dom';
import { BlogPost } from '../types';
import { placeholderImage } from './blog-post';

interface HomeProps {
  posts: BlogPost[]; // An array of blog posts
}

const Home: React.FC<HomeProps> = ({ posts }) => {
  return (
    <div className="container p-4 mx-auto">
      {' '}
      {/* Container with padding */}
      <h1 className="mb-6 text-3xl font-bold">Latest Blog Posts</h1>{' '}
      {/* Title */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {' '}
        {/* Responsive grid */}
        {posts.map((post) => (
          <div
            key={post.id}
            className="p-4 transition border rounded-lg hover:shadow-lg"
          >
            {' '}
            {/* Card */}
            <img
              src={post.cover_image ? post.cover_image : placeholderImage}
              alt={post.title}
              className="object-cover w-full h-40 mb-4 rounded"
            />
            <h2 className="text-xl font-semibold">
              <Link
                to={`/post/${post.id}`}
                className="text-blue-600 hover:text-blue-800"
              >
                {post.title}
              </Link>
            </h2>
            <p className="text-gray-600">
              {post.readable_publish_date} by {post.user.name}
            </p>{' '}
            {/* Metadata */}
            <p className="mt-2">{post.description}</p> {/* Description */}
            <Link
              to={`/post/${post.id}`}
              className="inline-block mt-4 text-blue-600 hover:text-blue-800"
            >
              Read More
            </Link>{' '}
            {/* Link to full post */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
