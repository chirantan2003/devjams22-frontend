import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className={styles.text}></div>

      <div className={styles.img}></div>
    </div>
  );
};

export default Hero;
