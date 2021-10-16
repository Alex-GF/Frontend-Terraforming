const PrivateRoom = () => {
    return(

        <>
            <div className="row justify-content-center align-items-center class-pretty-margin">
               <input type="text" className="class-privateRoom-input" placeholder="Introduce el código de una sala privada"></input>
            </div>
            <div className="row justify-content-center align-items-center class-pretty-margin2">
                <button className="btn btn-primary class-publicRooms-button">UNIRSE</button>
            </div>
        </>

    );
}

export default PrivateRoom;