import { useState,useEffect} from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Routes,Route,useLocation } from 'react-router-dom'
import HomePage from './pages/HomePage'
import StorePage from './pages/StorePage'
import DeliveryPage from './pages/DeliveryPage'
import BlogPage from './pages/BlogPage'
import AboutUs from './pages/AboutUs'
import Details from './pages/Details'
import Basket from './pages/Basket'
import Footer from './components/Footer'


function App() {
  const {pathname}=useLocation();
  useEffect(()=>{
    window.scroll(0,0);
  },[pathname])
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="store" element={<StorePage/>}/>
      <Route path="/delivery" element={<DeliveryPage/>}/>
      <Route path="/blog" element={<BlogPage/>}/>
      <Route path="/about" element={<AboutUs/>}/>
      <Route path="/details/:id" element={<Details/>}/>
      <Route path="/basket" element={<Basket/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
