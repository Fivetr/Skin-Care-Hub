import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className="tw-bg-[#eae6aded] tw-py-4 tw-text-center tw-flex tw-flex-wrap tw-justify-between tw-items-center">
      {/* First Column with Logo and Title */}
      <div className="tw-flex tw-flex-col tw-items-start tw-mb-4 tw-md:mb-0 tw-pl-8">
        <img src="logo.jpg" alt="Logo" className="tw-w-40 tw-h-40 tw-mb-2" />
        <h2>Skin Care Hub</h2>
      </div>

      {/* Second Column - Learn More & Contact Us */}
      <div className="tw-flex tw-flex-col tw-mb-4 tw-md:mb-0">
        <a href="/learn-more" className="tw-text-gray-600 hover:tw-text-blue-500 tw-mb-1">
          Learn More
        </a>
        <a href="/contact-us" className="tw-text-gray-600 hover:tw-text-blue-500">
          Contact Us
        </a>
      </div>

      {/* Third Column - View Order, View Cart, etc. */}
      <div className="tw-flex tw-flex-col tw-mb-4 tw-md:mb-0">
        <a href="/view-order" className="tw-text-gray-600 hover:tw-text-blue-400 tw-mb-1">
          View Order
        </a>
        <a href="/view-cart" className="tw-text-gray-600 hover:tw-text-blue-400 tw-mb-1">
          View Cart
        </a>
        {/* Add more links as needed */}
      </div>

      {/* Fourth Column - Register & Login */}
      <div className="tw-flex tw-flex-col tw-mb-4 tw-md:mb-0">
        <a href="/register" className="tw-text-gray-600 hover:tw-text-green-500 tw-mb-1">
          Register
        </a>
        <a href="/login" className="tw-text-gray-600 hover:tw-text-green-500">
          Login
        </a>
      </div>

      {/* New Row for Social Media Links & Copyright */}
      <div className="tw-w-full tw-flex tw-flex-col tw-md:flex-row tw-justify-between tw-items-center">
        {/* Social Media Links */}
        <div className="tw-flex tw-gap-4 tw-mt-4 tw-md:mt-0">
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="tw-w-6 tw-h-6 tw-text-gray-600 hover:tw-text-blue-500" />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="tw-w-6 tw-h-6 tw-text-gray-600 hover:tw-text-blue-400" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="tw-w-6 tw-h-6 tw-text-gray-600 hover:tw-text-pink-500" />
          </a>
        </div>

        {/* Copyright */}
        <p className="tw-mt-1 tw-text-gray-600 tw-md:ml-4">
          &copy; {2023} Clean Skin Care
        </p>
      </div>
    </div>
  );
}

export default Footer;
