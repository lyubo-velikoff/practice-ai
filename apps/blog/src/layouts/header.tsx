import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="p-4 text-white bg-blue-600"> {/* Background color and padding */}
      <div className="container flex items-center justify-between mx-auto">
        <h1 className="text-2xl font-bold">
          <Link to="/" className="hover:text-blue-300">My Blog</Link> {/* Home link */}
        </h1>
        <nav>
          <ul className="flex space-x-4"> {/* Navigation links */}
            <li>
              <Link to="/" className="hover:text-blue-300">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-300">About</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
