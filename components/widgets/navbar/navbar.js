import Image from "next/image";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.nav}>
      <Image
        src={"/logo.svg"}
        height="25"
        width="25"
        alt="logo"
        className={styles.logo}
      />
      <ul className={styles.nav_right}>
        <a href="#" className={styles.nav_item}>
          {" "}
          <li className={styles.nav_item}>Home</li>
        </a>
        <a href="#" className={styles.nav_item}>
          {" "}
          <li className={styles.nav_item}>About DSC</li>
        </a>
        <a href="#" className={styles.nav_item}>
          {" "}
          <li className={styles.nav_item}>Timeline</li>
        </a>
        <a href="#" className={styles.nav_item}>
          {" "}
          <li className={styles.nav_item}>FAQs</li>
        </a>
        <a href="#" className={styles.nav_item}>
          {" "}
          <li className={styles.nav_item}>Sponsors</li>
        </a>
        <a href="#" className={styles.nav_item}>
          {" "}
          <li className={styles.nav_item}>Contacts</li>
        </a>
      </ul>
    </div>
  );
};

export default Navbar;
