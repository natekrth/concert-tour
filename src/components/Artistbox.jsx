import React from 'react'
import Like from '../components/Like'

const Artistbox = () => {
  return (
    // <div className="bg-pink-300 w-full h-40 rounded-lg">
    //     <h1 className='text-white'>Date</h1>
    // </div>
    <div>
        <div className="flex justify-center">
            <div className="block max-w-sm bg-white rounded-lg shadow-lg">
                <a href="/">
                    <img className="rounded-t-lg" src="https://www.daco-thai.com/wp-content/uploads/2021/07/Stamp-01.jpg" alt="" />
                </a>
                <div className="p-3 grid grid-cols-5">
                    <h5 className="mt-1 ml-10 col-span-4 text-xl font-medium text-neutral-800">
                        Stamp
                    </h5>
                    <div>
                        <Like></Like>
                    </div>
                    {/* <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                        @Siam Square
                    </p> */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Artistbox