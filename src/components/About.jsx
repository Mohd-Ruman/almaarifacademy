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
      homes and your suitable envionment with an easy to adapt 
      class system.</>}/>

      <AboutCard 
      logo={"./src/assets/icon-arrow-click.svg"}
      title={<>Access Hadith literature</>} 
      description={<>Arabic is also the language of the Hadith,
      which are the sayings, actions, 
      and approvals of Prophet Muhammad (peace be upon him).</>}/>

      <AboutCard 
      logo={"./src/assets/icon-arrow-click.svg"}
      title={<>Understand The Quran</>} 
      description={<>Arabic is the language of the Quran, the holy book of Islam. 
        Learning Arabic allows Muslims to read and understand the 
        language of Quran</>}/>

      <h1 className='font-bold text-[40px] mt-6 leading-10'>
          Why should you learn <span className='text-gradientblue'>arabic ?</span><br className='sm:hidden'/></h1>
        <p className='text-whitesecondary text-[18px] mt-4'>
        Learning Arabic holds significant virtues in Islam,
         deeply rooted in the religion's history, culture, 
         and spiritual practices. 
        </p>
        <p className='text-whitesecondary text-[18px] mt-4'>
        The prayers (Salah) performed by Muslims involve recitations
         from the Quran and specific supplications. Learning Arabic enables 
         Muslims to recite these prayers in their original language 
        </p>
        <p className='text-whitesecondary text-[18px] mt-4'>
        In Islam, seeking knowledge is considered an act of worship.
         Learning Arabic is viewed as a virtuous endeavor that earns rewards (thawab)
          in the sight of Allah, as it reflects a sincere effort to gain a deeper 
          understanding of Islam and strengthen one's faith.
 
        </p>
        
      
        {/* <h1 className='font-bold text-[20px] mt-6 leading-10'>
        Mohammad <span className='text-gradientblue'>Maroof</span> Nadwi</h1>
        <h1 className='font-bold italic text-[20px]'>89829-67868</h1> */}

        <div className='w-[350px] sm:w-full md:w-full lg:w-full h-full bg-whiteprimary
           border-[0.5px] border-whitesecondary/95 p-[34px] 
           rounded-[70px] flex justify-center items-center mt-8
           shadow-xl shadow-whitesecondary relative flex-col'>
            <h1 className='font-bold text-[40px] mt-6 mb-6 leading-10'>
            Contact <span className='text-gradientblue'>us</span></h1>
            <p className='text-center italic text-[20px] leading-tight'>Mohammad Maroof Nadwi<br/>
              <span className='text-whitesecondary'>(+91) 89829-67868</span></p>
              <div className='absolute w-[350px] -z-10 -bottom-24 -right-20'>
                <img src='./src/assets/darood.png'/>
              </div>
          </div>


    </div>
  )
}

export default SectionWrapper(About, "#about")