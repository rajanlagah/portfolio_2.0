import {motion} from 'framer-motion'
import { styles } from '../styles';
import ComputersCanvas from './canvas/Computer';
import { SectionWrapper } from '../hoc';

const LandingPage = () => {
  return (
    <div className={`${styles.paddingX} h-screen mt-10`}>
      <div className="flex justify-center items-start gap-2 w-max">
        <div className="flex flex-col justify-center items-center">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div >
          <h1 className="font-medium text-6xl text-white lg:text-[80px] sm:text-[60px] xs:text-[50px]">
            Hi, I'm <span className="text-[#915EFF] mt-5">Rajan</span>
          </h1>
          <br />
          <p className="font-thin tracking-wider lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]">I develop Web applications, </p>
          <p className="font-thin tracking-wider lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]">Smart contracts and npm packages </p>
        </div>
      </div>
      <div className="absolute flex justify-center items-center">
        <motion.div 
            animate={{
                y:[0,24,0]
            }}
            transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
            }}
        />
      </div>
      <ComputersCanvas/>
    </div>
  );
};

export default LandingPage;
