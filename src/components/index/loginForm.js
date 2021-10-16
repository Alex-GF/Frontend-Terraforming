import { useEffect} from 'react';
import { validarFormulario } from '../../web-libs/validators/form.js';
import {registerLoginClickHandler} from "../../web-libs/loginRegisterLib.js";

const LoginForm = () => {

    useEffect(() => {
        let inputs = document.querySelectorAll('.form-control');

        inputs.forEach((input) => {

            input.addEventListener('keyup', validarFormulario);
            input.addEventListener('blur', validarFormulario);

        });

    }, []);

    return (

        <div id="login-form">
            <form method="post" id="form-html-login">
                <div className="row">
                    <div className="col-md-1 col-2"></div>
                    <div className="col-md-4 col-8">
                        <div className="row">

                            <input type="text" className="form-control" id="usuario-input-login" name="usuario" placeholder="Usuario" title="Escriba su nombre de usuario"
                                required />

                        </div>

                        <div className="row mt-3">

                            <input type="password" className="form-control" id="password-input-login" name="password" placeholder="Contraseña" title="Escriba su contraseña"
                                required />

                        </div>

                        <div className="row d-flex justify-content-center mt-3">
                            <div className="col-2"></div>
                            <div className="col-8 col-texto">
                                <span>¿No tienes una cuenta? </span><a href="/"
                                    id="registro" onClick={registerLoginClickHandler}>Regístrate</a>
                            </div>
                            <div className="col-2"></div>
                        </div>

                        <div className="row d-flex justify-content-center mt-3">
                            <div className="col-3"></div>
                            <div className="col-6">
                                <a href="/">
                                    <div className="btn-login" id="loginBtnSubmit"><span>Inicia sesión</span></div>
                                </a>
                            </div>
                            <div className="col-3"></div>
                        </div>

                    </div>
                    <div className="col-md-7 col-2"></div>
                </div>

            </form>
        </div>

    );
}

export default LoginForm;