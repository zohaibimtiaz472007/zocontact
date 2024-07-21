import React from 'react'
import logo from './logo.png'
const Navbar = () => {
  return (
    <div>
        <header className="bg-white text-gray text-lg rounded-lg my-3 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img src={logo}   className="w-15 h-20 p-2 rounded-full" viewBox="0 0 24 24">
              
            </img>
            <span className="ml-3 text-xl">CONTACT APP</span>
          </a>
        </div>
      </header>
    </div>
  )
}

export default Navbar
