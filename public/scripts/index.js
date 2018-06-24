var textElem = document.getElementById("clocktext");
var counter = 0;

function updateClock() {
	var d = new Date();
	var s = "{ ";
	var text = ["D", "DE", "DEV", "DEVE", "DEVEL", "DEVELO", "DEVELOP", "DEVELOPE", "DEVELOPER", "DEVELOPER."];
	s += text[counter++];
	s += " }"
	textElem.textContent = s;
	if (counter == 10) {
		counter = 0;
		setTimeout(updateClock, 3000);
	} else {
		setTimeout(updateClock, 300);
	}
}

updateClock();