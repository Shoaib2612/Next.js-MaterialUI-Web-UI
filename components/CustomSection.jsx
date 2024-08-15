import React from 'react';
import styles from '../styles/CustomSection.module.css'; 
import { CiCalendarDate } from "react-icons/ci";
import { MdClear } from "react-icons/md";
const CustomSection = () => {
  return (
    <div className={styles.sectionContainer}>
      <div className={styles.leftSection}>
        <button className={styles.grayButton}>Choose a date <CiCalendarDate className={styles.dateIcon} /></button>
        <select className={styles.grayDropdown}>
          <option>Select a Ornare</option>
          <option>Option 1</option>
          <option>Option 2</option>
        </select>
        <select className={styles.grayDropdown}>
          <option>Select a Ultrices</option>
          <option>Option 1</option>
          <option>Option 2</option>
        </select>
        <select className={styles.grayDropdown}>
          <option>Select an Erat</option>
          <option>Option 1</option>
          <option>Option 2</option>
        </select>
      </div>
      <div className={styles.rightSection}>
        <button className={styles.clearButton}>Clear all <MdClear /></button>
      </div>
    </div>
  );
};

export default CustomSection;