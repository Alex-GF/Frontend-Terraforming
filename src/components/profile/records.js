const Records = () => {

    return (

        <>
            <div className="row d-flex justify-content-center">
                <span className="stat-name">RECORDS</span>
            </div>

            <div className="row d-flex justify-content-center" id="records-row">

                <div className="d-flex flex-column align-items-center">
                    <img src="./images/resources/megacredit.png" alt="Megacrédito" className="record"/>
                    <span id="record-value">69</span>
                </div>
                <div className="d-flex flex-column align-items-center">
                    <img src="./images/resources/steel.png" alt="Acero" className="record"/>
                    <span id="record-value">24</span>
                </div>
                <div className="d-flex flex-column align-items-center">
                    <img src="./images/resources/titanium.png" alt="Titanio" className="record"/>
                    <span id="record-value">20</span>
                </div>
                <div className="d-flex flex-column align-items-center">
                    <img src="./images/resources/plant.png" alt="Planta" className="record"/>
                    <span id="record-value">46</span>
                </div>
                <div className="d-flex flex-column align-items-center">
                    <img src="./images/resources/power.png" alt="Energía" className="record"/>
                    <span id="record-value">9</span>
                </div>
                <div className="d-flex flex-column align-items-center">
                    <img src="./images/resources/heat.png" alt="Calor" className="record"/>
                    <span id="record-value">33</span>
                </div>

            </div>
        </>

    );

}

export default Records;