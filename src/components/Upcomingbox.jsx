import React from 'react'

const Upcomingbox = ( { date=10, artist="Artist", location="location", photo="https://www.daco-thai.com/wp-content/uploads/2021/07/Stamp-01.jpg"} ) => {
  return (
    <a className='flex h-36 w-auto' href="/">
      <img className="flex-none w-2/5 object-cover rounded-l-lg" src={photo} alt="" />
      <div className="flex-none bg-white w-3/5 rounded-r-lg grid grid-cols-1">
          <div className='flex'>
            <h1 className='ml-3 mt-2 text-5xl font-semibold text-red-400'>{date}</h1>
          </div>
          <div className='m-auto'>
              <p className='text-3xl font-semibold text-red-400'>{artist}</p>
              <p className='text-gray-400'>{location}</p>
          </div>
      </div>
    </a>
  )
}

export default Upcomingbox