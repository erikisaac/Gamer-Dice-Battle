console.log("JS online!");

// To Do: [] Make this in jquery
document.getElementById("startButtonTemp").addEventListener("click", startGame);


//To Do: [X] Do this for all die types and then [X] player 2.
document.getElementById("player1D4Button").addEventListener("click", function() {
	setPlayer1Die("d4");
});

document.getElementById("player1D6Button").addEventListener("click", function() {
	setPlayer1Die("d6");
});

document.getElementById("player1D8Button").addEventListener("click", function() {
	setPlayer1Die("d8");
});

document.getElementById("player1D10Button").addEventListener("click", function() {
	setPlayer1Die("d10");
});

document.getElementById("player1D12Button").addEventListener("click", function() {
	setPlayer1Die("d12");
});

var player1DieType;

function setPlayer1Die(dieType) {
	player1DieType = dieType;
	console.log("Player 1 taped " + player1DieType);
	moveRoundPhase();
};

document.getElementById("player2D4Button").addEventListener("click", function() {
	setPlayer2Die("d4");
});

document.getElementById("player2D6Button").addEventListener("click", function() {
	setPlayer2Die("d6");
});

document.getElementById("player2D8Button").addEventListener("click", function() {
	setPlayer2Die("d8");
});

document.getElementById("player2D10Button").addEventListener("click", function() {
	setPlayer2Die("d10");
});

document.getElementById("player2D12Button").addEventListener("click", function() {
	setPlayer2Die("d12");
});

var player2DieType;

var roundPhase = 0;

function setPlayer2Die(dieType) {
	player2DieType = dieType;
	console.log("Player 2 taped " + player2DieType);
	moveRoundPhase();
};

function moveRoundPhase() {
	roundPhase += 1;
	console.log("Round Phase: " + roundPhase);
	startNextPlayer();
};

var player1TotalPoints;
var player1D4Available;
var player1D6Available;
var player1D8Available;
var player1D10Available;
var player1D12Available;

var player2TotalPoints;
var player2D4Available;
var player2D6Available;
var player2D8Available;
var player2D10Available;
var player2D12Available;

var currentRound;
var whoGoesFirst;
var whosTurnItIsNow;
var RoundPointsToWin = 1;
var player1Roll;
var player2Roll;

function startGame() {
	console.log("Game Started!");
	player1TotalPoints = 0;
	player2TotalPoints = 0;
	setDiceToTrue();
	currentRound = 0;
	player1Roll = 0;
	player2Roll = 0;
	roundPhase = 0;
	setWhoGoesFirst();
	startNewRound();
	// turnPlayer2DiceButtonsOff();
	document.getElementById("player1RoleDisplay").innerHTML = "Player 1 Roles: 0";
	document.getElementById("player2RoleDisplay").innerHTML = "Player 2 Roles: 0";
	displayAllInfo();
};

function setDiceToTrue() {
	player1D4Available = true;
	player1D6Available = true;
	player1D8Available = true;
	player1D10Available = true;
	player1D12Available = true;

	player2D4Available = true;
	player2D6Available = true;
	player2D8Available = true;
	player2D10Available = true;
	player2D12Available = true;
	// Note: This could be DRYed with arrays and loops.
};

function turnPlayer1DiceButtonsOff() {
	// Note: I think I could do this with a var that toggles ture and false.
	document.getElementById("player1D4Button").disabled = true;
	// document.getElementsByClassName("dieButton").disabled = true;
	document.getElementById("player1D6Button").disabled = true;
	document.getElementById("player1D8Button").disabled = true;
	document.getElementById("player1D10Button").disabled = true;
	document.getElementById("player1D12Button").disabled = true;
};

function turnPlayer2DiceButtonsOff() {
	document.getElementById("player2D4Button").disabled = true;
	document.getElementById("player2D6Button").disabled = true;
	document.getElementById("player2D8Button").disabled = true;
	document.getElementById("player2D10Button").disabled = true;
	document.getElementById("player2D12Button").disabled = true;
};

function turnPlayer1DiceButtonsOn() {
	document.getElementById("player1D4Button").disabled = false;
	document.getElementById("player1D6Button").disabled = false;
	document.getElementById("player1D8Button").disabled = false;
	document.getElementById("player1D10Button").disabled = false;
	document.getElementById("player1D12Button").disabled = false;
};

