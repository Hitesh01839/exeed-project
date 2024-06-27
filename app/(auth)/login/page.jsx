"use client";

import React, { useState } from "react";
import GradientCircle from "../../components/GradientCircle";
import Image from "next/image";
import { useRouter } from "next/navigation";
import bg from "@/public/bg-2.jpg";
import { motion } from "framer-motion";

const page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/dashboard");
    console.log(email, password);
  };

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="absolute right-60 -z-50"
      >
        <GradientCircle />
      </motion.div>
      <div className="login-section flex justify-stretch space-x-10 w-full">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          className="image z-10 mt-10"
        >
          <Image
            alt="Image"
            priority={true}
            className="rounded-r-xl brightness-75 pb-10"
            src={bg}
            height={1000}
            width={1000}
            style={{
              maxWidth: "50vw",
              maxHeight: "auto",
            }}
          />
        </motion.div>
        <div className="input-sec w-1/3 mt-10 z-10">
          <motion.h1
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: [0.2, 0.4, 0.6, 0.8, 1] }}
            transition={{ ease: "easeInOut", duration: 1 }}
            className="text-4xl text-accent-color font-bold"
          >
            LOGIN
          </motion.h1>
          <motion.form
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: [0.2, 0.4, 0.6, 0.8, 1] }}
            transition={{ ease: "easeInOut", duration: 1 }}
            className="inputs mt-10 flex flex-col space-y-4"
          >
            <motion.label
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: [0.2, 0.4, 0.6, 0.8, 1] }}
              transition={{ ease: "easeInOut", duration: 1 }}
              htmlFor="email"
            >
              EMAIL
            </motion.label>
            <motion.input
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-md py-1 px-2 bg-accent-color text-main-text-color outline-none border border-nav-bg"
              value={email}
              type="text"
              name="email"
              id="email"
            />
            <motion.label
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: [0.2, 0.4, 0.6, 0.8, 1] }}
              transition={{ ease: "easeInOut", duration: 1 }}
              htmlFor="password"
            >
              PASSWORD
            </motion.label>
            <motion.input
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="rounded-md py-1 px-2 bg-accent-color text-main-text-color outline-none border border-nav-bg"
              type="password"
              name="password"
              id="password"
            />
          </motion.form>
          <motion.p
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 1 }}
            className="pt-2"
          >
            Don't have an account?{" "}
            <span
              onClick={(e) => {
                router.push("/register");
              }}
              className="text-accent-color cursor-pointer"
            >
              Sign up!
            </span>
          </motion.p>
          <div className="submit w-full mt-8 flex justify-center">
            <motion.button
              initial={{
                y: 20,
                opacity: 0,
                transition: { ease: "easeInOut", duration: 1 },
              }}
              animate={{
                y: 0,
                opacity: 1,
                transition: { ease: "easeInOut", duration: 1 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.6 }}
              transition={{ ease: "easeInOut", duration: 0.2 }}
              onClick={handleSubmit}
              className="bg-accent-color px-6 py-2 rounded-full"
            >
              LOGIN
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default page;
