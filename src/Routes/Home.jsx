import { position } from '@chakra-ui/react'
import React from 'react'
import Download from '../Components/Download'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import Navbar from '../Components/Navbar'
import SliderComponent from '../Components/SliderComponent'

const Home = () => {
  return (
    <div>
      <Navbar />
      <br />
      <Header />
      <SliderComponent />
      <Download />
      <Footer />
    </div>
  )
}

export default Home