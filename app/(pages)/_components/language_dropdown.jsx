import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import styles from "@/app/(pages)/_styles/language_dropdown.module.scss";

function Dropdown_Table(props) {
    const lang_list = ["English", "Spanish", "Hindi"];

    function setClose() {
        props.setOpen(false);
    }

    const table = lang_list.map((lang)=>{return <button key={lang} onClick={()=>{setClose()}} className={styles.container}><h4 style={{color: "purple"}}>{lang}</h4></button>})
    
    return (
        <div className={styles.table}>
            {table}
        </div>
    )
}

export default function Language_Dropdown() {
    const [open, setOpen] = useState(false);

    function toggleOpen() {
        setOpen((prev)=>(!prev));
    }

    return (
        <div>
            <button className={styles.container} onClick={()=>{toggleOpen()}}>
                <h4 style={{borderRight: "2px", borderLeft: "0", borderTop: "0", borderBottom: "0", 
                    borderColor: "black", borderStyle: "solid", paddingRight: "5px", color: "purple"}}>Lng</h4>
                <h4 style={{width: "70%", color: "purple"}}>English</h4>
                {open ? <IoIosArrowDown style={{transform: "rotateX(180deg)"}}/> : <IoIosArrowDown />}
            </button>
            {open && <Dropdown_Table setOpen={setOpen} />}
        </div>
    )
}