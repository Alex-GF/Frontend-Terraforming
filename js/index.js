'use strict'

import {validarFormulario} from '/js/validators/form.js';

function main(){

    const loginBtnInicio = document.querySelector('#login1');
    const inicioDiv = document.querySelector('#start');
    const loginFormDiv = document.querySelector('#login-form');
    const inputs = document.querySelectorAll('.form-control');
    const loginBtnSubmit = document.querySelector('#loginBtnSubmit');
    
    inputs.forEach((input) => {

        input.addEventListener('keyup', validarFormulario);
        input.addEventListener('blur', validarFormulario);

    });

    loginBtnInicio.onclick = (event) => {

        inicioDiv.classList.add('desapareceTop');
        loginFormDiv.classList.add('aparece');

    };

    loginBtnSubmit.onclick = (event) => {

        const form = document.querySelector('#form-html-login');
        const formularioLogin = new FormData(form);

        const incorrectos = document.querySelectorAll('.incorrecto');
        
        if(incorrectos.length === 0){
            //Enviar Formulario
        }

    }

}

document.addEventListener('DOMContentLoaded', main);