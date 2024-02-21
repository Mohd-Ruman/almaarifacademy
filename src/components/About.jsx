import React from 'react'
import SectionWrapper from '../hoc';
import AboutCard from './AboutCard'; 

const About = () => {
  return (
    <div className='mt-20'>
      <h1 className='text-[40px] font-bold text-darkprimary
       leading-tight mb-10'>Take a step towards learning the language
        of <span className='text-gradientblue'>Qur'an</span> and our
        <span className='text-gradientblue'> Messenger </span>
        <img src='./src/assets/icon-darood.svg' className='inline'/>
      </h1>

      <AboutCard 
      logo={"./src/assets/icon-arrow-click.svg"}
      title={<>Learn Online</>} 
      description={<>Learn with us online from the comfort of your 
      homes and your suitable envionment with and easy to adapt 
      class system.</>}/>
    </div>
  )
}

export default SectionWrapper(About, "#about")