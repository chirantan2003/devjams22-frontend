import Introducing from "../core/button/introducing";
import styles from "./Card.module.css";

const Cards = () => {
  return (
    <div className={styles.outer}>
      <Introducing color="#FBBC04" />
      <div className={styles.inner}>
        <div className={styles.content}>
          <h1>Sundar Pichai</h1>
          <h2>he/him</h2>
        </div>
        <div className={styles.image}></div>
      </div>
    </div>
  );
};

export default Cards;
