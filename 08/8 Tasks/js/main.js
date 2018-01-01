'use strict';

// first task

var msg = "";

let value,
		number,
		text;

for (let i = 1; i < 8; i++) {

	value = i;
	value *= i;

	msg += "Квадрат " + i + " = " + value + "<br>";
};

msg += "<br>";

// second task - variant 1

for (let i = 1; i <= 15; i++) {

	number = i;
	value = i % 2;

	if (value == 1) {
		text = "Нечетное;"
	} else {
		text = "Четное;"
	};

	msg += "Число " + number +". " + text + "<br>";

};

msg += "<br>";

// second task - variant 2

console.log("Второй вариант")

let y = 1;

while (y <= 15) {
	number = y;
	value = y % 2;

	if (value == 1) {
		text = "Нечетное;"
	} else {
		text = "Четное;"
	};

	console.log("Число " + number +". " + text);

	y++;

};

// second task - variant 3

console.log("Третий вариант")

let x = 1;

do {
	number = x;
	value = x % 2;

	if (value == 1) {
		text = "Нечетное;"
		} else {
		text = "Четное;"
	};

	console.log("Число " + number +". " + text);

	x++;

	} while (x <= 15) {

};

//third task

for (let i = 120; i > 0;) {

	if (i > 60) {
		i -= 20;

		msg += 'Число: <b>' + i + '</b><br>';

	} else {
		i -= 10;

		msg += 'Число: <b>' + i + '</b><br>';

	}
};

document.getElementById("result").innerHTML = msg;
