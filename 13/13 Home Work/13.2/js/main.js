'use strict';

(function(){

	let btn = document.getElementById("play");
	let player1 = document.getElementById("player1");
	let player2 = document.getElementById("player2");
	let messege = document.getElementById("result");

	let getPlayerResult = () => {
	    return Math.floor((Math.random() * 3) + 1);
	};

	let getNameById = (id) => {
		let value;

		switch (id) {
			case 1:
			    value = "Камень";
			    break;
			case 2:
			    value = "Ножницы";
			    break;
			case 3:
			    value = "Бумага";
			    break;
		};

		return value;
	};

	let determineWinner = (first, second) => {

			let value;

			if (first == second) {
				value = 3;
			}
			else
				if (first == 1 && second == 2) {
					value = 1;
					}
				else
					if (first == 1 && second == 3) {
						value = 2;
					  	}
					  	else
					  		if (first == 2 && second == 1) {
						  		value = 2;
						    }
						    else
						    	if (first == 2 && second == 3) {
						    		value = 1;
							    }
							    else
							    	if (first == 3 && second == 1) {
							      		value = 1;
								    }
								    else
								    	if (first == 3 && second == 2) {
								      		value = 2;
								    }

			return value;

	};

	let printResult = (value) => {

		let msg;

		if (value == 3) {
			msg = "Ничья, пробуйте еще раз";
		}
		else
			if (value == 2) {
				msg = "Выйграл второй игрок";
			}
			else
				if (value == 1) {
					msg = "Выйграл первый игрок";
				}

		messege.innerHTML = msg;

	};

	function runGame() {
		let firstPlayer = getPlayerResult();
		let secondPlayer = getPlayerResult();

	  player1.innerHTML = getNameById(firstPlayer);
	  player2.innerHTML = getNameById(secondPlayer);

		printResult(determineWinner(firstPlayer, secondPlayer));
	}

	btn.addEventListener("click", runGame);

})();
