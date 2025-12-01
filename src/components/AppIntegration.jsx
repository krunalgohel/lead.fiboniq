import React from 'react'
import assets from '../assets/assets'
import Title from './Title'

const AppIntegration = ({theme}) => {
  let IntegrateImg = (theme == "dark") ? assets.all_app_intergration : assets.all_app_intergration_dark;
  let IntegrateMobileImg = (theme == "dark") ? assets.all_app_intergration_mobile : assets.all_app_intergration_dark_mobile;
  return (
    <div className='mx-auto flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 text-gray-800 dark:text-white'>
        <Title title={`Our Integration Ecosystem`} desc={`Explore a connected network of trading platforms, payment gateways, KYC tools, BI systems, and marketing solutions  all seamlessly integrated into Fiboniq CRM.`} />
        <img src={IntegrateImg} alt="" className='w-auto hidden sm:block' />
        <img src={IntegrateMobileImg} alt="" className='w-auto block sm:hidden' />
    </div>
  )
}

export default AppIntegration