import React from 'react'
import Title from './Title';
import {
  ArrowLongRightIcon
} from "@heroicons/react/24/outline";

const PolicyContent = (policyDetails) => {

  return (
    <>
        <div className='py-12 bg-primary/5 dark:bg-primary/10 text-gray-800 dark:text-white'>
            <Title title={policyDetails.data.title} desc={policyDetails.data.desc}/>
        </div>

        <div className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 py-10 text-gray-700 dark:text-white max-w-6xl mx-auto'>
       
      <ul>
        {
            policyDetails.data.content.map((item, idx) => (
                <li key={idx} className='mb-3 flex items-start text-sm'>
                    <p className='font-normal text-gray-500 text-justify'><b className='text-dark dark:text-white'>{item.heading}  </b>&nbsp;{item.para}</p>
                </li>
            ))
        }
      </ul>
      
      </div>
    </>
  )
}

export default PolicyContent