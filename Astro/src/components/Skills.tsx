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
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill) => (
            <li className="bg-indigo-600 hover:bg-indigo-500 p-6 rounded-lg shadow-md">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
