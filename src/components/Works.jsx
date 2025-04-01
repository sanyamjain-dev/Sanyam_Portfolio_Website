import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { useEffect, useRef, useState } from "react";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  images,
  source_code_link,
}) => {
  let transitionTime = 3000;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef(null);

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    if (!isHovered) {
      timerRef.current = setInterval(nextImage, transitionTime);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isHovered, transitionTime]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (timerRef.current) clearInterval(timerRef.current);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary
   p-5 rounded-2xl sm:w-[360px] "
      >
        <div className="relative w-full h-[200px] ">
          <img
            src={images[currentIndex]}
            alt={name}
            className="w-full h-full object-cover rounded-2xl transition-opacity duration-500"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer opacity-90"
            >
              <img
                src={github}
                alt={github}
                className="h-1/2 w-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white text-[24px] font-bold"> {name}</h3>
          <p className="text-secondary mt-2 text-[14px]">{description}</p>{" "}
        </div>

        <div className="mt-4 flex flex-wrap gap-2 ">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Below is a collection of my work that highlights my journey as a Full
          Stack Developer and my passion for building real-world, scalable
          solutions. Each project represents a unique challenge I
          tackled—leveraging modern technologies to create functional,
          user-centric applications. These aren’t just theoretical exercises;
          they’re practical implementations designed to solve genuine problems,
          whether it’s democratizing financial literacy with AI, simplifying
          house rentals, empowering eCommerce vendors, or enhancing productivity
          through smart tools
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7 ">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
