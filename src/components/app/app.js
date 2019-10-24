import React, { Fragment } from 'react';

import './app.css';

import SignupForm from '../signup-from';
import Header from "../header";

const App = () => {
  return (
    <Fragment>
      <Header/>
      <div className="container">
        <SignupForm/>
      </div>
    </Fragment>
  );
};

export default App;