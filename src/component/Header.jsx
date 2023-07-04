import { NavLink } from "react-router-dom";
import { styles } from "../styles";

import closeIcon from "/close.svg";
import openIcon from "/menu.svg";
import { useState } from "react";

const Header = () => {
  const [isSidebarOpen, setisSidebarOpen] = useState(false);

  return (
    <div className="relative w-full">
      <div className={`flex items-center fixed w-[70%] z-10`}>
        <div className="flex w-full gap-2 items-center">
          <img width="150px" src="/r-logo.png" />
          {/* <h1 className="text-3xl font-light">Portfolio</h1> */}
          {/* <div>
        <h1 className="text-2xl font-light">Rajan</h1>
        <span className="text-3xl"> Lagah</span>
      </div> */}
        </div>
        <nav className="hidden md:flex text-xl justify-end items-end gap-6">
          <a href="#about"> About </a>
          <a href="#work"> Work </a>
          <a href="#projects"> Projects </a>
          <a href="#docs"> Docs </a>
          <a href="#about"> Contact </a>
        </nav>
      </div>
      {!isSidebarOpen && (
        <nav className="md:hidden z-[99999] fixed">
          <img onClick={()=>setisSidebarOpen(true)} className="fixed right-0 p-4" src={openIcon} />
        </nav>
      )}
      {isSidebarOpen && (
        <nav className="md:hidden z-[99999] fixed h-[100%] right-[0px] top-0 w-[250px] bg-secondary">
          <img onClick={()=>setisSidebarOpen(false)} className="fixed right-0 p-4" src={closeIcon} />
          <div className="flex flex-col h-[100%] text-xl justify-start gap-10 bg-tertiary w-[90%] ml-[10%] pl-10 pt-10">
            <a href="#about" onClick={()=>setisSidebarOpen(false)}> About </a>
            <a href="#work" onClick={()=>setisSidebarOpen(false)}> Work </a>
            <a href="#projects" onClick={()=>setisSidebarOpen(false)}> Projects </a>
            <a href="#docs" onClick={()=>setisSidebarOpen(false)}> Docs </a>
            <a href="#about" onClick={()=>setisSidebarOpen(false)}> Contact </a>
          </div>
        </nav>
      )}
    </div>
  );
};

export default Header;
