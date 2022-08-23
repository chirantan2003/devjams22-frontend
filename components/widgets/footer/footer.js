import Image from "next/Image";
import Link from "next/Link";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div>
        <div className={styles.content}>
          <h1>Reach out to Us!</h1>
          <h2>Chanakya Kapoor</h2>
          <h3>Point of Contact</h3>
          <div className={styles.contact}>
            <Image src={"/mail.svg"} height="25" width="25" alt="mail" />
            <h4>chanakyavkapoor@gmail.com</h4>
          </div>
          <div className={styles.contact}>
            <Image src={"/phone.svg"} height="25" width="25" alt="phone" />
            <h4>+918130488585</h4>
          </div>
        </div>

        <div className={styles.content}>
          <h2>Shresth Tiwary</h2>
          <h3>Point of Contact</h3>
          <div className={styles.contact}>
            <Image src={"/mail.svg"} height="25" width="25" alt="mail" />
            <h4>shresthtiwary11@gmail.com</h4>
          </div>
          <div className={styles.contact}>
            <Image src={"/phone.svg"} height="25" width="25" alt="phone" />
            <h4>+919742940667</h4>
          </div>

          <div className={styles.social}>
            <Link href="/">
              <a>
                <Image
                  src={"/instagram.svg"}
                  height="40"
                  width="40"
                  alt="instagram"
                />
              </a>
            </Link>

            <Link href="/">
              <a>
                <Image
                  src={"/twitter.svg"}
                  height="40"
                  width="40"
                  alt="twitter"
                />
              </a>
            </Link>

            <Link href="/">
              <a>
                <Image
                  src={"/linkedin.svg"}
                  height="40"
                  width="40"
                  alt="linkedin"
                />
              </a>
            </Link>

            <Link href="/">
              <a>
                <Image
                  src={"/facebook.svg"}
                  height="40"
                  width="40"
                  alt="facebook"
                />
              </a>
            </Link>
          </div>
        </div>
      </div>

      {/* <div className={styles.image}>
        <Image
          src={"/footer.svg"}
          layout="responsive"
          height="1040"
          width="1040"
          alt="footer"
        />
      </div> */}
    </div>
  );
};

export default Footer;
