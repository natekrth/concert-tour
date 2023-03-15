import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav class="px-10 py-10">
          <ul class="flex flex-row py-4 rounded-lg bg-gray-50 text-sm font-medium">
            <li>
              <a href="#" class="flex-auto py-4 pl-3 pr-4 rounded text-blue-700">Home</a>
            </li>
            <li>
              <a href="#" class="flex-auto py-4 pl-3 pr-4 text-gray-700 rounded hover:bg-blue-500 hover:text-white">Favourite</a>
            </li>
            <li>
              <a href="#" class="flex-auto py-4 pl-3 pr-4 text-gray-700 rounded hover:bg-blue-500 hover:text-white">Profile</a>
            </li>
            <li>
              <a href="#" class="flex-auto py-4 pl-3 pr-4 text-gray-700 rounded hover:bg-blue-500 hover:text-white">Login</a>
            </li>
          </ul>
      </nav>
    </div>
  )
}

export default Navbar