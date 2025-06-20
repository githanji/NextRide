import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center sticky top-0 z-50">
      {/* Left - Logo */}
      <div className="flex-1">
        <h1 className="text-3xl font-bold text-red-600">LOGO</h1>
      </div>

      {/* Middle - Centered Links with 10px gap */}
      <div className="flex-1 flex justify-center gap-x-[10px] text-gray-700 font-medium">
        <a href="#" className="hover:text-blue-600 transition">Lorem Ipsum</a>
        <a href="#" className="hover:text-blue-600 transition">Lorem Ipsum</a>
        <a href="#" className="hover:text-blue-600 transition">Lorem Ipsum</a>
        <a href="#" className="hover:text-blue-600 transition">Lorem Ipsum</a>
      </div>

      {/* Right - Sign In */}
      <div className="flex-1 flex justify-end">
        <a href="#" className="bg-gray-200 px-4 py-2 rounded text-sm font-medium hover:bg-gray-300 transition">
          Sign In
        </a>
      </div>
    </nav>
  )
}

export default Navbar
