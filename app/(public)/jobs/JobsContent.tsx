'use client'
import Image from 'next/image'
import useJobs from '@/hooks/useJobs'
import { useSearchParams } from 'next/navigation'
import { Job } from '@/types/types'
import Link from 'next/link'

const JobsContent = () => {
    const searchParams = useSearchParams()
    const search = searchParams.get('search') || ''
    const location = searchParams.get('location') || ''

    const { data, isLoading } = useJobs({ search, location })
    const jobs = data?.data || []



    return (
        <div className='max-w-360 mx-auto px-4 lg:px-31 mt-18 pb-20'>

            {isLoading && (
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
                    {Array.from({ length: 8 }).map((_, i) => (
                        <div key={i} className='border border-[#D6DDEB] p-6 animate-pulse'>
                            <div className='flex justify-between'>
                                <div className='w-12 h-12 bg-[#F0F1F5] rounded-sm' />
                                <div className='w-24 h-8 bg-[#F0F1F5] rounded' />
                            </div>
                            <div className='mt-4 space-y-3'>
                                <div className='h-5 bg-[#F0F1F5] rounded w-3/4' />
                                <div className='h-4 bg-[#F0F1F5] rounded w-1/2' />
                                <div className='h-4 bg-[#F0F1F5] rounded w-full' />
                            </div>
                        </div>
                    ))}

                </div>
            )}

            {!isLoading && jobs.length === 0 && (
                <div className='text-center py-24'>
                    <p className='text-5xl mb-4'>📭</p>
                    <p className='font-epilogue font-bold text-[20px] text-natural100'>No jobs found</p>
                    <p className='font-epilogue text-[16px] text-[#7C8493] mt-2'>Try different keywords or location</p>
                </div>
            )}

            {!isLoading && jobs.length > 0 && (
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
                    {jobs.map((job: Job) => (
                        <Link href={`/jobs/${job._id}`} key={job._id} className='border border-[#D6DDEB] p-6 hover:shadow-md transition-shadow cursor-pointer'>

                            <div className='flex justify-between items-start'>
                                <div className='w-12 h-12 border border-[#D6DDEB] flex items-center justify-center bg-white overflow-hidden'>
                                    {job.image ? (
                                        <Image src={`${process.env.NEXT_PUBLIC_API_URL}/${job.image}`} alt={job.company} width={48} height={48} className='object-contain' />
                                    ) : (
                                        <span className='font-bold text-[#4640DE] text-lg'>{job.company?.[0]}</span>
                                    )}
                                </div>
                                <button className='text-brand font-epilogue text-[16px] px-3 py-1 border border-brand capitalize'>
                                    {job.job_type}
                                </button>
                            </div>

                            <div className='mt-4'>
                                <h1 className='font-epilogue text-[18px] font-bold text-natural100'>{job.title}</h1>
                                <div className='flex items-center gap-2 mt-1'>
                                    <p className='text-[#515B6F] text-[16px] font-epilogue font-normal'>{job.company}</p>
                                    <div className='h-1 w-1 border-2 border-[#515B6F] rounded-full opacity-30' />
                                    <p className='text-[#515B6F] text-[16px] font-epilogue font-normal'>{job.location}</p>
                                </div>
                                <div className='mt-4'>
                                    <p className='text-[16px] text-[#7C8493] leading-[160%] line-clamp-2'>{job.description}</p>
                                </div>
                                <div className='mt-4 flex flex-wrap gap-2'>
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

                        </Link>
                    ))}
                </div>
            )}

        </div>
    )
}

export default JobsContent