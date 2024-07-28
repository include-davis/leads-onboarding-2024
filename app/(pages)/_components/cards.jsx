import styles from "./card.module.scss";

function Card(card_img, site_link, school_term, org_name, description, bg_color) {
    return (
        <div className={styles.div_card}>
            <h4>{school_term}</h4>
            <div className={styles.div_card_logo} style={{backgroundColor: bg_color}}>{card_img}</div>
            <p>{org_name}</p>
            <p style={{color: "gray"}}>{description}</p>
        </div>
    )
}

export default function Cards() {
    const card_data = [
        [<img key="ielc_logo" src="/ielc_logo.png" alt="iELC logo" className={styles.img_card_logo}></img>, "https://www.ielctutoring.com/", "WINTER/SPRING 2023", "IELC Tutoring", "Website and brand identity project for the Interactive Elementary Learning Center to boost credibility and increase participation in their free 7-week summer program.", "white"],
        [<img key="b&v_logo" src="/b&v_logo.png" alt="Blosson & Vine logo" className={styles.img_card_logo}></img>, "https://www.ielctutoring.com/", "FALL/WINTER 2023", "Bloom and Vine", "Website project for Bloom and Vine a boutique floral design studio located in Northern California. Bloom and Vine strives to make every event unforgettable.", "#A28598"],
        [<img key="nvsi_logo" src="/nvsi_logo.png" alt="New Vietnam Student Initiative logo" className={styles.img_card_logo}></img>, "https://www.ielctutoring.com/", "WINTER/SPRING 2022", "New Vietnam Studies Initiative", "We developed the website for NVSI, promoting research and collaboration in fields related to contemporary Vietnam's economic, political, and cultural development.", "white"],
        [<img key="oneloop_logo" src="/oneloop_logo.png" alt="Oneloop logo" className={styles.img_card_logo}></img>, "https://www.ielctutoring.com/", "FALL/WINTER 2021", "ONELOOP", "Oneloop is a team of graduate and undergraduate students at UCD. They design and build a Hyperloop pod to compete in SpaceX's annual Hyperloop competition.", "#022851"]
    ];
    const cards = card_data.map((item)=> {return Card(item[0], item[1], item[2], item[3], item[4], item[5])});

    return (
        <div className={styles.container}>
            {cards}
        </div>
    )
}