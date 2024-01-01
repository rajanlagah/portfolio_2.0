// src/components/AnimatedBox.js

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const AnimatedBox = ({
  children,
  value,
  rotations = 1,
  duration,
  bg = "#915EFF"
}) => {
  const [rotationCount, setRotationCount] = useState(0);

  const controls = useAnimation();

  const startAnimation = async () => {
    controls.set({ rotate: 0, backgroundColor: "white" });
    await controls.start({
      rotate: 360 * rotations,
      backgroundColor: bg,
      transition: { duration }
    });
    setRotationCount(rotationCount + rotations);
    // setBackgroundColor("red");
  };

  useEffect(() => {
    startAnimation();
  }, []);

  return (
    <button
      className="relative w-56 h-56 md:w-64 md:h-64 text-white"
      onClick={startAnimation}
    >
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-[#4c23a4] rounded-md shadow-[0px_0px_60px_-0px_rgba(255,255,255,0.15)]"
        animate={controls}
      >
        <div className="flex items-center justify-center w-full h-full">
          {value}
        </div>
      </motion.div>

      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-[#2f1a5d] rounded-lg shadow-lg"
        initial={{ rotate: 0, backgroundColor: "white" }}
        animate={controls}
      />

      {/* <button
    > */}
      <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 text-center -translate-y-1/2 py-2 text-white rounded">
        {children}
      </span>
      {/* </button> */}
    </button>
  );
};

export default AnimatedBox;
