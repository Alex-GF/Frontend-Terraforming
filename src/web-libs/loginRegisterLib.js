const loginClickHandler = (e) => {

    e.preventDefault();

    let inicioDiv = document.querySelector('#start');
    let loginFormDiv = document.querySelector('#login-form');
    let arrow = document.querySelector('.arrow img');

    inicioDiv.classList.add('desapareceTop');
    loginFormDiv.classList.add('aparece');
    arrow.style.display = 'block';
    setTimeout(() => {
        arrow.classList.add("arrow-appears");
    }, 1000);

};

const registerClickHandler = (e) => {

    e.preventDefault();

    let inicioDiv = document.querySelector('#start');
    let registerFormDiv = document.querySelector('#register-form');
    let arrow = document.querySelector('.arrow img');
    inicioDiv.classList.add('desapareceTop');
    registerFormDiv.classList.add('aparece');
    arrow.style.display = 'block';
    setTimeout(() => {
        arrow.classList.add("arrow-appears");
    }, 1000);

}

const arrowClickHandler = (e) => {

    e.preventDefault();
    
    let loginFormDiv = document.querySelector('#login-form');
    let registerFormDiv = document.querySelector('#register-form');
    let inicioDiv = document.querySelector('#start');
    let arrow = document.querySelector('.arrow img');
    inicioDiv.classList.remove('desapareceTop');
    loginFormDiv.classList.remove('aparece');
    registerFormDiv.classList.remove('aparece');
    arrow.classList.remove('arrow-appears');

}

export {loginClickHandler, registerClickHandler, arrowClickHandler};