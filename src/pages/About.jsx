import HoverAnim from '@/components/HoverAnim'
import React from 'react'

const About = () => {
  return (
    <div>
       <HoverAnim />
       <div>
        <h1 className='prata-regular text-4xl text-center mt-10'>About <span className='prata-regular text-4xl text-purple-500'>Us</span></h1>
        <hr className='border-t-1 border-pink-900 w-[80%] mx-auto mt-1'/>
       </div>
    </div>
  )
}

export default About
