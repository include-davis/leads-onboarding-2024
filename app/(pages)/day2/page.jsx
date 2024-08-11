"use client";
import styles from '../_styles/days/day2.module.scss';
// import ImagesSlider from '../_components/day2/ImageSlider.tsx';
// import ImagesSlider from '../_components/day2/ImageSlider.jsx';
import Carousel from '../_components/day2/carousel.jsx';
import React, { useState } from 'react';
import Toggle from '../_components/day2/toggle';

/* const handleChange = () => {
    setIsDark(!isDark); // Toggle the state between true and false
}; */



export default function Day2(){
    const [isDark, setIsDark] = useState(false);

    return(
        <div className={styles.container} data-theme={isDark ? "dark" : "light"}>
            <div className={styles.togglecontainer}>
                <Toggle 
                    isChecked={isDark} 
                    handleChange={() => setIsDark(!isDark)} 
                />

                <input 
                    className="input" 
                    type="checkbox" 
                    name="darkmode" 
                    id="dark-mode"
                    checked={isDark}
                    onChange={() => setIsDark(!isDark)}  // Toggle dark mode on change
                />
            </div>

            <h1>Carousel</h1>
            <div className={styles.box}>
                <Carousel/>
            </div>
    
        </div>
        )
    }