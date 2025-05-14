import { styles } from "../styles";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto mt-14 ">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#47b6e6]" />
          <div className="w-1 sm:h-80 h-40 blue-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white `}>
            Hi, I'm <span className="text-[#47b6e6]">Sanyam</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop web applications with engaging
            <br className="sm:block hidden" /> and interactive UIs.
          </p>

          <div className="mt-12 max-xs:mt-8">
            <button
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1NC0SyujaLPQTEPMosQwHEjeG8YT15fSB/view?usp=sharing",
                  "_blank"
                )
              }
              className="p-3 bg-tertiary rounded-lg ml-4 hover:text-[#47b6e6] max-xs:mb-4 "
            >
              View Resume
            </button>

            <button
              className="p-3 bg-tertiary rounded-lg ml-4 hover:text-[#47b6e6] max-xs:mb-4"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/sanyamjain-dev/",
                  "_blank"
                )
              }
            >
              View LinkedIn profile
            </button>
            <button
              className="p-3 bg-tertiary rounded-lg ml-4 hover:text-[#47b6e6] max-xs:mb-4"
              onClick={() =>
                window.open("https://github.com/sanyamjain-dev", "_blank")
              }
            >
              View GitHub profile
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
