import styles from "@/app/(pages)/_styles/theme_button.module.scss";
import { useContext, useRef } from "react";
import { ThemeContext } from "../day2/theme";
import { FaRegSun } from "react-icons/fa";
import { FaRegMoon } from "react-icons/fa";



export default function Theme_Button({ setTheme }) {
    const theme = useContext(ThemeContext);
    const updateCount = useRef(0);
    let style = "";
    if (updateCount.current > 0) {
        if (theme == "light") { style = styles.left; }
        else { style = styles.right; }
    }

    function toggleTheme() {
        if (theme == "light") { setTheme("dark") }
        else { setTheme("light") }
        updateCount.current = updateCount.current + 1;
    }
    return (
        <div className={`${styles.main} ${theme=="dark" && styles.dark_bg}`}>
            <button className={[styles.circle, style].join(" ")} onClick={()=>{toggleTheme()}}>
                {theme=="light" ? <FaRegSun /> : <FaRegMoon />}</button>
        </div>
    )
}