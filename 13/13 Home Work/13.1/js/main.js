'use strict';

(function () {

	let total =0,
		first,
		second,
		difference,
		result;

	let resultMsg = "",
		messege = "";

	let getRndNumber = () => {return Math.floor((Math.random() * 6) + 1);};

	let setResult = (text) => {resultMsg += text;};

	let isNumbersEqual = (first, second) => {
		if (first == second) {
			setResult(" Выпал дубль!!!");
		};
	};

	let isBigDifference = () => {

			if ((first > 3 && second < 4) || (first < 4 && second > 3)) {

				difference = first-second;
				result = Math.abs(difference);
				messege = " Большой разброс между костями. Разница составляет " + result + ".";

				setResult(messege);

			};
	};

	let saveInTotal = () => {total += first + second;};

	let resultTotal =  () => {

			let value = (total > 100) ? "Победа, вы набрали " + total + " очков!!!" : "Вы проиграли, у вас " + total + " очков(";

			return value;
	};

	let printResult = () => {document.getElementById("result").innerHTML = resultMsg + "<br>" + resultTotal();};


	function init () {

		for (let i = 0; i<15; i++) {

			if (i == 8 || i == 13 ) {
				continue;
			};

			first = getRndNumber();
			second = getRndNumber();

			setResult("Первая кость: " + first + " <-> " + "Вторая кость: " + second);
			isNumbersEqual(first, second);
			isBigDifference();
			saveInTotal();
			setResult("<br>");
		}

		printResult();

	}

	init();

}());
