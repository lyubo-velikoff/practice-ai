import React from 'react';

const About: React.FC = () => {
  return (
    <div className="container p-4 mx-auto">
      <h1 className="mb-4 text-3xl font-bold">About Us</h1>
      <p className="text-lg text-gray-700">
        Welcome to our blog! We share knowledge, insights, and stories with our
        audience.
      </p>
      <p className="mt-4 text-gray-600">
        Our goal is to create content that informs, inspires, and engages. We
        cover a range of topics, from technology and programming to lifestyle
        and personal development.
      </p>
      <p className="mt-4 text-gray-600">
        Thank you for visiting, and we hope you enjoy reading our blog!
      </p>
    </div>
  );
};

export default About;
