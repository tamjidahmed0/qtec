import Image from 'next/image'
import vodafone from '@/public/assets/vodafone.png'
import intel from '@/public/assets/intel.png'
import tesla from '@/public/assets/tesla.png'
import amd from '@/public/assets/amd.png'
import talkit from '@/public/assets/talkit.png'

const Companies = () => {
    return (
        <div className='px-31 max-w-360 mx-auto'>
            <p className='font-epilogue text-[18px] font-light text-[#202430] opacity-50 mt-12'>Companies we helped grow</p>

            <div className='flex justify-between items-center mt-8'>
                <Image src={vodafone} alt='' />
                <Image src={intel} alt='' />
                <Image src={tesla} alt='' />
                <Image src={amd} alt='' />
                <Image src={talkit} alt='' />
            </div>
        </div>
    )
}

export default Companies