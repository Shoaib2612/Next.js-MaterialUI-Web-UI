import { FaInfoCircle } from 'react-icons/fa';
import styles from '../styles/Navbar2.module.css';
import { FaArrowsRotate } from "react-icons/fa6";
const Navbar2 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <ul className={styles.ul}>
            <button className={styles.navButton1}><li>PRIMARY</li></button>
            <button className={styles.navButton}><li>SECONDARY</li></button>
            <button className={styles.navButton}><li>THIRDLY</li></button>
        </ul>
    </div>
      <div className={styles.right}>
        <button className={styles.actionButton}><FaArrowsRotate /> Update Data BD</button>
        <button className={styles.actionButton2}><FaArrowsRotate /> Update Inventory</button>
        <FaInfoCircle className={styles.infoIcon} />
      </div>
    </div>
  );
};

export default Navbar2;