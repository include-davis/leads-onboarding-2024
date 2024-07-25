import Image from 'next/image';
import styles from "@/app/(pages)/_styles/day1/card.module.scss";
import Link from 'next/link';


export default function Card({quarter, image, projectName, description, link}) {
    return (
        <div className={styles.card}>
            <p className={styles.quarter}>{quarter}</p>
            <div className={styles.imgContainer}>
                <Image
                    src={image}
                    style={{ objectFit: "fill" }}
                    fill={true}
                    alt={projectName} />
            </div>
            <h2 className={styles.projectName}>{projectName}</h2>
            <p className={styles.description}>{description}</p>
            <Link href={link} passHref>
                <button className={styles.visitButton}>VISIT SITE</button>
            </Link>
        </div>
    )
}