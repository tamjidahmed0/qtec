import Image from 'next/image'


const Category = () => {


    const categories = [
        { icon: '/assets/icon/design.png', label: 'design', des: '235 jobs available' },
        { icon: '/assets/icon/sales.png', label: 'sales', des: '235 jobs available' },
        { icon: '/assets/icon/design.png', label: 'marketing', des: '235 jobs available' },
        { icon: '/assets/icon/finance.png', label: 'finance', des: '235 jobs available' },
        { icon: '/assets/icon/tech.png', label: 'Technology', des: '235 jobs available' },
        { icon: '/assets/icon/engi.png', label: 'Engineering', des: '235 jobs available' },
        { icon: '/assets/icon/business.png', label: 'Business', des: '235 jobs available' },
        { icon: '/assets/icon/humanre.png', label: 'Human Resource', des: '235 jobs available' },
    ]






    return (
        <div className='lg:px-31 px-4 lg:max-w-360 mx-auto mt-18'>

            <div className='flex justify-between items-center'>
                <p className='font-clash-display font-bold text-[32px] lg:text-[48px]'>Explore by <span className='text-accents-blue'>category</span></p>
                <button className='hidden  cursor-pointer text-[#4640DE] font-epilogue text-[16px] font-bold lg:flex items-center gap-2'>
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

            {/* grid */}

            <div className='grid lg:grid-cols-4 lg:mt-12 mt-6 lg:gap-8 gap-4'>

                {categories.map((item, index) => (
                    <div key={index} className='flex lg:flex-col items-start gap-8 lg:gap-0 lg:items-start p-4 lg:p-8 border border-[#D6DDEB] cursor-pointer group'>


                        <Image src={item.icon} alt={item.label} width={48} height={48} />


                        <div>
                            <h1 className='capitalize font-clash-display font-bold text-[20px] lg:text-[24px] lg:mt-8 text-natural100'>
                                {item.label}
                            </h1>

                            <p className='font-epilogue font-normal lg:mt-3 text-[16px] lg:text-[18px] text-[#7C8493] flex items-center gap-2'>
                                {item.des}

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </p>


                        </div>


                    </div>
                ))}


                <button className='lg:hidden cursor-pointer text-[#4640DE] mt-6 font-epilogue text-[16px] font-bold flex items-center gap-2'>
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

        </div>
    )
}

export default Category