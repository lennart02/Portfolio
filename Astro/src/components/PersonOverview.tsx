import React from "react";

const ShortLink: React.FC<{ href: string; text: string }> = (props) => {
  return (
    <a
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-blue-500 text-white px-4 py-2 rounded-full transition duration-300 hover:bg-blue-200 hover:text-indigo-700 font-bold transform hover:-translate-y-1 active:translate-y-0"
    >
      {props.text}
    </a>
  );
};

export default function PersonOverview() {
  return (
    <div className="bg-indigo-600 p-8 rounded shadow-lg text-center hover:scale-110  transition">
      <h1 className="text-5xl font-extrabold mb-4">Lennart Pries</h1>
      <p className="text-steal-300 text-lg mb-8">Software Developer</p>
      <ul className="flex justify-center space-x-4">
        <li>
          <ShortLink
            href="https://www.linkedin.com/in/lennart-pries-84bb8a238/"
            text="LinkedIn"
          />
        </li>
        <li>
          <ShortLink href="https://github.com/lennart02" text="GitHub" />
        </li>
        <li>
          <ShortLink href="mailto:lennartichbin@gmail.com" text="Email" />
        </li>
      </ul>
    </div>
  );
}
