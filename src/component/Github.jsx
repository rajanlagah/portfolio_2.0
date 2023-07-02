import React from "react";
// import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import github from "/github.png";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

import hydrogen from "/projects/hydrogen.png";
import SWOT from "/projects/SWOT.png";
import swym_docs from "/projects/swym_docs.png";
import swym_dashboard from "/projects/swym_dashboard.png";

import wendor_dashboard from "/projects/wendor_dashboard.png";
import wendor_kiosk from "/projects/wendor_kiosk.png";

const SWYM_PROJECTS = [
  {
    name: "React internet meter",
    stats: {
      stars: 13,
      fork: 3
    },
    description:
      "Component to run callback when internet speed get below given threshold value",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient"
      },
      {
        name: "Npm",
        color: "green-text-gradient"
      },
      // {
      //   name: "claat",
      //   color: "pink-text-gradient"
      // }
    ],
    source_code_link: "https://github.com/rajanlagah/react-internet-meter"
  },
  {
    name: "React select scrollable",
    stats: {
      stars: 1,
      fork: 0
    },
    description:
      "Select tag that looks like apple scroll bar on mobile devices and normal select tag on desktop",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient"
      },
      {
        name: "Npm",
        color: "green-text-gradient"
      }
    ],
    source_code_link: "https://github.com/rajanlagah/react-select-scrollable"
  },
  {
    name: "whitespace-se/storybook-addon-html",
    stats: {
      stars: 82,
      fork: 36
    },
    description:
      "Code style fix",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient"
      },
      {
        name: "Storybook",
        color: "green-text-gradient"
      }
    ],
    source_code_link:
      "https://github.com/whitespace-se/storybook-addon-html/pull/40"
  },
  {
    name: "Login boilerplate (React)",
    description:
      "Boilerplate for graphql based react app",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient"
      },
      {
        name: "Graphql",
        color: "green-text-gradient"
      }
    ],
    source_code_link: "https://github.com/5WebProjectChallenge/node-react-login-react-ts"
  }
];

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  org,
  source_code_link
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="p-5 cursor-pointer hover:bg-tertiary rounded-2xl sm:w-[560px] h-[230px] w-full flex flex-col justify-between"
      >
        <div className="mt-5 h-[200px]">
          {/* {org && (
            <span
              className={`border-solid pr-2 text-[15px] text-[${org.color}]`}
            >
              {org.name}
            </span>
          )} */}
          <h3 className="text-white font-bold text-[24px]">
            <div className="flex justify-between items-center cursor-pointe">
              {name}
              <img
                src={"/arrow-up-right-from-square-white.svg"}
                alt="source code"
                className="w-[20px] h-[20px] object-contain"
              />
            </div>
          </h3>
          <p className="mt-2 tracking-wide text-secondary text-[14px]">
            {description}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Github = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My Contribution</p>
        <h2 className={`${styles.sectionHeadText}`}>Open source</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Checkout my open source npm packages, github templates and open source
          contribution
        </motion.p>
      </div>

      <div className="mt-5 flex flex-wrap gap-7">
        {SWYM_PROJECTS.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Github, "");
