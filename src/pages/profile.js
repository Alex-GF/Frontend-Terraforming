import FotoUser from "../components/profile/fotoUser";
import GlobalPunc from "../components/profile/globalPunc";
import Achievements from "../components/profile/achievements";
import FriendRequest from "../components/profile/friendRequest";
import WinRate from "../components/profile/winRate";
import Favourites from "../components/profile/favourites";
import Records from "../components/profile/records";

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
                    <span className="stats-title">ESTADÍSTICAS DE JUGADOR</span>
                    <div id="stats-container">
                        <WinRate/>
                        <Favourites/>
                        <Records/>
                    </div>
                </div>
                
            </div>

        </div>

                    );

}

export default Profile;