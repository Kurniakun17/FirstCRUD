import React, { HtmlHTMLAttributes } from 'react'
import { BsHouse, BsSearch } from 'react-icons/bs'
import { IoMdAdd } from 'react-icons/io'
import {AiOutlineInfoCircle} from 'react-icons/ai'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className=' min-h-full w-20'>
      <div className='bg-blue-100 bg-opacity-[8%] py-20 px-2 backdrop-filter backdrop-blur-xl sticky top-[35%] translate-y-[-20%] z-20 mr-4 flex flex-col justify-center rounded-lg'>
        <Link to='/'>
          <div className='flex justify-center w-12 h-12 items-center mx-auto rounded-xl hover:rounded-3xl bg-gray-700 hover:bg-white hover:text-gray-700 transition-all duration-300 ease-linear'>
            <BsHouse size={32}></BsHouse>
          </div>
        </Link>
        <Link to='/add'>
          <div className='flex justify-center mt-10 w-12 h-12 items-center mx-auto rounded-xl hover:rounded-3xl bg-gray-700 hover:bg-white hover:text-gray-700 transition-all duration-300 ease-linear'>
            <IoMdAdd size={32}></IoMdAdd>
          </div>
        </Link>
        <Link to='/info'>
          <div className='flex justify-center mt-10 w-12 h-12 items-center mx-auto rounded-xl hover:rounded-3xl bg-gray-700 hover:bg-white hover:text-gray-700 transition-all duration-300 ease-linear'>
            <AiOutlineInfoCircle size={28}></AiOutlineInfoCircle>
          </div>
        </Link>
      </div>
    </div>
  )
}

