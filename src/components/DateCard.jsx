import React from 'react'

const DateCard = () => {
    return (
        <div className='m-4 bg-white border border-gray-200 rounded-lg shadow '>
            <div className='max-w-md m-auto'>
                <div className='grid grid-cols-3'>
                    <div className='col-span-1'>
                        <img class="rounded-lg object-cover h-28 m-auto" src="https://www.daco-thai.com/wp-content/uploads/2021/07/Stamp-01.jpg" alt="" />
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