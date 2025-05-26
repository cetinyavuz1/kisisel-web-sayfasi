import "../css/Profile.css"
import { useContext } from "react";
import { dataContext } from "../contexts/context";

export default function Profile() {

    const { languageData } = useContext(dataContext)

    return (
        <>
            <div className="profile-background">
                <div className="profile-container">
                    <h2 className="profile-header">{languageData.profile.title}</h2>
                    <div className="profile-info" >
                        <div className="profile-basic">
                            <h3 className="profile-header2">{languageData.profile.info}</h3>
                            {languageData.profile.personalInfo.map((elm) => {
                                return <div className="profile-personal" ><p className="profile-personal-header">{elm.title}</p><p className="profile-personal-text">{elm.answer}</p></div>
                            })}
                        </div>
                        <img className="profile-img" src={languageData.profile.profileImg} />
                        <div className="profile-about">
                            <h3 className="profile-header2">{languageData.profile.about}</h3>
                            <p className="profile-personal-text2">{languageData.profile.aboutInfo}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}