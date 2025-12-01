import React from 'react'
import Title from './Title'
import assets from '../assets/assets'

const UspBoxes = () => {

  const StepsData = [
    {
        title: 'Broker Onboarding',
        description: 'Fiboniq Technologies streamlines your onboarding with ready integrations and a dedicated launch team.',
        icon: assets.check_icon
    },
    {
        title: 'Dedicated Support',
        description: 'Our expert support team is available 24/5 to assist you with configuration, training, and operations.',
        icon: assets.check_icon
    },
    {
        title: 'Modular Configuration',
        description: 'Easily customize your CRM with PAMM, IB structures, lead tools, and more based on your business model.',
        icon: assets.check_icon
    },
    {
        title: 'Launch in Days',
        description: 'With ready-to-deploy components, you can go live with Fiboniq Technologies in as little as 72 hours.',
        icon: assets.check_icon
    }
  ]

  return (
    <div className='xl:w-7xl mx-auto flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 pb-30 text-gray-800 dark:text-white'>
      <Title title="The hassle-free setup process" desc="A passionate team of digital experts dedicated to your brands success." />

      <div className='grid md:grid-cols-2 gap-4 w-full'>
        <div className='grid grid-cols-1 gap-4'>
          {
              StepsData.map((step, index) => (
                  <div key={index} className='flex max-sm:flex-col items-center gap-5 p-4 text-dark rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-black/25 shadow-xl shadow-gray-100 dark:shadow-white/5 hover:scale-105 transition-all duration-400'>
                      <img src={step.icon} alt="" className='w-5 h-5 rounded-full' />
                      <div className="flex-1">
                          <h3 className='font-semibold text-lg uppercase'>{step.title}</h3>
                      </div>
                  </div>
              ))
          }
        </div>

        <div>
          <img src={assets.iphone_mockup} alt="" className='max-h-[400px] mx-auto'/>
        </div>
      </div>

    </div>
  )
}

export default UspBoxes
