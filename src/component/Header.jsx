import { NavLink } from "react-router-dom";
import { styles } from "../styles";

const Header = () => {
  return (
    <div className={`flex items-center fixed w-[70%] z-10`}>
      <div className="flex w-full gap-2 items-center">
        <img width="150px" src="/r-logo.png" />
        {/* <h1 className="text-3xl font-light">Portfolio</h1> */}
        {/* <div>
        <h1 className="text-2xl font-light">Rajan</h1>
        <span className="text-3xl"> Lagah</span>
        </div> */}
      </div>
      <nav className="flex w-full gap-10 text-xl justify-end items-end">
        <a href="#about"> About </a>
        <a href="#work"> Work </a>
        <a href="#projects"> Projects </a>
        <a href="#docs"> Docs </a>
        <a href="#about"> Contact </a>
      </nav>
    </div>
  );
};

export default Header;
