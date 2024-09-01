import styles from "@/app/(pages)/_styles/authentication_box.module.scss";
import { useState, useEffect, useRef } from "react";

function ErrorBox() {
    const [open, setOpen] = useState(true);

    function errbox_ClickHandler() {
        setOpen(false);
    }

    return (
        <div className={styles.err_box}>
            { open && <div className={styles.error}>
                <p style={{color: "red", textAlign: "center"}}>Too many attempts, try again in 10 seconds!</p>
                <button onClick={()=>{errbox_ClickHandler()}}> X </button>
            </div> }
        </div>
    )
}

export default function Aunthentication_Box() {
    const count = useRef(0);
    const [freeze, setFreeze] = useState(false);
    const [freezeCount, setFreezeCount] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setFreeze(false);
            count.current = 0;
            console.log("yeehaw");
            }, 10000);
        }, [freezeCount]);
    
    function onClickHandler() {
        console.log("howdy");
        count.current = count.current+1;
        if (count.current == 3) {
            setFreeze(true);
            setFreezeCount((prev) => prev+1);
            }
        }

    return (
        <div className={styles.container}>
            <h4 style={{width: "100%", textAlign: "left", marginBottom: "10px", color: "purple"}}>Password:</h4>
            { freeze && <ErrorBox /> }
            <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                <input type="text" className={styles.input_bar}></input>
                <button className={[styles.submit, freeze ? styles.submit_disabled : styles.submit_clickable].join(" ")} onClick={()=>{onClickHandler()}} disabled={freeze}>Submit</button>    
            </div>
        </div>
    )
}