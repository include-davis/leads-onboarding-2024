'use client'

import styles from "./page.module.scss";
import Language_Dropdown from "@/app/(pages)/_components/language_dropdown";
import Authentication_Box from "@/app/(pages)/_components/authentication_box";
import Image_Carousel from "@/app/(pages)/_components/image_carousel";
import { LangContext } from "./lang";
import { useState } from "react";

export default function Page() {
    const [lang, setLang] = useState('en');
    const lang_list = {'en':"English", 'es':"Spanish", 'ml':"Malayalam"};
    
    return (
        <main className={styles.main}>
            <LangContext.Provider value={{ lang, setLang, lang_list }}>
                <div>Selected lang: {lang_list[lang]}</div>
                <div className={styles.header}>
                    <Language_Dropdown /></div>
                <Authentication_Box />
                <Image_Carousel />
            </LangContext.Provider>
        </main>
    )
}