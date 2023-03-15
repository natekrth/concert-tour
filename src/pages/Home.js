import React from 'react'
import Navbar from '../components/Navbar'
import Artistbox from '../components/Artistbox'

const Home = () => {
  return (
    <div>
      <div className='grid grid-cols-3 gap-5 m-5'>
        <Artistbox></Artistbox>
        <Artistbox></Artistbox>
        <Artistbox></Artistbox>
      </div>
    </div>
  )
}

export default Home