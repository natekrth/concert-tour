import React from 'react'
// import Navbar from '../components/Navbar'Tk96
import Artistbox from '../components/Artistbox'

import Upcomingbox from '../components/Upcomingbox'

const Home = () => {
  return (
    <div>
      <div className='mx-24'>
        <div className='grid grid-cols-2'>
          <h1 className='text-left mt-7 ml-8 font-semibold'>Upcoming...</h1>
          <p className='text-right mt-7 mr-8 font-normal hover:underline ml-8'><a href="url">Show all</a></p>
        </div>
        <div className='grid grid-cols-3 gap-4 m-5'>
          <Upcomingbox></Upcomingbox>
          <Upcomingbox></Upcomingbox>
          <Upcomingbox></Upcomingbox>
        </div>

        <div className='grid grid-cols-2'>
          <h1 className='text-left mt-7 ml-8 font-semibold'>Favourite</h1>
          <p className='text-right mt-7 mr-8 font-normal hover:underline ml-8'><a href="url">Show all</a></p>
        </div>
        <div className='grid grid-cols-3 gap-5 m-5 max-[120px]:grid-cols-2'>
          <Upcomingbox></Upcomingbox>
          <Upcomingbox></Upcomingbox>
          <Upcomingbox></Upcomingbox>
        </div>

        <div className='grid grid-cols-2'>
          <h1 className='text-left mt-7 ml-8 font-semibold'>Artist</h1>
          <p className='text-right mt-7 mr-8 font-normal hover:underline ml-8'><a href="url">Show all</a></p>
        </div>

        <div className='grid grid-cols-5 gap-5 m-5 max-md:grid-cols-2'>
          <Artistbox></Artistbox>
          <Artistbox></Artistbox>
          <Artistbox></Artistbox>
          <Artistbox></Artistbox>
          <Artistbox></Artistbox>
        </div>
      </div>
    </div>
  )
}

export default Home