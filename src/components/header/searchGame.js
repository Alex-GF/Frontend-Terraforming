import {useRef, useEffect, useState} from 'react';
import {Modal} from 'react-bootstrap';
import {Link} from "react-router-dom";
import PublicRooms from "../welcome/publicRooms.js";
import NewGame from "../../sections/newGame.js";

import "../../static/css/header.css";
import "../../static/css/welcome.css";
import "../../static/css/newGame.css";


const SearchGame = () => {

    let headerNew = useRef();
    let headerOnline = useRef();
    let headerLogo = useRef();
    const [showOnline, setShowOnline] = useState(false);
    const [showNew, setShowNew] = useState(false);

    const handleShowOnline = () => setShowOnline(true);
    const handleCloseOnline = () => setShowOnline(false);

    const handleShowNew = () => setShowNew(true);
    const handleCloseNew = () => setShowNew(false);

    useEffect(() => {

        headerNew.current.addEventListener('mouseover', function(){this.src =  "../images/new-edited.png";}, false);
        headerNew.current.addEventListener('mouseout',function(){this.src = "../images/new.png";}, false);

        headerOnline.current.addEventListener('mouseover', function(){this.src =  "../images/online-edited.png";}, false);
        headerOnline.current.addEventListener('mouseout',function(){this.src = "../images/online.png";}, false);

        headerLogo.current.addEventListener('mouseover', function(){this.src =  "../images/logo-edited.png";}, false);
        headerLogo.current.addEventListener('mouseout', function(){this.src = "../images/logo.png";}, false);


    }, []);

    return (
        <>
            <div className="col-auto" id="buscPartida">
                <div className="row justify-content-xl-center">
                    <button className="btn btn-secondary" title="Crea una nueva partida" onClick={handleShowNew}><img id="header-new" ref={headerNew} src="images/new.png"
                        alt="Create a new game pic" width="auto" height="35px" /></button>
                    <Link to="/welcome" id="header-complete-logo"><img id="header-logo" ref={headerLogo} src="images/logo.png" alt="Logo pic" width="auto" height="50px" /></Link>
                    <button className="btn btn-secondary" title="Únete a una partida online" onClick={handleShowOnline}><img id="header-online" ref={headerOnline} src="images/online.png"
                        alt="Online game mode pic" width="auto" height="35px" /></button>
                </div>
            </div>

            <Modal
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                show={showOnline}
                onHide={handleCloseOnline}
                centered
                id="modal-online"
                >
                <Modal.Header>
                    <Modal.Title>
                        BUSCAR PARTIDA
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body id="modal-online-body">
                    <PublicRooms/>
                </Modal.Body>
                <Modal.Body>
                    <div className="row justify-content-center align-items-center class-pretty-margin">
                        <div className="col-auto">
                            <input type="text" className="class-privateRoom-input" placeholder="Introduce el código de una sala privada"></input>
                        </div>
                        <div className="col-auto" id="modal-online-button">
                            <button className="btn btn-primary class-publicRooms-button">UNIRSE A LA SALA</button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

            <Modal
                size="auto"
                aria-labelledby="contained-modal-title-vcenter"
                show={showNew}
                onHide={handleCloseNew}
                centered
                id="modal-new"
                >
                <Modal.Header>
                    <Modal.Title>
                        CREAR PARTIDA
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body id="modal-new-body">
                    <NewGame/>
                </Modal.Body>
            </Modal>
        </>

    );

}

export default SearchGame;