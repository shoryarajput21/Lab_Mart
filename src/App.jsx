import React from 'react';
import './App.css';


import Navbar from './components/Navbar';

import Hero from './components/Hero';
import CompanyIntro from './components/CompanyIntro';
import ProductGrid from './components/ProductGrid';
import FumeHoodGrid from './components/FumeHoodGrid';
import UniqueCategoryGrid from './components/UniqueCategoryGrid';
import CustomFooter from './components/Footer/CustomFooter';




function App() {
  return (
    <div>
      
      <Navbar/>
      <Hero />
      <CompanyIntro />
      <ProductGrid />
      <FumeHoodGrid />
      <UniqueCategoryGrid/>
      <CustomFooter />
      

      
      
      <a href="https://wa.me/15794010534" className="quote-button" target="_blank" rel="noreferrer">
        Get Quote
      </a>
    </div>
  );
}


export default App;
