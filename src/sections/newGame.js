const NewGame = () => {
    return(

        <>
            <div className="row justify-content-center align-items-center">
                <div className="col-auto">
                    <div className="row justify-content-center align-items-center">
                        <strong>NÚMERO DE JUGADORES</strong>
                    </div>
                    <div className="row justify-content-center align-items-center class-pretty-padding">
                        <strong>VARIANTE POR ELECCIÓN Y DESCARTE</strong>
                    </div>
                    <div className="row justify-content-center align-items-center class-pretty-padding">
                        <strong>CARTAS DE LA ERA CORPORATIVA</strong>
                    </div>
                    <div className="row justify-content-center align-items-center class-pretty-padding">
                        <strong>CARTAS DE PRELUDIO</strong>
                    </div>
                    <div className="row justify-content-center align-items-center class-pretty-padding">
                        <strong>TIPO DE PARTIDA</strong>
                    </div>
                </div>
                <div className="col-auto">
                    <div className="row justify-content-center align-items-center">
                        <button className="class-btn-left"></button>
                        <strong className="class-value">6</strong>
                        <button className="class-btn-right"></button>
                    </div>
                    <div className="row justify-content-center align-items-center class-pretty-padding">
                        <button className="class-btn-left"></button>
                        <strong className="class-value">SÍ</strong>
                        <button className="class-btn-right"></button>
                    </div>
                    <div className="row justify-content-center align-items-center class-pretty-padding">
                        <button className="class-btn-left"></button>
                        <strong className="class-value">SÍ</strong>
                        <button className="class-btn-right"></button>
                    </div>
                    <div className="row justify-content-center align-items-center class-pretty-padding">
                        <button className="class-btn-left"></button>
                        <strong className="class-value">SÍ</strong>
                        <button className="class-btn-right"></button>
                    </div>
                    <div className="row justify-content-center align-items-center class-pretty-padding">
                        <button className="class-btn-left"></button>
                        <strong className="class-value">PÚBLICA</strong>
                        <button className="class-btn-right"></button>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center align-items-center class-pretty-padding2">
                <button className="btn btn-primary class-newRoom-button">CREAR PARTIDA</button>
            </div>
        </>

    );
}

export default NewGame;