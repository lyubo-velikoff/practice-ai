import { SharedUi } from '@practice-ai/shared-ui';
import React from 'react';
import { Link } from 'react-router-dom';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
}

interface HomeProps {
  posts: BlogPost[];
}

const Home: React.FC<HomeProps> = ({ posts }) => {
  return (
    <div className="container p-4 mx-auto"> {/* Container with some padding */}
      <h1 className="mb-6 text-3xl font-bold">Latest Blog Posts</h1> {/* Title of the page */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"> {/* Responsive grid layout */}
        {posts.map((post) => ( /* Loop through the array of posts */
          <div key={post.id} className="p-4 transition border rounded-lg hover:shadow-lg"> {/* Card style for each post */}
            <h2 className="text-xl font-semibold">
              <Link to={`/post/${post.id}`} className="text-blue-600 hover:text-blue-800">
                {post.title}
              </Link>
            </h2>
            <p className="text-gray-600">{post.date} by {post.author}</p> {/* Author and date */}
            <p className="mt-2">{post.excerpt}</p> {/* Brief excerpt */}
            <Link to={`/post/${post.id}`} className="inline-block mt-4 text-blue-600 hover:text-blue-800">
              Read More
            </Link> {/* Link to full post */}
          </div>
        ))}
      </div>
      <SharedUi />
    </div>
  );
};

export default Home;
