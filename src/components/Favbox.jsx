import React from 'react'

const Favbox = () => {
  return (
    <div>
        <div className='flex h-36'>
            <img className="flex-none w-1/3 object-cover rounded-l-lg" src="https://www.myband.co.th/uploads/20181230/94cab1a3d6aed152156b395b0fefd2fc.png" alt="" />
            <div className="flex-none w-2/3 bg-white rounded-r-lg grid grid-cols-1">
              <div className='m-auto'>
                <p className='max-xl:text-2xl max-2xl:text-3xl font-semibold text-red-400'>Bowkylion</p>
                <p className='text-gray-400'>Rats Records</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Favbox