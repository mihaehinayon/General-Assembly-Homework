var botScore=0,
	playerScore=0;
document.getElementById("rock").onclick=playerThrowsRock;
function playerThrowsRock(){
	var botsWeapon=getRandomWeapon();
	checkWhoWon(botsWeapon,"rock");
	humanStatus("You played <u>rock</u>.");
}

document.getElementById("scissors").onclick=playerThrowsScissors;
function playerThrowsScissors(){
	var botsWeapon=getRandomWeapon();
	checkWhoWon(botsWeapon,"scissors");
	humanStatus("You played <u>scissors</u>.");
}

document.getElementById("paper").onclick=playerThrowsPaper;
function playerThrowsPaper(){
	var botsWeapon=getRandomWeapon();
	checkWhoWon(botsWeapon,"paper");
	humanStatus("You played <u>paper</u>.");
}

function getRandomWeapon(){
	var randomNumber=Math.random();
	var botsWeapon;
	
	if(randomNumber<=.33){
		botsWeapon="scissors";
		computerStatus("Bot played <u>scissors</u>.");
	}
	else if(randomNumber<=.6666){
		botsWeapon="paper";
		computerStatus("Bot played <u>paper</u>.");
	}
	else {
		botsWeapon="rock";
		computerStatus("Bot played <u>rock</u>.");
	}
	return botsWeapon;
}
function checkWhoWon(botsWeapon,playersWeapon){
	if(botsWeapon==playersWeapon){
		gameResult("There was a tie.");
	}
	else if(
		(botsWeapon=="scissors" && playersWeapon=="paper") ||
		(botsWeapon=="paper" && playersWeapon=="rock") ||
		(botsWeapon=="rock" && playersWeapon=="scissors")
		){
		increaseBotScore();
	}
	else{
		increasePlayerScore();
	}
}

function increaseBotScore(){
	botScore+=1;
	document.getElementById("computerScore").innerHTML=botScore;
	gameResult("Sorry, you lost.");
}

function increasePlayerScore(){
	playerScore+=1;
	document.getElementById("humanScore").innerHTML=playerScore;
	gameResult("You win!");
}

function humanStatus (msg){
	document.getElementById("humanStatus").innerHTML=msg;
}

function computerStatus (msg){
	document.getElementById("computerStatus").innerHTML=msg;
}

function gameResult (msg) {
	document.getElementById("gameResult").innerHTML=msg;
}

