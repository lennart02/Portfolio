import React from "react";
import { Link } from "react-router-dom";
import HoverLink from "./HoverLink";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-indigo-900">
      <div className="container mx-auto flex text-white items-center">
        <Link
          to="/"
          className="title-font font-medium text-white text-2xl p-4 mr-10"
        >
          Lennart Pries
        </Link>
        <HoverLink to="/" text="About Me" />
        <HoverLink to="/projects" text="Projects" />
        <HoverLink to="/skills" text="Skills" />
        {/* <HoverLink to="/contact" text="Contact" /> */}
      </div>
    </nav>
  );
};

export default Navbar;
