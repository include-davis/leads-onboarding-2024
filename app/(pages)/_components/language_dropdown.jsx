import { useState, useContext } from "react";
import { IoIosArrowDown } from "react-icons/io";
import styles from "@/app/(pages)/_styles/language_dropdown.module.scss";
import { LangContext } from "../day2/lang";

function Dropdown_Table(props) {

    function setClose(selectedLang) {
        props.setOpen(false);
        props.setLang(selectedLang);
    }

    const table = props.lang_list.map((lang)=>{ 
        return <button key={lang} onClick={()=>{setClose(lang)}} className={styles.container}>
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
    const [lang, setLang] = useContext(LangContext);
    const lang_list = {'en':"English", 'es':"Spanish", 'ml':"Malayalam"};

    function toggleOpen() {
        setOpen((prev)=>(!prev));
    }

    function get_currLang() {
        
    }

    return (
        <div>
            <button className={styles.container} onClick={()=>{toggleOpen()}}>
                <h4 style={{borderRight: "2px", borderLeft: "0", borderTop: "0", borderBottom: "0", 
                    borderColor: "black", borderStyle: "solid", paddingRight: "5px", color: "purple"}}>
                    Lng</h4>
                <h4 style={{width: "70%", color: "purple"}}>{currLang}</h4>
                {open ? <IoIosArrowDown style={{transform: "rotateX(180deg)"}}/> : <IoIosArrowDown />}
            </button>
            {open && <Dropdown_Table setOpen={setOpen} setLang={setLang} lang_list={lang_list}/>}
        </div>
    )
}