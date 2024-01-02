// src/Skills.tsx
import React from "react";

const Skills: React.FC = () => {
  return (
    <div className="bg-cyan-950 text-gray-100 min-h-screen">
      <div className="container mx-auto py-32">
        <h2 className="text-4xl font-bold mb-8">Skills</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <li className="bg-cyan-800 p-4 rounded shadow-md">
            <strong>React</strong>
          </li>
          <li className="bg-cyan-800 p-4 rounded shadow-md">
            <strong>JavaScript</strong>
          </li>
          <li className="bg-cyan-800 p-4 rounded shadow-md">
            <strong>HTML</strong>
          </li>
          <li className="bg-cyan-800 p-4 rounded shadow-md">
            <strong>CSS</strong>
          </li>
          {/* Add more skills as needed */}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
