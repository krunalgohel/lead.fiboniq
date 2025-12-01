import React from 'react'
import assets from '../assets/assets'

const BenifitsPart = ({data}) => {
  return (
    <div className='relative flex max-sm:flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white dark:bg-black text-dark py-20'>

        <div className='flex-2'>
            <p className='bg-gradient-to-b from-[#f16c22] to-[#f16c22] bg-clip-text text-transparent uppercase mb-3 font-semibold'>Company Incorporation</p>
            <h2 className='text-3xl font-semibold mb-2'>{data.title}</h2>
            <ul className='mt-5'>
                {
                    data.beinits.map((point, idx) => (
                        <li className='mb-4' key={idx}>
                            <div className='flex items-center gap-2'>
                                <div className='bg-primary/10 rounded-full p-3 w-12 h-12 flex items-center justify-center hover:shadow-2xl'>
                                    {point.icon}
                                </div>
                                <h4 className='font-normal text-gray-500'>{point.title}</h4>
                            </div>
                        </li>
                    ))
                }
                {/* <li className='mb-4'>
                    <div className='flex items-center gap-2'>
                        <div className='bg-primary/10 rounded-full p-3 w-12 h-12 flex items-center justify-center hover:shadow-2xl'>
                            <CalendarDaysIcon className="h-8 w-8 text-primary"/>
                        </div>
                        <h4 className='font-semibold text-gray-500'>10-15 Days Setup</h4>
                    </div>
                </li>
                <li className='mb-4'>
                    <div className='flex items-center gap-2'>
                        <div className='bg-primary/10 rounded-full p-3 w-12 h-12 flex items-center justify-center hover:shadow-2xl'>
                            <UserCircleIcon className="h-8 w-8 text-primary"/>
                        </div>
                        <h4 className='font-semibold text-gray-500'>100% Foreign Ownership</h4>
                    </div>
                </li>
                <li className='mb-4'>
                    <div className='flex items-center gap-2'>
                        <div className='bg-primary/10 rounded-full p-3 w-12 h-12 flex items-center justify-center hover:shadow-2xl'>
                            <ShieldCheckIcon className="h-8 w-8 text-primary"/>
                        </div>
                        <h4 className='font-semibold text-gray-500'>Full Privacy Protection</h4>
                    </div>
                </li> */}
            </ul>
        </div>
        <div className='flex-3'>
            <img src={assets.legal_section_img} alt="" className='w-full' />
        </div>
    </div>
  )
}

export default BenifitsPart