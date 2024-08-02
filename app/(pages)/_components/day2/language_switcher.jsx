import styles from '@/(pages)/_styles/components/language_switcher.module.scss';
import { useLanguage } from '@/(pages)/_contexts/language';

export default function LanguageSwitcher(){
    const { language, switchLanguage, languages } = useLanguage();
    return (
        <select value={language} onChange={(e)=>switchLanguage(e.target.value)} className={styles.container}>
            {languages.map((lang, index) => 
            <option key={index} value={lang}>{lang}</option>)}
        </select>
    )
}

/* This is what map is doing here:
english => <option key={0} value="English"> English </option>
hindi => <option key={0} value="Hindi"> Hindi </option>
*/