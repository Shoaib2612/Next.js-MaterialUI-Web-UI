import Image from 'next/image';
import { FaSearch, FaQuestionCircle, FaBell, FaUser } from 'react-icons/fa';
import styles from '../styles/Navbar.module.css';
import { LuLayers } from "react-icons/lu";
import { BiHomeSmile } from "react-icons/bi";
import { MdOutlineInventory } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      {/* Left Side: Logo and Navigation Links */}
      <div className={styles.left}>
        <Image src='/logo.jpg' width={130} height={60}/>
        <button className={styles.navButton}><BiHomeSmile />Home</button>
        <button className={styles.navButton}><MdOutlineInventory />Inventory</button>
        <button className={styles.navButton}><LuLayers />Layers</button>
      </div>

      {/* Middle Spacer */}
      <div className={styles.spacer}></div>

      {/* Right Side: Search Bar, Icons, and User Button */}
      <div className={styles.right}>
        <div className={styles.searchContainer}>
          <FaSearch className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Quick action..."
            className={styles.searchInput}
          />
        </div>

        <button className={styles.iconButton}>
          <FaQuestionCircle />
        </button>

        <button className={styles.iconButton}>
          <FaBell />
        </button>

        <button className={styles.userButton}>
          <FaUser /> Don Maggio
        </button>
      </div>
    </nav>
  );
};

export default Navbar;