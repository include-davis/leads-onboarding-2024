import Image from "next/image";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <nav>
          <a href="/day_one">Day 1</a>
          <a href="/day_two">Day 2</a>
          <a href="/day_two_hw">Day 2 HW</a>
        </nav>
      </div>
    </main>
  );
}
