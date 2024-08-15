import Navbar2 from '../components/Navbar2';
import Navbar from '../components/Navbar';
import styles from '../styles/MainComponent.module.css'
import CustomHeader from '../components/CustomHeader';
import CustomSection from '../components/CustomSection';
import Table from '../components/Table';
export default function Home() {
  return (
    <div className={styles.maincomponent}>
      <Navbar />
      <Navbar2 />
      <CustomHeader/>
      <CustomSection/>
      <Table />
      {/* Other page content */}
    </div>
  );
}