import React from 'react'

const Favbox = () => {
  return (
    <div>
        <div className='flex h-36'>
            <img className="flex-none w-2/5 object-cover rounded-l-lg" src="https://images.workpointnews.com/workpointnews/2022/03/18003821/1647538698_71194_IMG_0767.jpg" alt="" />
            <div className="flex-none w-3/5 bg-white rounded-r-lg grid grid-cols-1">
              <div className='m-auto'>
                <p className='text-3xl font-semibold text-red-400'>Bowkylion</p>
                <p className='text-gray-400'>Rats Records</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Favbox