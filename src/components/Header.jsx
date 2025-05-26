import { Form, FormGroup, Input, Label } from "reactstrap"
import "../css/Header.css"
import { useState } from "react";

export default function Header() {
    const [mode, setMode] = useState(true);
    return (
        <>
            <div className="header-background">
                <div className="header-container">
                    <div className="header-name-location">
                        <p className="header-name">Çetin Yavuz</p>
                    </div>
                    <Form className="header-buttons">
                        <button className="lang-button"><span className="lang">TÜRKÇE</span>'YE GEÇ</button>
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