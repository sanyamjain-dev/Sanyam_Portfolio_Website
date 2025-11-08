import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { LazyBallCanvas } from "./canvas/Ball"; // updated import path

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have learned so far</p>
        <h2 className={styles.sectionHeadText}>Skills</h2>
      </motion.div>

      <div className="flex flex-row flex-wrap justify-center gap-12 mt-20 text-center">
        {technologies.map((technology) => (
          <div
            key={technology.name}
            className="w-28 h-28 flex flex-col items-center"
          >
            <LazyBallCanvas icon={technology.icon} />
            <h1 className="font-semibold text-white mt-2 text-[14px]">
              {technology.name}
            </h1>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "skills");
