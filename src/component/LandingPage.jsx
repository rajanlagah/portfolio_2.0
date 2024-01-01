import { motion } from "framer-motion";
import { styles } from "../styles";
import Counter from "./Counter";
import AnimatedBox from "./AnimatedBox";
import ScrollArrow from "./ScrollArrow";

const LandingPage = () => {
  return (
    <div className={`${styles.paddingX} h-screen mt-10`}>
      <div className="flex justify-center items-start gap-2 w-max">
        <div className="flex flex-col justify-center items-center">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className="font-medium text-6xl text-white lg:text-[80px] sm:text-[60px] xs:text-[50px]">
            Hi, I'm <span className="text-[#915EFF] mt-5">Rajan</span>
          </h1>
          <br />
          <p className="font-thin tracking-wider lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]">
            I develop Web applications,{" "}
          </p>
          <p className="font-thin tracking-wider lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]">
            Smart contracts and npm packages{" "}
          </p>
        </div>
      </div>
      <div className="absolute flex justify-center items-center">
        <motion.div
          animate={{
            y: [0, 24, 0]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop"
          }}
        />
      </div>
      <div className="flex flex-col items-center gap-4 justify-between md:flex-row mt-24">
        <AnimatedBox duration={2} rotations={1} bg="#4c23a4">
          <Counter from={0} to={230} duration={2} infoText="Leetcode problems solved">
            <img
              src="/leetCode_logo.png"
              className="drop-shadow-md w-24 md:w-28 "
              alt="leetcode-logo"
            />
          </Counter>
        </AnimatedBox>

        <AnimatedBox duration={2.5} rotations={1.25} bg="#612fcd">
          <Counter from={0} to={2450} duration={2.5} infoText="Stackoverflow reputation">
            <img
              src="/stackOverflow.png"
              className="drop-shadow-md w-24 md:w-28 "
              alt="stackOverflow-logo"
            />
          </Counter>
        </AnimatedBox>

        <AnimatedBox duration={3} rotations={1.5}>
          <Counter from={0} to={13} duration={3.5} infoText="Github stars 🌟">
            <img
              src="/githubLogo.png"
              className="drop-shadow-md w-24 md:w-28 "
              alt="github-logo"
            />
          </Counter>
        </AnimatedBox>
      </div>
      <ScrollArrow/>
      {/* <ComputersCanvas/> */}
    </div>
  );
};

export default LandingPage;
