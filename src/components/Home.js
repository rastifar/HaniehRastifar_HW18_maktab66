import React, { useContext } from "react";
import styles from "./Home.module.css";


const Home = ({name,logout}) => {
  

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h5 className={styles.title}> سلام   {name} عزیز</h5>
        <button onClick={logout}>خروج</button>
      </div>
    </div>
  );
};

export default Home;
