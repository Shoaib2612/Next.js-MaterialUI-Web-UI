import { FaInfoCircle } from 'react-icons/fa';
import styles from '../styles/Navbar2.module.css';

const Navbar2 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <ul className={styles.ul}>
            <li><button className={styles.navButton}>PRIMARY</button></li>
            <li><button className={styles.navButton}>SECONDARY</button></li>
            <li><button className={styles.navButton}>THIRDLY</button></li>
        </ul>
    </div>
      <div className={styles.right}>
        <button className={styles.actionButton}>Update Data BD</button>
        <button className={styles.actionButton}>Update Inventory</button>
        <FaInfoCircle className={styles.infoIcon} />
      </div>
    </div>
  );
};

export default Navbar2;