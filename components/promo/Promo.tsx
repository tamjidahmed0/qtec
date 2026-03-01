import Image from 'next/image'


const Promo = () => {
    return (
        <div className='max-w-360 mx-auto px-31 mt-18  relative'>


            <div className='bg-brand  px-17.5 pt-22.75 pb-22.75 flex relative'
                style={{
                    clipPath: "polygon(10% 0, 100% 0, 100% 80%, 80% 100%, 0 100%, 0 20%)"
                }}
            >

                <div>
                    <h1 className='font-clash-display font-bold text-[48px] leading-[110%] w-91 text-white'>Start posting jobs today</h1>
                    <p className='font-epilogue font-medium text-[16px] text-white mt-6'>Start posting jobs for only $10.</p>

                    <button className='px-6 py-3 bg-white text-brand font-epilogue font-bold text-[16px] mt-6 cursor-pointer'>Sign Up For Free</button>
                </div>



                <div className=' absolute bottom-0 right-17.5'>
                    <Image src={'/assets/dashboard.png'} alt='dashboard' width={564} height={346} />
                </div>







            </div>








        </div>
    )
}

export default Promo