"use client"
import React, { useState, useEffect } from 'react';
import styles from './carousel.module.scss';

export function Carousel(){
    const [index, setIndex] = useState(0);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const rectangles = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

    useEffect(() => {
        if (index < 0) {
            setIndex(rectangles.length - 1);
        } else if (index >= rectangles.length) {
            setIndex(0);
        }
    }, [index, rectangles.length]);

    const prevRectangle = () => {
        setIndex(index - 1);
    };

    const nextRectangle = () => {
        setIndex(index + 1);
    };

    const getPrevIndex = () => (index === 0 ? rectangles.length - 1 : index - 1);
    const getNextIndex = () => (index === rectangles.length - 1 ? 0 : index + 1);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    const themeStyles = {
        backgroundColor: isDarkMode ? '#333' : '#f0f0f0',
        color: isDarkMode ? '#fff' : '#000'
    };

    return (
        <div className={styles.carousel_body} style={{...themeStyles }}>
            <button onClick={toggleTheme}>
                {isDarkMode ? 'Light' : 'Dark'} Mode
            </button>
            <div className={styles.carousel}>
                <button onClick={prevRectangle}>Left</button>
                <div className={styles.rect_side} style={{backgroundColor: rectangles[getPrevIndex()]}}/>
                <div className={styles.rect_main} style={{ backgroundColor: rectangles[index] }}/>
                <div className={styles.rect_side} style={{backgroundColor: rectangles[getNextIndex()]}}/>
                <button onClick={nextRectangle}>Right</button>
            </div>
            <div className={styles.dot_array}>
                {rectangles.map((_, i) => (
                <div key={i} className={styles.dot} style={{backgroundColor: i === index ? 'black' : 'lightgray'}}/>
                ))}
            </div>
        </div>
    );
}