function turnPlayer2DiceButtonsOn() {
	document.getElementById("player2D4Button").disabled = false;
	document.getElementById("player2D6Button").disabled = false;
	document.getElementById("player2D8Button").disabled = false;
	document.getElementById("player2D10Button").disabled = false;
	document.getElementById("player2D12Button").disabled = false;
};

function displayAllInfo() {
	// This updates all displayed info.
};

function startNewRound() {
	// currentRound += 1;
	// console.log("Round: " + currentRound);
	// setWhoGoesFirst();
	if (whosTurnItIsNow === 1) {
		turnPlayer1DiceButtonsOn();
		turnPlayer2DiceButtonsOff();
	} else {
		turnPlayer2DiceButtonsOn();
		turnPlayer1DiceButtonsOff();
	};
};

function startNextPlayer() {
	if (whosTurnItIsNow === 1) {
		whosTurnItIsNow = 2
	} else {
		whosTurnItIsNow = 1;
	};
	if (roundPhase === 2) {
		startCombat();
	} else {
		startNewRound();
	};
};

function startCombat() {
	turnPlayer1DiceButtonsOff();
	turnPlayer2DiceButtonsOff();
	console.log("Combat Starts! Player one chose: " + player1DieType + ". Player two chose: " + player2DieType + ".");
	player1CombatRole = combatRole(player1DieType);
	player2CombatRole = combatRole(player2DieType);
	console.log("Player one rolled: " + player1CombatRole + ". Player two rolled: " + player2CombatRole + ".");
	document.getElementById("player1RoleDisplay").innerHTML = "Player 1 Roles: " + player1CombatRole;
	document.getElementById("player2RoleDisplay").innerHTML = "Player 2 Roles: " + player2CombatRole;
	determineWhoWinsRound();
	document.getElementById("combatInfoDisplay").innerHTML = "Player " + roundWinner + " wins!";
};

var roundWinner;

function determineWhoWinsRound() {
	if (player1CombatRole > player2CombatRole) {
		roundWinner = "1";
		player1TotalPoints += 1;
		console.log("Player One has: " + player1TotalPoints + " total Points.")
	}; 
	if (player2CombatRole > player1CombatRole) {
		roundWinner = "2";
		player2TotalPoints += 1;
		console.log("Player Two has: " + player2TotalPoints + " total Points.")
	};
	if (player2CombatRole === player1CombatRole) {
		roundWinner = "tie";
	};

	console.log("The winner of this round is " + roundWinner);

	document.getElementById("player1TotalPointsDisplay").innerHTML = "Total Ponts: " + player1TotalPoints;
	document.getElementById("player2TotalPointsDisplay").innerHTML = "Total Ponts: " + player2TotalPoints;

	// To Do: [X] Add points to each pllayers total score [X] then display them.
	determineIfThereIsANextRound();
};

function determineIfThereIsANextRound() {
	currentRound += 1;
	setWhoGoesFirst();
	console.log("Round: " + currentRound);
	if (currentRound <= 5) {
		roundPhase = 0
		startNewRound();
	} else {
		gameOver();
	}; 
};

function gameOver() {
	console.log("Game Over!");
};

var player1CombatRole;
var player2CombatRole;

function combatRole(dieType) {
	var rolled;
	switch(dieType) {
    case "d4":
        rolled = getRandomInt(1, 4);
        break;
    case "d6":
        rolled = getRandomInt(1, 6);
        break;
    case "d8":
        rolled = getRandomInt(1, 8);
        break;
    case "d10":
        rolled = getRandomInt(1, 10);
        break;
    case "d12":
        rolled = getRandomInt(1, 12);
        break;       
    default:
        rolled = 0;
	};

	return rolled;
};

function setWhoGoesFirst() {
	// whosTurnItIsNow = Math.floor((Math.random() * 10) + 1);
	whosTurnItIsNow = getRandomInt(1, 2);
	console.log("This player goes first: " + whosTurnItIsNow);
};

// This is Cargo Cult and I want to go back and learn this later!
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}




