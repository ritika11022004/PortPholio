import React from "react"; //rfce
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Achievements from "./components/Achievements";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Achievements />
      <Projects />
      <Certifications />
      <Contact /> 
    </>
  );
}

export default App;
