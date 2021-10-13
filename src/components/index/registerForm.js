const RegisterForm = () => {

    return (

        <div id="register-form">
            <form method="post" id="form-html-register">
                <div className="row">
                    <div className="col-md-1 col-2"></div>
                    <div className="col-md-4 col-8">
                        <div className="row">

                            <input type="text" className="form-control" id="usuario-input-register" name="usuario" placeholder="Usuario"
                                required />

                        </div>

                        <div className="row mt-3">

                            <input type="password" className="form-control" id="password-input-register" name="password" placeholder="Contraseña"
                                required />

                        </div>

                        <div className="row d-flex justify-content-center mt-3">
                            <div className="col-3"></div>
                            <div className="col-6">
                                <a href="/">
                                    <div className="btn-login" id="registerBtnSubmit"><span>Register</span></div>
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