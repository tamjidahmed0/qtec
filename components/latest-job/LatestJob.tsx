import Image from 'next/image'
import React from 'react'

const LatestJob = () => {


    const cards = [
        {
            icon: '/assets/fiSX9QYy_400x400 1.png', title: 'Social Media Assistant', company: 'nomad', location: 'paris', jobType: 'Full-Time',
            tags: [
                { name: 'marketing', color: '#FFB836' },
                { name: 'design', color: '#4640DE' }
            ]
        },
        {
            icon: '/assets/fiSX9QYy_400x400 1.png', title: 'Social Media Assistant', company: 'nomad', location: 'paris', jobType: 'Full-Time',
            tags: [
                { name: 'marketing', color: '#FFB836' },
                { name: 'design', color: '#4640DE' }
            ]
        },

        {
            icon: '/assets/fiSX9QYy_400x400 1.png', title: 'Social Media Assistant', company: 'nomad', location: 'paris', jobType: 'Full-Time',
            tags: [
                { name: 'marketing', color: '#FFB836' },
                { name: 'design', color: '#4640DE' }
            ]
        },

        {
            icon: '/assets/fiSX9QYy_400x400 1.png', title: 'Social Media Assistant', company: 'nomad', location: 'paris', jobType: 'Full-Time',
            tags: [
                { name: 'marketing', color: '#FFB836' },
                { name: 'design', color: '#4640DE' }
            ]
        },

        {
            icon: '/assets/fiSX9QYy_400x400 1.png', title: 'Social Media Assistant', company: 'nomad', location: 'paris', jobType: 'Full-Time',
            tags: [
                { name: 'marketing', color: '#FFB836' },
                { name: 'design', color: '#4640DE' }
            ]
        },

        {
            icon: '/assets/fiSX9QYy_400x400 1.png', title: 'Social Media Assistant', company: 'nomad', location: 'paris', jobType: 'Full-Time',
            tags: [
                { name: 'marketing', color: '#FFB836' },
                { name: 'design', color: '#4640DE' }
            ]
        },


    ]









    return (
        <div className=' bg-light-gray relative lg:[clip-path:polygon(15%_0,100%_0,100%_100%,0_99%,0_11%)]'>


            <div className='lg:max-w-360 lg:mx-auto px-4 lg:px-31 mt-20 pb-15 relative z-10'>
                <div className='pt-18'>
                    <div className='flex justify-between items-center'>
                        <p className='font-clash-display font-bold lg:text-[48px] text-[32px]'>Latest <span className='text-accents-blue'>jobs open</span></p>

                        <button className='hidden cursor-pointer text-[#4640DE] font-epilogue text-[16px] font-bold lg:flex items-center gap-2'>
                            Show all jobs
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-4 h-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>



                    <div className='grid lg:grid-cols-2 mt-12 gap-x-8 gap-y-4'>

                        {cards.map((item, index) => (
                            <div className='flex lg:flex-row flex-col gap-6 bg-white px-10 py-6 cursor-pointer' key={index}>
                                <div className='w-16 h-16 shrink-0'>
                                    <Image
                                        src={item.icon}
                                        alt=''
                                        width={64}
                                        height={64}
                                        className='w-full h-full object-cover'
                                    />
                                </div>

                                <div>
                                    <h1 className='font-epilogue text-[18px] font-bold text-natural100'>{item.title}</h1>
                                    <div className='flex items-center gap-2'>
                                        <p className='text-[#515B6F] text-[16px] font-epilogue font-normal capitalize'>{item.company}</p>
                                        <div className='h-1 w-1 border-2 border-[#515B6F] rounded-full opacity-30' />
                                        <p className='text-[#515B6F] text-[16px] font-epilogue font-normal capitalize'>{item.location}</p>
                                    </div>


                                    <div className='mt-[8.5px] flex items-center'>
                                        <button className='py-1.5 px-2.5 rounded-[80px] bg-[#56CDAD1A] font-epilogue font-bold text-[14px] text-[#56CDAD]'>{item.jobType}</button>

                                        <div className='w-8.5 h-0 border border-[#D6DDEB] rotate-90'></div>

                                        <div className='flex gap-2'>

                                            {item.tags.map((tag, index) => (
                                                <button className={`py-1.5 px-2.5 rounded-[80px] border border-[${tag.color}] font-epilogue font-bold text-[14px] text-[${tag.color}] capitalize`} key={index}>{tag.name}</button>
                                            ))}

                                        </div>





                                    </div>


                                </div>
                            </div>

                        ))}

                    </div>


                </div>
            </div>


            {/* Decorative rectangles */}
            <div className='hidden lg:block'>
                <div className='pointer-events-none absolute top-20 -left-24 w-96 h-48 border-2 border-[#C8C4E9] rotate-[-25deg] opacity-40 z-0' />
                <div className='pointer-events-none absolute top-40 right-10 w-105 h-45 border-2 border-[#C8C4E9] rotate-[-25deg] opacity-30 z-0' />
                <div className='pointer-events-none absolute bottom-20 -left-16 w-95 h-37.5 border-2 border-[#C8C4E9] rotate-[-25deg] opacity-40 z-0' />
                <div className='pointer-events-none absolute bottom-10 right-32 w-[320px] h-35 border-2 border-[#C8C4E9] rotate-[-25deg] opacity-30 z-0' />
            </div>


        </div>
    )
}

export default LatestJob