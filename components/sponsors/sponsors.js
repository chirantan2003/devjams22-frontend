import styles from "./Sponsors.module.css";
import Image from "Next/image";

const Sponsors = () => {
  return (
    <div className="darkBg">
      <h1>Sponsors</h1>
      <div className={styles.outer}>
        <div className={styles.img}>
          <Image src={"/googleSp.svg"} height="200" width="200" alt="sponsor" />
          <Image src={"/googleSp.svg"} height="200" width="200" alt="sponsor" />
          <Image src={"/googleSp.svg"} height="200" width="200" alt="sponsor" />
          <Image src={"/googleSp.svg"} height="200" width="200" alt="sponsor" />
          <Image src={"/googleSp.svg"} height="200" width="200" alt="sponsor" />
          <Image src={"/googleSp.svg"} height="200" width="200" alt="sponsor" />
          <Image src={"/googleSp.svg"} height="200" width="200" alt="sponsor" />
          <Image src={"/googleSp.svg"} height="200" width="200" alt="sponsor" />
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
