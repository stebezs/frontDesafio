import React from 'react';
import HomeSection from '../../HomeSection';
import { homeBoxOne } from './Data';


function About() {
  return (
    <>
      <HomeSection {...homeBoxOne} />
    </>
  );
}

export default About;