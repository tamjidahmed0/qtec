import Image from 'next/image'
import Link from 'next/link'


const Footer = () => {
    return (
        <div className='bg-[#202430]'>
            <div className='lg:max-w-360 lg:mx-auto lg:px-31 px-4 pt-16 flex flex-col'>

                <div className='flex flex-col gap-10 lg:flex-row lg:gap-0'>

                    <div>
                        <Image src={'/assets/Logo 2.png'} alt='logo' width={152} height={36} />
                        <p className='font-epilogue font-normal text-[16px] leading-[160%] w-94 text-[#D6DDEB] mt-8'>Great platform for the job seeker that passionate about startups. Find your dream job easier.</p>
                    </div>

                    <div className='lg:ml-22.25 flex gap-23.25'>

                        <div>
                            <h1 className='font-epilogue text-white text-[18px] font-bold'>About</h1>

                            <div className='flex flex-col gap-4 mt-4.5'>
                                <Link href={''} className='text-[#D6DDEB] capitalize'>Companies</Link>
                                <Link href={''} className='text-[#D6DDEB] capitalize'>Pricing</Link>
                                <Link href={''} className='text-[#D6DDEB] capitalize'>Terms</Link>
                                <Link href={''} className='text-[#D6DDEB] capitalize'>Advice</Link>
                                <Link href={''} className='text-[#D6DDEB] capitalize'>Privacy Policy</Link>
                            </div>

                        </div>


                        <div>
                            <h1 className='font-epilogue text-white text-[18px] font-bold'>Resources</h1>

                            <div className='flex flex-col gap-4 mt-4.5'>
                                <Link href={''} className='text-[#D6DDEB] capitalize'>Help Docs</Link>
                                <Link href={''} className='text-[#D6DDEB] capitalize'>Guide</Link>
                                <Link href={''} className='text-[#D6DDEB] capitalize'>Updates</Link>
                                <Link href={''} className='text-[#D6DDEB] capitalize'>Contact Us</Link>

                            </div>

                        </div>

                    </div>


                    <div className='lg:ml-17.75'>
                        <h1 className='font-epilogue text-white text-[18px] font-bold'>Get job notifications</h1>
                        <p className='font-epilogue font-normal text-[16px] leading-[160%] w-76.5 text-[#D6DDEB] mt-8'>The latest job news, articles, sent to your inbox weekly.</p>

                        <div className="flex flex-col lg:flex-row gap-4 lg:gap-2 items-start mt-10">

                            {/* Email Input */}
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="pt-3 pb-3 pr-4 pl-4 text-[#A8ADB7] font-epilogue font-normal 12px 16px padding border border-none bg-white outline-none w-full"
                            />

                            {/* Subscribe Button */}
                            <button
                                className="pt-3 pb-3 pr-6 pl-6 12px 24px padding bg-blue-600 text-white font-semibold"
                            >
                                Subscribe
                            </button>

                        </div>



                    </div>

                </div>

                <div className='border border-white mt-20 opacity-10' />


                <div className='flex flex-col lg:flex-row items-center lg:justify-between mt-10.5 mb-10.5 gap-6 lg:gap-0'>
                    <p className='font-epilogue font-semibold text-[16px] text-white opacity-50'>
                        2021 @ JobHuntly. All rights reserved.
                    </p>
                    <div className='flex gap-6'>
                        <Link href={''} className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                            <Image src="/assets/Facebook.png" alt="facebook" width={100} height={100} className="w-4 h-4 object-contain" />
                        </Link>
                        <Link href={''} className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                            <Image src="/assets/Instagram.png" alt="instagram" width={100} height={100} className="w-4 h-4 object-contain" />
                        </Link>
                        <Link href={''} className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                            <Image src="/assets/Dribbble.png" alt="dribbble" width={100} height={100} className="w-4 h-4 object-contain" />
                        </Link>
                        <Link href={''} className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                            <Image src="/assets/LinkedIn.png" alt="linkedin" width={100} height={100} className="w-4 h-4 object-contain" />
                        </Link>
                        <Link href={''} className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                            <Image src="/assets/Twitter.png" alt="twitter" width={100} height={100} className="w-4 h-4 object-contain" />
                        </Link>
                    </div>
                </div>


            </div>



        </div>
    )
}

export default Footer