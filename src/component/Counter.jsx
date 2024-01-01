import { animate } from "framer-motion";
import React, { useEffect, useRef } from "react";

function Counter({ children, from, to, infoText, duration= 2.5 }) {
  const nodeRef = useRef();

  useEffect(() => {
    const node = nodeRef.current;

    const controls = animate(from, to, {
      duration,
      onUpdate(value) {
        node.textContent = value.toFixed(0);
      }
    });

    return () => controls.stop();
  }, [from, to]);

  return (
    <div className="flex flex-col items-center">
      {children}
      <p className="text-4xl md:text-6xl" ref={nodeRef} />
      <p className="text-sm md:text-1xl">{infoText}</p>
    </div>
  );
}

export default Counter;
