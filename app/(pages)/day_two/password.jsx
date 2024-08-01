"use client"
import { useState, useContext } from 'react'
import {LanguageContext} from './LanguageContext'

const translation = {
    english: {
        password: "Password: ",
        enter: "Enter",
        locked: "You are LOCKED HAHA"
    },
    chinese: {
        password: "密码: ",
        enter: "进",
        locked: "没有机会了哈哈"
    }
}

export function PasswordInput() {
    const [count, setCount] = useState(0);
    const [locked, setLocked] = useState(false);
    const { language, changeLanguage } = useContext(LanguageContext);

    const t = translation[language];

    function handleClick() {
        setCount(count + 1);
        if(count>=2){
            setLocked(true);
        }
    }
    return(
        <div>
            <button onClick={() => changeLanguage('english')}>EN</button>
            <button onClick={() => changeLanguage('chinese')}>CN</button>
            {locked ?  <div>{t.locked}</div> : <div>
                <p>{t.password} </p>
                <input type="password"/>
                <button onClick={handleClick}>
                    {t.enter}
                </button>
                </div>
            }
        </div>
    )
}