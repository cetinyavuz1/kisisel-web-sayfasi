import "../css/Projects.css"

export default function Projects() {
    return (
        <>
            <div className="projects-background">
                <div className="projects-container">
                    <h2 className="projects-header">Projects</h2>
                    <div className="projects">
                        <div className="projects-project">
                            <img className="projects-img" src="./src/assets/kedy3.jpg" />
                            <div className="projects-pizza">
                                <h3 className="projects-header2">Pizza Sipariş</h3>
                                <p className="projects-text">A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.</p>
                                <div className="projects-tools">
                                    <p className="projects-tools-single">react</p>
                                    <p className="projects-tools-single">redux</p>
                                    <p className="projects-tools-single">vercel</p>
                                </div>
                                <div className="projects-links">
                                    <a className="links-style" href="" >View Site</a>
                                    <a className="links-style" href="https://github.com/cetinyavuz1/fsweb-s8-challenge-pizza" target="_blank">Github</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}