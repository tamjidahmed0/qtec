import Image from 'next/image'
import vodafone from '@/public/assets/vodafone.png'
import intel from '@/public/assets/intel.png'
import tesla from '@/public/assets/tesla.png'
import amd from '@/public/assets/amd.png'
import talkit from '@/public/assets/talkit.png'

const Companies = () => {
    return (
        <div className='px-4 sm:px-10 lg:px-31 max-w-360 mx-auto overflow-hidden'>
            
            <p className='
                font-epilogue 
                text-[16px] sm:text-[18px] 
                font-light 
                text-[#202430] 
                opacity-50 
                mt-10 lg:mt-12
            '>
                Companies we helped grow
            </p>

            <div className='
                grid 
                grid-cols-2 
                md:grid-cols-3 
                lg:grid-cols-5
                gap-y-8 
                gap-x-6
                
                mt-8
            '>
                <Image src={vodafone} alt='vodafone' className='' />
                <Image src={intel} alt='intel' className='' />
                <Image src={tesla} alt='tesla' className='' />
                <Image src={amd} alt='amd' className='' />
                <Image src={talkit} alt='talkit' className='' />
            </div>

        </div>
    )
}

export default Companies