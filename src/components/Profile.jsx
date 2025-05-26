import "../css/Profile.css"

export default function Profile() {
    return (
        <>
            <div className="profile-background">
                <div className="profile-container">
                    <h2 className="profile-header">Profile</h2>
                    <div className="profile-info" >
                        <div className="profile-basic">
                            <h3 className="profile-header2">Basic Information</h3>
                            <div className="profile-personal" ><p className="profile-personal-header">Doğum Tarihi</p><p className="profile-personal-text">30.07.1998</p></div>
                            <div className="profile-personal"><p className="profile-personal-header">İkamet Şehri</p><p className="profile-personal-text">İzmir</p></div>
                            <div className="profile-personal"><p className="profile-personal-header">Eğitim Durumu</p><p className="profile-personal-text">Dumlupınar Ünv. İngiliz Dili ve Edebiyatı Lisans, 2021</p></div>
                            <div className="profile-personal"><p className="profile-personal-header">Tercih Ettiği Rol</p><p className="profile-personal-text">Frontend, UI</p></div>
                        </div>
                        <img className="profile-img" src="./src/assets/kedy2.jpg" />
                        <div className="profile-about">
                            <h3 className="profile-header2">About Me</h3>
                            <p className="profile-personal-text2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.</p>
                            <p className="profile-personal-text2">Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}