import styles from "./page.module.scss";
import Image from "next/image";

export default function WorkCard() {
    return (
        <div className={styles.card}>
            <div className={styles.cardContent}>
                <div className={styles.upperContent}>
                    <p>COHORT TIME</p>
                    <div className={styles.imageContainer}>
                        
                    </div>
                </div>
                <hr></hr>
                <div className={styles.lowerContent}>
                    <h6>title of project</h6>
                    <p>project description</p>
                </div>
            </div>
            <button className={styles.cardButton}>
                <Image alt="" height={8} width={8} src="/button_icon.svg"></Image>
                <p>VISIT SITE</p>
            </button>
        </div>
        
    )
}