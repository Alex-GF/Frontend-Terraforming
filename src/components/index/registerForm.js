import React from "react";

const RegisterForm = () => {

    const [shown, setShown] = React.useState(false);
    const [password, setPassword] = React.useState('');
    const switchShown = () => setShown(!shown);
    const onChange = ({ currentTarget }) => setPassword(currentTarget.value);

    return (

        <div id="register-form">
            <form method="post" id="form-html-register">
                <div className="row">
                    <div className="col-md-1 col-2"></div>
                    <div className="col-md-4 col-8">
                        <div className="row">

                            <input type="text" className="form-control" id="nombre-input-register" name="nombre" placeholder="Nombre" title="Escriba su nombre completo"
                                required />

                        </div>
                        <div className="row mt-3">

                            <input type="text" className="form-control" id="apellidos-input-register" name="apellidos" placeholder="Apellidos" title="Escriba sus apellidos"
                                required />

                        </div>
                        <div className="row mt-3">

                            <input type="text" className="form-control" id="usuario-input-register" name="usuario" placeholder="Usuario" title="Escriba su nombre de usuario"
                                required />

                        </div>

                        <div className="row mt-3">

                            <input onChange={onChange} type={shown ? 'text' : 'password'} value={password} className="form-control" id="password-input-register" name="password" placeholder="Contraseña"
                                title="Escriba su contraseña" required />
                            {/* <button className="password__button" onClick={switchShown}>{shown ? "Ocultar" : "Mostrar"}</button> */}
                            
                        </div>

                        <div className="row mt-3">

                            <input type="password" className="form-control" id="password2-input-register" name="password2" placeholder="Repita la contraseña"
                                title="Escriba de nuevo su contraseña" required />

                        </div>

                        <div className="row mt-3">

                            <input type="email" className="form-control" id="email-input-register" name="email" placeholder="Email" title="Escriba su dirección de correo electrónico"
                                required />

                        </div>

                        <div className="row mt-3 d-flex justify-content-center">
                            <label>
                                <input type="checkbox" id="acepta-input-register"
                                name="acepta" required/> 
                                
                                <span id="texto-politicas">  Acepto los términos de uso y las políticas de privacidad</span>
                            </label>
                        </div>

                        <div className="row d-flex justify-content-center mt-3">
                            <div className="col-3"></div>
                            <div className="col-6">
                                <a href="/">
                                    <div className="btn-login" id="registerBtnSubmit"><span>Regístrame</span></div>
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

export default RegisterForm;