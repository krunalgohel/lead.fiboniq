import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../components/Navbar'
import {Toaster} from 'react-hot-toast';
import Footer from '../components/Footer';
import ThankYouSection from '../components/ThankYouSection';
import { Helmet } from "react-helmet-async";
import {useLocation} from "react-router-dom";

const ThankYou = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'dark');


  const title = `Thank you`;
  const desc = "FiboniqTech offers cutting-edge website design, mobile app development, UI/UX design, and digital transformation services. Empower your business with scalable, secure, and user-centric digital products. Best Forex CRM Provider. All in one Forex CRM.";

  return (
    <>
      <Helmet>
        <title>{title}</title>

        <meta name="description" content={desc} />
        <meta name="robots" content="index, follow" />

      </Helmet>

      <div className='dark:bg-black relative'>
        < Toaster/>
        <Navbar theme={theme} setTheme={setTheme}/>
        <ThankYouSection />
        <Footer theme={theme} />

      </div>
    </>
  )
}

export default ThankYou
