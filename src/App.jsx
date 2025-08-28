import React, { useEffect } from 'react'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Route, Routes, useLocation } from 'react-router-dom'
import SingleProduct from './pages/SingleProduct'
import About from './pages/About'
import Contact from './pages/Contact'
import Products from './pages/Products'
import MetaPixelDebug from './components/MetaPixelDebug'
import Swipers from './pages/Swiper'

import { initPixel, trackPageView } from './assets/pixel'

// Facebook Pixel ID from your index.html
const PIXEL_ID = '1112524050240646'

const App = () => {
  return (
    <div className='container mx-auto'>
      <PixelTracker />
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product/:productId' element={<SingleProduct/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/swiper' element={<Swipers/>}/>
      </Routes>
      <Footer/>
      <MetaPixelDebug/>
    </div>
  )
}

function PixelTracker() {
  const location = useLocation();

  useEffect(() => {
    initPixel(PIXEL_ID);
  }, []);

  useEffect(() => {
    trackPageView(); // fires whenever route changes
  }, [location.pathname]);

  return null;
}

export default App
