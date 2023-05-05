"use client";
import { motion } from "framer-motion";
import React from "react";

type Props = {};

export default function About({}: Props) {
  return (
    <div className="h-screen relative flex text-center flex-col md:flex-row mx-auto max-w-5xl px-10 justify-evenly items-center">
      <h3 className="tracking-[20px]  top-24 text-gray-500 uppercase absolute text-2xl h-10">
        About
      </h3>
      <motion.img
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        src="/imgs/4.jpg"
        className=" mt-10 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-80 xl:w-[500px] xl:h-[600px]"
        alt=""
      />
      <div className="space-y-10 px-1 md:px-10">
        <h4 className="text-4xl font-semibold">
          Junye's little{" "}
          <span className="underline decoration-orange-300">background</span>
        </h4>
        <p>
          I'm Junye from Toronto. I have been coding for over 4 years now, and
          my experience in this field was further enhanced by completing a
          Master's degree in Computer Science in Canada. As a Full stack
          Developer I have worked on several projects involving both front-end
          and back-end development using React, Javascript, Nodejs. Furthermore,
          I am also a creative UI designer using multiple design tools such as
          Figma, Sketch, Photoshop. During my Master's program, I had the
          opportunity to learn about cutting-edge technologies such as Machine
          Learning, Deep learning, Natural language processing, which I find
          fascinating.
        </p>
      </div>
    </div>
  );
}
