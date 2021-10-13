import {useRef, useEffect} from 'react';

import "../../static/css/header.css";

const RankingsAndUser = () => {
    
    let headerRankings = useRef();
    let headerUsername = useRef();
    let headerUsernamePic = useRef();
    let headerProfile = useRef();
    let headerLogout = useRef();
    let headerDivider = useRef();
    
    useEffect(() => {

        headerRankings.current.addEventListener('mouseover', function(){this.src =  "../images/rankings-edited.png";}, false);
        headerRankings.current.addEventListener('mouseout', function(){this.src = "../images/rankings.png";}, false);

        headerUsername.current.addEventListener('mouseover', function(){
            this.style.fontWeight = "bold";
            headerUsernamePic.current.style.border = "5px solid #FFFFFF !important;";
            this.style.fontSize = "auto !important";
        }, false);
        headerUsername.current.addEventListener('mouseout', function(){
            this.style.fontWeight = "normal";
            headerUsernamePic.current.style.border = "1.5px solid #FFFFFF !important;";
            this.style.fontSize = "larger !important";
        }, false);

        headerProfile.current.addEventListener('mouseover', function(){
            this.style.background = "url('../images/profile-pic-edited.png'";
            this.style.fontWeight = "bold";
            headerDivider.current.style.border = "1px solid #FFFFFF";
        }, false);
        headerProfile.current.addEventListener('mouseout', function(){
            this.style.background = "url('../images/profile-pic.png'";
            this.style.fontWeight = "normal";
            headerDivider.current.style.border = "0.5px solid #FFFFFF";
        }, false);

        headerLogout.current.addEventListener('mouseover', function(){
            this.style.background = "url('../images/log-out-edited.png'";
            this.style.fontWeight = "bold";
            headerDivider.current.style.border = "1px solid #FFFFFF";
        }, false);
        headerLogout.current.addEventListener('mouseout', function(){
            this.style.background = "url('../images/log-out.png'";
            this.style.fontWeight = "normal";
            headerDivider.current.style.border = "0.5px solid #FFFFFF";
        }, false);

        headerDivider.current.addEventListener('mouseover', function(){this.style.border= "1px solid #FFFFFF";}, false);
        headerDivider.current.addEventListener('mouseout', function(){this.style.border= "1px solid #FFFFFF";}, false);


    }, []);

    return (

        <div className="col-auto" id="rankingAndUserDiv">
            <div className="row float-right">
                <div className="col-auto">
                    <a href="#" title="Accede al ranking mundial"><img id="header-rankings" ref={headerRankings} src="images/rankings.png" alt="Ranking pic" width="auto" height="35px" /></a>
                </div>
                <div className="col-auto d-flex">
                    <div className="dropdown">
                        <button id="header-username" ref={headerUsername} className="class-dropdown-profile dropdown-toggle" type="button" id="dropdownMenuButton1" data-toggle="dropdown" aria-expanded="false">
                            <img id="header-usernamePic" ref={headerUsernamePic} className="class-profile-icon-img" src="images/default-user.png" alt="Profile pic" /> <a className="class-header-profile">Usuario</a>
                        </button>
                        <ul className="dropdown-menu class-dropbtn-profile mt-2" aria-labelledby="dropdownMenuButton1">
                            <li><a id="header-profile" ref={headerProfile} className="dropdown-item button-icon-profile" href="/profile.html"> Perfil</a></li>
                            <li><hr id="header-divider" ref={headerDivider} className="dropdown-divider" /></li>
                            <li><a id="header-logout" ref={headerLogout} className="dropdown-item button-icon-logout" href="#"> Cerrar sesión</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default RankingsAndUser;