"use client";
import { motion } from "framer-motion";
import React from "react";

type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-6 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center p-10 bg-[#292929] hover:opacity-100 opacity-50 cursor-pointer transition duration-7000 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-contain object-center bg-white
       "
        src="../imgs/netflix.png"
        alt=""
      />
      <div className="px-0 md:px-10 ">
        <h4 className="text-4xl font-light">Netflix Clone</h4>
        <p className="font-bold text-2xl mt-1">Full Stack</p>
        <div className="flex space-x-2 my-2">
          <img
            className="h-10 w-10 rounded-full object-contain border-[1px] border-white p-1"
            src="../imgs/icon-react.png"
            alt=""
          />
          <img
            className="h-10 w-10 rounded-full object-contain border-[1px] border-white p-1"
            src="../imgs/icon-react.png"
            alt=""
          />
          <img
            className="h-10 w-10 rounded-full object-contain border-[1px] border-white p-1"
            src="../imgs/icon-react.png"
            alt=""
          />
        </div>
        <p className="uppercase py-5 text-gray-300">lsafsdsdgsdfg</p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Summary Point</li>
          <li>Summary Point</li>
          <li>Summary Point</li>
          <li>Summary Point</li>
          <li>Summary Point</li>
        </ul>
      </div>
    </article>
  );
}
