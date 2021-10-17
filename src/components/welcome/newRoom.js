import {useState} from 'react';
import {Modal} from 'react-bootstrap';
import NewGame from "../../sections/newGame.js";

import "../../static/css/newGame.css";

const NewRoom = () => {

    const [showNew, setShowNew] = useState(false);

    const handleShowNew = () => setShowNew(true);
    const handleCloseNew = () => setShowNew(false);
    
    return(

        <>
            <div className="row justify-content-center align-items-center class-pretty-margin class-publicRooms-title">
                <strong>¡Crea tu propia sala!</strong>
            </div>
            <div className="row justify-content-center align-items-center class-pretty-margin2">
                <button className="btn btn-primary class-newRoom-button" onClick={handleShowNew}>CREAR SALA</button>
            </div>

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

export default NewRoom;