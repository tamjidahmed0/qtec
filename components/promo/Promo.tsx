import Image from 'next/image'

const Promo = () => {
    return (
        <div className='lg:max-w-360 lg:mx-auto lg:px-31 mt-18 relative'>

            <div
                className='bg-brand lg:px-17.5 px-6 pt-22.75 pb-22.75 flex flex-col lg:flex-row relative overflow-hidden'
                style={{
                    clipPath: "polygon(10% 0, 100% 0, 100% 80%, 80% 100%, 0 100%, 0 20%)"
                }}
            >

                {/* Text Section */}
                <div className='z-10  text-center lg:text-left w-full'>
                    <h1 className='font-clash-display font-bold lg:text-[48px] text-[32px] leading-[110%] w-91 text-white'>
                        Start posting jobs today
                    </h1>

                    <p className='font-epilogue font-medium text-[16px] text-white mt-6'>
                        Start posting jobs for only $10.
                    </p>

                    <button className='  w-full lg:w-auto px-6 py-3 bg-white text-brand font-epilogue font-bold text-[16px] mt-6 cursor-pointer'>
                        Sign Up For Free
                    </button>
                </div>

                {/* Image Section */}
                <div className='
                    mt-12
                    lg:mt-0
                    lg:absolute
                    lg:bottom-0
                    lg:right-17.5
                '>
                    <Image
                        src={'/assets/dashboard.png'}
                        alt='dashboard'
                        width={564}
                        height={346}
                        className='w-full max-w-141 h-auto'
                    />
                </div>

            </div>

        </div>
    )
}

export default Promo