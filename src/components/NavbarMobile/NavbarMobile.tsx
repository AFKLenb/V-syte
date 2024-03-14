import Link from 'next/link'
import React from 'react'

// menuData
const menuLinks = [
    { label: 'Home', url: '/' },
    { label: 'Abolt us', url: '/about' },
    { label: 'Sell', url: '/sales' },
    { label: 'Catalog', url: '/catalog' },
    { label: 'Contacts', url: '/contacts' },
]

const NavbarMobile = ( { containerStyle} : { containerStyle : string}) => {
  return (
    <nav className={`${containerStyle}`}>
       <menu className='w-full flex flex-col gap-[40px] '>
            {menuLinks.map(( item, index) =>{
                return(
                    <>
                        <li key={index}>
                            <Link className=' text-white uppercase hover:text-accent transition-all duration-300 ' href={item.url}>{item.label}</Link>
                        </li>
                        
                    </>
                )
            })}
            <li className=" inline-flex justify-center">
                <Link href="" className='uppercase text-black/70 py-[10px] px-[25px] hover:text-black hover:scale-[1.1] transition-all duration-300 bg-blue-500'>Oleg in</Link> 
            </li>
        </menu>
    </nav>
  )
}

export default NavbarMobile