"use client";

import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

const Hamburger = () => {
  const menuItems = [
    { key: "home", name: "HOME", href: "/", delay: 0 },
    { key: "dash", name: "DASHBOARD", href: "/dashboard", delay: 0.1 },
    { key: "passwords", name: "PASSWORDS", href: "/password", delay: 0.2 },
    { key: "vpn", name: "VPN", href: "/vpn", delay: 0.3 },
    { key: "passgen", name: "PASSWORD GEN", href: "/nutrition", delay: 0.4 },
    { key: "blog", name: "BLOG", href: "/blog", delay: 0.5 },
    { key: "acc", name: "LOGOUT", href: "/", delay: 0.6 },
  ];

  const [hasClicked, setHasClicked] = useState(false);

  const menuVariants = {
    open: {
      opacity: 1,
      x: 0,
      transition: {
        opacity: { duration: 0.3 },
        x: { duration: 0.3, type: "spring", ease: "easeInOut" },
      },
    },
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        opacity: { duration: 0.3 },
        x: { duration: 0.3, type: "spring", ease: "easeInOut" },
      },
    },
  };
  return (
    <>
      <div className="z-50">
        <motion.div
          className="bg-accent-color w-fit h-fit mr-28 text-main-bg p-2 cursor-pointer rounded-full"
          onClick={() => setHasClicked((prev) => !prev)}
          initial={false}
          animate={hasClicked ? "open" : "closed"}
        >
          <GiHamburgerMenu />
        </motion.div>

        <motion.div
          className="bg-accent-color rounded-l-3xl absolute top-0 pt-10 right-0 w-1/5 h-[100vh]"
          variants={menuVariants}
          initial="closed"
          animate={hasClicked ? "open" : "closed"}
          exit="closed"
        >
          <div className="flex flex-col space-y-10">
            <div
              className="close absolute right-2 top-2 cursor-pointer text-main-bg text-3xl"
              onClick={() => setHasClicked((prev) => !prev)}
            >
              <IoClose />
            </div>
            <div className="menuItems">
              <ul className="flex flex-col space-y-8 p-3 justify-center items-center">
                {menuItems.map((item) => (
                  <motion.li
                    whileHover={{
                      scale: 1.1,
                      transition: {
                        delay: 0,
                        duration: 0.1,
                        ease: "easeInOut",
                        type: "just",
                      },
                    }}
                    whileTap={{
                      scale: 0.8,
                      transition: {
                        delay: 0,
                        duration: 0.1,
                        ease: "easeInOut",
                        type: "just",
                      },
                    }}
                    transition={{
                      ease: "easeInOut",
                      type: "easeInOut",
                      delay: item.delay,
                    }}
                    initial={{ x: 10, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    className="text-xl cursor-pointer text-main-bg"
                    key={item.key}
                    exit={{ x: 10, opacity: 0 }}
                  >
                    {item.name}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Hamburger;
