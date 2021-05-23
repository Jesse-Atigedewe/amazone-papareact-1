import React from 'react'
import Image from 'next/image'
import {MenuIcon, SearchIcon,ShoppingCartIcon} from '@heroicons/react/outline'
const Header = () => {
    return (<>
        <header>
            {/* top nav */}
           <div className='flex items-center flex-grow p-1 py-2 bg-amazon_blue'>
               <div className='flex items-center flex-grow mt-2 sm:flex-grow-0'>
               <Image src='https://links.papareact.com/f90'
               width={150} height={40}
               objectFit='contain'
               className='cursor-pointer'
               />
               </div>
               {/* searchbar */}
               <div className='items-center flex-grow hidden  h-10 bg-yellow-400 rounded-md cursor-pointer  md:flex hover:bg-yellow-500'>
                   <input type="text" className='flex-grow flex-shrink w-6 p-2 focus:outline-none rounded-l-md'/>
                   <SearchIcon className='h-12 p-4'/>
               </div>
               {/* Right side */}
               <div className='flex items-center px-2 mx-6 space-x-4 text-xs text-white white-space-nowrap'>
                   <div className='cursor-pointer hover:underline'>
                        <p>Hello, jesse</p>
                        <p className='font-extrabold md:text-sm'>Account & List</p>
                   </div>
                   <div className='cursor-pointer hover:underline'>
                        <p>Returns</p>
                        <p className='font-extrabold md:text-sm'>& Order</p>
                   </div>
                   <div className=' relative flex items-center hover:underline'>
                            <span className='absolute font-bold h-4 w-4 text-center top-0 right-6 text-md bg-yellow-400 rounded-full text-black'>0</span>
                        <ShoppingCartIcon className='h-10'/>
                        <p className='hidden md:inline mt-2 font-extrabold'>Basket</p>
                   </div>
               </div>
           </div>
           {/* bottn nav */}
        <div className='flex items-center space-x-2  bg-amazon_blue-light text-white text-xs'>
            <p className='cursor-pointer mr-1 items-center flex'>
                <MenuIcon className='h-6 m-1 hover:text-yellow-100'/>
                <p className='cursor-pointer hover:underline'>All</p>
            </p>
            <p className='cursor-pointer hover:underline'>Prime Videos</p>
            <p className='cursor-pointer hover:underline'>Books</p>
            <p className='cursor-pointer hover:underline'>Shoes</p>
            <p className='cursor-pointer hover:underline'>shirts</p>
            <p className=' hidden md:inline-flex cursor-pointer hover:underline'>Bags</p>
            <p className='hidden md:inline-flex cursor-pointer hover:underline'>Men Watches</p>
            <p className='hidden md:inline-flex cursor-pointer hover:underline'>Womens Wear</p>
            <p className='hidden md:inline-flex cursor-pointer hover:underline'>Electronics</p>
        </div>
        </header>
    </>)
}

export default Header
