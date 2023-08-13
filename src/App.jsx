import { useState } from "react";
import "./App.css";
import Header from "./component/Header";
import LandingPage from "./component/LandingPage";
import { styles } from "./styles";

import About from "./component/About";
import Experience from "./component/Experience";
import Works from "./component/Works";
import Contact from "./component/Contact";
import StarsCanvas from "./component/canvas/Stars";
import Github from "./component/Github";
import Documentation from "./component/Documentation";
import Skills from "./component/Skills";
import SmoothImgScroll from "./component/smooth_scroll";
import Lenis from "@studio-freight/lenis";

// const lenis = new Lenis()

// lenis.on('scroll', (e) => {
//   // console.log(e)
// })

function App() {
  
  return (
    <>
      <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
        <div className={`max-w-7xl mx-auto`}>
          <Header />
          <br />
          <br />
          <br />
          <LandingPage />
          <About />
          <Skills/>
          <Experience />
          <Works />
          <Github />
          <Documentation />
          <SmoothImgScroll/>
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
