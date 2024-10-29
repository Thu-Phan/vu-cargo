import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Component } from 'lucide-react'
import Cargo from './Component'
import Footer from './footer'
import ServicesSection from './services-section'
import StickyHeader from './header'
import Cargo10 from './Component v10'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <StickyHeader></StickyHeader>
       <Cargo10>      
      </Cargo10>
      {/* <ServicesSection></ServicesSection> */}
      <Footer></Footer>
    </>
 
  
      
  )
}


export default App
