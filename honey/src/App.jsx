import Testimonial from './components/Testeminional/Testimonial'
import Sponsor from './components/Sponsors/Sponsors'
import Product from './components/Product/Product'
import { ToastContainer } from 'react-toastify';
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import 'react-toastify/dist/ReactToastify.css';
import Info from './components/Info/Info'
import React from 'react'
import './App.css'

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Sponsor />   {/* Full Complete */}
      <Info />
      <Product />  {/* Full Complete */}
      <Testimonial /> {/* Full Complete  */}
      <ToastContainer />
      <Footer />
    </div>
  )
}

export default App