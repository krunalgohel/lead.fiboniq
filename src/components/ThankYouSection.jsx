import React from 'react'
import Title from './Title'
import assets from '../assets/assets'

const ThankYouSection = () => {
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
      <Title title="Thank you for showing interest and submitting your inquiry" desc="We appreciate the opportunity to assist you." />

      <div className='grid gap-4 w-full'>
          <img src={assets.thank_you} alt="" className='max-h-[400px] mx-auto'/>
        <div className='text-center'>
          <a href="./" className='text-sm border border-primary text-primary hover:text-white hover:dark:text-primary dark:border-primary dark:text-primary px-6 py-2 mx-auto rounded-full cursor-pointer hover:scale-105 hover:bg-primary hover:dark:bg-white transition-all text-center mx-auto'>Go Back</a>
        </div>
      </div>

    </div>
  )
}

export default ThankYouSection