"use client"

import styles from '@/(pages)/_styles/days/day2.module.scss';
import LanguageSwitcher from '../_components/day2/language_switcher';
import { useState, useRef, useEffect } from 'react';
import { LanguageProvider, useLanguage } from '../_contexts/language';

const message = {
    English: {
        notifmsg: "Your account has been locked.",
        formTitle: "Login Form"
    },
    Hindi: "आपका खाता बंद कर दिया गया है।"
}

export default function Day2(){
    const clickTimes = useRef(0);
    const [disabled, setdisabled] = useState(false);
    const [showNotif, setShotNotif] = useState(false);
    const { language } = useLanguage();

    const handleClick = () => {
        clickTimes.current = clickTimes.current + 1;
        if(clickTimes.current >= 3){
            setdisabled(true);
        }
    }

    useEffect(()=>{
        if(disabled) {
            setShotNotif(true);
            const time = setTimeout(() => {
                setShotNotif(false);
            }, 10000);

            return () => clearTimeout(time);
        }
    }, [disabled])

    return(
        <main className={styles.main}>
            <p>{language}</p>
            {showNotif && <div className={styles.notification}>{message[language].notifmsg}</div>}
            <LanguageSwitcher className={styles.switcher}/>
            <div className={styles.container}>
                <h1>Enter PIN:</h1>
                <input type='text'></input>
                <button disabled={disabled} onClick={handleClick}>Submit</button>
            </div>
        </main>
    )
}