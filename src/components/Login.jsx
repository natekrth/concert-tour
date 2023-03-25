import React, { useState } from 'react'

const Login = ( {isVisable} ) => {

  return (
    <div className='fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm'>
        <div className='flex w-full h-full justify-center items-center'>
            <div className='bg-slate-100 w-1/2 rounded grid grid-cols-1'>
                <button className='text-slate-600 font-bold text-xl place-self-start m-5'>X</button>
                <p className='pb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo sit aliquid asperiores amet in iusto ea modi dicta impedit magnam! Quidem iste rerum animi quasi nobis et quis deleniti qui.</p>
            </div>
        </div>
    </div>
  )
}

export default Login