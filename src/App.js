import React, { useState } from "react";
//Hoc
import WithRendering from "./components/withRendering";
//styles
import styles from './App.module.css'

const App = ({ name, logout }) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <h5 className={styles.title}> سلام {name} عزیز</h5>
          <button onClick={logout}>خروج</button>
        </div>
      </div>
    </>
  );
};

export default WithRendering(App);
