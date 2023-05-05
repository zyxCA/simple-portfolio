import { motion } from "framer-motion";
import React from "react";

type Props = {
  directionLeft?: boolean;
};

function Skill({ directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        className=" rounded-full border border-gray-600 object-cover h-24 w-24 xl:w-32 xl:h-32  hover:grayscale transition duration-300 ease-in-out"
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src="../imgs/css.svg"
        alt=""
      />
      <div
        className=" absolute opacity-0 hover:opacity-80 transition duration-300 ease-in-out hover:bg-white h-24 w-24 md:h-28 md:w-28 xl:w-32 xl:h-32 rounded-full z-10 
      
      ">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">100%</p>
        </div>
      </div>
      {/* <h4 className=" text-slate-400 ">CSS</h4> */}
    </div>
  );
}

export default Skill;
