import { motion } from "framer-motion";

import { styles } from "../styles";
const Hero = () => {
  
  return (
    <section className={` relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[200px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-10`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
        {/* Line going down*/}
        {/*<div className='w-1 sm:h-80 h-40 violet-gradient' />*/}
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white `}>
            Hi, I'm <span className='text-[#915EFF]'>Edward</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          Freshamn @ <span className='text-[#00693e]'>Dartmouth</span>  <br className='sm:block hidden' />
            Computer Science
          </p>
        </div>
      </div>

    </section>
  );
};

export default Hero;
