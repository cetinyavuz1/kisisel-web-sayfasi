import "../css/Projects.css"
import { useContext } from "react";
import { dataContext } from "../contexts/context";

export default function Projects() {

    const { languageData } = useContext(dataContext)

    return (
        <>
            <div className="projects-background">
                <div className="projects-container">
                    <h2 className="projects-header">{languageData.projects.title}</h2>
                    <div className="projects-project">
                        <img className="projects-img" src={languageData.projects.projectsImg} />
                        <div className="projects-pizza">
                            <h3 className="projects-header2">{languageData.projects.projectsHeader}</h3>
                            <p className="projects-text">{languageData.projects.projectsText}</p>
                            <div className="projects-tools">
                                <p className="projects-tools-single">react</p>
                                <p className="projects-tools-single">redux</p>
                                <p className="projects-tools-single">vercel</p>
                            </div>
                            <div className="projects-links">
                                <a className="links-style" href={languageData.projects.siteURL} target="_blank">{languageData.projects.site}</a>
                                <a className="links-style" href={languageData.projects.githubURL} target="_blank">{languageData.projects.github}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}