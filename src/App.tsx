import React from 'react';
import { BrowserRouter } from "react-router-dom";
import MainLoginComponent from './Auth/components/LoginOrSignUpComponent';

import './App.css'
import Loader from './Common/components/Loader/Loader';

function App() {

  return (
    <BrowserRouter>
      <MainLoginComponent />
    </BrowserRouter>
  );
}

export default App;
