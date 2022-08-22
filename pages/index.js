import Footer from "../components/footer/footer";
import Cards from "../components/speakers/card";
import Navbar from "../components/widgets/navbar/navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <Cards />
      </div>
      <Footer />
    </>
  );
}
