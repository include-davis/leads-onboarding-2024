import styles from '@/app/(pages)/_styles/components/select.module.scss';
import { useContext, useState } from 'react';
import {ThemeContext, themeOptions} from '@/app/(pages)/day2/page';

// Componenet that handles the selecting of the theme
export default function ThemeSelector() {

  const theme = useContext(ThemeContext);
  
  const handleSelection = event => {
    console.log("Theme updated to: ", event.target.value);
    theme.updateTheme(event.target.value);
  };

  return (
    <select name="themes" id="themes" onChange={handleSelection} className={styles.select}>
      {themeOptions.map((theme, key) => 
        <option key={key} value={theme.value}>{theme.text}</option>
      )}
    </select> 
  );
}