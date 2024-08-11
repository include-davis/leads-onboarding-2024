import styles from '../_styles/days/day2.module.scss';
// import ImagesSlider from '../_components/day2/ImageSlider.tsx';
// import ImagesSlider from '../_components/day2/ImageSlider.jsx';
import Carousel from '../_components/day2/carousel.jsx';


export default function Day2(){
    return(
        <div className={styles.container} data-theme="dark">
            <h1>Carousel</h1>
            <div className={styles.box}>
                <h2> This is a box. </h2>
            </div>
            {/* <ImagesSlider imageUrls={IMAGES}/> */}
            <Carousel/>
        </div>
        )
    }