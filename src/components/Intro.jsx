import "../css/Intro.css"
import { useContext } from "react";
import { dataContext } from "../contexts/context";


export default function Intro() {

    const { languageData } = useContext(dataContext)

    const handleRedirect = () => {
        window.open("https://github.com/cetinyavuz1", "_blank")
    };

    return (
        <>
            <div className="intro-background">
                <div className="intro-container">
                    <div className="intro-intro">
                        <h2 className="intro-header">{languageData.intro.intro}</h2>
                        <p className="intro-info">{languageData.intro.intro2}</p>
                        <div className="intro-buttons">
                            <button onClick={handleRedirect} className="intro-button">
                                <i className="fa-brands fa-github"></i>
                                <p className="button-text">Github</p>
                            </button>
                            <button className="intro-button">
                                <i className="fa-brands fa-linkedin-in"></i>
                                <p className="button-text">Linkedin</p>
                            </button>
                        </div>
                    </div>
                    <img className="intro-img" src={languageData.intro.introImg} />
                </div>
            </div>
        </>
    )
}