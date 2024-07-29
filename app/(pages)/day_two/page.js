//count number of time button clicked - DONE
//notification - DONE
//lock user out of putting password
//another language
//useState
//useRef
//useContext --> to change lanauge
//useEffect --> for notification
import {PasswordInput} from './password'
import {LanguageProvider } from './LanguageContext'

export default function Password(){
    


    return(
        <div>
            <LanguageProvider>
                <PasswordInput/>
            </LanguageProvider>
            
        </div>
    );
}