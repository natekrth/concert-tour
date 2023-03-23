import React from 'react'
import Like from '../components/Like'

const Artistbox = () => {
  return (
    // <div className="bg-pink-300 w-full h-40 rounded-lg">
    //     <h1 className='text-white'>Date</h1>
    // </div>
    <div>
        <div class="flex justify-center">
            <div class="block max-w-sm bg-white rounded-lg shadow-lg">
                <a href="/">
                    <img class="rounded-t-lg" src="https://www.daco-thai.com/wp-content/uploads/2021/07/Stamp-01.jpg" alt="" />
                </a>
                <div class="p-4 grid grid-cols-2">
                    <h5 class="mb-2 text-xl font-medium text-neutral-800">
                        Stamp
                    </h5>
                    <Like></Like>
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