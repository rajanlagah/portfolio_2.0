import { useRef, useState } from "react";
import { useScroll, useTransform } from "framer-motion"

import "./style.css";

import ImgCol from "./ImgCol";

function SmoothImgScroll() {

  const ref_container = useRef()

  const {scrollYProgress} = useScroll({
    target:ref_container,
    offset:["start end", "end start"]
  })

  const y1 = useTransform(scrollYProgress, [0,1],[0, window.innerHeight * 0.6])
  const y2 = useTransform(scrollYProgress, [0,1],[0, window.innerHeight * 0.7])
  const y3 = useTransform(scrollYProgress, [0,1],[0, window.innerHeight * 0.4])
  const y4 = useTransform(scrollYProgress, [0,1],[0, window.innerHeight * -0.2])

  return (
    <div>
      <div className="img-container" ref={ref_container}>
        <ImgCol imgs={["books/100$startup.jpg", "books/atomicHabbit.jpg", "books/elonMusk.jpg"]} y={y1}/>
        <ImgCol imgs={["books/rework.jpg", "books/theOneThing.jpg", "books/7habbits.jpg"]} y={y2}/>
        <ImgCol imgs={["books/emyth.jpg", "books/cp_e.jpg", "books/hooked.jpg"]} y={y3}/>
        <ImgCol imgs={["books/deepWork.jpg", "books/monk.jpg", "books/richDadPoorDad.jpg"]} y={y4}/>
      </div>
    </div>
  );
}

export default SmoothImgScroll;