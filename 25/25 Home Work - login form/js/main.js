'use strict'

var userValidationComponent = (function () {

    let login = document.getElementById('inputEmail'),
        password = document.getElementById('inputPassword'),
        userLoginForm = document.getElementById('userLoginForm'),
        warningsWindow = document.getElementById('warnings'),
        userInfo = document.getElementById('userInfo'),
        showEmail = document.getElementById('showEmail'),
        showPassword = document.getElementById('showPassword'),
        btnShowPassword = document.getElementById('showPasswordBtn'),
        btnComeBack = document.getElementById('comeBackBtn');

    function setLogAndPass (login, password) {
        localStorage.setItem('login', `${login}`);
        localStorage.setItem('password', `${password}`);
    };

    let showWarnings = (warningsMessege) => {
        warningsWindow.innerHTML =
        `<div  class="alert alert-danger" role="alert">
            ${warningsMessege}
        </div>`
    };

    let hideWarnings = () => {
        warningsWindow.innerHTML = '';
    };

    let innerUserInfo = () => {
        showEmail.value = localStorage.login;
        showPassword.value = localStorage.password;
    };

    let showUserInfo = () => {
        innerUserInfo();
        userLoginForm.classList.toggle('display-hide');
        userInfo.classList.toggle('display-hide');
    };

    let showUserPassword = () => {
        if(showPassword.type == 'text') {
            showPassword.type = 'password';
        }
        else {showPassword.type = 'text';}
    };

    let formValidation = () => {
        userValidation.getLogAndPass(login, password);
        userValidation.validateUser();
        if (userValidation.isUserValid()) {
            hideWarnings();
            showUserInfo();
        } else {
        showWarnings(userValidation.getWarningsMessege());
        };
    };

    let initListeners = () => {
        userLoginForm.addEventListener('submit', formValidation);
        btnComeBack.addEventListener('click', showUserInfo);
        btnShowPassword.addEventListener('click', showUserPassword);
    };

    function initComponent() {
        initListeners();
    };

    return {
        setLogAndPass : setLogAndPass,
        initComponent : initComponent
    };

})();

userValidationComponent.setLogAndPass('alexandr@gmail.com', '12345678');
userValidationComponent.initComponent();
