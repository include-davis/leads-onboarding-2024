import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.body}>
        <ul>
          <li><a href="/day1" className={styles.listLink}>day 1</a></li>
        </ul>
      </div>
    </main>
  );
}
