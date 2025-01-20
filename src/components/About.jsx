import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { sam } from "../constants";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full ">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <div className="flex max-xs:flex-wrap">
        <motion.p
          variants={fadeIn("left", "spring", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Welcome to my portfolio: I am a full-stack developer dedicated to
          crafting intuitive and seamless digital experiences that prioritize
          user needs. Implementing front-end and back-end technologies, I design
          user-friendly interfaces that are powered by strong server
          technologies. I understand from a global perspective how I can build
          functional, scalable, and impactful solutions. Every time, the
          innovation adds extra value at this crossroads of design and
          technology. Taking user feedback and analytics into account, I am
          continuously improving my applications so that they easily surpass
          user expectations, ensuring an engaging and seamless digital
          experience every time.
        </motion.p>

        <motion.div
          variants={fadeIn("left", "spring", 0.1, 1)}
          className="  h-60  ml-40 flex justify-center  items-center  pb-4 rounded-xl mb-6  w-full max-xs:ml-0 max-xs:mt-10"
        >
          <img
            src={sam}
            alt=""
            className="h-60 object-cover p-3 rounded-3xl mr-3 w-full"
          />
        </motion.div>
      </div>
      <div className="mt-20 flex flex-wrap gap-10 ">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
