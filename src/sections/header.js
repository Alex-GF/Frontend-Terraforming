import "../static/css/header.css";

import BuscarUsuarios from "../components/header/buscarUsuarios";
import BuscarPartida from "../components/header/buscarPartida";
import RankingsAndUser from "../components/header/rankingsAndUser";

const Header = () => {

    return (

        <header id="header">
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarScroll"
                        aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <a href="index.html"><img id="header-logo2" src="./images/logo.png" alt="Logo pic" width="auto" height="50px"/></a>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <BuscarUsuarios/>
                        <BuscarPartida/>
                        <RankingsAndUser/>
                    </div>
                </div>
            </nav>
        </header>

    );

}

export default Header;