import styles from './include.module.scss'

export function ProjectCard({cohort, image, image_alt, title, description}) {
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
            <button className={styles.button}>🟢 VISIT SITE</button>
        </div>
    );
}