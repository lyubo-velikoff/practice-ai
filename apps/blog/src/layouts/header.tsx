import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container flex items-center justify-between px-4 py-4 mx-auto">
        <Link to="/" className="flex items-center hover:text-blue-300">
          <img
            src="https://placehold.co/150x50"
            alt="Company Logo"
            className="h-8 mr-3"
          />
          <span className="text-xl font-semibold">CompanyName</span>
        </Link>

        <nav className="hidden space-x-4 md:flex">
          <Link to="/" className="copy">
            Home
          </Link>
          <Link to="/about" className="copy">
            About
          </Link>
        </nav>

        <button className="text-gray-900 md:hidden focus:outline-none">
          <i className="fas fa-bars"></i>
        </button>
      </div>
    </header>
  );
};

export default Header;
