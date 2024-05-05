import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      {/* Centered content */}
      <h1 className="text-5xl font-bold text-red-600">404</h1>{' '}
      {/* Error code */}
      <p className="mt-4 text-xl text-gray-700">Page Not Found</p>{' '}
      {/* Error message */}
      <p className="mt-2 text-gray-500">
        Sorry, the page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="px-4 py-2 mt-6 text-white bg-gray-900 rounded hover:bg-gray-700"
      >
        {/* Back to Home */}
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
