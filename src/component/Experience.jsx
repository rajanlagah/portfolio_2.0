import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

import swym_logo from "/swym.png";
import wendor_logo from "/wendor.png";
import gdT_logo from "/gdT.png";

const experiences = [
  {
    title: "Web Developer",
    company_name: "Grand dairy tech",
    icon: gdT_logo,
    iconBg: "#383E56",
    date: "Dec 2018 - Jul 2019",
    points: [
      "Developing and maintaining web applications using React, Redux ExpressJS and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers."
    ]
  },
  {
    title: "Senior Full stack developer",
    company_name: "Wendor",
    icon: wendor_logo,
    iconBg: "#383E56",
    date: "Jan 2019 - Apr 2021",
    points: [
      "Part of the product design team.",
      `Implemented MQTT based architecture for vending machines,
      leading to the fastest multiple vendings.`,
      `Developed React.js and Node.js dashboard for remote monitoring of
      vending machines, improving operational efficiency.`,
      `Managed vending machines in AMAZON SAMBHAV (2019) event,
      showcasing company products at a prominent platform.`,
      "Launched TWA wendor apps and deprecated webview apps",
      "Worked on UNIX boot and setup scripts",
      "Docker and jenkins setup to distribute latest version codes to edge devices",
      `Developed gift voucher vending kiosk for DLF mall’s Diwali
      celebration event (2019), enhancing brand visibility.`,
    ]
  },
  {
    title: "Software Engineer",
    company_name: "Swym",
    icon: swym_logo,
    iconBg: "#383E56",
    date: "Apr 2021 - Present",
    points: [
      `Spearheaded Wishlist Javascript team, reducing app size by 20%,
      enhancing user experience and performance score.`,
      `Winner of Swym Hackathon 2023 (May), showcasing innovation and
      problem-solving skills.`,
      `Enabled app support for Shopify's hydrogen, expanding the user
      base and market reach`,
      `Created React.js IFrame apps for various 3rd party integrations,
      reducing single point of failure in infrastructure.`,
      "Worked on clojure backend",
      "Revamp the whole merchant dashboard.",
      `Currently managing building Shopify theme extension apps, and
      successfully reduced loading time to half.`
    ]
  }
];

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff"
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[90%] h-[90%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-tight"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
