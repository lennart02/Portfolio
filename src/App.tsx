import React from "react";
import Navbar from "./Navbar";

import { Route, Router, BrowserRouter, Routes } from "react-router-dom";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Projects from "./Projects";

function App() {
  return (
    <BrowserRouter>
      <div className="h-screen">
        <Navbar />
        <Routes>
          <Route path="/projects" element={<Projects/>} />
          <Route path="/skills" element={<Skills/>} />
          <Route path="/" element={<AboutMe />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
