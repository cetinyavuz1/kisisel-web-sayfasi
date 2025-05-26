import { Form, FormGroup, Input, Label } from "reactstrap"
import "../css/Header.css"
import { useContext, useState } from "react";
import { dataContext } from "../contexts/context";

export default function Header() {
    const [mode, setMode] = useState(true);

    const { changeLanguage, languageData, language } = useContext(dataContext)

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
                        <FormGroup switch>
                            <Input
                                type="switch"
                                id="switch"
                                checked={mode}
                                onClick={() => {
                                    setMode(!mode);
                                }}
                            />
                            <Label htmlFor="switch" className="header-mode" check>DARK MODE</Label>
                        </FormGroup>
                    </Form>
                </div>
            </div>
        </>
    )
}