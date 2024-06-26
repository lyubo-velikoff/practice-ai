import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="p-4 text-center bg-white shadow-sm">
      <p>© 2024 My Blog. All rights reserved.</p> {/* Copyright information */}
      <p>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-300"
        >
          Follow us on Twitter
        </a>
      </p>
    </footer>
  );
};

export default Footer;
