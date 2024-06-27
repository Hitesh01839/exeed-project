"use client";

import React from "react";
import { motion } from "framer-motion";

const Commitment = () => {
  return (
    <motion.div
      className="flex flex-col justify-center align-middle items-center mt-56"
      initial={{ opacity: 0, y: 0 }}
      whileInView={{ opacity: 1, y: -50 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <motion.h1
        className="text-3xl font-bold"
        initial={{ opacity: 0, y: 0 }}
        whileInView={{ opacity: 1, y: -20 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
      >
        OUR <span className="text-accent-color">COMMITMENT</span>
      </motion.h1>
      <div className="para w-3/4 font-bold mt-14">
        <motion.p
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: -20 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeInOut" }}
        >
          At CIPHERSAFE, your security is our top priority. We are dedicated to
          providing a reliable and secure password management solution that you
          can trust. Our team of experts continuously works to enhance our
          platform, ensuring your data remains protected against evolving cyber
          threats. With CipherSafe, you can be confident that your digital life
          is in safe hands.
        </motion.p>
        <br />
        <motion.p
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: -20 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeInOut" }}
        >
          Join us today and embark on a journey to a safer, happier you!
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Commitment;
