import { useState } from "react";
import { NavLink } from "react-router-dom";

import closeIcon from "/close.svg";
import openIcon from "/menu.svg";

import { styles } from "../styles";

const Header = () => {
  const [isSidebarOpen, setisSidebarOpen] = useState(false);

  return (
    <div className={`${styles.paddingX} justify-between max-w-7xl mx-auto relative z-[999]`}>
      <div className={`flex p-1 items-center justify-between max-w-7xl w-[90%] fixed z-10 pr-12`}>
          <img className="bg-primary" width="60px" src="/r-logo.png" />
        <nav className="hidden md:flex text-xl justify-end items-end  gap-6">
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
