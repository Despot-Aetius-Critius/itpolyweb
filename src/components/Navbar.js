import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-500 text-white p-4 flex justify-between">
      <div className="font-bold">IT Department</div>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/about-us" className="hover:underline">About Us</Link>
        <Link to="/courses" className="hover:underline">Courses</Link>
        <Link to="/contact-us" className="hover:underline">Contact Us</Link>
      </div>
    </nav>
  );
}

export default Navbar;