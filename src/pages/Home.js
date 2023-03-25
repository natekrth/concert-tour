import React from 'react'
// import Navbar from '../components/Navbar'Tk96
import Artistbox from '../components/Artistbox'
import Favbox from '../components/Favbox'
import Login from '../components/Login'
import Slide from '../components/Slide'
import Upcomingbox from '../components/Upcomingbox'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div className='m-auto'>
      <Navbar></Navbar>
      <Slide></Slide>
      <div className='w-full m-auto'>
        <div className='grid grid-cols-3'>
          <h1 className='text-left mt-7 ml-8 font-semibold'>Upcoming...</h1>
          <h1 className='text-center text-xl mt-7 ml-8 font-semibold text-red-600'>March 2023</h1>
          <p className='text-right mt-7 mr-8 font-normal hover:underline ml-8'><a href="url">Show all</a></p>
        </div>
        <div className='grid grid-cols-3 gap-2 m-5 max-[980px]:grid-cols-1 max-xl:grid-cols-2'>
          <Upcomingbox date={1} artist={"Stamp"} location={"Kasetsart University"}></Upcomingbox>
          <Upcomingbox date={13} artist={"Stamp"} location={"Siam Square"}></Upcomingbox>
          <Upcomingbox date={27} artist={"Serious Bacon"} location={"Icon Siam"} photo={"https://i3.wp.com/www.solutiononeholding.com/wp-content/uploads/2021/10/SERIOUSBACON.jpg"}></Upcomingbox>
        </div>

        <div className='grid grid-cols-2'>
          <h1 className='text-left mt-7 ml-8 font-semibold'>Favourite</h1>
          <p className='text-right mt-7 mr-8 font-normal hover:underline ml-8'><a href="url">Show all</a></p>
        </div>
        <div className='grid grid-cols-3 gap-2 m-5 max-[980px]:grid-cols-1 max-xl:grid-cols-2 max-2xl:grid-cols-3'>
          <Favbox artist="Bowkylion" group="What The Duck" photo="https://images.workpointnews.com/workpointnews/2022/03/18003821/1647538698_71194_IMG_0767.jpg"></Favbox>
          <Favbox artist="Bowkylion" group="What The Duck" photo="https://images.workpointnews.com/workpointnews/2022/03/18003821/1647538698_71194_IMG_0767.jpg"></Favbox>
          <Favbox artist="Bowkylion" group="What The Duck" photo="https://images.workpointnews.com/workpointnews/2022/03/18003821/1647538698_71194_IMG_0767.jpg"></Favbox>
        </div>

        <div className='grid grid-cols-2'>
          <h1 className='text-left mt-7 ml-8 font-semibold'>Artist</h1>
          <p className='text-right mt-7 mr-8 font-normal hover:underline ml-8'><a href="url">Show all</a></p>
        </div>

        <div className='grid grid-cols-5 gap-5 m-5 max-xl:grid-cols-2'>
          <Artistbox></Artistbox>
          <Artistbox></Artistbox>
          <Artistbox></Artistbox>
          <Artistbox></Artistbox>
          <Artistbox></Artistbox>
        </div>
      </div>
      <Login></Login>
    </div>
  )
}

export default Home