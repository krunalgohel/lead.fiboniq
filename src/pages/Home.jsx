import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero';
import TrustedBy from '../components/TrustedBy';
import Services from '../components/Services';
import OurWork from '../components/OurWork';
import UspBoxes from '../components/UspBoxes';
import ContactUs from '../components/ContactUs';
import {Toaster} from 'react-hot-toast';
import Footer from '../components/Footer';
import Features from '../components/Features';
import Stats from '../components/Stats';
import { Helmet } from "react-helmet-async";
import {useLocation} from "react-router-dom";
import AppIntegration from '../components/AppIntegration';

const Home = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'dark');

  const { pathname } = useLocation();
  const baseUrl = "https://fiboniqtech.com"; // put your prod domain
  const url = `${baseUrl}${pathname}`;

  const title = `Fiboniq Technologies`;
  const desc = "FiboniqTech offers cutting-edge website design, mobile app development, UI/UX design, and digital transformation services. Empower your business with scalable, secure, and user-centric digital products. Best Forex CRM Provider. All in one Forex CRM.";

  return (
    <>
      <Helmet>
        <title>{title}</title>

        <meta name="description" content={desc} />
        <meta name="robots" content="index, follow" />

        {/* Canonical */}
        <link rel="canonical" href={url} />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={`${baseUrl}/assets/og-image.jpg`} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={desc} />
        <meta name="twitter:image" content={`${baseUrl}/assets/og-image.jpg`} />
      </Helmet>

      <div className='dark:bg-black relative'>
        < Toaster/>
        <Navbar theme={theme} setTheme={setTheme}/>
        <Hero theme={theme}/>
        <TrustedBy theme={theme}/>
        <Services />
        <UspBoxes />
        <AppIntegration />
        <ContactUs />
        <Footer theme={theme} />

      </div>
    </>
  )
}

export default Home
