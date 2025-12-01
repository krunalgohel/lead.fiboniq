import React from 'react'
import assets from '../assets/assets'
import {icons} from '../assets/assets'
import Title from './Title'
import ServiceCard from './ServiceCard'

const Services = () => {
    const servicesData = [
        {
            title: "Multi-Level IB",
            description: "Build, manage, and track affiliate networks with tiered commission models.",
            icon: icons.multi_level_ib
        },
        {
            title: "Multi-Language",
            description: "Offer seamless user experience across global languages with RTL support.",
            icon: icons.multi_lang_icon
        },
        {
            title: "Unlimited Clients",
            description: "No caps. Manage thousands of traders across all your platforms.",
            icon: icons.unlimited_users_icon
        },
        {
            title: "Lead & Ticketing",
            description: "Integrated systems for lead management, client support, and sales tracking.",
            icon: icons.lead_icon
        },

    ];
    
  return (
    <div id='services' className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
      
      <img src={assets.bgImage2} alt="" className='absolute -top-110 -left-70 -z-1 dark:hidden'/>

      <Title title="CRM Built to Scale with Your Brokerage." desc="Manage unlimited clients, sub-admins, partners, and investors with full flexibility. Our CRM is designed for high-growth forex businesses."/>

      <div className='flex flex-wrap justify-center gap-2 overflow-hidden'>
        {servicesData.map((service, index)=>(
            <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>

    </div>
  )
}

export default Services
