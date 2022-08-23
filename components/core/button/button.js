import styles from "./Button.module.css";
import Image from "Next/image";

const Button = () => {
  return (
    <button className={`${styles.button} ${styles.noselect}`}>
      <span className={styles.text}>Register Now</span>
      <span className={styles.icon}>
        <Image
          src={"/arrow.svg"}
          className={styles.img}
          width={80}
          height={60}
          viewBox="0 0 24 24"
          alt="arrow"
        />
      </span>
    </button>
  );
};

export default Button;
