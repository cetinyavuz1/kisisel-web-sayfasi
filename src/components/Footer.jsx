import "../css/Footer.css"
import { useContext } from "react";
import { dataContext } from "../contexts/context";

export default function Footer() {

    const { languageData } = useContext(dataContext)

    return (
        <>
            <div className="footer-background">
                <div className="footer-container">
                    <h2 className="footer-header">{languageData.footer.title}</h2>
                    <p className="footer-text">{languageData.footer.text}</p>
                    <p className="footer-email">{languageData.footer.email}</p>
                    <div className="footer-icons">
                        {languageData.footer.icons.map((elm, index) => {
                            return <a href={elm.link} key={index} target="_blank"><i className={elm.class}></i></a>
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}