import FotoUser from "../components/profile/fotoUser";
import GlobalPunc from "../components/profile/globalPunc";
import Achievements from "../components/profile/achievements";
import FriendRequest from "../components/profile/friendRequest";

import "../static/css/profile.css";

const Profile = () => {

    return (

        <div className="container-fluid" id="global">

            <div className="row">
                <div className="col-md-6 d-flex flex-column align-items-center">
                    <FotoUser/>

                    <GlobalPunc/>

                    <Achievements/>

                    <FriendRequest/>
                </div>

                <div className="col-md-6 d-flex flex-column align-items-center">
                </div>
                
            </div>

        </div>

                    );

}

export default Profile;