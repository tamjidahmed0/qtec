'use client'
import useJobs from '@/hooks/useJobs'
import { Job } from '@/types/types'
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'

const FeaturedJob = () => {
    const scrollRef = useRef<HTMLDivElement>(null)
    const { data, isLoading } = useJobs()
    const jobs = data?.data || []

    const JobCard = ({ job }: { job: Job }) => (
        <Link href={`/jobs/${job._id}`} className='h-full'>
            <div className='border border-[#D6DDEB] p-6 cursor-pointer hover:shadow-md transition-shadow h-full flex flex-col'>
                <div className='flex justify-between'>
                    <div className='w-12 h-12 border border-[#D6DDEB] flex items-center justify-center bg-white overflow-hidden'>
                        {job.image ? (
                            <Image src={`${process.env.NEXT_PUBLIC_API_URL}/${job.image}`} alt={job.company} className='w-full h-full object-contain' width={48} height={48}  />
                        ) : (
                            <span className='font-bold text-[#4640DE] text-lg'>{job.company?.[0]}</span>
                        )}
                    </div>
                    <button className='text-brand font-epilogue text-[16px] px-3 py-1 border border-brand capitalize'>
                        {job.job_type}
                    </button>
                </div>
                <div className='mt-4 flex flex-col flex-1'>
                    <h1 className='font-epilogue text-[18px] font-bold text-natural100'>{job.title}</h1>
                    <div className='flex items-center gap-2 mt-1'>
                        <p className='text-[#515B6F] text-[16px] font-epilogue font-normal'>{job.company}</p>
                        <div className='h-1 w-1 border-2 border-[#515B6F] rounded-full opacity-30' />
                        <p className='text-[#515B6F] text-[16px] font-epilogue font-normal'>{job.location}</p>
                    </div>
                    <div className='mt-4 flex-1'>
                        <p className='text-[16px] text-[#7C8493] leading-[160%] line-clamp-2'>{job.description}</p>
                    </div>
                    <div className='mt-4 flex gap-2 flex-wrap'>
                        <button className='py-1 px-4 bg-[#EB85331A] text-[#FFB836] rounded-[40px] font-epilogue font-bold text-[16px] capitalize'>
                            {job.category}
                        </button>
                        {job.salary && (
                            <button className='py-1 px-4 bg-[#56CDAD1A] text-[#56CDAD] rounded-[40px] font-epilogue font-bold text-[16px]'>
                                {job.salary}
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </Link>
    )

    if (isLoading) return (
        <div className='max-w-360 mx-auto lg:px-31 px-4 mt-18'>
            <div className='h-10 bg-[#F0F1F5] rounded w-48 mb-12 animate-pulse' />
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
                {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className='border border-[#D6DDEB] p-6 animate-pulse'>
                        <div className='flex justify-between'>
                            <div className='w-12 h-12 bg-[#F0F1F5]' />
                            <div className='w-20 h-8 bg-[#F0F1F5]' />
                        </div>
                        <div className='mt-4 space-y-3'>
                            <div className='h-5 bg-[#F0F1F5] rounded w-3/4' />
                            <div className='h-4 bg-[#F0F1F5] rounded w-1/2' />
                            <div className='h-4 bg-[#F0F1F5] rounded w-full' />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )

    return (
        <div className='max-w-360 mx-auto lg:px-31 px-4 mt-18'>

            <div className='flex justify-between items-center'>
                <p className='font-clash-display font-bold text-[32px] lg:text-[48px]'>
                    Featured <span className='text-accents-blue'>jobs</span>
                </p>
                <Link href='/jobs' className='hidden cursor-pointer text-[#4640DE] font-epilogue text-[16px] font-bold lg:flex items-center gap-2'>
                    Show all jobs
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </Link>
            </div>

            <div className='mt-12'>

                {/* Mobile slider */}
                <div
                    ref={scrollRef}
                    className='flex lg:hidden gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4
                               [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]'
                >
                    {jobs.map((job: Job) => (
                        <div key={job._id} className='snap-start shrink-0 w-70'>
                            <JobCard job={job} />
                        </div>
                    ))}
                </div>

                {/* Desktop grid */}
                <div className='hidden lg:grid grid-cols-4 gap-8'>
                    {jobs.map((job: Job) => (
                        <JobCard key={job._id} job={job} />
                    ))}
                </div>

                <Link href='/jobs' className='lg:hidden cursor-pointer mt-6 text-[#4640DE] font-epilogue text-[16px] font-bold flex items-center gap-2'>
                    Show all jobs
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </Link>

            </div>
        </div>
    )
}

export default FeaturedJob