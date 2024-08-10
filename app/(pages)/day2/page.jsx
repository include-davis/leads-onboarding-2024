import styles from '../_styles/days/day2.module.scss';
// import ImagesSlider from '../_components/day2/ImageSlider.tsx';
import ImagesSlider from '../_components/day2/ImageSlider.jsx';

/* import img1 from './bloom.png'
import img2 from 'one.png'
import img3 from 'viet.png'
import img4 from 'tutor.png' */

const IMAGES = [
    "/bloom.png",
    "/one.png",
    '/viet.png',
    '/tutor.png',
];

export default function Day2(){
    return(
        <div className={styles.container}>
            <h1>Carousel</h1>
            <ImagesSlider imageUrls={IMAGES}/>
        </div>
        )
    }