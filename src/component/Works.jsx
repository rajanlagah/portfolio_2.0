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
    name: "Hydrogen Wishlist",
    org:{
      name:"Swym",
      color:"#8bc34a"
    },
    description:
      "Shopify store with Swym wishlist app configured using rest APIs. We also deploy setup docs using codelabs",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient"
      },
      {
        name: "Shopify",
        color: "green-text-gradient"
      },
      {
        name: "claat",
        color: "pink-text-gradient"
      }
    ],
    image: hydrogen,
    source_code_link: "https://github.com/swym-corp/swym-hydrogen-store"
  },{
    name: "Swym dashboard",
    org:{
      name:"Swym",
      color:"#8bc34a"
    },
    description:
      "Swym dashboard to check store revenue contribution by swym apps and integrate swym features",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient"
      },
      {
        name: "Redux",
        color: "green-text-gradient"
      },
      {
        name: "Clojure",
        color: "pink-text-gradient"
      }
    ],
    image: swym_dashboard,
    source_code_link: "https://github.com/swym-corp/swym-hydrogen-store"
  },
  {
    name: "SWOT",
    org:{
      name:"Swym",
      color:"#8bc34a"
    },
    description:
      "We trained and build our chatbot that has learned from Swym help articles and can answer questions related to every feature and feature integration that swym support. Reducing inbound traffic to Customer support team and response time.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient"
      },
      {
        name: "ChatGPT",
        color: "green-text-gradient"
      },
      {
        name: "SwymHackathon2023",
        color: "pink-text-gradient"
      }
    ],
    image: SWOT,
    source_code_link:
      "https://medium.com/aimonks/how-a-company-can-make-a-chatbot-from-help-articles-997434f88aba"
  },
  {
    name: "Swym docs",
    org:{
      name:"Swym",
      color:"#8bc34a"
    },
    description:
      "Solution where Swym documentation, API documentation and Changelog is posted.",
    tags: [
      {
        name: "Readme",
        color: "blue-text-gradient"
      },
      {
        name: "Docs",
        color: "green-text-gradient"
      }
    ],
    image: swym_docs,
    source_code_link: "https://developers.swym.it/docs"
  }
];

const WENDOR_PROJECTS = [
  {
    name: "Dashboard",
    org:{
      name:"Wendor",
      color:"#fff"
    },
    description:
      "Dashboard to manage wending machines. Get vending machine status, revenue reporting and feature integrations",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient"
      },
      {
        name: "Express",
        color: "green-text-gradient"
      },
      {
        name: "PWA",
        color: "pink-text-gradient"
      }
    ],
    image: wendor_dashboard,
    source_code_link: "https://admin.wendor.in/"
  },
  {
    name: "Kiosk",
    org:{
      name:"Wendor",
      color:"#fff"
    },
    description:
      "Vending machine's Touch screen app",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient"
      },
      {
        name: "Redux",
        color: "green-text-gradient"
      },
      {
        name: "PWA",
        color: "pink-text-gradient"
      }
    ],
    image: wendor_kiosk,
    source_code_link:
      "https://medium.com/aimonks/how-a-company-can-make-a-chatbot-from-help-articles-997434f88aba"
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
        className="bg-tertiary p-5 rounded-2xl sm:w-[560px] w-full h-[500px] flex flex-col justify-between"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />
          <br/>
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="bg-white drop-shadow-lg w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={'/arrow-up-right-from-square.svg'}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5 h-[200px]">
          {org && (
            <span className={`border-solid pr-2 text-[15px] text-[${org.color}]`}>
            {org.name}
          </span>
          )}
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 tracking-wide text-secondary text-[14px]">{description}</p>
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

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Featured Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following publically available projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {SWYM_PROJECTS.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {WENDOR_PROJECTS.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
