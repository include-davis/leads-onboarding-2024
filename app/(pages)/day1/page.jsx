import styles from "./page.module.scss";
import Image from "next/image";
import WorkCard from "../_components/work_card";

export default function Day1() {
  return (
    <main className={styles.main}>
        <div className={styles.topSection}>
          <h2>Our mission is to design creative digital solutions that have a positive social impact</h2>
        </div>
      <div className={styles.bottomSection}>
        <div className={styles.designImageContainer}>
          <Image src="/design-home.png" alt="figma design" fill="true" className={styles.designImage}></Image>
        </div>
        <div className={styles.recentWork}>
          <div className={styles.recentWorkTitleIcon}>
            <Image src="/pen_icon.png" alt="pen icon" height="80" width="80"></Image>
            <h3>Recent Work</h3>
          </div>
          <p>Transforming ideas into incredible realities is what we do best.</p>
          <div className={styles.cardGroupContainer}>
            <WorkCard></WorkCard>
            <WorkCard></WorkCard>
            <WorkCard></WorkCard>
            <WorkCard></WorkCard>
            {/* convert these cards to js function */}
            <p>AND MORE...</p>
          </div>
        </div>
        <div className={styles.ourPillars}>
          <div className={styles.ourPillarsHeader}>
            <Image src="/greek_pillar.png" alt="pillars icon" height="80" width="80"></Image>
            <h3>Our Pillars</h3>
            <p>What inspires us as an org</p>
          </div>
        </div>
      </div>
      
    </main>
  );
}
