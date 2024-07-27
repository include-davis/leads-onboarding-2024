"use client";
// form to submit pin
// button grays out after 3 submits (css)
// lock you out after 3 attempts with notification
// use context: 2 languages: language switcher on top right / left
import { useState, createContext, useContext } from "react";
import styles from "./page.module.scss";

const languages = ["english", "backwards english"];

function processLanguage (text, languageIdx) {
    if (languageIdx) {
        return Array.from(text).reverse().join('');
    }
    else {
        return text;
    }
}

function handleClick (event, attemptsUseState, buttonUseState, language) {
    event.preventDefault();
    
    const [attempts, setAttempts] = attemptsUseState;
    const [buttonClasses, setButtonClasses] = buttonUseState;

    if (attempts < 3) {
        setAttempts(attempts + 1);
        if (attempts < 2) {
            alert(processLanguage(`incorrect pin! you have ${2 - attemptsUseState[0]} attempts remaining.`, language)); 
        }
        else if (attempts == 2) {
            alert(processLanguage('incorrect pin! you are now locked out forever >:)', language));
            setButtonClasses(buttonClasses.concat([styles.deactivated]));
        }
    }
    // use 2 instead of 3 because attempts will not update until next re-render
}

export default function Day2() {
    const [language, setLanguage] = useState(0);
    const [attempts, setAttempts] = useState(0);
    const [buttonClasses, setButtonClasses] = useState([styles.submitButton]);

    const LanguageContext = createContext(null);

    return (
        <LanguageContext.Provider value={language}>
            <div className={styles.main}>
                <div className={styles.mainContent}>
                    <div className={styles.vault}>
                        <h1>{processLanguage("top secret vault!!!!!", language)}</h1>
                        <form>
                            <label>{processLanguage("enter pin :)", language)}</label>
                            <input type="number"></input>
                            <button type="submit" className={buttonClasses.join(' ')} onClick={(event) => {handleClick(event, [attempts, setAttempts], [buttonClasses, setButtonClasses], language);}}>{processLanguage("submit", language)}</button>
                        </form>
                    </div>
                    <div className={styles.languageSwitcher}>
                        <button onClick={() => {setLanguage((language + 1) % 2)}}>{processLanguage("switch language", language)}</button>
                        <p>{processLanguage(`current: ${languages[language]}`, language)}</p>
                    </div>
                </div>
            </div>
        </LanguageContext.Provider>
    )
}