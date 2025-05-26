import { createContext, useEffect, useState } from "react";
import { data } from "../../data";
import axios from "axios";

export const dataContext = createContext()

const dataContextProvider = ({ children }) => {

    const [language, setLanguage] = useState("tr")
    const [languageData, setLanguageData] = useState(data.tr)


    return (
        <dataContext.Provider>
            {children}
        </dataContext.Provider>
    )
}