import React from 'react'
import Button from '../components/Button'
import Carousel from '../components/Carousel'
import Hero from '../layouts/Hero'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <Hero>
        <div className='flex flex-col px-4 '>
          <h2 className='text-center w-full px-[25%]'>Find your perfect trip, designed by insiders who know and love their cities</h2>
          {/* <Button /> */}
        </div>
      </Hero>
      <Carousel />
      <Footer />
    </>
  )
}
export default Home