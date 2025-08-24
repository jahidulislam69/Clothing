import React from 'react'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import SingleProduct from './pages/SingleProduct'
import About from './pages/About'
import Contact from './pages/Contact'
import Products from './pages/Products'
const App = () => {
  return (
    <div className='container mx-auto'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product/:productId' element={<SingleProduct/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/products' element={<Products/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
