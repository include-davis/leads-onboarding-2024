'use client'

import styles from "./page.module.scss";
import Language_Dropdown from "@/app/(pages)/_components/language_dropdown";
import Authentication_Box from "@/app/(pages)/_components/authentication_box";

export default function Page() {
    return (
        <main className={styles.main}>
            <div className={styles.header}>
                <Language_Dropdown />
            </div>
            <Authentication_Box />
        </main>
    )
}