import { useState, useContext } from "react";
import { IoIosArrowDown } from "react-icons/io";
import styles from "@/app/(pages)/_styles/language_dropdown.module.scss";
import { LangContext } from "../day2/lang";

function Dropdown_Table({ lang_list, setOpen, setLang }) {
    function setClose(selectedLang) {
        setOpen(false);
        setLang(selectedLang);
    }

    const table = Object.entries(lang_list).map(([key, lang])=>{ 
        return <button key={key} onClick={()=>{setClose(key)}} className={styles.container}>
            <h4 style={{color: "purple"}}> {lang}</h4></button> 
            })
    
    return (
        <div className={styles.table}>
            {table}
        </div>
    )
}

export default function Language_Dropdown() {
    const [open, setOpen] = useState(false);
    const {lang, setLang, lang_list} = useContext(LangContext);

    function toggleOpen() {
        setOpen((prev)=>(!prev));
    }

    return (
        <div>
            <button className={styles.container} onClick={()=>{toggleOpen()}}>
                <h4 style={{borderRight: "2px", borderLeft: "0", borderTop: "0", borderBottom: "0", 
                    borderColor: "black", borderStyle: "solid", paddingRight: "5px", color: "purple"}}>
                    Lng</h4>
                <h4 style={{width: "70%", color: "purple"}}>{ lang_list[lang] }</h4>
                {open ? <IoIosArrowDown style={{transform: "rotateX(180deg)"}}/> : <IoIosArrowDown />}
            </button>
            {open && <Dropdown_Table setOpen={setOpen} setLang={setLang} lang_list={lang_list}/>}
        </div>
    )
}