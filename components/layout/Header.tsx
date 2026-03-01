import Link from 'next/link'
import Image from 'next/image'
import logo from '@/public/assets/Logo.png'


const Header = () => {
    return (
        <div className='bg-light-gray'>
        <div className='h-19.5 max-w-360 mx-auto px-31 flex items-center justify-between'>

            <div className='flex items-center gap-12'>

                <Image src={logo} alt='logo' className='w-38 h-9' />

                <div className={`capitalize flex items-center gap-4  text-natural font-epilogue font-medium text-[16px]`}>
                    <Link href={'/'}>Find jobs</Link>
                    <Link href={'/'}>browse companies</Link>
                </div>
            </div>

            <div className='flex gap-4 items-center'>
                <button className='px-6 py-3 rounded-sm text-[16px] text-brand capitalize font-epilogue font-bold cursor-pointer'>Login</button>

                <div className='w-12 h-0 border border-[#D6DDEB] rotate-90'/>


                <button className='px-6 py-3 text-[16px] text-white bg-brand capitalize font-epilogue font-bold cursor-pointer'>sign up</button>
            </div>


        </div>
        </div>

    )
}

export default Header