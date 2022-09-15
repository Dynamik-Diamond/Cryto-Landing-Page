import React from 'react';
import Hero from '../components/Hero';
import About from '../components/subComponents/About';
import Stats from '../components/subComponents/Stats';
import Earn from '../components/subComponents/Earn';
import Trade from '../components/Trade';
import Market from '../components/market';

const Home = () => (
  <div>
    <div className="bg-Background ">
      <Hero />
      <Stats />
      <About />
      <Earn />
    </div>
    <div className="bg-white ">
      <Trade />
    </div>
    <div className="bg-SecondaryBlue ">
      <Market />
    </div>
  </div>
);

export default Home;
