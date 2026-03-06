'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '@/public/assets/Logo.png'

const Header = () => {
    const [open, setOpen] = useState(false)

    return (
        <div className='bg-light-gray relative'>
            <div className='h-19.5 max-w-360 mx-auto 
                px-6 sm:px-10 lg:px-31 
                flex items-center justify-between'>

                {/* Left Section */}
                <div className='flex items-center gap-6 lg:gap-12'>
                    <Link href={'http://localhost:3000'}>
                        <Image
                            src={logo}
                            alt='logo'
                            className='lg:w-38 h-auto'
                        />
                    </Link>

                    {/* Desktop Nav */}
                    <div className='hidden md:flex capitalize items-center gap-4  
                        text-natural font-epilogue font-medium text-[16px]'>
                        <Link href={'/'}>Find jobs</Link>
                        <Link href={'/'}>browse companies</Link>
                    </div>
                </div>

                {/* Desktop Buttons */}
                <div className='hidden md:flex gap-4 items-center'>
                    <button className='px-6 py-3 rounded-sm text-[16px] text-brand capitalize font-epilogue font-bold cursor-pointer'>
                        Login
                    </button>

                    <div className='w-12 h-0 border border-[#D6DDEB] rotate-90' />

                    <button className='px-6 py-3 text-[16px] text-white bg-brand capitalize font-epilogue font-bold cursor-pointer'>
                        sign up
                    </button>
                </div>

                {/* Mobile Hamburger */}
                <button
                    onClick={() => setOpen(!open)}
                    className='md:hidden flex flex-col gap-1.5'
                >
                    <span className='w-6 h-0.5 bg-natural'></span>
                    <span className='w-6 h-0.5 bg-natural'></span>
                    <span className='w-6 h-0.5 bg-natural'></span>
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className='md:hidden absolute top-full left-0 w-full bg-white shadow-md px-6 py-6 flex flex-col gap-4 z-50'>

                    <Link href={'/'} onClick={() => setOpen(false)}>
                        Find jobs
                    </Link>

                    <Link href={'/'} onClick={() => setOpen(false)}>
                        browse companies
                    </Link>

                    <button className='mt-4 px-6 py-3 rounded-sm text-[16px] text-brand capitalize font-epilogue font-bold border border-brand'>
                        Login
                    </button>

                    <button className='px-6 py-3 text-[16px] text-white bg-brand capitalize font-epilogue font-bold'>
                        sign up
                    </button>
                </div>
            )}
        </div>
    )
}

export default Header