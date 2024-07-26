import Image from "next/image";
import styles from "./page.module.scss";

export default function Page() {
  return (
    <main className={styles.main}>
      <h>Our mission is to design creative digital solutions that have a positive social impact</h>
      <div>
        <div className={styles.div_purple}>
          <div className={styles.div_design_home}>
            <img src="/design-home.png" className={styles.img_design_home}
              alt="Screenshots of the dashboard project showing desktop version"/>
          </div>
          <div>text and icon</div>
          <div>cards</div>
        </div>
      </div>
    </main>
  );
}