'use strict'

var userValidation = new UserValidation();

function UserValidation () {

    this.warningsMessege = '';
    this.validationResult = false;

    this.getLogAndPass = function getLogAndPass(login, password) {
        this.login = login.value;
        this.password = password.value;
    };

    this.validateUser = function validateUser() {
        let validEmail = /^\w+@\w+\.\w{2,4}$/i;
        if (this.login == '') {
            this.warningsMessege = 'Заполните поле Email';
        }
        else if (!validEmail.test(this.login)) {
            this.warningsMessege = 'Введите корректно ваш Email';
        }
        else if (this.login !== localStorage.login) {
            this.warningsMessege = 'Неверный Email';
        }
        else if (this.password == '') {
            this.warningsMessege = 'Введите пароль';
        }
        else if (this.password !== localStorage.password) {
            this.warningsMessege = 'Неверный пароль'
        }
        else {this.validationResult = true};
    };

    this.isUserValid = function checkResult() {
        return this.validationResult;
    };

    this.getWarningsMessege = function getWarningsMessege() {
        return this.warningsMessege
    };
};
