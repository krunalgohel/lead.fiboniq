import React from 'react'
import Title from './Title'
import assets from '../assets/assets'
import { div } from 'framer-motion/client'
import { motion } from "motion/react"

const OurWork = () => {

  const WorkData = [
    {
        title: '50+ Language Support',
        description: 'Build, manage, and track affiliate networks with tiered commission models.',
        image: assets.lang_crm
    },
    {
        title: 'Role Management',
        description: 'Build, manage, and track affiliate networks with tiered commission models.',
        image: assets.role_mang_crm
    },
    {
        title: 'Ticket System',
        description: 'Build, manage, and track affiliate networks with tiered commission models.',
        image: assets.ticket_crm
    },
    {
        title: 'Two Factor Authentication',
        description: 'Build, manage, and track affiliate networks with tiered commission models.',
        image: assets.two_fac_crm
    },
    {
        title: 'IB Portal',
        description: 'Build, manage, and track affiliate networks with tiered commission models.',
        image: assets.ib_crm
    },
    {
        title: '100+ Trusted Broker',
        description: 'Build, manage, and track affiliate networks with tiered commission models.',
        image: assets.banner_crm
    },
  ]

  return (
    <div id='our-work' className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
      <Title title="Our latest work" desc="From strategy to execution, we craft digital solutions that move your business forward."/>

      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl'>
        {
            WorkData.map((work, index) => (
                <motion.div 
                  initial={{opacity: 0, y: 20 }}
                  whileInView={{opacity: 1, y: 0}}
                  transition={{duration: 0.2, delay: index * 0.2}}
                  viewport={{once: true}}
                 key={index} className='hover:scale-105 duration-500 transition-all cursor-pointer mb-9'>
                    <img src={work.image} alt="" className='w-full rounded-xl'/>
                    <h3 className='mt-3 mb-2 text-lg font-semibold'>{work.title}</h3>
                    <p className='text-sm opacity-60 w-5/6'>{work.description}</p>
                </motion.div>
            ))
        }
      </div>
    </div>
  )
}

export default OurWork
