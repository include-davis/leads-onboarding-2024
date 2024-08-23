"use client";
import styles from '../_styles/days/day2.module.scss';
import Carousel from '../_components/day2/carousel.jsx';
import React, { useState } from 'react';

export default function Day2(){
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    const themeStyles = {
        backgroundColor: isDarkMode ? '#a9a9a9' : '#fff',
        color: isDarkMode ? '#fff' : '#000'
    };

    return(
        <div className={styles.container} data-theme={isDarkMode ? "dark" : "light"} style={themeStyles}>
            <button onClick={toggleTheme}>
                {isDarkMode ? 'Light' : 'Dark'} Mode
            </button>

            <h1>Carousel</h1>
            <div className={styles.box}>
                <Carousel/>
            </div>
    
        </div>
        )
    }