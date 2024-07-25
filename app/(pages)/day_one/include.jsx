import { ProjectCard } from "./projectcard";
import styles from './include.module.scss';

const images = {
    pen: '/images/pen.png',
    figma: '/images/header1.png'
}
const ielc = {
    cohort: "WINTER/SPRING 2023",
    img: "/images/IELC Tutoring.png",
    img_alt: "IELC Tutoring",
    title: "IELC Tutoring",
    desc: "Website and brand identity project for the Interactive Elementary Learning Center to boost credibility and increase participation in their free 7-week summer program."
}

const bandv = {
    cohort: "FALL/WINTER 2023",
    img: "/images/Bloom and Vine.png",
    img_alt: "Bloom and Vine",
    title: "Bloom and Vine",
    desc: "Website project for Bloom and Vine a boutique floral design studio located in Northern California. Bloom and Vine strives to make every event unforgettable."
}

const nvsi = {
    cohort: "WINTER/SPRING 2022",
    img: "/images/New Vietnam Studies Initiative.png",
    img_alt: "New Vietnam Studies Initiative",
    title: "New Vietnam Studies Initiative",
    desc: "We developed the website for NVSI, promoting research and collaboration in fields related to contemporary Vietnam's economic, political, and cultural development."
}

const oneloop = {
    cohort: "FALL/WINTER 2021",
    img: "/images/ONELOOP.png",
    img_alt: "ONELOOP",
    title: "ONELOOP",
    desc: "Oneloop is a team of graduate and undergraduate students at UCD. They design and build a Hyperloop pod to compete in SpaceX's annual Hyperloop competition."
}

export function Include() {
    return(
        <div className={styles.page}>
            <div className={styles.header1}>
                <h1>Our mission is to design creative digital solutions that have a positive social impact</h1>
                <img src={images.figma}/>
            </div>

            <div className={styles.header2}>
                <img src={images.pen}/>
                <h1>Recent Work</h1>
                <h3>Transforming ideas into incredible realities is what we do best.</h3>
            </div>
            <div className={styles.card}>
                <ProjectCard cohort={ielc.cohort} image={ielc.img} image_alt={ielc.img_alt} title={ielc.title} description={ielc.desc}></ProjectCard>
                <ProjectCard cohort={bandv.cohort} image={bandv.img} image_alt={bandv.img_alt} title={bandv.title} description={bandv.desc}></ProjectCard>
                <ProjectCard cohort={nvsi.cohort} image={nvsi.img} image_alt={nvsi.img_alt} title={nvsi.title} description={nvsi.desc}></ProjectCard>
                <ProjectCard cohort={oneloop.cohort} image={oneloop.img} image_alt={oneloop.img_alt} title={oneloop.title} description={oneloop.desc}></ProjectCard>
            </div>
            

            <p>AND MORE…</p>
        </div>
    );
}