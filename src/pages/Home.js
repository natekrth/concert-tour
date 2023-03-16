import React from 'react'
// import Navbar from '../components/Navbar'
import Artistbox from '../components/Artistbox'

const Home = () => {
  return (
    <div>
      <h1 className='mt-7'>Upcoming...</h1>
      <div className='grid grid-cols-3 gap-5 m-5'>
        <Artistbox></Artistbox>
      </div>

      <h1 className='mt-7'>Favourite</h1>
      <div className='grid grid-cols-3 gap-5 m-5'>
        <Artistbox></Artistbox>
      </div>

      <h1 className='mt-7'>Artist</h1>
      <div className='grid grid-cols-3 gap-5 m-5'>
        <Artistbox></Artistbox>
        <Artistbox></Artistbox>
        <Artistbox></Artistbox>
      </div>
    </div>
  )
}

export default Home