import React from 'react'
import Title from './Title'
import assets from '../assets/assets';

const ThreeGrid = ({data}) => {

  let headingClass = 'text-white text-3xl sm:text-5xl font-medium text-center';
  let paragraphClass = 'max-w-lg text-center text-white/75 dark:text-white/75 mb-6';

  return (
    <div className="relative bg-gradient-to-t from-[#fb6900] to-[#f98939] overflow-clip">

        <img src={assets.favicon_icon} alt="" className='absolute invert-100 opacity-15 brightness-0 -bottom-14 -left-30 z-0'/>

        <img src={assets.favicon_icon} alt="" className='absolute w-2xs invert-100 opacity-15 brightness-0 -top-14 -right-14 z-0'/>

        <div className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-20 text-gray-700 dark:text-white text-dark py-20'>

            <Title title={data.title} desc={data.desc} h2Class={headingClass} pClass={paragraphClass}/>

            <div className='max-w-4xl mx-auto'>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4'>
                    {
                        data.beinits.map((point, idx) => (
                            <div className='bg-white hover:scale-105 hover:shadow-2xl ease-in-out transition-all border border-white rounded-2xl md:p-5 p-3 flex flex-col gap-1 shadow-lg h-56' key={idx}>
                                <div className='w-4 h-4 bg-primary shadow-3xl rounded-full mb-3'></div>
                                <h3 className='text-primary text-lg'>{point.title}</h3>
                                <p className='text-gray-500 text-sm'>{point.desc}</p>
                            </div>
                        ))
                    }
                    
                    {/* <div className='bg-white hover:scale-105 hover:shadow-2xl ease-in-out transition-all border border-white rounded-2xl md:p-5 p-3 flex flex-col gap-1 shadow-lg h-56'>
                        <div className='w-4 h-4 bg-primary shadow-3xl rounded-full mb-3'></div>
                        <h3 className='text-primary text-lg'>Nominee Shareholder Service</h3>
                        <p className='text-gray-500 text-sm'>Secure privacy with a nominee shareholder holding shares in trust.</p>
                    </div>
                    <div className='bg-white hover:scale-105 hover:shadow-2xl ease-in-out transition-all border border-white rounded-2xl md:p-5 p-3 flex flex-col gap-1 shadow-lg h-56'>
                        <div className='w-4 h-4 bg-primary shadow-3xl rounded-full mb-3'></div>
                        <h3 className='text-primary text-lg'>Notarized & Apostilled POA</h3>
                        <p className='text-gray-500 text-sm'>Official notarized and apostilled Power of Attorney issued under corporate resolution.</p>
                    </div>
                    <div className='bg-white hover:scale-105 hover:shadow-2xl ease-in-out transition-all border border-white rounded-2xl md:p-5 p-3 flex flex-col gap-1 shadow-lg h-56'>
                        <div className='w-4 h-4 bg-primary shadow-3xl inset-2 rounded-full mb-3'></div>
                        <h3 className='text-primary text-lg'>Nominee Director Service</h3>
                        <p className='text-gray-500 text-sm'>Confidential appointment of nominee director for privacy and asset protection.</p>
                    </div>
                    <div className='bg-white hover:scale-105 hover:shadow-2xl ease-in-out transition-all border border-white rounded-2xl md:p-5 p-3 flex flex-col gap-1 shadow-lg h-56'>
                        <div className='w-4 h-4 bg-primary shadow-3xl rounded-full mb-3'></div>
                        <h3 className='text-primary text-lg'>Nominee Shareholder Service</h3>
                        <p className='text-gray-500 text-sm'>Secure privacy with a nominee shareholder holding shares in trust.</p>
                    </div>
                    <div className='bg-white hover:scale-105 hover:shadow-2xl ease-in-out transition-all border border-white rounded-2xl md:p-5 p-3 flex flex-col gap-1 shadow-lg h-56'>
                        <div className='w-4 h-4 bg-primary shadow-3xl rounded-full mb-3'></div>
                        <h3 className='text-primary text-lg'>Notarized & Apostilled POA</h3>
                        <p className='text-gray-500 text-sm'>Official notarized and apostilled Power of Attorney issued under corporate resolution.</p>
                    </div> */}
                </div>
            </div>
            
            
        </div>

    </div>
  )
}

export default ThreeGrid