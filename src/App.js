import React, { useState } from "react";
//Hoc
import WithRendering from "./components/withRendering";
//context
import AuthContextProvider from "./components/AuthContextProvider";

const App = () => {
  return (
    <>
      <AuthContextProvider>
     
      </AuthContextProvider>
    </>
  );
};

export default WithRendering(App);
