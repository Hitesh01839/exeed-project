"use client";

import React, { useState } from "react";
import GradientCircle from "../../components/GradientCircle";
import Image from "next/image";
import { useRouter } from "next/navigation";
import bg from "@/public/bg-2.jpg";
import { motion } from "framer-motion";

const page = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/dashboard");
    console.log(username, email, password);
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
      <div className="register-section flex justify-stretch space-x-10 w-full">
        <motion.div
          className="image z-10 mt-10"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 1 }}
        >
          <Image
            priority={true}
            alt="image"
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
            REGISTER
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
              htmlFor="username"
            >
              USERNAME
            </motion.label>
            <motion.input
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              onChange={(e) => setUsername(e.target.value)}
              className="rounded-md py-1 px-2 bg-accent-color text-main-text-color outline-none border border-nav-bg"
              type="text"
              name="username"
              id="username"
            />
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
              type="email"
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
            Have an account?{" "}
            <span
              onClick={(e) => {
                e.preventDefault();
                router.push("/login");
              }}
              className="text-accent-color cursor-pointer"
            >
              Log in!
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
              REGISTER
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default page;
