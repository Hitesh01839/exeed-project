"use client";

import React from "react";
import { useScroll, useSpring, motion, AnimatePresence } from "framer-motion";

const OfferCard = () => {
  const data = [
    {
      title: "Advanced Encryption Technology",
      desc: "At CipherSafe, we use state-of-the-art encryption methods to protect your passwords and sensitive information.",
    },
    {
      title: "Easy-to-Use Interface",
      desc: "Our platform is designed with user-friendliness in mind.",
    },
    {
      title: "Cross-Platform Compatibility",
      desc: "Access your passwords anytime, anywhere. CipherSafe is compatible with all major operating systems and devices, including Windows, macOS, iOS, and Android.",
    },
    {
      title: "Secure Password Generator",
      desc: "Create strong, unique passwords with our built-in password generator.",
    },
  ];
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <AnimatePresence>
      <div>
        <motion.div
          className="progress fixed top-0 left-0 right-0 h-1 bg-main-text-color bottom-[100px]"
          style={{ scaleX }}
        />
        <div
          className="card z-40 text-center space-y-5
      "
        >
          {data.map((e) => (
            <motion.div
              key={e.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                type: "spring",
                velocity: 4,
                ease: "easeInOut",
                duration: 1,
              }}
              exit={{ opacity: 0 }}
              className="p-10 cursor-pointer rounded-md bg-accent-color min-w-fit text-center flex flex-col justify-center "
            >
              <h1 className="title text-2xl font-bold">{e.title}</h1>
              <p className="desc">{e.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatePresence>
  );
};

export default OfferCard;
