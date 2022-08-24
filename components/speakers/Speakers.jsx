import Cards from "./Card";
import styles from "./Speakers.module.css";

const Speakers = () => {
  return (
    <div className="darkbg">
      <h1>Past Speakers</h1>
      <div className={styles.speakers}>
        <div className={styles.cards}>
          <Cards name="Prateek Narang" color="#FBBC04" refer="he/him" />
          <Cards name="Neeraj Singh" color="#4285F4" refer="he/him" />
          <Cards name="Dinesh Punni" color="#EA4335" refer="he/him" />
          <Cards name="Riddhi Dutta" color="#34A853" refer="she/her" />
        </div>
      </div>
    </div>
  );
};

export default Speakers;
