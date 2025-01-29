import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-[#001433] p-4 text-white flex justify-between items-center fixed top-0 w-full z-10 transition-all">
      <div className="flex items-center gap-2">
        <img
          src="https://beyondchats.com/wp-content/uploads/2024/04/output-onlinepngtools.png"
          alt="Logo"
          className="h-8"
        />
        <h1 className="text-xl font-bold">BeyondChats</h1>
      </div>
      <ul className="flex gap-4">
        <li>
          <Link to="/" className="hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link to="/register" className="hover:underline">
            Register
          </Link>
        </li>
        <li>
          <Link to="/setup-organization" className="hover:underline">
            Setup
          </Link>
        </li>
        <li>
          <Link to="/chatbot-integration" className="hover:underline">
            Integration
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:underline">
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
