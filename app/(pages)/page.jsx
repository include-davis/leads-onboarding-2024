import styles from "@/(pages)/_styles/homepage/page.module.scss";
import Link from "next/link";

const nav = [1, 2, 3, 4, 5]

export default function Home() {
  return (
    <main className={styles.main}>
      {nav.map((day, index)=><Link href={`/day${day}`} key={index}>Day{day}</Link>)}
    </main>
  );
}
