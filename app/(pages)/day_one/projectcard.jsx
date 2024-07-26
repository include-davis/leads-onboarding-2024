import styles from './include.module.scss'
import Link from 'next/link';

export function ProjectCard({cohort, image, image_alt, title, description, url}) {
    return(
        <div className={styles.project_card}>
            <p>{cohort}</p>
            <img src={image} alt={image_alt}/>
            <br/>
            <hr/>
            <br/>
            <p>{title}</p>
            <p>{description}</p>
            <br/>
            <a href={url}>
                <button className={styles.button}>🟢 VISIT SITE</button>
            </a>
        </div>
    );
}