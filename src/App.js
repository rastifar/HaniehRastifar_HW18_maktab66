import React, { useState } from 'react';
import Login from './components/Login';
import LoginSignup from './components/LoginSignup';

import styles from './App.module.css'

import Signup from './components/Signup';
import Home from './components/Home';
import AuthContextProvider from './components/AuthContextProvider';


const App = () => {
  const[isSignedUp,setIsSignedUp] = useState(false)
  return (
    <>
      <div className={styles.container}>
       <AuthContextProvider>
       <LoginSignup login={() => setIsSignedUp(true)} signup={() => setIsSignedUp(false)}/>
          {isSignedUp ?  <Login /> : <Signup />} 
          </AuthContextProvider>
     
      </div>
      {/* <Home/> */}
      </>
  );
};

export default App;