import {useRef, useEffect} from 'react';

import {Link} from "react-router-dom";

import "../../static/css/header.css";

const BuscarPartida = () => {

    let headerNew = useRef();
    let headerOnline = useRef();
    let headerLogo = useRef();

    useEffect(() => {

        headerNew.current.addEventListener('mouseover', function(){this.src =  "../images/new-edited.png";}, false);
        headerNew.current.addEventListener('mouseout',function(){this.src = "../images/new.png";}, false);

        headerOnline.current.addEventListener('mouseover', function(){this.src =  "../images/online-edited.png";}, false);
        headerOnline.current.addEventListener('mouseout',function(){this.src = "../images/online.png";}, false);

        headerLogo.current.addEventListener('mouseover', function(){this.src =  "../images/logo-edited.png";}, false);
        headerLogo.current.addEventListener('mouseout', function(){this.src = "../images/logo.png";}, false);


    }, []);

    return (

        <div className="col-auto" id="buscPartida">
            <div className="row justify-content-xl-center">
                <button className="btn btn-secondary" title="Crea una nueva partida"><img id="header-new" ref={headerNew} src="images/new.png"
                    alt="Create a new game pic" width="auto" height="35px" /></button>
                <Link to="/" id="header-complete-logo"><img id="header-logo" ref={headerLogo} src="images/logo.png" alt="Logo pic" width="auto" height="50px" /></Link>
                <button className="btn btn-secondary" title="Únete a una partida online"><img id="header-online" ref={headerOnline} src="images/online.png"
                    alt="Online game mode pic" width="auto" height="35px" /></button>
            </div>
        </div>

    );

}

export default BuscarPartida;