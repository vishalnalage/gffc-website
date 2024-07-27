import React from 'react';
import Navbar from './Navbar';

const Page1 = () => (
  <div id="page1">
    <Navbar />
    <div id="center">
      <div id="left">
        <h3>Sundown is a multi-disciplinary studio focused on creating unique, end-to-end experiences and environments.</h3>
      </div>
      <div id="right">
        <h1>SPACES <br /> THAT <br /> INSPIRE</h1>
      </div>
    </div>
    <div id="hero-shape">
      <div id="hero-1"></div>
      <div id="hero-2"></div>
      <div id="hero-3"></div>
    </div>
    <video autoplay loop muted src="./video.mp4"></video>
  </div>
);

export default Page1;
