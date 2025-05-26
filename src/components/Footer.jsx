import "../css/Footer.css"
import { useContext } from "react";
import { dataContext } from "../contexts/context";

export default function Footer() {

    const { languageData } = useContext(dataContext)

    return (
        <>
            <div className="footer-container">
                <h2 className="footer-header">{languageData.footer.title}</h2>
                <p className="footer-text">{languageData.footer.text}</p>
                <p className="footer-email">{languageData.footer.email}</p>
                <div className="footer-icons">
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-codepen"></i>
                    <i className="fa-brands fa-at"></i>
                    <i className="fa-brands fa-instagram "></i>
                </div>
            </div>
        </>
    )
}