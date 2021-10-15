const WinRate = () => {

    return(

        <>
            <div className="row">
                <div className="col-6">
                    <p className="stat-name">Partidas Jugadas</p>
                    <p className="stat">69</p>
                </div>
                <div className="col-6">
                    <p className="stat-name">Partidas Ganadas</p>
                    <p className="stat">31</p>
                </div>
            </div>
            <div className="row d-flex justify-content-center">
                <div className="d-flex justify-content-center align-items-center" id="star">
                    <span id="winrate">47.4%</span>
                </div>
            </div>
        </>
    );

}

export default WinRate;