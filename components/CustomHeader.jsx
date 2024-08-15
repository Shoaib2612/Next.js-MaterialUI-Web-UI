import React from 'react';
import styles from '../styles/CustomHeader.module.css';
import { RiPlayListAddFill } from "react-icons/ri";
const CustomHeader = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.leftSection}>
        <h1>PRIMARY DATA</h1>
        <p>parchment be turns stand veela fawkes mistletoe snare drops.</p>
      </div>
      <div className={styles.rightSection}>
        <button className={styles.actionButton}><RiPlayListAddFill />Add Service</button>
        <button className={styles.actionButton}><RiPlayListAddFill />Add Houk Service</button>
      </div>
    </div>
  );
};

export default CustomHeader;