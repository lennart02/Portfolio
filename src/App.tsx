import React from "react";
import Navbar from "./components/Navbar";

import { Route, BrowserRouter, Routes } from "react-router-dom";
import AboutMe from "./pages/AboutMe";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";

function App() {
  return (
    <BrowserRouter>
      <div className="h-screen text-neutral-100">
        <Navbar />
        <Routes>
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/" element={<AboutMe />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
