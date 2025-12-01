import React from 'react'
import assets from '../assets/assets'

const Footer = ({theme}) => {
  return (
    <div className='bg-slate-50 dark:bg-gray-900 pt-10 sm:pt-10 mt-20 sm:mt-40 px-4 sm:px-10 lg:px-24 xl:px-40'>
      {/* Footer Top */}
      <div className='flex justify-between lg:items-center max-lg:flex-col gap-10'>
        <div className='space-y-5 text-sm text-gray-700 dark:text-gray-400'>
            <img src={theme === 'dark' ? assets.logo_dark : assets.logo} alt='Fiboniq Technologies' className='w-32 sm:w-44' />
            <p className='max-w-md'>Fiboniq Technologies delivers an all-in-one CRM platform built specifically for forex brokers.</p>

        </div>
        <div className='text-gray-600 dark:text-gray-400'>
            <h3 className='font-semibold'>Subscribe to our newsletter</h3>
            <p className='text-sm  mt-2 mb-6'>The latest news, articles, and resources, sent to your inbox weekly.</p>
            <div className='flex gap-2 text-sm'>
                <input type="email" placeholder='Enter your email' className='w-full p-3 text-sm outline-none rounded dark:text-gray-200 bg-transparent border border-gray-300 dark:border-gray-500' />
                <button className='bg-primary text-white rounded px-6'>Subscribe</button>
            </div>
            <ul className='flex flex-wrap md:flex-nowrap gap-4 sm:gap-8 text-sm text-gray-700 dark:text-gray-400 mt-4'>
                <li>
                    <a href="https://fiboniqtech.com/privacy-policy" target='_blank' className='hover:text-primary'>Privacy Policy</a>
                </li>
                <li>
                    <a href='https://fiboniqtech.com/risk-disclosure' target='_blank' className='hover:text-primary'>Risk Disclosure</a>
                </li>
                <li>
                    <a href='https://fiboniqtech.com/terms-conditions' target='_blank' className='hover:text-primary'>Terms & Conditions</a>
                </li>
            </ul>
        </div>
      </div>
      <hr className='border-gray-300 dark:border-gray-600  my-6'/>

      {/* Footer Bottom */}
      <div className='pb-6 text-sm text-gray-500 flex justify-center sm:justify-between gap-4 flex-wrap'>
        <p>Copyright 2025 © Fiboniq Technologies - All Right Reserved.</p>
        <div className='flex items-center justify-between gap-4'>
            <a href="https://www.facebook.com/fiboniq/" target='_blank'>
              <img src={assets.facebook_icon} alt="" />
            </a>
            <a href="https://www.instagram.com/fiboniq/" target='_blank'>
              <img src={assets.instagram_icon} alt="" />
            </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
