import React from 'react'

const AboutCard = ( { logo, title, description } ) => {
  return (
    <div className='mt-4 border-[0.5px] border-whitesecondary/90 p-6
      flex flex-col justify-center rounded-[10px] shadow-md shadow-whitesecondary'>
        <div className='flex flex-row gap-4 items-center'>
          <div className='w-[40px] h-[40px] bg-bluelight
            rounded-full flex items-center justify-center'>
            <img src={logo}
            className='w-[30px] h-[30px]'/>
          </div>
          
          <h3 className='font-bold text-[18px] text-darkprimary'>{title}</h3>
        </div>
        <div>
          <p className='text-[18px] text-whitesecondary 
          leading-[20px] mt-2'>{description}</p>
        </div>
    </div>
  )
}

export default AboutCard