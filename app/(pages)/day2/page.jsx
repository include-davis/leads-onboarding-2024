"use client"
import Image from "next/image";
import styles from "../_styles/day2/page.module.scss";
import { useState, useEffect, useRef, useContext} from 'react';
import { RxArrowLeft, RxArrowRight } from 'react-icons/rx'
import { FaSun , FaMoon } from "react-icons/fa";

export default function Day2() {
    const data = [
      'Frame 1', 'Frame 2', 'Frame 3', 'Frame 4'
    ];
    const [activeIndex, setActiveIndex] = useState(0)
    const [darkMode, setDarkMode] = useState(false); 

    const subtractIndex = () => {
      setActiveIndex((activeIndex + data.length - 1) % data.length)
    }

    const addIndex = () => {
      setActiveIndex((activeIndex + 1) % data.length)
    }

    const changeTheme = () => {
      setDarkMode(!darkMode);
      document.body.classList.toggle('dark-mode', !darkMode);
    }

    const makeDark = () => {
      if (!darkMode) {
        setDarkMode(true);
        document.body.classList.add('dark-mode', !darkMode);
      }
    }

    const makeLight = () => {
      if(darkMode) {
        setDarkMode(false);
        document.body.classList.remove('dark-mode', !darkMode);
      }
    }

    return (
      <div className={styles.main_container}>
        <div className = {styles.buttons}>
          <button 
            className={`${styles.light_mode_button} ${!darkMode ? styles.active : ''}`} 
            onClick={makeLight}>
            <FaSun />
          </button>
          <button 
            className={`${styles.dark_mode_button} ${darkMode ? styles.active : ''}`}
            onClick={makeDark}>
            <FaMoon />
          </button>
        </div>
        <h1 className={styles.title}> Carousel </h1>
        <div className={styles.window_container}>
          <button className={styles.arrow} onClick={subtractIndex}>
            <RxArrowLeft/>
          </button>
          <div className={styles.viewport}>
            <div 
              className={styles.content_belt}
              style={{transform: `translateX(calc(${-activeIndex} * 100%))`}}
              >
              {data.map((frame, index) => {
                  return (
                      <div 
                          key={index} 
                          className={styles.frame} 
                          style={{ transform: (Math.abs(index - activeIndex) >= 1) ? 'scale(0.8)' : 'scale(1)' }}
                      >
                          <h1 className={styles.frame_content}>{frame}</h1>
                      </div>
                  );
              })}
            </div>
          </div>
          <button className={styles.arrow} onClick={addIndex}>
            <RxArrowRight/>
          </button>
        </div>
        <div className={styles.dots}>
          { data.map((frame, index) => {
              return (
                <div 
                  key={index} 
                  className={`${styles.dot} ${activeIndex === index ? styles.active: null}`}
                  onClick={() => setActiveIndex(index)}
                ></div>
              )
            }) 
          }
        </div>
      </div>
    );
  }