// import styles from './app/(pages)/_styles/days/day1.module.scss';

import styles from '@/app/(pages)/_styles/days/day1.module.scss';

export default function Card({quarter, image, projectName, description, link}) {
    return (
        <div className={styles.card}>
            <p className={styles.quarter}>{quarter}</p>
            <img className={styles.card_img}/>
            <hr/>
            <h4 className={styles.card_name}>{projectName}</h4>
            <p className={styles.card_description}>{description}</p>
            <a target="_blank" ahref={link}>
                <button className={styles.card_button}>
                    <span className={styles.card_dot}>●</span>
                    VISIT SITE
                </button>
            </a>
        </div>
    )
}