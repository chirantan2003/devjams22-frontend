import styles from "./About.module.css";
import Image from "Next/image";

const About = () => {
  return (
    <div className="lightBg">
      <div className={styles.outer}>
        <div className={styles.text}>
          <h2>About DevJams'22</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            lacinia condimentum suscipit. Proin facilisis vulputate urna vitae
            aliquam. Morbi laoreet purus id pulvinar pretium.
          </p>
        </div>
        <div className={styles.img}>
          <Image
            src={"/aboutRight.svg"}
            layout="fill"
            objectFit="contain"
            alt="imgRight"
          />
        </div>
      </div>

      <div className={styles.outer}>
        <div className={styles.img}>
          <Image
            src={"/aboutRight.svg"}
            layout="fill"
            objectFit="contain"
            alt="imgRight"
          />
        </div>
        <div className={`${styles.text} ${styles.right}`}>
          <h2>About VIT</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            lacinia condimentum suscipit. Proin facilisis vulputate urna vitae
            aliquam. Morbi laoreet purus id pulvinar pretium.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
