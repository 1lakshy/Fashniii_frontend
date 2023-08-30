import React from 'react';
import { motion } from 'framer-motion';

const HeroContent = () => {
  return (
    <div className="w-full h-[20rem] absolute lg:h-[45rem] mx-auto overflow-hidden relative">
      <motion.div
        initial={{ y: -200 }}
        animate={{ y: 0 }}
        transition={{
          duration: 1.5,
          delay: 0.8,
          ease: 'easeOut',
        }}
        className="Text lg:h-[40rem] lg:w-[25rem] absolute z-50 flex flex-col bottom-0 lg:ml-4 "
      >
        <h2 className="heading my-2">We Believe ,</h2>
        <h1 className="maxHeading text-slate-800">
          "You can have anything <br /> you want in life if you dress for it."
        </h1>
        <p className="my-2 text-xs">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat,
          ipsam minima! Praesentium consequuntur ex similique, fugit incidunt
          ipsam minima! Praesentium consequuntur ex similique, fugit incidunt
        </p>
        <button className="bg-red-300 lg:w-[6rem] lg:h-[2rem] my-6 rounded-full">
          Explore
        </button>
      </motion.div>
      <div className="absolute w-full mx-auto z-40">
        <motion.img
          src="/images/cloth_model.png"
          initial={{ y: 200 }}
          animate={{ y: '5rem' }}
          transition={{
            duration: 1.8,
            delay: 0.4,
            ease: 'easeOut',
          }}
          alt=""
          srcset=""
          className="mx-auto w-[18rem] lg:w-[35rem]"
        />
      </div>
      <div className="red w-[10rem] h-[10rem] lg:w-[30rem] lg:h-[30rem] lg:absolute lg:-right-32 lg:-top-28 rounded-full bg-orange-500 z-20 absolute -right-8 -top-4"></div>
      <div className="cyan w-[25rem] h-[25rem] lg:w-[80rem] lg:h-[80rem] lg:absolute lg:-right-32 lg:-top-20 rounded-full bg-cyan-300 z-0 "></div>
      <div className="green lg:w-[20rem] lg:h-[40rem] lg:absolute lg:right-32 lg:top-20 bg-green-400 z-50 ">
        <img src="/HeroDeme/Sponcered.jpg" alt="" srcset="" />
      </div>
    </div>
  );
};

export default HeroContent;
