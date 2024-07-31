import React from 'react'
import styles from '../../_styles/days/day1.module.scss';

export default function Card({cohort, image, title, description, url}) {
    return (
        <div className={styles.card}>
            <p className={styles.quarter}>{cohort}</p>
            <img src={image} className={styles.card_img}/>
            <hr/>
            <h4 className={styles.card_name}>{title}</h4>
            <p className={styles.card_description}>{description}</p>
            <a target="_blank" ahref={url}>
                <button className={styles.card_button}>
                    <span className={styles.card_dot}>●</span>
                    VISIT SITE
                </button>
            </a>
        </div>
    )
}