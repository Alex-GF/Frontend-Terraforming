import {loginClickHandler, registerClickHandler} from "../../web-libs/loginRegisterLib.js";

const FirstPage = () => {

    return (

        <div className="row d-flex flex-column justify-content-center" id="start">
            <div className="row d-flex justify-content-center mx-0 px-0">
                <img src="./images/logo.png" alt="Logo Terraforming Mars"/>
            </div>

            <div className="row d-flex justify-content-center align-items-center mx-0 px-0">

                <div className="col-5"></div>
                <div className="col-2">
                    <a href="/" onClick={loginClickHandler}>
                        <div className="btn-login" id="login">
                            <span>Inicia sesión</span>
                        </div>
                    </a>

                    <a href="/">
                        <div className="btn-login" id="register" onClick={registerClickHandler}>
                            <span>Regístrate</span>
                        </div>
                    </a>

                </div>
                <div className="col-5"></div>
            </div>
        </div>

    );

}

export default FirstPage;