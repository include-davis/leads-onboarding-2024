// import Styles from '@/(pages)/_styles/days/day1.module.scss';
// import styles from "../_styles/days/page.module.scss";

import styles from '../_styles/days/day1.module.scss';

// import styles from '../_styles/days/day1.module.scss';

export default function Day1(){
    return(
        <div className={styles.pagewrapper}>
          <div className={styles.workcontainer}>
              <img src="pen.png"/>
              <h1>Recent Work</h1>
              <p>Transforming ideas into incredible realities is what we do best.</p>

              <div className={styles.cardcontainer}>

              </div>
          </div>
        </div>
    )
}