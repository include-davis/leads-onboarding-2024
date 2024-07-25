import styles from "./page.module.scss";
import Image from "next/image";

export default function Day1() {
  return (
    <main className={styles.main}>
      <div className={styles.topSection}>
        <div className={styles.topContent}>
            <h2>Our mission is to design creative digital solutions that have a positive social impact</h2>
            <div className={styles.designImageContainerContainer}>
              <div className={styles.designImageContainer}>
                <Image src="/design-home.png" alt="figma design" fill="true" className={styles.designImage}></Image>
              </div>
            </div>
        </div>
      </div>
      <div className={styles.bottomSection}>
        bottom
      </div>
      
    </main>
  );
}
