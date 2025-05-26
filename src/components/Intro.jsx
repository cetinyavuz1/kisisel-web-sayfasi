import "../css/Intro.css"

export default function Intro() {

    const handleRedirect = () => {
        window.open("https://github.com/cetinyavuz1", "_blank")
    };

    return (
        <>
            <div className="intro-background">
                <div className="intro-container">
                    <div className="intro-intro">
                        <h2 className="intro-header">I am a Frontend Developer...</h2>
                        <p className="intro-info">...who likes to craft solid and scalable frontend products with great user experiences.</p>
                        <div className="intro-buttons">
                            <button onClick={handleRedirect} className="intro-button">
                                <i class="fa-brands fa-github"></i>
                                <p className="button-text">Github</p>
                            </button>
                            <button className="intro-button">
                                <i class="fa-brands fa-linkedin-in"></i>
                                <p className="button-text">Linkedin</p>
                            </button>
                        </div>
                    </div>
                    <img className="intro-img" src="./src/assets/kedy.PNG" alt="" />
                </div>
            </div>
        </>
    )
}