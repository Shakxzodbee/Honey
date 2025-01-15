import './App.css'
import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import Sponsor from './components/Sponsors/Sponsors'
import Info from './components/Info/Info'
import Product from './components/Product/Product'
import Footer from './components/Footer/Footer'
import Testimonial from './components/Testeminional/Testimonial'

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Sponsor />
      <Info />
      <Product />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default App
