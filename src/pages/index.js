import {arrowClickHandler} from "../web-libs/loginRegisterLib.js";

import LoginForm from "../components/index/loginForm";
import FirstPage from '../components/index/firstPage';
import RegisterForm from "../components/index/registerForm";

import "../static/css/index.css";
import "../static/css/loginFormStyle.css";

const Index = () => {
    
    return (

        <div className="global-container container-fluid d-flex flex-column justify-content-center">
            <a href="/" className="arrow" onClick={arrowClickHandler}><img src="../images/left-arrow.png" alt="Flecha"/></a>
            <FirstPage/>
            <LoginForm/>
            <RegisterForm/>
        </div>

    );
}

export default Index;