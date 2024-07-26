import styles from "./page.module.scss";
import Image from "next/image";
import WorkCard from "../_components/work_card";

const ielcCard = {
  image: "/ielc.png", 
  alt: "Logo for the Interactive Elementary Learning Center", 
  date: "WINTER/SPRING 2023", 
  title: "IELC Tutoring", 
  description: "Website and brand identity project for the Interactive Elementary Learning Center to boost credibility and increase participation in their free 7-week summer program."
}

const bloomVineCard = {
  image: "/bloom_vine.png", 
  alt: "Logo for Bloom and Vine",
  date: "FALL/WINTER 2023",
  title: "Bloom and Vine",
  description: "Website project for Bloom and Vine a boutique floral design studio located in Northern California. Bloom and Vine strives to make every event unforgettable."
}

const nvsiCard = {
  image: "/nvsi.png", 
  alt: "Logo for the UC Davis New Vietnam Studies Initiative",
  date: "WINTER/SPRING 2022",
  title: "New Vietnam Studies Initiative",
  description: "We developed the website for NVSI, promoting research and collaboration in fields related to contemporary Vietnam's economic, political, and cultural development."
}

const oneloopCard = {
  image: "/oneloop.png",
  alt: "Logo for UC Davis Oneloop",
  date: "FALL/WINTER 2021",
  title: "ONELOOP",
  description: "Oneloop is a team of graduate and undergraduate students at UCD. They design and build a Hyperloop pod to compete in SpaceX's annual Hyperloop competition."
}

export default function Day1() {
  return (
    <main className={styles.main}>
        <div className={styles.topSection}>
          <h2>Our mission is to design creative digital solutions that have a positive social impact</h2>
        </div>
      <div className={styles.bottomSection}>
        <div className={styles.designImage}></div>
        <div className={styles.bottomContent}>
          <div className={styles.recentWork}>
            <div className={styles.recentWorkTitleIcon}>
              <div className={styles.iconContainer}>
                <Image src="/pen_icon.png" alt="Pen icon" fill={true}></Image>
              </div>
              <h3>Recent Work</h3>
            </div>
            <p className={styles.subHeader}>Transforming ideas into incredible realities is what we do best.</p>
            <div className={styles.cardGroupContainer}>
              <div className={styles.cardPair}>
                <WorkCard content={ielcCard}></WorkCard>
                <WorkCard content={bloomVineCard}></WorkCard>
              </div>
              <div className={styles.cardPair}>
                <WorkCard content={nvsiCard}></WorkCard>
                <WorkCard content={oneloopCard}></WorkCard>
              </div>
              <p className={styles.recentWorkEndingText}>AND MORE...</p>
            </div>
          </div>
          <div className={styles.ourPillars}>
            <div className={styles.ourPillarsHeader}>
              <div className={styles.iconContainer}>
                <Image src="/greek_pillar.png" alt="Pillar icon" fill={true}></Image>
              </div>
              <h3>Our Pillars</h3>
              <p className={styles.subHeader}>What inspires us as an org</p>
            </div>
          </div>
        </div>
      </div>
      
    </main>
  );
}
