import React from 'react'
import Download from '../Components/Download'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import SliderComponent from '../Components/SliderComponent'

const Home = () => {
  return (
    <div>
      <Navbar />
      <br />
      <SliderComponent />
      <Download />
      <Footer />
    </div>
  )
}

export default Home