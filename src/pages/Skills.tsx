// src/Skills.tsx
import React from "react";

const skills: string[] = [
  "Python",
  "C#",
  ".NET",
  "Postgresql",
  "JavaScript",
  "Typescript",
  "React",
  "HTML",
  "Tailwind",
  "React Native",
  "Docker",
];

const Skills: React.FC = () => {
  return (
    <div className="bg-gradient-to-b to-cyan-900 from-indigo-700 min-h-screen">
      <div className="container mx-auto py-32">
        <p className="relative group mb-8 w-min">
          <span className="text-4xl font-bold ">Skills</span>
          <span className="absolute -bottom-1 left-1/2 w-0 h-2 bg-blue-300 group-hover:w-1/2 group-hover:transition-all"></span>
          <span className="absolute -bottom-1 right-1/2 w-0 h-2 bg-blue-300 group-hover:w-1/2 group-hover:transition-all"></span>
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill) => (
            <li className="bg-indigo-600 hover:bg-indigo-500 p-6 rounded-lg shadow-md">
              {skill}
            </li>
          ))}
          {/* Add more skills as needed */}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
