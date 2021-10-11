'use strict'

import {validarFormulario} from '/js/validators/form.js';

//-------------------------------- Trackeos --------------------------------

const loginBtnInicio = document.querySelector('#login');
const registerBtnInicio = document.querySelector('#register');
const inicioDiv = document.querySelector('#start');
const loginFormDiv = document.querySelector('#login-form');
const registerFormDiv = document.querySelector('#register-form');
const inputs = document.querySelectorAll('.form-control');
const loginBtnSubmit = document.querySelector('#loginBtnSubmit');

const arrow = document.querySelector('.arrow img');

//--------------------------------------------------------------------------

function main(){

    inputs.forEach((input) => {

        input.addEventListener('keyup', validarFormulario);
        input.addEventListener('blur', validarFormulario);

    });

    loginBtnInicio.onclick = loginClickHandler;

    registerBtnInicio.onclick = registerClickHandler;

    arrow.onclick = arrowClickHandler;

    loginBtnSubmit.onclick = (event) => {

        const form = document.querySelector('#form-html-login');
        const formularioLogin = new FormData(form);

        const incorrectos = document.querySelectorAll('.incorrecto');
        
        if(incorrectos.length === 0){
            //Enviar Formulario
        }

    }

}

function loginClickHandler(event) {

    inicioDiv.classList.add('desapareceTop');
        loginFormDiv.classList.add('aparece');
        arrow.style.display = 'block';
        setTimeout(() => {
            arrow.classList.add("arrow-appears");
        }, 1000);

}

function registerClickHandler(event){

    inicioDiv.classList.add('desapareceTop');
        registerFormDiv.classList.add('aparece');
        arrow.style.display = 'block';
        setTimeout(() => {
            arrow.classList.add("arrow-appears");
        }, 1000);

}

function arrowClickHandler(event){

    inicioDiv.classList.remove('desapareceTop');
    loginFormDiv.classList.remove('aparece');
    registerFormDiv.classList.remove('aparece');
    arrow.classList.remove('arrow-appears');

}

document.addEventListener('DOMContentLoaded', main);