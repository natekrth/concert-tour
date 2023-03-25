import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import Login from '../components/Login'

const Navbar = () => {
  const [lock, setLock] = useState("");
    const lockHandler = () => {
      document.body.style.overflow = 'hidden';
      setLock('hidden');
    }
  return (
    <div>
      <nav className="w-full">
          <ul className="flex flex-row py-6 rounded-lg bg-gray-50 text-sm font-medium shadow-md">
            <li className='flex'>
              <a href="#" className="flex-auto py-2 pl-32 pr-4 rounded text-blue-700">Home</a>
            </li>
            <li className='flex'>
              <a href="#" className="flex-auto py-2 px-4 text-gray-700 rounded hover:bg-blue-500 hover:text-white">Favourite</a>
            </li>
            <li className='flex'>
              <a href="#" className="flex-auto py-2 pl-4 pr-10 text-gray-700 rounded hover:bg-blue-500 hover:text-white">Profile</a>
            </li>
            <div className='rounded-full bg-slate-200 flex items-center px-4 w-1/2'>
              <AiOutlineSearch size={25} />
              <input className="bg-transparent p-2 w-full focus:outline-none" type="text" placeholder='Search'></input>
            </div>
            <li className='flex'>
              <a href="#" className="flex-auto py-2 pl-24 text-gray-700 rounded hover:bg-blue-500 hover:text-white" onClick={lockHandler}>Login</a>
            </li>
          </ul>
          {/* <Login isVisable></Login> */}
      </nav>
    </div>
  )
}

export default Navbar