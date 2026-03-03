import Image from 'next/image'
import React from 'react'

const FeaturedJob = () => {


    const cards = [
        {
            logo: '/assets/BvBoaEET_400x400 1.png', jobType: 'Full time', title: 'Email Marketing', company: 'Revoult', location: 'Spain', desc: 'Revolut is looking for Email Marketing to help team ma ...',
            tags: [
                { bgColor: '#EB85331A', textColor: '#FFB836', name: 'design' },
                { bgColor: '#56CDAD1A', textColor: '#56CDAD', name: 'marketing' }
            ]
        },

        {
            logo: '/assets/Company Logo.png', jobType: 'part time', title: 'Brand Designer', company: 'Dropbox', location: 'Spain', desc: 'Dropbox is looking for Brand Designer to help the team t ...',
            tags: [
                { bgColor: '#EB85331A', textColor: '#FFB836', name: 'design' },
                { bgColor: '#56CDAD1A', textColor: '#56CDAD', name: 'marketing' }
            ]
        },

        {
            logo: '/assets/Company Logo.png', jobType: 'part time', title: 'Brand Designer', company: 'Dropbox', location: 'Spain', desc: 'Dropbox is looking for Brand Designer to help the team t ...',
            tags: [
                { bgColor: '#EB85331A', textColor: '#FFB836', name: 'design' },
                { bgColor: '#56CDAD1A', textColor: '#56CDAD', name: 'marketing' }
            ]
        },

        {
            logo: '/assets/Company Logo.png', jobType: 'part time', title: 'Brand Designer', company: 'Dropbox', location: 'Spain', desc: 'Dropbox is looking for Brand Designer to help the team t ...',
            tags: [
                { bgColor: '#EB85331A', textColor: '#FFB836', name: 'design' },
                { bgColor: '#56CDAD1A', textColor: '#56CDAD', name: 'marketing' }
            ]
        },

        {
            logo: '/assets/Company Logo.png', jobType: 'part time', title: 'Brand Designer', company: 'Dropbox', location: 'Spain', desc: 'Dropbox is looking for Brand Designer to help the team t ...',
            tags: [
                { bgColor: '#EB85331A', textColor: '#FFB836', name: 'design' },
                { bgColor: '#56CDAD1A', textColor: '#56CDAD', name: 'marketing' }
            ]
        },

        {
            logo: '/assets/Company Logo.png', jobType: 'part time', title: 'Brand Designer', company: 'Dropbox', location: 'Spain', desc: 'Dropbox is looking for Brand Designer to help the team t ...',
            tags: [
                { bgColor: '#EB85331A', textColor: '#FFB836', name: 'design' },
                { bgColor: '#56CDAD1A', textColor: '#56CDAD', name: 'marketing' }
            ]
        },
        {
            logo: '/assets/Company Logo.png', jobType: 'part time', title: 'Brand Designer', company: 'Dropbox', location: 'Spain', desc: 'Dropbox is looking for Brand Designer to help the team t ...',
            tags: [
                { bgColor: '#EB85331A', textColor: '#FFB836', name: 'design' },
                { bgColor: '#56CDAD1A', textColor: '#56CDAD', name: 'marketing' }
            ]
        },

        {
            logo: '/assets/Company Logo.png', jobType: 'part time', title: 'Brand Designer', company: 'Dropbox', location: 'Spain', desc: 'Dropbox is looking for Brand Designer to help the team t ...',
            tags: [
                { bgColor: '#EB85331A', textColor: '#FFB836', name: 'design' },
                { bgColor: '#56CDAD1A', textColor: '#56CDAD', name: 'marketing' }
            ]
        },
    ]






    return (
        <div className='max-w-360 mx-auto px-31 mt-18'>

            <div className='flex justify-between items-center'>
                <p className='font-clash-display font-bold text-[48px]'>Featured <span className='text-accents-blue'>jobs</span></p>
                {/* <button className='cursor-pointer text-[#4640DE] font-epilogue text-[16px] font-bold'>Show all jobs</button> */}


                <button className='cursor-pointer text-[#4640DE] font-epilogue text-[16px] font-bold flex items-center gap-2'>
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


            <div className='mt-12 '>

                <div className='grid grid-cols-4 gap-8'>
                    {cards.map((item, index) => (

                        <div className=' gap-21.75 border border-[#D6DDEB] p-6' key={index}>

                            <div className='flex justify-between'>
                                <Image src={item.logo} alt='' width={48} height={48} />
                                <button className='text-brand font-epilogue text-[16px] px-3 py-1 border border-brand capitalize'>{item.jobType}</button>
                            </div>


                            <div className='mt-4'>
                                <h1 className='font-epilogue text-[18px] font-bold text-natural100'>{item.title}</h1>
                                <div className='flex items-center gap-2'>
                                    <p className='text-[#515B6F] text-[16px] font-epilogue font-normal'>{item.company}</p>
                                    <div className='h-1 w-1 border-2 border-[#515B6F] rounded-full opacity-30' />
                                    <p className='text-[#515B6F] text-[16px] font-epilogue font-normal'>{item.location}</p>
                                </div>

                                <div className='mt-4'>
                                    <p className='text-[16px] text-[#7C8493] leading-[160%]'>{item.desc}</p>
                                </div>

                                <div className='mt-4 flex gap-2'>
                                    {item.tags.map((tags, index) => (
                                        <button key={index} className={`py-1 px-4 bg-[${tags.bgColor}] text-[${tags.textColor}] rounded-[40px] font-epilogue font-bold text-[16px] capitalize`}>{tags.name}</button>
                                    ))}

                                </div>

                            </div>

                        </div>
                    ))}



                </div>



            </div>


        </div>
    )
}

export default FeaturedJob