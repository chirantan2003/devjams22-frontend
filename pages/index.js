import Footer from "../components/widgets/footer/footer";
import Speakers from "../components/speakers/speakers";
import Navbar from "../components/widgets/navbar/navbar";
import styles from "../styles/Home.module.css";
import Hero from "../components/hero/hero";
import Sponsors from "../components/sponsors/sponsors";
import About from "../components/about/about";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <Hero />
        <About />
        <Speakers />
        <br></br>
        <Sponsors />
      </div>
      <Footer />
    </>
  );
}
