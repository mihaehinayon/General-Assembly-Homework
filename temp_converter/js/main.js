var inputC = document.getElementById("inputC");
var inputF = document.getElementById("inputF");
var buttonConvert = document.getElementById("buttonConvert");

buttonConvert.onclick = convert;
inputF.onclick = reset;
inputC.onclick = reset;

function reset () {
	inputC.value = "";
	inputF.value = "";
}

function convert () {
	if (inputC.value != "") {
		inputF.value = Math.round(inputC.value * 9 / 5 + 32);
	} else {
		inputC.value = Math.round((inputF.value - 32) * 5 /9);
	}
}


