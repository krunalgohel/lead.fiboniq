// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css'
import 'leaflet/dist/leaflet.css'
import Home from './pages/Home.jsx'
import ThankYou from './pages/ThankYou.jsx';

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <HelmetProvider>
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/thank-you' element={<ThankYou />} />
      </Routes>
    </Router>
  </HelmetProvider>
  // </StrictMode>,
)
