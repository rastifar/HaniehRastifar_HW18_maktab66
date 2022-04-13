import React, { useContext } from "react";
import { isAuthenticatedContext } from "./AuthContextProvider";
import Home from "./Home";
import RegLog from "./RegLog";

const WithRendering = (Component) => {
  function WithRenderingComponent({ ...props }) {
    const { user, removeFromUser } = useContext(isAuthenticatedContext);
    return (
      <>
        
        {user ?  <Component name={user} logout={removeFromUser}{ ...props }/>:  <RegLog {...props} />}
      
      </>
    );
  }
  return WithRenderingComponent;
};

export default WithRendering;
