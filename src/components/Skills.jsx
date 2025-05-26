import "../css/Skills.css"

export default function Skills() {
    return (
        <>
            <div className="skills-background">
                <div className="skills-container">
                    <h2 className="skills-header">Skills</h2>
                    <div className="skills-skills">
                        <div className="skills-total" ><img className="skills-icons" src="./src/assets/javascript.jpg" /> <p className="skills-text">JAVASCRIPT</p></div>
                        <div className="skills-total" ><img className="skills-icons" src="./src/assets/nodejs.jpg" /> <p className="skills-text">NODE</p></div>
                        <div className="skills-total" ><img className="skills-icons" src="./src/assets/react.png" /> <p className="skills-text">REACT</p></div>
                        <div className="skills-total" ><img className="skills-icons" src="./src/assets/vscode.png" /> <p className="skills-text">VS CODE</p></div>
                        <div className="skills-total" ><div className="skills-icons skills-redux"><img className="reduxonly" src="./src/assets/redux.png" /></div> <p className="skills-text">REDUX</p></div>
                        <div className="skills-total" ><img className="skills-icons" src="./src/assets/figma.jpg" /> <p className="skills-text">FIGMA</p></div>
                    </div>
                </div>
            </div>
        </>
    )
}