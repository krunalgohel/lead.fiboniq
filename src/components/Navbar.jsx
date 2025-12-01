import React, { useEffect, useRef, useState } from 'react'
import ThemeInit from './ThemeInit';
import assets from '../assets/assets'
import ThemeToggleButton from './ThemeToggleButton';
import { motion } from "motion/react";
import { Link } from 'react-router-dom';
import {
  ChevronDownIcon,
  CurrencyDollarIcon,
  ChartBarIcon,
  BriefcaseIcon,
  BuildingLibraryIcon,
  BuildingOffice2Icon,
  BuildingOfficeIcon,
  BuildingStorefrontIcon,
  CubeTransparentIcon,
  GlobeAltIcon,
  HomeModernIcon
} from "@heroicons/react/24/outline";

const Navbar = ({theme, setTheme}) => {

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownOpen2, setDropdownOpen2] = useState(false);

  return (
    <motion.div 
      initial={{opacity: 0, y: -50 }}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.6, ease: 'easeOut'}}
      className='flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20 backdrop-blur-xl font-medium bg-white/20 dark:bg-gray-700/10'>

      <Link to="/">
        <img src={theme === 'dark' ? assets.logo_dark : assets.logo} alt='Fiboniq Technologies' className='w-32 sm:w-40'/>
      </Link>

      <div className={`text-gray-700 dark:text-white sm:text-sm ${!sidebarOpen ? 'max-sm:w-0 overflow-hidden' : 'max-sm:w-60 max-sm:pl-7'} max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full max-sm:overflow-y-scroll max-sm:overflow-x-hidden max-sm:flex-col max-sm:bg-white dark:max-sm:bg-primary max-sm:shadow-2xl max-sm:text-gray-700 max-sm:pt-20 flex sm:items-center gap-5 transition-all`}>

        <svg fill='none' height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" alt="Close Navbar Button" className='w-5 absolute right-4 top-4 sm:hidden fill-primary dark:fill-white' onClick={()=>setSidebarOpen(false)}>
          <path clipRule="evenodd" d="m5.29303 5.29301c.18753-.18748.44184-.29279.707-.29279s.51947.10531.707.29279l5.29297 5.29299 5.293-5.29299c.0923-.09552.2026-.1717.3246-.22411s.2533-.07999.386-.08115c.1328-.00115.2645.02415.3874.07443s.2345.12454.3284.21843.1682.20554.2185.32844c.0502.1229.0755.25458.0744.38736-.0012.13278-.0288.264-.0812.386s-.1286.23235-.2241.32459l-5.293 5.293 5.293 5.293c.1822.1886.283.4412.2807.7034s-.1074.513-.2929.6984c-.1854.1854-.4362.2906-.6984.2929s-.5148-.0985-.7034-.2807l-5.293-5.293-5.29297 5.293c-.1886.1822-.4412.283-.7034.2807s-.51301-.1075-.69842-.2929-.29058-.4362-.29285-.6984c-.00228-.2622.09851-.5148.28067-.7034l5.29297-5.293-5.29297-5.293c-.18747-.18752-.29279-.44183-.29279-.707 0-.26516.10532-.51947.29279-.70699z" fill="" fillRule="evenodd"></path>
        </svg>

        <a href="#contact-us" className='text-sm sm:hidden bg-primary text-white dark:bg-white dark:text-primary px-6 py-2 rounded-full cursor-pointer hover:scale-105 transition-all text-center min-w-9/12 me-auto'>
            Connect
        </a>

      </div>

      <div className='flex items-center gap-2 sm:gap-4'>

        <ThemeToggleButton theme={theme} setTheme={setTheme}/>

        <img src={theme === 'dark' ? assets.menu_icon_dark : assets.menu_icon} alt="" className='w-8 sm:hidden' onClick={() => setSidebarOpen(true)}/>

        <a href="#contact-us" className='text-sm hidden md:flex items-center gap-2 bg-gradient-to-tr from-[#f16c22] to-[#f16c22] text-white px-6 py-2 rounded-full cursor-pointer hover:scale-105 transition-all '>
            Connect <img src={assets.arrow_icon} width={14} alt="Connect for Forex CRM Button" />
        </a>
      </div>

      <ThemeInit />

    </motion.div>
  )
}

export default Navbar
