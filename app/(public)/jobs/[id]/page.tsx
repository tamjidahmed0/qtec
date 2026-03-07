'use client'
import { useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import useJobById from '@/hooks/useJobById'
import ApplyModal from '@/components/ui/ApplyModal'

const JobDetailPage = () => {
    const { id } = useParams()
    const router = useRouter()
    const { data, isLoading } = useJobById(id as string)
    const job = data?.data
    const [modalOpen, setModalOpen] = useState(false)

    if (isLoading) return (
        <div className='max-w-360 mx-auto px-4 lg:px-31 py-16 animate-pulse'>
            <div className='h-6 bg-[#F0F1F5] rounded w-24 mb-8' />
            <div className='border border-[#D6DDEB] p-8 mb-8'>
                <div className='flex gap-5'>
                    <div className='w-16 h-16 bg-[#F0F1F5]' />
                    <div className='flex-1 space-y-3'>
                        <div className='h-7 bg-[#F0F1F5] rounded w-1/2' />
                        <div className='h-4 bg-[#F0F1F5] rounded w-1/3' />
                    </div>
                </div>
            </div>
            <div className='flex flex-col lg:flex-row gap-8'>
                <div className='flex-1 border border-[#D6DDEB] p-8 space-y-3'>
                    {Array.from({ length: 6 }).map((_, i) => (
                        <div key={i} className='h-4 bg-[#F0F1F5] rounded' style={{ width: `${70 + (i * 7) % 30}%` }} />
                    ))}
                </div>
                <div className='lg:w-80 border border-[#D6DDEB] p-6 space-y-5'>
                    {Array.from({ length: 5 }).map((_, i) => (
                        <div key={i} className='flex gap-3'>
                            <div className='w-8 h-8 bg-[#F0F1F5]' />
                            <div className='flex-1 space-y-2'>
                                <div className='h-3 bg-[#F0F1F5] rounded w-1/2' />
                                <div className='h-4 bg-[#F0F1F5] rounded w-3/4' />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )

    if (!job) return (
        <div className='text-center py-32'>
            <p className='text-5xl mb-4'>📭</p>
            <p className='font-epilogue font-bold text-[20px] text-natural100'>Job not found</p>
            <Link href='/jobs' className='mt-4 inline-block text-brand font-epilogue font-bold text-[16px]'>
                ← Back to Jobs
            </Link>
        </div>
    )

    const sidebarItems = [
        {
            label: 'Job Title', value: job.title,
            icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M20 7H4C2.9 7 2 7.9 2 9v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2z" stroke="#4640DE" strokeWidth="1.5" /><path d="M16 7V5c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2" stroke="#4640DE" strokeWidth="1.5" /></svg>
        },
        {
            label: 'Location', value: job.location,
            icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="#4640DE" strokeWidth="1.5" /><circle cx="12" cy="9" r="2.5" stroke="#4640DE" strokeWidth="1.5" /></svg>
        },
        {
            label: 'Job Type', value: job.job_type,
            icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#4640DE" strokeWidth="1.5" /><path d="M12 6v6l4 2" stroke="#4640DE" strokeWidth="1.5" strokeLinecap="round" /></svg>
        },
        {
            label: 'Category', value: job.category,
            icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="7" height="7" stroke="#4640DE" strokeWidth="1.5" /><rect x="14" y="3" width="7" height="7" stroke="#4640DE" strokeWidth="1.5" /><rect x="3" y="14" width="7" height="7" stroke="#4640DE" strokeWidth="1.5" /><rect x="14" y="14" width="7" height="7" stroke="#4640DE" strokeWidth="1.5" /></svg>
        },
        ...(job.salary ? [{
            label: 'Salary', value: job.salary,
            icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#4640DE" strokeWidth="1.5" /><path d="M12 6v12M9 9h4.5a1.5 1.5 0 0 1 0 3H9m0 0h6" stroke="#4640DE" strokeWidth="1.5" strokeLinecap="round" /></svg>
        }] : []),
        {
            label: 'Posted',
            value: new Date(job.created_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
            icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="18" rx="2" stroke="#4640DE" strokeWidth="1.5" /><path d="M16 2v4M8 2v4M3 10h18" stroke="#4640DE" strokeWidth="1.5" strokeLinecap="round" /></svg>
        },
    ]

    return (
        <>
            <div className='max-w-360 mx-auto px-4 lg:px-31 py-12 pb-24'>

                {/* Back */}
                <button
                    onClick={() => router.back()}
                    className='flex items-center gap-2 text-[#515B6F] font-epilogue text-[14px] mb-8 hover:text-brand transition-colors'
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                    Back to Jobs
                </button>

                {/* Top card */}
                <div className='border border-[#D6DDEB] p-6 lg:p-10 mb-8'>
                    <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6'>
                        <div className='flex items-center gap-5'>
                            <div className='w-16 h-16 border border-[#D6DDEB] flex items-center justify-center bg-white overflow-hidden shrink-0'>
                                {job.image ? (
                                    <Image src={`${process.env.NEXT_PUBLIC_API_URL}/${job.image}`} alt={job.company} className='w-full h-full object-contain' width={48} height={48} />
                                ) : (
                                    <span className='font-bold text-[#4640DE] text-2xl'>{job.company?.[0]}</span>
                                )}
                            </div>
                            <div>
                                <h1 className='font-clash-display font-bold text-[24px] lg:text-[32px] text-natural100 leading-tight'>
                                    {job.title}
                                </h1>
                                <div className='flex flex-wrap items-center gap-2 mt-1'>
                                    <span className='font-epilogue text-[16px] text-[#515B6F]'>{job.company}</span>
                                    <div className='h-1 w-1 border-2 border-[#515B6F] rounded-full opacity-30' />
                                    <span className='font-epilogue text-[16px] text-[#515B6F]'>{job.location}</span>
                                </div>
                            </div>
                        </div>

                        {/* Apply — desktop */}
                        <button
                            onClick={() => setModalOpen(true)}
                            className='hidden sm:inline-block bg-brand text-white font-epilogue font-bold text-[16px] px-8 py-4 whitespace-nowrap hover:opacity-90 transition-opacity'
                        >
                            Apply Now
                        </button>
                    </div>

                    {/* Tags */}
                    <div className='flex flex-wrap gap-3 mt-6 pt-6 border-t border-[#D6DDEB]'>
                        <span className='py-1 px-4 bg-[#EB85331A] text-[#FFB836] rounded-[40px] font-epilogue font-bold text-[14px]'>{job.category}</span>
                        <span className='py-1 px-4 bg-[#4640DE1A] text-[#4640DE] rounded-[40px] font-epilogue font-bold text-[14px]'>{job.job_type}</span>
                        {job.salary && (
                            <span className='py-1 px-4 bg-[#56CDAD1A] text-[#56CDAD] rounded-[40px] font-epilogue font-bold text-[14px]'>{job.salary}</span>
                        )}
                    </div>
                </div>

                {/* Description + Sidebar */}
                <div className='flex flex-col lg:flex-row gap-8'>

                    {/* Description */}
                    <div className='flex-1 border border-[#D6DDEB] p-6 lg:p-10'>
                        <h2 className='font-clash-display font-bold text-[24px] text-natural100 mb-6'>Job Description</h2>
                        <p className='font-epilogue text-[16px] text-[#515B6F] leading-[180%] whitespace-pre-line'>
                            {job.description}
                        </p>

                        {/* Apply — mobile */}
                        <button
                            onClick={() => setModalOpen(true)}
                            className='sm:hidden mt-10 w-full bg-brand text-white font-epilogue font-bold text-[16px] py-4 hover:opacity-90 transition-opacity text-center block'
                        >
                            Apply Now
                        </button>
                    </div>

                    {/* Sidebar */}
                    <div className='lg:w-80 border border-[#D6DDEB] p-6 h-fit'>
                        <h3 className='font-clash-display font-bold text-[20px] text-natural100 mb-6'>Job Overview</h3>
                        <div className='space-y-5'>
                            {sidebarItems.map((item, i) => (
                                <div key={i} className='flex items-start gap-3'>
                                    <div className='w-8 h-8 bg-[#4640DE1A] flex items-center justify-center shrink-0 mt-0.5'>
                                        {item.icon}
                                    </div>
                                    <div>
                                        <p className='font-epilogue text-[12px] text-[#9AA0B0] uppercase tracking-wider'>{item.label}</p>
                                        <p className='font-epilogue text-[14px] font-semibold text-[#202430] mt-0.5'>{item.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <ApplyModal job={job} open={modalOpen} onClose={() => setModalOpen(false)} />
        </>
    )
}

export default JobDetailPage