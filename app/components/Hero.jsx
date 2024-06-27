"use client";

import Image from "next/image";
import GradientCircle from "./GradientCircle";
import bg from "@/public/bg-1.jpg";
import { motion } from "framer-motion";

import React from "react";

const Hero = () => {
  return (
    <motion.div
      id="home"
      animate={{ x: 50 }}
      transition={{ ease: "easeOut", duration: 2 }}
      className="flex z-50 min-h-screen justify-center gap-16 items-center align-middle"
    >
      <div className="top-45 left-40 absolute">
        <GradientCircle />
      </div>
      <div className="z-40 flex flex-col space-y-4">
        <motion.h1
          animate={{ x: [0, 110] }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="text-[2.8rem] z-20 font-semibold"
        >
          WELCOME TO <br /> CIPHER
          <span className="text-accent-color">SAFE</span>
        </motion.h1>
        <motion.button
          animate={{ x: [0, 110] }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.3, ease: "easeInOut" },
          }}
          whileInView={{ opacity: 1 }}
          className="z-50 w-fit py-2 px-6 bg-accent-color rounded-full"
        >
          GET STARTED
        </motion.button>
      </div>
      <div className="image z-10">
        <Image
          className="rounded-xl brightness-75"
          src={bg}
          height={1000}
          width={1000}
          style={{
            maxWidth: "60vw",
            maxHeight: "auto",
          }}
        />
      </div>
    </motion.div>
  );
};

export default Hero;
