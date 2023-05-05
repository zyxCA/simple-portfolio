"use client";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircle from "./BackgroundCircle";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ["Hi, I'm Junye.", "Developer", "Designer", "Creator"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center overflow-hidden">
      <BackgroundCircle />
      <img
        className=" relative rounded-full h-32 w-32 mx-auto object-cover "
        src="imgs/3.png"
      />

      <div className="z-20">
        <div className="flex gap-4 flex-col items-center">
          <h2 className="text-sm uppercase tracking-widest text-orange-400 animate-pulse">
            Software Engineer
          </h2>
          <h2 className="text-sm uppercase tracking-widest text-yellow-600 animate-pulse">
            UI Designer
          </h2>

          <h2 className="text-sm uppercase tracking-wides text-amber-800 animate-pulse">
            Data Analyst
          </h2>
        </div>
        <h1 className=" flex text-4xl lg:text-6xl font-semibold px-10 justify-center my-12">
          <span>{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>

        <div className="pt-5">
          <a href="#about">
            <button className="heroButton">About</button>
          </a>
          <a href={"#experience"}>
            {" "}
            <button className="heroButton">Experience</button>
          </a>
          <a href={"#skills"}>
            {" "}
            <button className="heroButton">Skills</button>
          </a>
          <a href={"#projects"}>
            {" "}
            <button className="heroButton">Projects</button>
          </a>
        </div>
      </div>
    </div>
  );
}
