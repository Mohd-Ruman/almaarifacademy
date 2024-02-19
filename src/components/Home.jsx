import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';

const Home = () => {
  return (
    <>
      <motion.div variants={fadeIn('right', 'spring', 0.5, 1)}
      initial='hidden'
      whileInView='show'
      className='flex items-center justify-center'>
        <Tilt>
          <div className='mt-4 p-[24px] w-full h-full flex items-center justify-center
          rounded-3xl bg-black flex-col'>
            <h1 className='font-bold text-[40px] text-white'> HOME </h1>
            <p className='text-white font-bold'>Developed by Mohd Ruman</p>
            <p className='text-white mt-2'>Tailwind CSS : Test case - Style</p>
            <p className='text-white'>Framer Motion : Test case - fade in animation</p>
            <p className='text-white'>Tilt Parallax React : Test case - the home card tilts</p>
          </div> 
        </Tilt>
      </motion.div>
    </>
  )
}

export default Home