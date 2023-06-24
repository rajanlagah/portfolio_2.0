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

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
        <div className={`max-w-7xl mx-auto`}>
          <Header />
          <LandingPage />
          <About />
          <Experience />
          <Works />
          <div className="relative z-0">
            <Contact />
            <StarsCanvas/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
