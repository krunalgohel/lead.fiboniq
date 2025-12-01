import React from 'react'
import { motion } from "motion/react"
import SimpleSwiper from "./LogoCarousel"
import {company_logos} from '../assets/assets'

const TrustedBy = ({theme}) => {

  const logos = (theme == "dark") ? company_logos.dark : company_logos.light;

  // console.log(logos);
    
  return (
    <div className=''>
      <motion.div 
          initial={{opacity: 0, y: 30 }}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.6}}
          viewport={{once: true}}
      className='flex flex-col items-center px-4 py-12 sm:px-12 lg:px-10 xl:px-30 text-gray-700 dark:text-white/80 bg-white dark:bg-gray-900 backdrop-blur-lg max-w-80 sm:max-w-8/12 border border-gray-100 shadow-2xl rounded-2xl mx-auto'>

        <motion.h3 
          initial={{opacity: 0, y: 20 }}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.5}}
          viewport={{once: true}}
        className='text-xl sm:text-3xl text-center font-medium mb-3 sm:mb-5'>Seamlessly Integrated</motion.h3>

        <motion.p 
          initial={{opacity: 0, y: 20 }}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.5}}
          viewport={{once: true}}
        className='text-sm text-gray-600 text-center pb-5'>Connect leading third-party tools directly into our CRM to streamline your workflows</motion.p>

        <div className='overflow-hidden w-full '>
            <SimpleSwiper slides={logos} />
        </div>

      </motion.div>
    </div>
  )
}

export default TrustedBy
