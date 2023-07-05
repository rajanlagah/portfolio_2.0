import React from "react";
import { motion } from "framer-motion";

// import painBrush from '/skills/paint-brush.svg'

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant, containerGrow } from "../utils/motion";

const max_year = 4;

const services = [
  {
    title: "HTML",
    color: "#f06529",
    badgeColor: "#f06529ae",
    year: 4
  },
  {
    title: "CSS",
    color: "#264de4cc",
    badgeColor: "#264de4",
    year: 4
  },
  {
    title: "JavaScript",
    color: "#F0DB4Fcc",
    badgeColor: "#F0DB4F",
    year: 4
  },
  {
    title: "React",
    color: "#61DBFBcc",
    badgeColor: "#61DBFB",
    year: 4
  },
  {
    title: "ExpressJS",
    color: "#68A063cc",
    badgeColor: "#68A063",
    year: 4
  },
  {
    title: "Redux",
    color: "#764abccc",
    badgeColor: "#764abc",
    year: 4
  },
  {
    title: "Jenkins",
    color: "#D33834",
    badgeColor: "#61DBFB",
    year: 3
  },
  {
    title: "Postgres",
    color: "#0064a5",
    badgeColor: "#00000099",
    year: 2.5
  },
  {
    title: "MongoDB",
    color: "#4DB33D",
    badgeColor: "#00000099",
    year: 2
  },
  {
    title: "Cypress",
    color: "#0f0",
    badgeColor: "#61DBFB",
    year: 2
  },
  {
    title: "Docker",
    color: "#0db7ed",
    badgeColor: "#61DBFB",
    year: 1.5
  }
];

const SkillBar = ({ index, title, color, year, badgeColor }) => (
  <motion.div variants={containerGrow(index*0.5)} className="mt-2 xs:w-[250px] w-full">
    <div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div className="relative align-middle rounded-[10px] w-[300px] md:w-[600px] h-[30px] flex justify-between">
        <div
          className={`rounded-[5px]`}
          style={{
            backgroundColor: color,
            width: (year / max_year) * 100 + "%"
          }}
        >
          <h3
            className="text-white opacity-80 rounded-l-[5px] font-bold px-2 w-[150px] h-[30px] text-[14px] flex justify-start items-center text-center"
            style={{
              backgroundColor: "#222"
            }}
          >
            {title}
          </h3>
        </div>
        <p className="text-white px-5 absolute right-0 top-1">{year} years</p>
      </div>
    </div>
  </motion.div>
);

const Skills = () => {
  return (
    <div>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Skills</p>
        <h2 className={styles.sectionHeadText}>Technologies</h2>
      </motion.div>
      <div className="flex min-h-[60vh] justify-start gap-12 items-center flex-wrap">
        <div className="flex flex-col justify-center gap-12">
          <div className="flex justify-evenly gap-5">
            <img
              className="skill-icon-img"
              src="./skills/paint-brush.svg"
            />
            <div>
              <h2 className="sm:text-xl md:text-2xl text-[#ccc] font-bold"> Design + Development</h2>
              <p className="mt-3 md:w-96 tracking-wider text-sm">
                Clean, modern 3D web designs - optimized for performance
              </p>
            </div>
          </div>

          <div className="flex justify-evenly gap-5">
            <img
              className="skill-icon-img"
              src="./skills/code.svg"
            />
            <div>
              <h2 className="sm:text-xl md:text-2xl text-[#ccc] font-bold">Architecture</h2>
              <p className="mt-3 md:w-96 tracking-wider text-sm">
                FullStack Developer with passion of creating and solving system
                architecture
              </p>
            </div>
          </div>

          <div className="flex justify-evenly gap-5">
            <img
              className="skill-icon-img"
              src="./skills/jira.svg"
            />
            <div>
              <h2 className="sm:text-xl md:text-2xl text-[#ccc] font-bold">Management</h2>
              <p className="mt-3 md:w-96 tracking-wider text-sm">
                Responsibility of delivering final product and keeping team
                up-to-date{" "}
              </p>
            </div>
          </div>
        </div>

        <div>
          {services.map((service, index) => (
            <SkillBar key={service.title} index={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Skills, "about");
