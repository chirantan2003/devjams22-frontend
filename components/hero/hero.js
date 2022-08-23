import Image from "next/image";
import Button from "../core/button/button";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className={styles.text}>
        <Image src={"/devjams.svg"} height="150" width="500" alt="Devjams22" />
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
