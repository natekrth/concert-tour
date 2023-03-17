import React from 'react'

const Upcomingbox = () => {
  return (
    <div>
        <div className='flex h-36'>
            <img className="flex-initial w-32 object-cover rounded-l-lg" src="https://www.daco-thai.com/wp-content/uploads/2021/07/Stamp-01.jpg" alt="" />
            <div className="flex-initial w-64 bg-white rounded-r-lg grid grid-cols-1">
                <div className='justify-center w-64 h-auto m-auto text-3xl font-semibold text-red-600'>24 Stamp</div>
                <p className='text-gray-400'>Kasetsart University</p>
            </div>
        </div>
    </div>
  )
}

export default Upcomingbox