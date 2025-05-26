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
                            <div className="profile-personal" ><p className="profile-personal-header">{languageData.profile.personalHeader}</p><p className="profile-personal-text">{languageData.profile.personalAnswer}</p></div>
                            <div className="profile-personal"><p className="profile-personal-header">{languageData.profile.personalHeader2}</p><p className="profile-personal-text">{languageData.profile.personalAnswer2}</p></div>
                            <div className="profile-personal"><p className="profile-personal-header">{languageData.profile.personalHeader3}</p><p className="profile-personal-text">{languageData.profile.personalAnswer3}</p></div>
                            <div className="profile-personal"><p className="profile-personal-header">{languageData.profile.personalHeader4}</p><p className="profile-personal-text">{languageData.profile.personalAnswer4}</p></div>
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