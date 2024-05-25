function isprime(form) {
	let isPrime = true;
	let number = form.value;
	// check if number is equal to 1
	if (number === 1) {
		form.value = "1 is neither prime nor composite number.";
	}
	// check if number is greater than 1
	else if (number > 1) {
		// looping through 2 to number-1
		for (let i = 2; i < number; i++) {
			if (number % i == 0) {
				isPrime = false;
				break;
			}
		}
		if (isPrime) {
			form.value = `${number} is a prime number`;
		} else {
			form.value = `${number} is a not prime number`;
		}
	}
	// check if number is less than 1
	else {
		console.log("The number is not a prime number.");
	}
}

function addChar(input, character) {
	if (input.value == null || input.value == "0") input.value = character;
	else input.value += character;
}

function sqrt(form) {
	form.value = Math.sqrt(form.value);
}

function exp(form) {
	form.value = Math.exp(form.value);
}

function fact(form) {
	let answer = form.value;
	if (answer == 0 || answer == 1) {
		return 1;
	} else {
		for (var i = answer - 1; i >= 2; i--) {
			answer = answer * i;
		}
	}
	return answer;
}

function deleteChar(screen) {
	screen.value = screen.value.substring(0, screen.value.length - 1);
}
var val = 0.0;

function modulo(input) {
	val = input.value;
	input.value = input.value + "%";
}

function changeSign(input) {
	if (input.value.substring(0, 1) == "-")
		input.value = input.value.substring(1, input.value.length);
	else input.value = "-" + input.value;
}

function compute(form) {
	form.value = eval(form.value);
}

function square(form) {
	var person = prompt(
		"Please enter times you wanna power it",
		"e.g.,2,3,4....."
	);
	var num = form.value;
	if (person != null) {
		alert("you want to power " + num + " -- " + person + " times");
	}
	document.getElementById("screen").value = Math.pow(num, person);
}

function checkNum(str) {
	for (var i = 0; i < str.length; i++) {
		var ch = str.charAt(i);
		if (ch < "0" || ch > "9") {
			if (
				ch != "/" &&
				ch != "*" &&
				ch != "+" &&
				ch != "-" &&
				ch != "." &&
				ch != "(" &&
				ch != ")" &&
				ch != "%"
			) {
				alert("invalid entry!");
				return false;
			}
		}
	}
	return true;
}
