import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cyan-900 p-4">
      <div className="container mx-auto flex  items-center ">
        <Link
          to="/"
          className="title-font font-medium text-white text-2xl mr-10"
        >
          Lennart Pries
        </Link>
        <Link to="/" className="text-white mx-4 hover:text-cyan-300">
          About Me
        </Link>
        <Link to="/projects" className="text-white mx-4 hover:text-cyan-300">
          Projects
        </Link>
        <Link to="/skills" className="text-white mx-4 hover:text-cyan-300">
          Skills
        </Link>
        {/* <a
          href="#contact"
          className="inline-flex items-center bg-cyan-800 border-0 py-1 px-3 focus:outline-none hover:bg-cyan-700 rounded text-base mt-4 md:mt-0 text-white"
        >
          Hire Me
        </a> */}
      </div>
    </nav>
  );
};

export default Navbar;
