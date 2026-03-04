import Vector from '@/public/Vector.svg'
import Image from 'next/image'
import hero from '@/public/assets/hero1.png'

const Hero = () => {
    return (
        <div className='bg-light-gray lg:[clip-path:polygon(0_0,100%_0,100%_55%,67%_100%,0_100%)] overflow-hidden'

        >
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
                                className='outline-none font-epilogue text-[16px] text-natural placeholder:text-[#9199A3] w-full bg-transparent'
                            />
                        </div>

                        {/* Location select */}
                        <div className='flex items-center gap-3 flex-1 w-full lg:px-4 lg:border-r lg:border-[#D6DDEB]'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="#9199A3" strokeWidth="1.5" />
                                <circle cx="12" cy="9" r="2.5" stroke="#9199A3" strokeWidth="1.5" />
                            </svg>

                            <select className='outline-none font-epilogue text-[16px] text-natural bg-transparent w-full cursor-pointer appearance-none'>
                                <option>Florence, Italy</option>
                                <option>Dhaka, Bangladesh</option>
                                <option>New York, USA</option>
                            </select>

                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M4 6L8 10L12 6" stroke="#9199A3" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                        </div>

                        {/* Search button */}
                        <button className='bg-brand text-white font-epilogue font-bold text-[16px] px-6.75 py-3.5 whitespace-nowrap cursor-pointer w-full lg:w-auto lg:ml-4'>
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















// import Vector from '@/public/Vector.svg'
// import Image from 'next/image'
// import hero from '@/public/assets/hero1.png'

// const Hero = () => {
//     return (
//         <div className='bg-light-gray  lg:[clip-path:polygon(0_0,100%_0,100%_85%,67%_100%,0_100%)]'
//             // style={{ clipPath: 'polygon(0 0, 100% 0, 100% 55%, 67% 100%, 0 100%)' }}
//         >
//             <div className='pt-2.25 px-5 sm:px-10 lg:px-31 flex flex-col lg:flex-row gap-10 lg:gap-14.5 max-w-360 mx-auto'>

//                 <div className='w-full lg:w-157.25 pt-10 lg:pt-18.25'>
//                     <div className='w-full lg:w-133.25'>
//                         <h1 className='font-clash-display text-[48px] md:text-[60px] lg:text-[72px] leading-[110%] text-natural100'>
//                             Discover more than <span className='text-accents-blue'>5000+ Jobs</span>
//                         </h1>
//                         <Image
//                             src={Vector}
//                             alt='vector'
//                             className='mt-3.25 w-[344px] lg:w-auto'
//                         />
//                     </div>

//                     <p className='mt-[24px] lg:mt-[30.41px] font-epilogue font-normal text-[18px] lg:text-[20px] leading-[160%] w-full lg:w-130.25 text-natural'>
//                         Great platform for the job seeker that searching for new career heights and passionate about startups.
//                     </p>

//                     {/* Search bar */}
//                     <div className='mt-5.75 px-3 py-3 lg:px-4 lg:py-4 relative z-50 flex flex-col sm:flex-row items-stretch sm:items-center bg-white rounded-sm shadow-sm border border-[#D6DDEB] w-full lg:w-213'>

//                         {/* Job title input */}
//                         <div className='flex items-center gap-3 flex-1 pb-3 sm:pb-0 border-b sm:border-b-0 border-[#D6DDEB]'>
//                             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='shrink-0'>
//                                 <circle cx="11" cy="11" r="7" stroke="#9199A3" strokeWidth="1.5" />
//                                 <path d="M20 20L17 17" stroke="#9199A3" strokeWidth="1.5" strokeLinecap="round" />
//                             </svg>
//                             <input
//                                 type="text"
//                                 placeholder="Job title or keyword"
//                                 className='outline-none font-epilogue text-[16px] text-natural placeholder:text-[#9199A3] w-full bg-transparent'
//                             />
//                         </div>

//                         {/* Location select */}
//                         <div className='flex items-center gap-3 flex-1 py-3 sm:py-0 sm:px-3 border-b sm:border-b-0 border-[#D6DDEB]'>
//                             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='shrink-0'>
//                                 <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="#9199A3" strokeWidth="1.5" fill="none" />
//                                 <circle cx="12" cy="9" r="2.5" stroke="#9199A3" strokeWidth="1.5" fill="none" />
//                             </svg>
//                             <select className='outline-none font-epilogue text-[16px] text-natural bg-transparent w-full cursor-pointer appearance-none'>
//                                 <option>Florence, Italy</option>
//                                 <option>Dhaka, Bangladesh</option>
//                                 <option>New York, USA</option>
//                             </select>
//                             <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className='shrink-0'>
//                                 <path d="M4 6L8 10L12 6" stroke="#9199A3" strokeWidth="1.5" strokeLinecap="round" />
//                             </svg>
//                         </div>

//                         {/* Search button */}
//                         <button className='bg-brand text-white font-epilogue font-bold text-[16px] px-6.75 py-3.5 whitespace-nowrap cursor-pointer mt-3 sm:mt-0 w-full sm:w-auto'>
//                             Search my job
//                         </button>

//                     </div>

//                     <p className='mt-4 mb-8 lg:mb-0 font-epilogue font-light text-[16px] text-[#202430]'>
//                         Popular : UI Designer, UX Researcher, Android, Admin
//                     </p>
//                 </div>

//                 {/* Hero image — desktop only */}
//                 <div className='hidden lg:block w-full relative'>
//                     <div className='absolute top-18 -left-20 w-100 h-50 border-3 border-[#C8C4E9] rounded-sm -rotate-30 z-0 opacity-70' />
//                     <div className='absolute top-16 left-12 w-150 h-80 border-3 border-[#C8C4E9] rounded-sm -rotate-30 z-0 opacity-50' />
//                     <div className='absolute top-100 -left-20 w-108 h-50 border-3 border-[#C8C4E9] -rotate-30 z-0 opacity-70' />
//                     <div className='absolute top-30 left-100 w-108 h-50 border-3 border-[#C8C4E9] -rotate-30 z-0 opacity-50' />
//                     <div className='absolute top-50 -left-10 w-130 h-60 border-2 border-[#D4D0EE] -rotate-30 z-0 opacity-40' />
//                     <div className='absolute top-8 left-50 w-90 h-45 border-2 border-[#D4D0EE] -rotate-30 z-0 opacity-30' />

//                     <div className='w-125.25 h-176.75 relative z-10'>
//                         <Image src={hero} alt='hero image' className='w-full h-full object-cover' />
//                     </div>
//                 </div>

//             </div>
//         </div>
//     )
// }

// export default Hero