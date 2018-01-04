'use strict';

// first task

let msg = "На ветке сидит ";

 let userNumber = +prompt("Введите любое число");

let counting = (number) => {

	let symbol = number.toString().slice(-1);
	let endMsg = "";

	if (number < 20 && number > 10 || symbol == 0) {

		endMsg = "ворон;"

	} else {

		if ( symbol == 2 || symbol == 3 || symbol == 4 ) {

			endMsg = "вороны";

		} else if ( symbol == 1) {

			endMsg = "ворона";

		};

	};

	msg += number + " " + endMsg;

};

counting(userNumber);

msg += "<br>";

// second task

let userString = prompt("Введите любую стоку")

let checkString = (userString) => {

	if (userString.length >= 15) {

		msg += userString.substring(0, 14) + "..."

	} else {

		msg += userString;
	}
};

checkString(userString);

msg += "<br>";

// third task

let year = +prompt("Введите любой год");

let checkYear = () => {

	let checkResult = isFinite()

	if (isFinite(year)){

		let value4 = year % 4;
		let value100 = year % 100;
		let value400 = year % 400;

		if ((value4 == 0 && value100 != 0) || (value400 == 0)) {

			msg += "Да это высокосный год"

		} else {

			msg += "Нет этот год не высокосный"

		}

	} else {

		msg += "Ошибка! Принимаются только числовые значения";

	}

}

checkYear();

document.getElementById("result").innerHTML = msg;
