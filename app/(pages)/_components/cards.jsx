import styles from "@/app/(pages)/_styles/cards.module.scss";
import { card_data } from "./card_data";
import { FaCircle } from "react-icons/fa6";

function Card(props) { //uses props: org_name, site_link, school_term, description, img_src, bg_color
    return (
        <div className={styles.div_card}>
            <h4 style={{width: "90%", textAlign: "left", marginBottom: "5px", marginTop: "30px"}}>{props.school_term}</h4>
            <div className={styles.div_card_logo} style={{backgroundColor: props.bg_color}}>
                <img src={props.img_src} className={styles.img_card_logo} alt={props.org_name+" Logo"}/>
            </div>
            <div className={styles.body_text}>
                <p className={styles.text}>{props.org_name}</p>
                <p className={styles.text}>{props.description}</p>
            </div>
            <a href={props.site_link} className={styles.bttn}>
                <FaCircle style={{fontSize: "0.5rem", color: "green"}}/>
                <h4 style={{color: "white"}}>VISIT SITE</h4>
            </a>
        </div>
    )
}

export default function Cards() {
    const cards = card_data.map((item)=> {return <Card key={item.key} org_name={item.org_name} site_link={item.site_link} school_term={item.school_term} description={item.description} img_src={item.img_src} bg_color={item.bg_color} />});

    return (
        <div className={styles.container}>
            {cards}
        </div>
    )
}