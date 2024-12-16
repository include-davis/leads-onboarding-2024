import styles from '../_styles/days/day1.module.scss';
import Card from '../_components/day1/project_cards';

const card_content = {
  ielc: {
      cohort: "WINTER/SPRING 2023",
      img: "/tutor.png",
      img_alt: "IELC Tutoring",
      title: "IELC Tutoring",
      desc: "Website and brand identity project for the Interactive Elementary Learning Center to boost credibility and increase participation in their free 7-week summer program.",
      href: "https://www.ielctutoring.com/"
  },
  bandv: {
      cohort: "FALL/WINTER 2023",
      img: "/bloom.png",
      img_alt: "Bloom and Vine",
      title: "Bloom and Vine",
      desc: "Website project for Bloom and Vine a boutique floral design studio located in Northern California. Bloom and Vine strives to make every event unforgettable.",
      href: "https://www.bloomandvine.net"
  },
  nvsi: {
      cohort: "WINTER/SPRING 2022",
      img: "/viet.png",
      img_alt: "New Vietnam Studies Initiative",
      title: "New Vietnam Studies Initiative",
      desc: "We developed the website for NVSI, promoting research and collaboration in fields related to contemporary Vietnam's economic, political, and cultural development.",
      href: "https://newvietnam.ucdavis.edu/"
  },
  oneloop: {
      cohort: "FALL/WINTER 2021",
      img: "/one.png",
      img_alt: "ONELOOP",
      title: "ONELOOP",
      desc: "Oneloop is a team of graduate and undergraduate students at UCD. They design and build a Hyperloop pod to compete in SpaceX's annual Hyperloop competition.",
      href: "https://davishyperloop.com/"
  }
}

export default function Day1(){
    return(
        <div className={styles.pagewrapper}>
          <div className={styles.workcontainer}>
            <img src="pen.png"/>
            <h1>Recent Work</h1>
            <p>Transforming ideas into incredible realities is what we do best.</p>
          </div>

          <div className={styles.cardcontainer}>

              <div className={styles.cardcontainer}>
                {Object.values(card_content).map((obj, index) => (
                  <div className={styles.cardinfo} key={index}>
                    <Card
                      cohort={obj.cohort}
                      image={obj.img}
                      image_alt={obj.img_alt}
                      title={obj.title}
                      description={obj.desc}
                      url={obj.href}
                    />
                  </div>
                ))}

              </div>
              </div>
          
        </div>
    )
}