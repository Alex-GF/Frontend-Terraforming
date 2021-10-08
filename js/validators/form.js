'use strict';

const expresiones = {

    usuario: /^[a-zA-Z0-9\_\-]{4,16}/,
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^[\+0-9]{3,4}[\s0-9]\d{3,14}$/,
    fecha: /^[0-9]{4}\-[0-9]{2}\-[0-9]{2}/

}

const validarFormulario = (e) => {

    switch (e.target.name){

        case "usuario":

            if(expresiones.usuario.test(e.target.value)){ 
                
                document.getElementById("usuario-input").classList.remove('incorrecto');
                document.getElementById("usuario-input").classList.add('correcto');

            }else{

                document.getElementById("usuario-input").classList.remove('correcto');
                document.getElementById("usuario-input").classList.add('incorrecto');

            }

            break;

        case "password":

            if(expresiones.usuario.test(e.target.value)){ 
                
                document.getElementById("password-input").classList.remove('incorrecto');
                document.getElementById("password-input").classList.add('correcto');

            }else{

                document.getElementById("password-input").classList.remove('correcto');
                document.getElementById("password-input").classList.add('incorrecto');

            }

            break;

        case "email":

            if(expresiones.correo.test(e.target.value)){ 
                
                document.getElementById("email-input").classList.remove('incorrecto');
                document.getElementById("email-input").classList.add('correcto');

            }else{

                document.getElementById("email-input").classList.remove('correcto');
                document.getElementById("email-input").classList.add('incorrecto');

            }

            break;

        case "telefono":

            if(expresiones.telefono.test(e.target.value)){ 
                
                document.getElementById("telefono-input").classList.remove('incorrecto');
                document.getElementById("telefono-input").classList.add('correcto');

            }else{

                document.getElementById("telefono-input").classList.remove('correcto');
                document.getElementById("telefono-input").classList.add('incorrecto');

            }

            break;

        case "fecha":

            if(expresiones.fecha.test(e.target.value)){ 
                
                document.getElementById("fecha-input").classList.remove('incorrecto');
                document.getElementById("fecha-input").classList.add('correcto');

            }else{

                document.getElementById("fecha-input").classList.remove('correcto');
                document.getElementById("fecha-input").classList.add('incorrecto');

            }

            break;

        case "numero-invitados":

            if(e.target.value > 0){ 
                
                document.getElementById("num-inv-input").classList.remove('incorrecto');
                document.getElementById("num-inv-input").classList.add('correcto');

            }else{

                document.getElementById("num-inv-input").classList.remove('correcto');
                document.getElementById("num-inv-input").classList.add('incorrecto');

            }

            break;

    }
}


export {expresiones, validarFormulario};