import {useRef, useEffect} from 'react';

import {Link} from "react-router-dom";

import {Dropdown} from "react-bootstrap";

import "../../static/css/header.css";

const RankingsAndUser = () => {
    
    let headerRankings = useRef();
    let headerUsername = useRef();
    let headerUsernamePic = useRef();
    
    useEffect(() => {

        headerRankings.current.addEventListener('mouseover', function(){this.src =  "../images/rankings-edited.png";}, false);
        headerRankings.current.addEventListener('mouseout', function(){this.src = "../images/rankings.png";}, false);

        headerUsername.current.addEventListener('mouseover', function(){
            this.style.fontWeight = "bold";
            headerUsernamePic.current.style.border = "5px solid #FFFFFF !important;";
            headerUsername.current.style.background = "transparent";
            headerUsername.current.style.borderColor = "transparent";

            this.style.fontSize = "auto !important";
        }, false);

        headerUsername.current.addEventListener('focus', ()=>{
            headerUsername.current.style.outline = "black";
        });

        headerUsername.current.addEventListener('mouseout', function(){
            this.style.fontWeight = "normal";
            headerUsernamePic.current.style.border = "1.5px solid #FFFFFF !important;";
            this.style.fontSize = "larger !important";
        }, false);


    }, []);

    return (

        <div className="col-auto" id="rankingAndUserDiv">
            <div className="row float-right">
                <div className="col-auto">
                    <Link to="/ranking" title="Accede al ranking mundial"><img id="header-rankings" ref={headerRankings} src="images/rankings.png" alt="Ranking pic" width="auto" height="35px" /></Link>
                    </div>
                <div className="col-auto d-flex">

                    <Dropdown>

                        <Dropdown.Toggle id="header-username" className="class-dropdown-profile" ref={headerUsername}> 
                        
                            <img 
                                id="header-usernamePic" 
                                ref={headerUsernamePic} 
                                className="class-profile-icon-img" 
                                src="images/default-user.png" 
                                alt="Profile pic" 
                            /> 
                            
                            <span className="class-header-profile"> Usuario</span> 
                        
                        </Dropdown.Toggle>

                        <Dropdown.Menu>

                            <Dropdown.Item><Link className="dropdown-item button-icon-profile" to="/profile">Perfil</Link></Dropdown.Item>
                            <Dropdown.Divider></Dropdown.Divider>
                            <Dropdown.Item><Link className="dropdown-item button-icon-logout" to="/profile">Cerrar Sesión</Link></Dropdown.Item>

                        </Dropdown.Menu>

                    </Dropdown>

                </div>
            </div>
        </div>

    );
}

export default RankingsAndUser;