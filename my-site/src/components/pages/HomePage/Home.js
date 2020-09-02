import React from 'react';
import HomeSection from '../../HomeSection';
import { homeBoxOne, homeBoxTwo } from './Data';


function Home() {
  return (
    <>
      <HomeSection {...homeBoxOne} />
      <HomeSection {...homeBoxTwo} />

    </>
  );
}

export default Home;