import Cards from "./card";
import styles from "./Speakers.module.css";

const Speakers = () => {
  return (
    <div className="darkBg">
      <h1>Speakers</h1>
      <div className={styles.speakers}>
        <div className={styles.cards}>
          <Cards color="#FBBC04" />
          <Cards color="#EA4335" />
          <Cards color="#4285F4" />
          <Cards color="#34A853" />
        </div>
      </div>
    </div>
  );
};

export default Speakers;
