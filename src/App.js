import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import BackToTopButton from "./components/buttons/backToTopButton";
import Footer from "./components/Footer";

function App() {
 
  // Loading Page
  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById("spinner");
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 2000);
  }
  return (
    !loading && (
      <div>
        <NavBar />
        <Home />
        <About />
        <Projects />
        <Experience />
        <Contact />
        <Footer />

        <SocialLinks />
        <BackToTopButton />
      </div>
    )
  );
}

export default App;
