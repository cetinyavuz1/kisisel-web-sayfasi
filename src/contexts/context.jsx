import { createContext, useEffect, useState } from "react";
import { data } from "../../data";
import axios from "axios";

export const dataContext = createContext()

const DataContextProvider = ({ children }) => {

    const [language, setLanguage] = useState(() => {
        return localStorage.getItem("language") || "en";
    });
    const [languageData, setLanguageData] = useState(() => {
        const saved = localStorage.getItem("languageData");
        return saved ? JSON.parse(saved) : data.en;
    });
    const [darkMode, setDarkMode] = useState(() => {
        const saved = localStorage.getItem("darkMode");
        return saved ? saved === "true" : true;
    });

    const postData = () => {

        axios.post("https://reqres.in/api/workintech", data[language], {
            headers: {
                "x-api-key": "reqres-free-v1"
            }
        }).then((res) => {
            setLanguageData(res.data)
        }).catch((err) => console.log(err))
    }

    useEffect(() => {
        postData()
    }, [language])

    const changeLanguage = () => {
        if (language === "tr") {
            setLanguage("en")
        } else {
            setLanguage("tr")
        }
    }

    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
    }

    useEffect(() => {
        localStorage.setItem("darkMode", String(darkMode))
    }, [darkMode])

    useEffect(() => {
        localStorage.setItem("language", language);
    }, [language]);

    useEffect(() => {
        localStorage.setItem("languageData", JSON.stringify(languageData));
    }, [languageData]);


    return (
        <dataContext.Provider value={{ changeLanguage, languageData, language, darkMode, toggleDarkMode }}>
            {children}
        </dataContext.Provider>
    )
}
export default DataContextProvider