import React from "react";
import PersonOverview from "../components/PersonOverview";


const AboutMe: React.FC = () => {
  return (
    <div className="bg-gradient-to-b to-cyan-900 from-indigo-700 h-full overflow-hidden flex items-center justify-center">
      <PersonOverview/>
    </div>
  );
};

export default AboutMe;
