'use client'

import styles from "./page.module.scss";
import Language_Dropdown from "@/app/(pages)/_components/language_dropdown";
import Authentication_Box from "@/app/(pages)/_components/authentication_box";
import Image_Carousel from "@/app/(pages)/_components/image_carousel";
import Theme_Button from "../_components/theme_button";
import { LangContext } from "./lang";
import { ThemeContext } from "./theme";
import { useState } from "react";


export default function Page() {
    const [lang, setLang] = useState('en');
    const lang_list = {'en':"English", 'es':"Spanish", 'ml':"Malayalam"};
    const [theme, setTheme] = useState("light");
    
    return (
        <main className={`${styles.main} ${theme=="dark" && styles.dark_bg}`}>
            <LangContext.Provider value={{ lang, setLang, lang_list }}>
                <ThemeContext.Provider value={theme}>
                    <div>Selected lang: {lang_list[lang]}</div>
                    <div className={styles.header}>
                        <Language_Dropdown />
                        <Theme_Button setTheme={setTheme} /></div>
                    <Authentication_Box />
                    <Image_Carousel />
                </ThemeContext.Provider>
            </LangContext.Provider>
        </main>
    )
}