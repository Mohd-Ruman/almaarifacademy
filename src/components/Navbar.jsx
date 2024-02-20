import React from 'react'
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';

const Navbar = () => {
  
  return (
    <motion.div variants={fadeIn('top','twine', 0.5, 1)}
     initial='hidden'
     whileInView='show'>
        <div className='flex flex-row justify-between px-[12px] py-[12px]
        max-h-[80px] items-center border-b-[0.5px] border-whitesecondary'>
            <div className='w-[135px] h-[135px]'>
                <img src='./src/assets/Am-eng-dark.png'/>
            </div>
            
            <div className='flex'>
            <button>
                <img src='./src/assets/icon-moon.svg'/>
            </button>
            <button className='w-[53px] h-[53px] 
            flex items-center justify-center'>
                <img src='./src/assets/Menu-1.svg'/>
            </button>
            </div>
        </div>
    </motion.div>
  )
}

export default Navbar