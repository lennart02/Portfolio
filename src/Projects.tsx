// src/Projects.tsx
import React from "react";

const Projects: React.FC = () => {
  return (
    <div className="bg-cyan-950 text-gray-100 min-h-screen ">
      <div className="container mx-auto py-32">
        <h2 className="text-4xl font-bold mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-cyan-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Project 1</h3>
            <p>Description of Project 1.</p>
          </div>
          <div className="bg-cyan-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Project 2</h3>
            <p>Description of Project 2.</p>
          </div>
          {/* Add more project items as needed */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
