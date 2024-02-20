import React from 'react'

const SectionWrapper = (Component, idName) => 
function HOC() {
    return(
        <section className=' px-[24px] py-[12px]'>
            <Component/>
        </section>
    )
}


export default SectionWrapper