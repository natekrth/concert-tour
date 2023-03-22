import React from 'react'

const Upcomingbox = () => {
  return (
    <div>
        <div className='flex h-36'>
            <img className="flex-none w-2/5 object-cover rounded-l-lg" src="https://www.daco-thai.com/wp-content/uploads/2021/07/Stamp-01.jpg" alt="" />
            <div className="flex-none bg-white w-3/5 rounded-r-lg grid grid-cols-1">
                <h1 className='flex ml-3 mt-2 text-5xl font-semibold text-red-400'>24</h1>
                <div className='m-auto'>
                    <p className='text-3xl font-semibold text-red-400'>Stamp</p>
                    <p className='text-gray-400'>Kasetsart University</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Upcomingbox