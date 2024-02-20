import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';

const Home = () => {
  return (
    <>
      <motion.div variants={fadeIn('right', 'spring', 1, 1)}
      initial='hidden'
      whileInView='show'
      className='flex items-center justify-center'>
        <div className='w-[310px] h-[310px]'>
          <img src='./src/assets/Am-logo-dark.png'/>
        </div>
        
      </motion.div>
      <div className='flex flex-col items-center gap-4'>
          <h1 className='font-bold text-[40px] text-center -mt-10'>
            Learn <span className='gradientblue'>arabic</span> with us online and see yourself develop</h1>
          <p className='text-whitesecondary'>An interactive program, for Arabic learning</p>
          <button>Get Started</button>
          <button>Contact</button>
      </div>
        
    </>
  )
}

export default Home