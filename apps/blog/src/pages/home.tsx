import React from 'react';
import { Link } from 'react-router-dom';
import { BlogPost } from '../types';
import { PLACEHOLDER_IMAGE } from '../constants/constants';

interface HomeProps {
  posts: BlogPost[];
}

const Home: React.FC<HomeProps> = ({ posts }) => {
  return (
    <div className="container p-4 mx-auto">
      <h1 className="mb-6 text-3xl font-bold">Latest Blog Posts</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <div
            key={post.id}
            className="p-4 transition border rounded-lg hover:shadow-lg"
          >
            <img
              src={post.cover_image ? post.cover_image : PLACEHOLDER_IMAGE}
              alt={post.title}
              className="object-cover w-full h-40 mb-4 rounded"
            />
            <h2 className="text-xl font-semibold">
              <Link to={`/post/${post.id}`} className="copy">
                {post.title}
              </Link>
            </h2>
            <p className="text-gray-600">
              {post.readable_publish_date} by {post.user.name}
            </p>

            <Link to={`/post/${post.id}`} className="inline-block mt-4 copy">
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
