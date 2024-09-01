import { useState } from "react";
import Image from "next/image";
import { IoIosArrowBack } from "react-icons/io";
import { FaCircle } from "react-icons/fa6";
import styles from "@/app/(pages)/_styles/image_carousel.module.scss"


export default function Image_Carousel() {
    const [curr, setCurr] = useState(0);
    const img_paths = ["/b&v_logo.png", "/design-home.png", "/ielc_logo.png", "/nvsi_logo.png", "/oneloop_logo.png"];


    function click_back() {
        if (curr != 0) {
            setCurr((val) => (val-1));
        }
    }

    function click_next() {
        if (curr != img_paths.length-1) {
            setCurr((val) => (val+1));
        }
    }

    let imgs = [];
    if (curr!=0) {
        imgs.push(<div key="prev_img" className={styles.div_slide}><Image alt="prev image" src={img_paths[curr-1]} className={styles.prev} width={400} height={250} /></div>);
    } else { imgs.push(<div key="prev_img" className={styles.div_slide}></div>) }
    
    imgs.push(<div key="curr_img" className={styles.div_slide}><Image alt="curr image" src={img_paths[curr]} className={styles.curr} width={400} height={250} /></div>);
    
    if (curr!=img_paths.length-1) {
        imgs.push(<div key="next_img" className={styles.div_slide}><Image alt="prev image" src={img_paths[curr+1]} className={styles.next} width={400} height={250} /></div>);
    } else { imgs.push(<div key="next_img" className={styles.div_slide}></div>) }

    return (
        <div className={styles.main}>
            <div className={styles.div_slides}>
                {imgs.map((img) => { return img })}
                <IoIosArrowBack className={styles.left_arrow} onClick={()=>{click_back()}} />
                <IoIosArrowBack className={styles.right_arrow} onClick={()=>{click_next()}} />
            </div>
            <div className={styles.div_circles}>
                { img_paths.map((path, index) => { 
                    let style = "";
                    if (index == curr) { style = styles.selected }
                    return <FaCircle key={("circle").concat(toString(index))} className={[styles.circle, style].join(" ")}/> })}
            </div>
        </div>
    )
}