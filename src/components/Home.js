import React, { useContext } from "react";
import styles from "./Home.module.css";
import {isAuthenticatedContext} from "./AuthContextProvider"

const Home = () => {
  const {removeFromUser}=useContext(isAuthenticatedContext)
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h5 className={styles.title}>سلام نام کاربرعزیز</h5>
        <button>خروج</button>
      </div>
    </div>
  );
};

export default Home;
