const GlobalPunc = () => {

    return(

        <div className="row global-score-row d-flex justify-content-between">
                <div className="my-score">223</div>
                <div className="bar"></div>
                <div className="global-position">
                    <img src="/images/copa.png" alt="Global Rank" className="trophy-icon"/>
                    <span id="personal-rank">24</span>
                </div>
        </div>

    );

}

export default GlobalPunc;