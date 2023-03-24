import React from 'react'

const Favbox = ( { artist="Artist", group="Group", photo="https://images.workpointnews.com/workpointnews/2022/03/18003821/1647538698_71194_IMG_0767.jpg"} ) => {
  return (
    <div>
        <div className='flex h-36'>
            <img className="flex-none w-2/5 object-cover rounded-l-lg" src={photo} alt="" />
            <div className="flex-none w-3/5 bg-white rounded-r-lg grid grid-cols-1">
              <div className='m-auto'>
                <p className='text-3xl font-semibold text-red-400'>{artist}</p>
                <p className='text-gray-400'>{group}</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Favbox