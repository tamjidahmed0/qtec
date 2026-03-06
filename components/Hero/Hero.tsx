'use client'
import Vector from '@/public/Vector.svg'
import Image from 'next/image'
import hero from '@/public/assets/hero1.png'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const Hero = () => {
    const router = useRouter()
    const [search, setSearch] = useState('')
    const [location, setLocation] = useState('')

    const handleSearch = () => {
        const params = new URLSearchParams()
        if (search) params.set('search', search)
        if (location) params.set('location', location)
        router.push(`/jobs?${params.toString()}`)
    }

    return (
        <div className='bg-light-gray lg:[clip-path:polygon(0_0,100%_0,100%_55%,67%_100%,0_100%)] overflow-hidden'>
            <div className='lg:pt-2.25 lg:px-31 px-4 flex gap-14.5 lg:max-w-360 mx-auto'>

                <div className='lg:w-157.25 pt-18.25'>
                    <div className='lg:w-133.25'>
                        <h1 className='font-clash-display text-[48px] lg:text-[72px] leading-[110%] text-natural100'>
                            Discover more than <span className='text-accents-blue'>5000+ Jobs</span>
                        </h1>
                        <Image src={Vector} alt='vector' className='mt-3.25' />
                    </div>
                    <p className='mt-[30.41px] font-epilogue font-light lg:text-[20px] text-[18px] leading-[160%] lg:w-130.25 text-natural'>
                        Great platform for the job seeker that searching for new career heights and passionate about startups.
                    </p>

                    <div className='mt-6 lg:mt-5.75 px-4 py-4 relative z-50 flex flex-col lg:flex-row gap-4 lg:gap-0 bg-white rounded-sm shadow-sm border border-[#D6DDEB] w-full lg:w-213'>

                        {/* Job title input */}
                        <div className='flex items-center gap-3 flex-1 w-full lg:pr-4 lg:border-r lg:border-[#D6DDEB]'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <circle cx="11" cy="11" r="7" stroke="#9199A3" strokeWidth="1.5" />
                                <path d="M20 20L17 17" stroke="#9199A3" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                            <input
                                type="text"
                                placeholder="Job title or keyword"
                                value={search}
                                onChange={e => setSearch(e.target.value)}
                                onKeyDown={e => e.key === 'Enter' && handleSearch()}
                                className='outline-none font-epilogue text-[16px] text-natural placeholder:text-[#9199A3] w-full bg-transparent'
                            />
                        </div>

                        {/* Location select */}
                        <div className='flex items-center gap-3 flex-1 w-full lg:px-4 lg:border-r lg:border-[#D6DDEB]'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="#9199A3" strokeWidth="1.5" />
                                <circle cx="12" cy="9" r="2.5" stroke="#9199A3" strokeWidth="1.5" />
                            </svg>
                            <select
                                value={location}
                                onChange={e => setLocation(e.target.value)}
                                className='outline-none font-epilogue text-[16px] text-natural bg-transparent w-full cursor-pointer appearance-none'
                            >
                                <option value=''>All Locations</option>
                                <option>Florence, Italy</option>
                                <option>Dhaka, Bangladesh</option>
                                <option>New York, USA</option>
                            </select>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M4 6L8 10L12 6" stroke="#9199A3" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                        </div>

                        {/* Search button */}
                        <button
                            onClick={handleSearch}
                            className='bg-brand text-white font-epilogue font-bold text-[16px] px-6.75 py-3.5 whitespace-nowrap cursor-pointer w-full lg:w-auto lg:ml-4'
                        >
                            Search my job
                        </button>
                    </div>

                    <p className='mt-4 font-epilogue font-light text-[16px] text-[#202430]'>
                        Popular : UI Designer, UX Researcher, Android, Admin
                    </p>
                </div>

                {/* Decorative rectangles */}
                <div className='relative hidden lg:block'>
                    <div className='absolute top-18 -left-20 w-100 h-50 border-3 border-[#C8C4E9] rounded-sm -rotate-30 z-0 opacity-70' />
                    <div className='absolute top-16 left-12 w-150 h-80 border-3 border-[#C8C4E9] rounded-sm -rotate-30 z-0 opacity-50' />
                    <div className='absolute top-100 -left-20 w-108 h-50 border-3 border-[#C8C4E9] -rotate-30 z-0 opacity-70' />
                    <div className='absolute top-30 left-100 w-108 h-50 border-3 border-[#C8C4E9] -rotate-30 z-0 opacity-50' />
                    <div className='absolute top-50 -left-10 w-130 h-60 border-2 border-[#D4D0EE] -rotate-30 z-0 opacity-40' />
                    <div className='absolute top-8 left-50 w-90 h-45 border-2 border-[#D4D0EE] -rotate-30 z-0 opacity-30' />
                    <div className='w-125.25 h-176.75 relative z-10'>
                        <Image src={hero} alt='hero image' className='w-full h-full object-cover' />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Hero