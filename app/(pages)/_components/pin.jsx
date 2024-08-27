import styles from '@/app/(pages)/_styles/components/pin.module.scss';
import { useContext, useEffect, useRef, useState } from "react";
import {ThemeContext} from '@/app/(pages)/day2/page';
import { PiCornersOutLight } from 'react-icons/pi';

const correct_pin = "hello"
const max_clicks = 3;

export default function PinForm() {
  // Use theme context
  const theme = useContext(ThemeContext);
  
  // Count the number of times pin is inputed
  const [pin, setPin] = useState("");
  const [counter, setCounter] = useState(0);
  const [canSubmit, setCanSubmit] = useState(true);

  function handlePinChange(event) {
    setPin(event.target.value);
  }
  
  function handleClick(event) {
    event.preventDefault();

    if (event.target.value != correct_pin) {
      setCounter((counter) => counter + 1);
    }

    if(counter >= max_clicks) {
      setCanSubmit(false);
    }

    setPin("")
  }

  const renderCtr = useRef(0);

  useEffect(() => {
    if(renderCtr.current >= 2) { // skips initial renders (there's two for some reason)
      alert("You ran out of submission attempts");
    }
  }, [canSubmit]) // effect occurs only when canSubmit changes (useState causes rerender)

  useEffect(() => { // After this is called, now useEffect above can activate
    renderCtr.current += 1;
  }, []);

  return (
    <form onSubmit={handleClick} 
      className={
        theme.selectedTheme === 'dark' ? styles.form_dark : styles.form
      }
    >
      <h1>Enter PIN:</h1>
      <div>
        Pin: <input type="text" name="pin" value={pin} onChange={handlePinChange} required/>
      </div>
      <button 
        className={canSubmit ? styles.button : styles.button_inactive}
        type = "submit"
      >
        Submit
      </button>
    </form>
  )
}