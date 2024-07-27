import Image from "next/image";
import Card from "../_components/day1/card";
import styles from "../_styles/day1/page.module.scss";
import { BiSolidPen } from "react-icons/bi";



const projects = [
  {
    quarter: "WINTER/SPRING 2023",
    image: "/images/day1/iELC.png",
    projectName: "IELC Tutoring",
    description: `Website and brand identity project for the Interactive 
                  Elementary Learning Center to boost credibility and increase 
                  participation in their free 7-week summer program.`,
    link:"https://www.ielctutoring.com/",
  }, 
  {
    quarter: "FALL/WINTER 2023",
    image: "/images/day1/BloomAndVine.png",
    projectName: "Bloom and Vine",
    description: `Website project for Bloom and Vine a boutique floral design 
                  studio located in Northern California. Bloom and Vine strives  
                  to make every event unforgettable.`,
    link: "https://www.bloomandvine.net/",      
  }, 
  {
    quarter: "WINTER/SPRING 2022",
    image: "/images/day1/NewVietnamStudiesInitiative.png",
    projectName: "New Vietnam Studies Initiative",
    description: `We developed the website for NVSI, promoting research and 
                  collaboration in fields related to contemporary Vietnam's 
                  economic, political, and cultural development.`,
    link: "https://newvietnam.ucdavis.edu/",
  }, 
  {
    quarter: "FALL/WINTER 2021",
    image: "/images/day1/OneLoop.png",
    projectName: "ONELOOP",
    description: `Oneloop is a team of graduate and undergraduate students at 
                  UCD. They design and build a Hyperloop pod to compete in 
                  SpaceX's annual Hyperloop competition.`,
    link: "https://davishyperloop.com/",
  }
]

export default function Day1() {
  return (
    <div className={styles.main_container}>
      <div className={styles.white_top}></div>
      <div className={styles.top_container}>
        <h1> Our mission is to design creative digital solutions that have a positive social impact</h1>
        <div className={styles.imgContainer}>
          <Image 
            src={"/images/day1/design.png"}
            style={{ objectFit: "fill" }}
            fill={true}
            alt={"Example Figma file design"} />
        </div>
      </div>
      <div className={styles.bottom_container}>
        <div className={styles.recent_work_container}>
          <BiSolidPen className={styles.penIcon}/>
          <h2>Recent Work</h2>
          <h3>Transforming ideas into incredible realities is what we do best.</h3>
        </div>
        <div className={styles.cards}>
          {projects.map((project, index) => (
            <Card
              key={index}
              quarter={project.quarter}
              image={project.image}
              projectName={project.projectName}
              description={project.description}
              link={project.link}
            />
          ))}
        </div>
        <p className={styles.and_more_container}>
          AND MORE... 
        </p>
      </div>
      
    </div>
  );
}