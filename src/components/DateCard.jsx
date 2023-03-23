import React from 'react'

const DateCard = ({img="https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"}) => {
    return (
    <div className='m-auto my-4 sm:max-w-screen-xs md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl'>
            <div className='m-4 bg-white border border-gray-200 rounded-lg shadow'>
                <div className='grid grid-cols-3'>
                    <div className='col-span-1'>
                        <img class="rounded-lg object-cover m-auto sm:h-28 md:h-48 lg:h-48 xl:h-48 2xl:h-48 " src={img} alt="" />
                    </div>
                    <div className='col-span-2 p-1 m-auto'>
                        <h3 className='text-lg'>Stamp</h3>
                        <h2 className='text-2xl'>Khao Yai bar</h2>
                        <p className='text-base'>@Khaoyai</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DateCard