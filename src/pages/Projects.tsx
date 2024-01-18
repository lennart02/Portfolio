// src/Projects.tsx
import React from "react";

const Projects: React.FC = () => {
  return (
    <div className="bg-gradient-to-b to-cyan-900 from-indigo-700  min-h-screen ">
      <div className="container mx-auto py-32">
          <p className="relative group mb-8 w-min">
            <span className="text-4xl font-bold ">Projects</span>
            <span className="absolute -bottom-1 left-1/2 w-0 h-2 bg-blue-300 group-hover:w-1/2 group-hover:transition-all"></span>
            <span className="absolute -bottom-1 right-1/2 w-0 h-2 bg-blue-300 group-hover:w-1/2 group-hover:transition-all"></span>
          </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Navigate to www.drinkdoors.com */}
          <a
            href="https://www.drinkdoors.com"
            target="_blank"
            rel="noreferrer"
            className=" bg-indigo-600 hover:bg-indigo-500 p-6 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-semibold mb-2">DrinkDoors</h3>
            <p>A drinking game for your mobile phone.</p>
          </a>
          {/* Add more project items as needed */}
          <a
            href="https://github.com/lennart02/Portfolio"
            target="_blank"
            rel="noreferrer"
            className=" bg-indigo-600 hover:bg-indigo-500 p-6 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-semibold mb-2">Portfolio Website</h3>
            <p>A personal website showcasing my projects and skills.</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
