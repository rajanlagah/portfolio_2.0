import { useState } from "react";
import "./App.css";
import Header from "./component/Header";
import LandingPage from "./component/LandingPage";
import { styles } from "./styles";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
        <div className={`max-w-7xl mx-auto`}>
          <Header />
          <LandingPage />
        </div>
      </div>
    </>
  );
}

export default App;
