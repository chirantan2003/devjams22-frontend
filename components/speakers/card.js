import Introducing from "../core/button/introducing";
import styles from "./Card.module.css";

const Cards = (props) => {
  return (
    <div className={styles.outer}>
      <Introducing color={props.color} />
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
