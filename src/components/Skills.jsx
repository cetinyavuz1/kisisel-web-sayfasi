import "../css/Skills.css"
import { useContext } from "react";
import { dataContext } from "../contexts/context";

export default function Skills() {

    const { languageData } = useContext(dataContext)

    return (
        <>
            <div className="skills-background">
                <div className="skills-container">
                    <h2 className="skills-header">{languageData.skills.title}</h2>
                    <div className="skills-skills">
                        {languageData.skills.logos.map((elm) => {
                            return <div className="skills-total" ><img className="skills-icons" src={elm.logo} /><p className="skills-text">{elm.name}</p></div>
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}