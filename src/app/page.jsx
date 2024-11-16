"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image src="/hero.png" alt="" fill className="object-contain" />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-bold">
            Full Stack Developer.
          </h1>
          {/* DESC */}
          <p className="md:text-xl">
            Hi there, I’m Sachin, a Full-Stack Web Developer with a focus on
            React.js. Over the past year, I’ve been working as a developer,
            building dynamic web applications and crafting efficient user
            interfaces. I’ve collaborated on a range of projects, from modern
            front-end designs to full-stack applications, providing innovative
            solutions to clients.
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4">
            <Link
              href="/portfolio"
              className="p-4 rounded-lg ring-1 ring-black bg-black text-white"
            >
              View My Work
            </Link>
            <Link href="/contact" className="p-4 rounded-lg ring-1 ring-black">
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
