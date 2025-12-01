import React from 'react'
import assets from '../assets/assets'
import { motion } from "motion/react"
import BentoGrids from './BentoGrids'

const Hero = ({theme}) => {
  return (
    <div id='hero' className='flex flex-col items-center gap-6 py-20 px-4 sm:px-12 lg:px-24 xl:px-40 text-center w-full overflow-hidden text-gray-700 dark:text-white'>
      
      <motion.div 
        initial={{opacity: 0, y: 20 }}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.5, delay: 0.7}}
        viewport={{once: true}}
        className='inline-flex items-center gap-2 border border-gray-300 p-1.5 px-4 rounded-full'>
        {/* <img src={assets.group_profile} alt="" className='w-20'/> */}
        <p className='text-xs font-medium'>Designed for Growing Brokerages</p>
      </motion.div>

      <motion.h1 
        initial={{opacity: 0, y: 40 }}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.6, delay: 0.8}}
        viewport={{once: true}}
      className='text-xl sm:text-5xl md:text-6xl xl:text-[48px] font-medium xl:leading-[72px] max-w-5xl'>Power Your Brokerage with <span className='bg-gradient-to-b from-[#f16c22] to-[#f16c22] bg-clip-text text-transparent'>Fiboniq’s</span> All-in-one Forex CRM Suite.</motion.h1>

      <motion.p 
        initial={{opacity: 0, y: 30 }}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.5, delay: 1}}
        viewport={{once: true}}
      className='text-sm sm:text-lg font-medium text-gray-500 dark:text-white/75 max-w-4/5 sm:max-w-lg pb-3'>Fiboniq Technologies delivers to an all-in-one CRM platform built specifically for forex brokers.</motion.p>

       <motion.a
        initial={{opacity: 0, y: 30 }}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.5, delay: 1}}
        viewport={{once: true}}
      className='text-sm border border-primary text-primary hover:text-white hover:dark:text-primary dark:border-primary dark:text-primary px-6 py-2 rounded-full cursor-pointer hover:scale-105 hover:bg-primary hover:dark:bg-white transition-all text-center mx-auto' href='https://calendly.com/fiboniqtech-support' target='_blank'>Get Started</motion.a>

      <motion.div 
        initial={{opacity: 0, scale: 0.9 }}
        whileInView={{opacity: 1, scale: 1 }}
        transition={{duration: 0.6, delay: 2}}
        viewport={{once: true}}
      className='relative'>
        <img src={(theme === 'dark') ? assets.light_banner : assets.dark_banner}  alt="" className='w-full max-w-6xl'/>
        <img src={assets.bgImage2} alt="" className='absolute -top-20 -right-40 sm:-top-100 sm:-right-70 -z-1 dark:hidden'/>
      </motion.div>

    </div>
  )
}

export default Hero
