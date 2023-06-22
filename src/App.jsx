import { useState } from "react";
import "./App.css";
import Header from "./component/Header";
import LandingPage from "./component/LandingPage";
import { styles } from "./styles";
import About from "./component/About";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
        <div className={`max-w-7xl mx-auto`}>
          <Header />
          <LandingPage />
          <About/>
        </div>
      </div>
    </>
  );
}

export default App;
