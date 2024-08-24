'use client'

import styles from "./page.module.scss";
import Language_Dropdown from "@/app/(pages)/_components/language_dropdown";
import Authentication_Box from "@/app/(pages)/_components/authentication_box";
import { LangContext } from "./lang";
import { useState } from "react";

export default function Page() {
    const [lang, setLang] = useState('en');

    return (
        <main className={styles.main}>
            <LangContext.Provider value={ [lang, setLang] }>
                <div className={styles.header}>
                    <Language_Dropdown /></div>
                <Authentication_Box />
            </LangContext.Provider>
        </main>
    )
}