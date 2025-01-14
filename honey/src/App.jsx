import './App.css'
import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import Sponsor from './components/Sponsors/Sponsors'
import Info from './components/Info/Info'
import Product from './components/Product/Product'
import Footer from './components/Footer/Footer'
// import TestimonialList from './components/Testeminional/TestimonialList'
function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Sponsor />
      <Info />
      <Product />
      {/* <TestimonialList/> */}
      <h1>Cooming Soon Testeminional Page</h1>
      <Footer />
    </>
  )
}

export default App
