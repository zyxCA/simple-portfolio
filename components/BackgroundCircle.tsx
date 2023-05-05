import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

function BackgroundCircle({}: Props) {
  return (
      <motion.div
          initial={{ opacity: 0 }}
          animate={{
              scale: [1, 2, 2, 3, 1],
          opacity:[0.1,0.2,0.4,0.8,0.1,1.0]}}
          transition={{duration:2.5}}
    className = 'relative flex justify-center items-center' >
          <div className='border border-[#333333]  rounded-full h-[200px] w-[200px] mt-52 animate-ping absolute'/>
          <div className='border border-[#333333] rounded-full h-[300px] w-[300px] mt-52 absolute '/>
          <div className='border border-[#333333] rounded-full h-[500px] w-[500px] mt-52 absolute '/>
          <div className='absolute border border-[#f7ab0a] rounded-full h-[650px] w-[650px] mt-52 opacity-20  animate-pulse'/>
          <div className='absolute border border-[#333333] rounded-full h-[800px] w-[800px] mt-52 opacity-20  animate-pulse'/>
        
          

    </motion.div>
  )
}

export default BackgroundCircle