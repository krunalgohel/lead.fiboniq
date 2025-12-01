import React from 'react'
import MarqueeLines from './MarqueeLines'
import {
  CheckBadgeIcon
} from "@heroicons/react/24/outline";
import assets from '../assets/assets';

const CompanyTicker = () => {

    // const logos = [
    //     {
    //         item: <div className='flex items-center text-white gap-1 font-semibold'><img src={assets.saint_lucia_img} className='w-32' /></div>,
    //         classList: ''
    //     },
    //     {
    //         item: <div className='flex items-center text-white gap-1 font-semibold'><img src={assets.uae_flag_img} className='w-32' /></div>,
    //         classList: ''
    //     },
    //     {
    //         item: <div className='flex items-center text-white gap-1 font-semibold'><img src={assets.mauratius_img} className='w-32' /></div>,
    //         classList: ''
    //     },
    //     {
    //         item: <div className='flex items-center text-white gap-1 font-semibold'><img src={assets.marshall_island_img} className='w-32' /></div>,
    //         classList: ''
    //     },
    //     {
    //         item: <div className='flex items-center text-white gap-1 font-semibold'><img src={assets.comros_img} className='w-32' /></div>,
    //         classList: ''
    //     },
    //     {
    //         item: <div className='flex items-center text-white gap-1 font-semibold'><img src={assets.malaysia_img} className='w-32' /></div>,
    //         classList: ''
    //     },
    //     {
    //         item: <div className='flex items-center text-white gap-1 font-semibold'><img src={assets.saint_lucia_img} className='w-32' /></div>,
    //         classList: ''
    //     },
    //     {
    //         item: <div className='flex items-center text-white gap-1 font-semibold'><img src={assets.uae_flag_img} className='w-32' /></div>,
    //         classList: ''
    //     },
    //     {
    //         item: <div className='flex items-center text-white gap-1 font-semibold'><img src={assets.mauratius_img} className='w-32' /></div>,
    //         classList: ''
    //     },
    //     {
    //         item: <div className='flex items-center text-white gap-1 font-semibold'><img src={assets.marshall_island_img} className='w-32' /></div>,
    //         classList: ''
    //     },
    //     {
    //         item: <div className='flex items-center text-white gap-1 font-semibold'><img src={assets.comros_img} className='w-32' /></div>,
    //         classList: ''
    //     },
    //     {
    //         item: <div className='flex items-center text-white gap-1 font-semibold'><img src={assets.malaysia_img} className='w-32' /></div>,
    //         classList: ''
    //     },
    // ];

  const benifits = [
    {
        item: <div className='flex items-center text-white opacity-75 hover:opacity-100 gap-1 font-semibold'><CheckBadgeIcon className='w-7 h-7' /><h3 className='text-xl md:text-3xl'>Zero Corporate Tax</h3></div>,
        classList: 'mx-4'
    },
    {
        item: <div className='flex items-center text-white opacity-75 hover:opacity-100 gap-1 font-semibold'><CheckBadgeIcon className='w-7 h-7' /><h3 className='text-xl md:text-3xl'>Fast Setup</h3></div>,
        classList: 'mx-4'
    },
    {
        item: <div className='flex items-center text-white opacity-75 hover:opacity-100 gap-1 font-semibold'><CheckBadgeIcon className='w-7 h-7' /><h3 className='text-xl md:text-3xl'>Full Compliance</h3></div>,
        classList: 'mx-4'
    },
    {
        item: <div className='flex items-center text-white opacity-75 hover:opacity-100 gap-1 font-semibold'><CheckBadgeIcon className='w-7 h-7' /><h3 className='text-xl md:text-3xl'>Transparent Pricing</h3></div>,
        classList: 'mx-4'
    },
    {
        item: <div className='flex items-center text-white opacity-75 hover:opacity-100 gap-1 font-semibold'><CheckBadgeIcon className='w-7 h-7' /><h3 className='text-xl md:text-3xl'>50+ Clients Served</h3></div>,
        classList: 'mx-4'
    },
  ];

  return (
    <div>
        <MarqueeLines slides={benifits} />
    </div>
  )
}

export default CompanyTicker