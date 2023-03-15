import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className="">
          <ul className="flex flex-row py-8 rounded-lg bg-gray-50 text-sm font-medium shadow-md">
            <li>
              <a href="#" className="flex-auto py- pl-32 pr-4 rounded text-blue-700">Home</a>
            </li>
            <li>
              <a href="#" className="flex-auto py-4 pl-4 pr-4 text-gray-700 rounded hover:bg-blue-500 hover:text-white">Favourite</a>
            </li>
            <li>
              <a href="#" className="flex-auto py-4 pl-4 pr-4 text-gray-700 rounded hover:bg-blue-500 hover:text-white">Profile</a>
            </li>
            <li>
              <a href="#" className="flex-auto py-4 pl-4 pr-4 text-gray-700 rounded hover:bg-blue-500 hover:text-white">Login</a>
            </li>
          </ul>
      </nav>
    </div>
  )
}

export default Navbar