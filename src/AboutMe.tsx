import React from "react";

const AboutMe: React.FC = () => {
  return (
      <div className="bg-cyan-950 h-full overflow-hidden text-gray-50 flex items-center justify-center">
        <div className="bg-cyan-900 p-8 rounded shadow-lg text-center">
          <h1 className="text-5xl font-extrabold mb-4">Lennart Pries</h1>
          <p className="text-gray-300 text-lg mb-8">Software Developer</p>
          <ul className="flex justify-center space-x-4">
            <li>
              <a
                href="https://github.com/lennart02"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-500 text-white px-4 py-2 rounded-full transition duration-300 hover:bg-blue-700"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/lennart-pries-84bb8a238/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-500 text-white px-4 py-2 rounded-full transition duration-300 hover:bg-blue-700"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="mailto:lennartichbin@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-500 text-white px-4 py-2 rounded-full transition duration-300 hover:bg-blue-700"
              >
                Email
              </a>
            </li>
          </ul>
        </div>
      </div>
  );
};

export default AboutMe;