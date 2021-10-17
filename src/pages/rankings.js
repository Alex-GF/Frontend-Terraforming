import Ranking from "../components/rankings/ranking";
import "../static/css/rankings.css";


const Rankings = () => {

    return (

        <div className="container-fluid global-container">
            <div className="row justify-content-center align-items-center">
                <div className ="col-8 d-flex flex-column align-items-center class-RankingBox">
                <div className="row justify-content-center align-items-center">
                        <div className="col-auto">
                    <Ranking/>
                </div>
                    </div>
                </div>
            </div>
        </div>

                    );

}

export default Rankings;