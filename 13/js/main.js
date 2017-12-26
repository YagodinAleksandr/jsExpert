

var total = 0;

for (var i = 0; i<15; i++) {

	var first = Math.floor((Math.random() * 6) + 1);
	var second = Math.floor((Math.random() * 6) + 1);
	var number;
	var result;

	total += first + second;

	if (i == 8 || i == 13 ) {
		continue;
	}

	if (first == second) {
		number = first;
		document.getElementById("result").innerHTML += " Выпал дубль. Число " +  number + "<br>";
		continue;
	}

	if (first < 3 && second > 4) {
		result = second - first;
		document.getElementById("result").innerHTML += "Большой разброс между костями. Разница составляет " + result + "<br>";
		continue;
	}

	document.getElementById("result").innerHTML += "Первая кость: " + first + " <-> " + "Вторая кость: " + second + "<br>";

}

(total > 100) ? document.getElementById("result").innerHTML += "<br>" + "Победа, ваш счет " + total + " !!!" : document.getElementById("result").innerHTML += "<br>" + "Вы проиграли, ваш счет " + total + " (";
