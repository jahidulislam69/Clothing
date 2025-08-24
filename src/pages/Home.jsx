import React from 'react'
import HomeCarousel from '../components/HomeCarousel'
import LatestProducts from '../components/LatestProducts'
import Trending from '../components/Trending'
import Newsletter from '../components/Newsletter'
import Testimonial from '../components/Testimonial'

const Home = () => {
  return (
    <div>
      <HomeCarousel/>
      <div className='text-center mt-10'>
        <h1 className='prata-regular text-4xl'>Latest <span className='prata-regular text-4xl text-purple-500'>Collection</span></h1>
        <hr className='border-t-1 border-pink-900 w-[80%] mx-auto mt-1'/>
        <p className='text-gray-500 mt-2'>Explore all our new arrivals which will defenetly blow your mind</p>
      </div>
      <LatestProducts/>
      <div className='text-center mt-10'>
        <h1 className='prata-regular text-4xl'>Trending <span className='prata-regular text-4xl text-purple-500'>Collection</span></h1>
        <hr className='border-t-1 border-pink-900 w-[80%] mx-auto mt-1'/>
        <p className='text-gray-500 mt-2'>Explore all our new arrivals which will defenetly blow your mind</p>
      </div>
      <Trending/>
      <Testimonial/>
      <Newsletter/>
    </div>
  )
}

export default Home
