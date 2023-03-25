import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

const Navbar = () => {
  const [lock, setLock] = useState("");
    const lockHandler = () => {
      document.body.style.overflow = 'hidden';
      setLock('hidden');
    }
  return (
    <div>
      <nav className="w-full">
          <ul className="flex flex-row py-8 rounded-lg bg-gray-50 text-sm font-medium shadow-md">
            <li className='text-center'>
              <a href="#" className="flex-auto m-auto py-4 pl-32 pr-4 rounded text-blue-700 text">Home</a>
            </li>
            <li>
              <a href="#" className="flex-auto py-4 px-4 text-gray-700 rounded hover:bg-blue-500 hover:text-white">Favourite</a>
            </li>
            <li>
              <a href="#" className="flex-auto py-4 px-4 text-gray-700 rounded hover:bg-blue-500 hover:text-white">Profile</a>
            </li>
            <div className=''>
              <div className='rounded-full bg-slate-200 flex items-center px-4 w-[200px] sm:w-[400px] lg:w-[500px]'>
                <AiOutlineSearch size={25} />
                <input className="bg-transparent p-2 w-full focus:outline-none" type="text" placeholder='Search'></input>
              </div>
            </div>
            <li>
              <a href="#" className="flex-auto py-4 px-4 text-gray-700 rounded hover:bg-blue-500 hover:text-white" onClick={lockHandler}>Login</a>
            </li>
          </ul>
      </nav>
    </div>
  )
}

export default Navbar