import React from 'react'
import {
  MapPinIcon
} from "@heroicons/react/24/outline";

const CompanyDetails = () => {
  return (
    <div className="max-w-6xl mx-auto px-6">
        <div className='mt-12 grid sm:grid-cols-2 overflow-hidden rounded-2xl border border-gray/10 bg-gradient-to-tr from-[#f16c22] to-[#f16c22]  dark:bg-black dark:text-dark text-white'>
            <div className='flex flex-col items-center justify-center px-6 py-8 text-center border-b border-gray/10 md:border-b-0 md:border-r last:border-none'>
                <div>
                    <MapPinIcon className="md:h-10 md:w-10 h-8 w-8 mb-4"/>
                </div>
                <div>
                    <p>306 Victoria House, Victoria, Mahe, Seychelles</p>
                </div>
            </div>
            <div className='flex flex-col items-center justify-center px-6 py-8 text-center border-b border-gray/10 md:border-b-0 md:border-r last:border-none'>
                <div>
                    <MapPinIcon className="md:h-10 md:w-10 h-8 w-8 mb-4"/>
                </div>
                <div>
                    <p>Omonoias Avenue 13, Limassol 3052, Cyprus, CY</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CompanyDetails