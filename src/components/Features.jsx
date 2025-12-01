import React from 'react'
import Title from './Title'
import {
  PresentationChartLineIcon,
  BriefcaseIcon,
  ClockIcon,
  Cog6ToothIcon,
  PhoneArrowDownLeftIcon,
  LightBulbIcon
} from "@heroicons/react/24/outline";

const Features = () => {

  const StepsData = [
    {
        title: 'Broker Onboarding',
        description: 'Streamline your brokerage launch with ready integrations and a guided setup process from our expert team.',
        icon: (<BriefcaseIcon className='w-12 opacity-75 my-3' />)
    },
    {
        title: 'Launch in Days',
        description: 'Go live in as little as 3 days with pre-built modules and fast deployment options.',
        icon: (<ClockIcon className='w-12 opacity-75 my-3' />)
    },
    {
        title: 'Modular Configuration',
        description: 'Easily tailor your CRM with flexible modules like IB structures, lead management, and client tools that fit your business model.',
        icon: (<Cog6ToothIcon className='w-12 opacity-75 my-3' />)
    },
    {
        title: 'Expert Assistance',
        description: 'Our specialists provide step-by-step guidance for configuration, training, and smooth daily operations.',
        icon: (<PhoneArrowDownLeftIcon className='w-12 opacity-75 my-3' />)
    },
    {
        title: 'Continuous Innovation',
        description: 'Benefit from ongoing updates, new features, and evolving integrations that keep your brokerage competitive.',
        icon: (<LightBulbIcon className='w-12 opacity-75 my-3' />)
    },
    {
        title: 'Scalable Growth',
        description: 'Expand without limits — our CRM supports brokers of all sizes, from startups to global firms.',
        icon: (<PresentationChartLineIcon className='w-12 opacity-75 my-3' />)
    },
  ]

  return (
    <div className=''>
        <div className='xl:w-7xl mx-auto flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-800 dark:text-white '>
        <Title title="The hassle-free setup process" desc="A passionate team of digital experts dedicated to your brands success." />

        <div className='grid md:grid-cols-3 gap-4'>
            {
                StepsData.map((step, index) => (
                    <div key={index} className='flex flex-col items-center gap-5 p-4 text-dark hover:text-white rounded-xl border border-gray-300 dark:border-gray-700 bg-white hover:bg-gradient-to-tr from-[#f16c22] to-[#f16c22] dark:bg-black/25 shadow-xl shadow-gray-100 dark:shadow-white/5 hover:scale-105 transition-all duration-100'>
                        {/* <img src={step.icon} alt="" className='size-24 mb-2' /> */}
                        {step.icon}
                        <div className="flex-1 text-center">
                            <h3 className='font-semibold text-lg uppercase mb-2'>{step.title}</h3>
                            <p className='text-xs opacity-60'>{step.description}</p>
                        </div>
                    </div>
                ))
            }
            </div>

        </div>
    </div>
  )
}

export default Features