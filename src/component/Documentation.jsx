import React from "react";
// import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import Slider from "react-slick";

import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import hydrogen from "/projects/hydrogen.png";
import SWOT from "/projects/SWOT.png";
import swym_docs from "/projects/swym_docs.png";
import swym_dashboard from "/projects/swym_dashboard.png";

import twa from "/Docs/twa.png";
import er_diagrams from "/Docs/er_diagrams.png";
import Lottery from "/Docs/Lottery.png";
import NFT_ranking from "/Docs/NFT_ranking.png";

const SWYM_PROJECTS = [
  {
    name: "Decentralized Lottery",
    description:
      "Using chainlink's random number will get the winner from players array and all the balance of contract will be transfered to winner.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient"
      },
      {
        name: "Solidity",
        color: "green-text-gradient"
      },
      {
        name: "Web3",
        color: "pink-text-gradient"
      }
    ],
    image: Lottery,
    source_code_link:
      "https://rj-docs.vercel.app/Documentation/Blockchain/Lottery"
  },
  {
    name: "NFT Ranking",
    description:
      "NFT ranking on the bases of rarity",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient"
      },
      {
        name: "Moralis",
        color: "green-text-gradient"
      }
    ],
    image: NFT_ranking,
    source_code_link: "https://rj-docs.vercel.app/Documentation/Blockchain/NFTRanking"
  },
  {
    name: "Publishing TWA to playstore",
    org: {
      name: "Swym",
      color: "#8bc34a"
    },
    description:
      "TWA are way to publish your PWA website on playstore. This doc will cover step by step guide for publishing TWA",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient"
      },
      {
        name: "Android",
        color: "green-text-gradient"
      },
      {
        name: "PWA",
        color: "pink-text-gradient"
      }
    ],
    image: twa,
    source_code_link:
      "https://rajanlagah.medium.com/publishing-twa-to-playstore-664f2ac6f325"
  },
  {
    name: "Er diagram explained",
    org: {
      name: "Swym",
      color: "#8bc34a"
    },
    description:
      "Basics of ER diagram. It explains componenets of ER diagram of CRUD app",
    tags: [
      {
        name: "DB",
        color: "blue-text-gradient"
      },
      {
        name: "ER Diagrams",
        color: "green-text-gradient"
      }
    ],
    image: er_diagrams,
    source_code_link:
      "https://rajanlagah.medium.com/er-diagram-explained-8f79c442ec84"
  },
  
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
    <div className="mr-4 w-[300px]">
      <div className="bg-tertiary p-2 rounded-xl flex flex-col justify-between">
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-xl"
          />
          <br />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="bg-white drop-shadow-lg w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={"/arrow-up-right-from-square.svg"}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5 h-[200px]">
          {org && (
            <span
              className={`border-solid pr-2 text-[15px] text-[${org.color}]`}
            >
              {org.name}
            </span>
          )}
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
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
    </div>
  );
};

const Documentation = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    focusOnSelect: true,
    slidesToShow: 3,
    speed: 500
  };
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My DOCS</p>
        <h2 className={`${styles.sectionHeadText}`}>Blogs</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          This contains my blog posts on various platforms and for full detailed
          articles visit
        </motion.p>
      </div>
      <br />
      <a
        className="text-white underline"
        target="blank"
        href="https://rj-docs.vercel.app/"
      >
        Visit My Personal Blog Website
      </a>

      <div className="mt-10">
        <Slider {...settings}>
          {SWYM_PROJECTS.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </Slider>
      </div>
    </>
  );
};

export default SectionWrapper(Documentation, "docs");
