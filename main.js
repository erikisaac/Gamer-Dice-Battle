console.log("JS online!");

// To Do: [] Make this in jquery
document.getElementById("startButtonTemp").addEventListener("click", startGame);

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
var RoundPointsToWin = 1;
var player1Roll;
var player2Roll;

function startGame() {
	console.log("Game Started!");
	player1TotalPoints = 0;
	player2TotalPoints = 0;
	setDiceToTrue();
	currentRound = 1;
	player1Roll = 0;
	player2Roll = 0;
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

function displayAllInfo() {
	// This updates all displayed info.
};




