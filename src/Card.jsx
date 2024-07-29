import React from "react";
import Logo from "./Logo.jsx";
import { motion } from "framer-motion";

const Card = (props) => {
  return (
    <div className="perspective-1000">
      <motion.div
        className="relative w-250px h-350px my-12 preserve-3d"
        initial={{ rotateY: 0 }}
        animate={{
          rotateY: props.flipped ? 180 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 18,
        }}
      >
        <div className="flex flex-col items-center justify-center rounded-2xl bg-white z-20 px-4 py-6 absolute top-0 right-0 bottom-0 left-0 text-black transform-center backface-hidden">
          <Logo />
        </div>
        <div className="flex flex-col justify-between rounded-2xl bg-brand-green z-10 px-4 py-6 absolute top-0 right-0 bottom-0 left-0 text-black transform-center backface-hidden transformY-180">
          <h1 className="font-regular tracking-tighter text-4xl leading-tight mx-0">
            Hello — my name is Jayesh.
          </h1>
          <div className="text-lg font-medium tracking-tight leading-normal">
            I am a interface and interaction designer based in Sydney.
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
