import { createContext } from "react";

export const LangContext = createContext({
    lang: 'en',
    setLang: ()=>{},
    lang_list: [],
});