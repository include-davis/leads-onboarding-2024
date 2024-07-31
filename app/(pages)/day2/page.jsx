"use client"

import React, { createContext, useContext, useState } from 'react';
import PinForm from '@/app/(pages)/_components/pin';
import styles from '@/app/(pages)/_styles/pages/day2/home.module.scss';
import ThemeSelector from '@/app/(pages)/_components/select';
import Carousel from '@/app/(pages)/_components/carousel';

export const themeOptions = [
  {value: "", text: "-- Select Theme --"},
  {value: "light", text: "Light"},
  {value: "dark", text: "Dark"},
];
export const ThemeContext = createContext(themeOptions[0]);

export default function Home() {
  
  // Functions for selected theme to be passed as props
  const [selectedTheme, setSelectedTheme] = useState(themeOptions[0]);
  const updateTheme = (data) =>{
    setSelectedTheme(data)
  }

  return (
    <ThemeContext.Provider value={{selectedTheme, updateTheme}}>
      <div className={styles.container}>
        <div className={styles.content}>
          <ThemeSelector/>
          <PinForm className={styles.pin}/>
        </div>
        <Carousel />
      </div>
    </ThemeContext.Provider>
  );
}