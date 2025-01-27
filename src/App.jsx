import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Introduction from "./components/Introduction";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Skills from "./components/Skill";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="w-full flex-1 overflow-hidden ">
      <div className="flex">
        <video
          autoPlay
          loop
          muted
          className="fixed flex-1 top-0 left-0 w-1/2 h-full object-cover"
          style={{ zIndex: -1 }}
        >
          <source src="/assets/stars-galaxy.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="fixed flex-1 top-0 right-0 w-1/2 h-full object-cover"
          style={{ zIndex: -1 }}
        >
          <source src="/assets/stars-galaxy.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>
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
