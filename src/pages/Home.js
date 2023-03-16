import React from 'react'
// import Navbar from '../components/Navbar'Tk96
import Artistbox from '../components/Artistbox'

const Home = () => {
  return (
    <div>
      <h1 className='text-left mt-7 ml-8 font-semibold'>Upcoming...</h1>
      <div className='grid grid-cols-3 gap-5 m-5'>
        <Artistbox></Artistbox>
      </div>

      <h1 className='text-left mt-7 ml-8 font-semibold'>Favourite</h1>
      <div className='grid grid-cols-3 gap-5 m-5'>
        <Artistbox></Artistbox>
      </div>

      
      <h1 className='text-left mt-7 ml-8 font-semibold'>Artist</h1>
      <div className='grid grid-cols-4 gap-5 m-5'>
        <Artistbox></Artistbox>
        <Artistbox></Artistbox>
        <Artistbox></Artistbox>
        <Artistbox></Artistbox>
        <Artistbox></Artistbox>
        <Artistbox></Artistbox>
        <Artistbox></Artistbox>
        <Artistbox></Artistbox>
        <Artistbox></Artistbox>
        <Artistbox></Artistbox>
        <Artistbox></Artistbox>
        <Artistbox></Artistbox>
      </div>
    </div>
  )
}

export default Home