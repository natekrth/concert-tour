import React from 'react'

const Artistbox = () => {
  return (
    
    // <div className="bg-pink-300 w-full h-40 rounded-lg">
    //     <h1 className='text-white'>Date</h1>
    // </div>
    <div>
        <div class="flex justify-center">
            <div class="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
                <a href="/">
                    <img class="rounded-t-lg" src="https://www.daco-thai.com/wp-content/uploads/2021/07/Stamp-01.jpg" alt="" />
                </a>
                <div class="p-6">
                    <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                        Stamp
                    </h5>
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