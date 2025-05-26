import { Form, FormGroup, Input, Label } from "reactstrap"
import "../css/Header.css"
import { useContext, useState } from "react";
import { dataContext } from "../contexts/context";

export default function Header() {


    const { changeLanguage, languageData, language, darkMode, toggleDarkMode } = useContext(dataContext)

    return (
        <>
            <div className="header-background">
                <div className="header-container">
                    <div className="header-name-location">
                        <p className="header-name">{languageData.header.profileName}</p>
                    </div>
                    <Form className="header-buttons">
                        {language === "en" ? (<button className="lang-button" type="button" onClick={changeLanguage}><span className="lang">TÜRKÇE</span>'YE GEÇ</button>) :
                            (<button className="lang-button" type="button" onClick={changeLanguage}>SWITCH TO <span className="lang">ENGLISH</span></button>)}
                        {darkMode ? (<FormGroup switch>
                            <Input
                                type="switch"
                                id="switch"
                                checked={darkMode}
                                onClick={toggleDarkMode}
                            />
                            <Label htmlFor="switch" className="header-mode" check>DARK MODE</Label>
                        </FormGroup>) : (<FormGroup switch>
                            <Input
                                type="switch"
                                id="switch"
                                onClick={toggleDarkMode}
                            />
                            <Label htmlFor="switch" className="header-mode" check>LIGHT MODE</Label>
                        </FormGroup>)}
                    </Form>
                </div>
            </div>
        </>
    )
}