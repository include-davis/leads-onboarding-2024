"use client"
import Image from "next/image";
//import styles from "../_styles/day2/page.module.scss";
import { useState, useEffect, useRef, useContext} from 'react';

export default function Day2() {
    
    const [password, setPassword] = useState('');
    const [counter, setCounter] = useState(0);
    //const counter = useRef(0);

    const updatePassword = (e) => {
        setPassword(e.target.value);
    };
    
    const incrementCounter = () => {
        setCounter(counter+1);
    };

   /*  const incrementCounter = () => {
        counter.current += 1; 
    } */

    return (
      <div className={styles.main_container}>
        {counter == 0 && 
            (<label>
                Enter password: <input value={password} onChange={updatePassword}/>
            </label>)
        }
        {counter == 1 && 
            (<label>
                Enter password again (2 tries left): <input value={password} onChange={updatePassword}/>
            </label>)
        }
        {counter == 2 && 
            (<label>
                Enter password again (final attempt): <input value={password} onChange={updatePassword}/>
            </label>)
        }

        {counter < 3 ?
            (<button onClick={incrementCounter}>Next</button>) : (<button disabled>Next</button>)
        }


        
      </div>
    )
}