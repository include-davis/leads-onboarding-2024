import styles from "../../_styles/work_card.module.scss";
import Image from "next/image";

export default function WorkCard({content}) {
    return (
        <div className={styles.card}>
            <div className={styles.cardContent}>
                <div className={styles.upperContent}>
                    <p>{content.date}</p>
                    <div className={styles.imageContainer}>
                        <Image fill="true" alt={content.alt} src={content.image} className={styles.workImage}
                            sizes="(min-width: 720px) 50vw (min-width: 0) 100vw">
                        </Image>
                    </div>
                </div>
                <div className={styles.lowerContent}>
                    <hr></hr>
                    <div className={styles.lowerText}>
                        <h5>{content.title}</h5>
                        <p>{content.description}</p>
                    </div>
                </div>
            </div>
            <button className={styles.cardButton}>
                <Image alt="" height={8} width={8} src="/button_icon.svg"></Image>
                <p>VISIT SITE</p>
            </button>
        </div>
        
    )
}