import React from 'react'

const Upcomingbox = () => {
  return (
    <div>
        <div className='flex h-36'>
            <img className="flex-initial w-32 object-cover rounded-l-lg" src="https://www.daco-thai.com/wp-content/uploads/2021/07/Stamp-01.jpg" alt="" />
            <div className="flex-initial w-auto bg-white rounded-r-lg grid grid-cols-1">
                <h1 className='absolute ml-3 mt-2 text-5xl font-semibold text-red-400'>24</h1>
                <div className='w-64 m-auto pt-16'>
                    <p className='text-3xl font-semibold text-red-400'>Stamp</p>
                    <p className='text-gray-400'>Kasetsart University</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Upcomingbox