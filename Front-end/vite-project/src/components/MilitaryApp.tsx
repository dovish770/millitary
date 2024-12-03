import React, { useState } from 'react';
import Intro from './introComponent/Intro';
import NavBar from './navBar/NavBar';
import Form from './formComponenet/Form';
const MilitaryForm = () => {

  return (
    <div id="root">
      <div className="container">
        <NavBar />
        <Intro />
        <Form />
      </div>
    </div>
  );
};

export default MilitaryForm;
