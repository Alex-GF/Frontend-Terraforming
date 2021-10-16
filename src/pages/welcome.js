import PublicRooms from "../components/welcome/publicRooms";
import PrivateRoom from "../components/welcome/privateRoom";
import NewRoom from "../components/welcome/newRoom";

import "../static/css/welcome.css";

const Welcome = () => {

    return (

        <div className="container-fluid global-container">
            <div className="row justify-content-center align-items-center">
                <div className="col-8 d-flex flex-column align-items-center class-welcome-box">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-auto">
                            <PublicRooms/>
                        </div>
                    </div>
                    <div className="row justify-content-center align-items-center class-margin">
                        <div className="col-md-6">
                            <PrivateRoom/>
                        </div>
                        <div className="col-md-6">
                            <NewRoom/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

                    );

}

export default Welcome;