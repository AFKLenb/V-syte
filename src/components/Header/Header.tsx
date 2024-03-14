"use client";
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import { FaBars } from 'react-icons/fa6'
import NavbarMobile from '../NavbarMobile/NavbarMobile'

const Header = () => {

  const [ openNav, setOpenNav] = useState(false);

  return (
    <header className=' w-full h-[70px]  border-b border-zinc-800 bg-zinc-900'>
      <div className="p-0 mx-auto flex items-center h-full md:container">
        <div className="w-full h-full relative flex items-center justify-between ">
          <Link href="/" className=' w-[80px] h-[50px]'>
            <Image className='w-full h-full rounded-md' src='/assets/image/logo.png' width={80} height={50} alt='Логотип сайта'  />
          </Link>
          <NavbarMobile containerStyle={` ${openNav ? 'max-h-max border-b border-zinc-800 p-[15px]' : 'max-h-0 overflow-hidden py-0 px-[15px] border-zinc-800/0'} fixed w-[300px] h-full text-center right-0 top-[70px] transition-all duration-400 bg-zinc-900 md:hidden`}/>
          <Navbar  containerStyle='hidden md:flex' />
          <div className="">
          <ul className="flex items-center gap-4">
              <li className=" inline-flex ">
                <Link href="" className=' uppercase text-white/50 hover:text-white hidden md:flex'>Oleg in</Link> 
              </li>
            </ul>
            <button onClick={ () => setOpenNav(!openNav)} className=' text-white text-xl bg-blue-500 w-[70px] h-[70px] flex items-center justify-center md:hidden'>
              <FaBars/>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
