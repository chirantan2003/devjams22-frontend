import Button from "../core/button/button";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className={styles.text}>
        <h1>
          <span className={styles.red}>D</span>
          <span className={styles.blue}>e</span>
          <span className={styles.yellow}>v</span>
          <span className={styles.green}>J</span>
          <span className={styles.blue}>a</span>
          <span className={styles.red}>m</span>
          <span className={styles.yellow}>s</span>
          <span className={styles.green}> &#8217; </span>
          <span className={styles.blue}>2 2</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          lacinia condimentum suscipit. Proin facilisis vulputate urna vitae
          aliquam. Morbi laoreet purus id pulvinar pretium.
        </p>
        <div className={styles.button}>
          <Button />
        </div>
      </div>

      <div className={styles.img}></div>
    </div>
  );
};

export default Hero;
