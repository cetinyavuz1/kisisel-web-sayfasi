import "../css/Footer.css"

export default function Footer() {
    return (
        <>
            <div className="footer-container">
                <h2 className="footer-header">Send me a message!</h2>
                <p className="footer-text">Got a question or proposal, or just want
                    to say hello? Go ahead.</p>
                <p className="footer-email">cetinyavuz1@hotmail.com</p>
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