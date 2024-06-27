"use client";

import React from "react";
import GradientCircle from "./GradientCircle";
import { motion, AnimatePresence } from "framer-motion";

const About = () => {
  return (
    <div id="about">
      <AnimatePresence>
        <motion.div
          exit={{ opacity: 0, transition: { duration: 1, ease: "easeInOut" } }}
          className="mt-40 mb-40"
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: -50 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <motion.div
            className="absolute right-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <GradientCircle />
          </motion.div>
          <div className="about text-center min-h-[50vh] w-full px-20 flex flex-col justify-center space-y-9">
            <motion.h1
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, y: -50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="font-bold z-20 text-4xl"
            >
              ABOUT <span className="text-accent-color">US</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, y: -50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="text-center z-20 leading-6"
            >
              Welcome to CIPHER<span className="text-accent-color">SAFE</span>,
              your ultimate solution for secure password management. At CIPHER
              <span className="text-accent-color">SAFE</span>, we understand the
              importance of protecting your digital identity in today’s
              interconnected world. Our mission is to provide you with a robust
              and user-friendly platform that ensures your passwords and
              sensitive information are always safe and accessible. Founded by a
              team of cybersecurity experts, CipherSafe leverages cutting-edge
              encryption technologies to keep your data secure from unauthorized
              access. We are committed to providing top-notch security features
              combined with seamless user experience, so you can have peace of
              mind knowing your digital assets are protected.
            </motion.p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default About;
