import Image from "next/image";
import styles from "./page.module.scss";
import { FaPenNib } from "react-icons/fa";
import Cards from "@/app/(pages)/_components/cards";

export default function Page() {
  return (
    <main className={styles.main}>
      <h1 className={styles.header}>Our mission is to design creative digital solutions that have a positive social impact</h1>
      <div>
        <div className={styles.div_purple}>
          <div className={styles.div_design_home}>
            <img src="/design-home.png" className={styles.img_design_home}
              alt="Screenshots of the dashboard project showing desktop version"/>
          </div>
          <div className={styles.header_recent_work}>
            <FaPenNib style={{fontSize: "2rem", color: "white"}}></FaPenNib>
            <h5 style={{marginBottom: "30px", marginTop: "20px"}}>Recent Work</h5>
            <h6>Transforming ideas into incredible realities is what we do best.</h6>
          </div>
          <Cards />
          <h4 style={{marginBottom: "50px"}}>AND MORE...</h4>
        </div>
      </div>
    </main>
  );
}