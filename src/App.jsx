import { useState } from "react";
import Navbar from "./components/Navbar";
import Introduction from "./components/Introduction";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Skills from "./components/Skill";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="w-full bg-gray-900  flex-1 ">
      <Navbar />
      <Introduction />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
