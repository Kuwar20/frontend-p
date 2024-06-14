import React from 'react';
import logo from '../assets/logo.png';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-purple-500 text-white p-4 md:px-14 max-w-screen-2xl mx-auto">
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <a href="/" className="flex items-center space-x-3">
            <img src={logo} alt="logo" className="w-10" />
            <span className="text-2xl font-semibold text-primary">XYZ</span>
          </a>
          <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non accumsan nunc.</p>
        </div>
        <div>
          <h2 className="font-bold text-xl mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-gray-300">Home</a></li>
            <li><a href="/about" className="hover:text-gray-300">About Us</a></li>
            <li><a href="/services" className="hover:text-gray-300">Services</a></li>
            <li><a href="/contact" className="hover:text-gray-300">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold text-xl mb-4">Contact Us</h2>
          <p>Email: contact@xyz.com</p>
          <p>Phone: +123 456 7890</p>
          <div className="flex space-x-4 mt-4">
            <a href="https://facebook.com" className="hover:text-gray-300"><FaFacebookF /></a>
            <a href="https://twitter.com" className="hover:text-gray-300"><FaTwitter /></a>
            <a href="https://instagram.com" className="hover:text-gray-300"><FaInstagram /></a>
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <p>© 2023 XYZ Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;