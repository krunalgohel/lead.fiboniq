import React, { useEffect, useRef, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import Services from './components/Services';
import OurWork from './components/OurWork';
import UspBoxes from './components/UspBoxes';
import ContactUs from './components/ContactUs';
import {Toaster} from 'react-hot-toast';
import Footer from './components/Footer';
import Features from './components/Features';
import Stats from './components/Stats';

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'dark');
  
  return (
    <div className='dark:bg-black relative'>
      < Toaster/>
      <Navbar theme={theme} setTheme={setTheme}/>
      <Hero theme={theme}/>
      <TrustedBy theme={theme}/>
      <Services />
      <OurWork />
      <UspBoxes />
      <Features />
      <Stats />
      <ContactUs />
      <Footer theme={theme} />

    </div>
  )
}

export default App
