import React from 'react';
import HomeSection from '../../HomeSection';
import { homeObjOne,  homeObjTwo } from './Data';


function SignUp() {
  return (
    <>
      <HomeSection {...homeObjOne} />
      <HomeSection {...homeObjTwo} />
    </>
  );
}

export default SignUp;