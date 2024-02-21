import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';

import SectionWrapper from '../hoc';

const Home = () => {
  return (
    <>
      <motion.div variants={fadeIn('right', 'spring', 1, 1)}
      initial='hidden'
      whileInView='show'
      className='flex items-center justify-center'>
        <div className='w-[310px] h-[310px] -mt-12'>
          <img src='./src/assets/Am-logo-dark.png'/>
        </div>
        
      </motion.div>
      <div className='flex flex-col items-center gap-4'>
          <h1 className='font-bold text-[40px] text-center -mt-16'>
            Learn <span className='text-gradientblue'>arabic</span><br className='sm:hidden'/> with us online and see yourself develop</h1>
          <p className='text-whitesecondary text-[18px]'>An interactive program, for Arabic learning</p>
          <button className='gradientblue text-whiteprimary
           w-[350px] h-[45px] rounded-full flex flex-row items-center
            justify-center gap-2'>
            <p className='font-medium'>Get Started</p>
            <img src='./src/assets/icon-arrow-down.svg'
            className='w-[18px] h-[18px]'/>
          </button>
          <button className='bg-darkprimary text-whiteprimary
           w-[350px] h-[45px] rounded-full flex flex-row items-center
           justify-center gap-2'>
            <p className='font-medium'>Contact</p>
            <img src='./src/assets/icon-contact.svg'
            className='w-[18px] h-[18px]'/>
          </button>
          <div className='w-[350px] h-full bg-whiteprimary
           border-[0.5px] border-whitesecondary/95 p-[34px] 
           rounded-[70px] flex justify-center items-center mt-8
           shadow-xl shadow-whitesecondary relative'>
            <p className='text-center italic text-[20px] leading-tight'>“Learn Arabic, for it strengthens 
              the intelligence and increases one's 
              noble conduct.”<br/>
              <span className='text-whitesecondary'>( Al-Bayhaqi )</span></p>
              <div className='absolute w-[350px] -z-10 -bottom-24 -right-20'>
                <img src='./src/assets/darood.png'/>
              </div>
          </div>


      </div>
        
    </>
  )
}

export default SectionWrapper(Home, "#home")