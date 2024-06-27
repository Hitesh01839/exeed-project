"use client";

import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GradientCircle from "../components/GradientCircle";
import { motion } from "framer-motion";

const page = () => {
  const handleSubmit = () => {
    console.log("hello");
  };

  const notify = () => toast.success("Submitted successfully!");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ x: 20 }}
      whileInView={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 2 }}
    >
      <ToastContainer theme="dark" autoClose={3000} closeOnClick />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="absolute -z-40 right-32 top-48"
      >
        <GradientCircle />
      </motion.div>
      <div className="flex flex-col z-50 justify-center pl-5 h-[90vh] space-y-10">
        <div className="space-y-5 z-50">
          <h1 className="text-4xl">
            WELCOME, <span className="text-accent-color">JOHN DOE</span>
          </h1>
          <p className="">
            "Your passwords are the keys to your digital life. Protect them with
            the same vigilance you would your most valuable possessions."
          </p>
          <p className="text-center">-Unknown</p>
        </div>
        <div className="space-y-5">
          <h1 className="text-2xl">ENTER PASSWORD FOR TODAY!</h1>
          <form action={handleSubmit} className="space-x-3 justify-center">
            <input
              placeholder="Enter your username"
              className="bg-nav-bg px-4 py-2 w-1/4 border rounded-sm outline-none border-border-color"
              type="text"
            />
            <input
              placeholder="Enter your password"
              className="bg-nav-bg px-4 py-2 w-1/4 border rounded-sm outline-none border-border-color"
              type="password"
            />
            <button
              type="submit"
              onClick={notify}
              className="bg-accent-color px-10 rounded-full py-2"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default page;
