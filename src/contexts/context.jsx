import { createContext, useEffect, useState } from "react";
import { data } from "../../data";
import axios from "axios";

export const dataContext = createContext()

const DataContextProvider = ({ children }) => {

    const [language, setLanguage] = useState("en")
    const [languageData, setLanguageData] = useState(data.en)
    const [darkMode, setDarkMode] = useState(true);

    const postData = () => {
        axios.post("https://reqres.in/api/workintech", data[language], {
            headers: {
                "x-api-key": "reqres-free-v1"
            }
        }).then((res) => {
            setLanguageData(res.data)
            console.log(res.data)
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


    return (
        <dataContext.Provider value={{ changeLanguage, languageData, language, darkMode, toggleDarkMode }}>
            {children}
        </dataContext.Provider>
    )
}
export default DataContextProvider