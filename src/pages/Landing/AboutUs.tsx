import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <div className="">
      <div className="w-full max-w-4xl p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6">About Us</h2>
        <p className="text-lg text-gray-700 mb-6">
          We are a passionate team dedicated to providing top-notch services and solutions for all your needs.
          Our mission is to offer high-quality products that meet the highest standards, helping our customers
          achieve their goals and make the most of their investments.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          With years of experience in the industry, we pride ourselves on our ability to innovate and adapt to
          the changing needs of the market. Our team is driven by a commitment to excellence and customer satisfaction.
        </p>
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-4">Our Values</h3>
          <ul className="list-disc list-inside text-lg text-gray-700">
            <li>Integrity in everything we do</li>
            <li>Customer satisfaction as our top priority</li>
            <li>Innovation and continuous improvement</li>
            <li>Collaborative and transparent work culture</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
