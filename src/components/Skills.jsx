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
                        <div className="skills-total" ><img className="skills-icons" src={languageData.skills.logo1} /> <p className="skills-text">{languageData.skills.name1}</p></div>
                        <div className="skills-total" ><img className="skills-icons" src={languageData.skills.logo2} /> <p className="skills-text">{languageData.skills.name2}</p></div>
                        <div className="skills-total" ><img className="skills-icons" src={languageData.skills.logo3} /> <p className="skills-text">{languageData.skills.name3}</p></div>
                        <div className="skills-total" ><img className="skills-icons" src={languageData.skills.logo4} /> <p className="skills-text">{languageData.skills.name4}</p></div>
                        <div className="skills-total" ><div className="skills-icons skills-redux"><img className="reduxonly" src={languageData.skills.logo5} /></div> <p className="skills-text">{languageData.skills.name5}</p></div>
                        <div className="skills-total" ><img className="skills-icons" src={languageData.skills.logo6} /> <p className="skills-text">{languageData.skills.name6}</p></div>
                    </div>
                </div>
            </div>
        </>
    )
}