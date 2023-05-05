"use client";

import { motion } from "framer-motion";
import React from "react";
import ExperienceCard from "./ExperienceCard";

type Props = {};

export default function Experience({}: Props) {
  return (
    <motion.div className="h-screen flex relative overflow-hidden flex-col justify-evenly items-center md:flex-row max-w-full px-10 mx-auto">
      <h3 className="tracking-[20px]  top-24 text-gray-500 uppercase absolute text-2xl  ">
        Experience
      </h3>

      <div className="w-full flex space-x-4 overflow-x-scroll p-10 snap-x snap-mandatory">
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </motion.div>
  );
}
