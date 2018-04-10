// set variables
var crystals = {
	red:
	{
		name: "red",
		value: 0
	},
	yellow: {
		name: "yellow",
		value: 0
	},
	green: {
		name: "green",
		value: 0
	},
	blue: {
		name: "blue",
		value: 0
	}
};

var targetScore = 0;
var earnedScore = 0;

var wins = 0;
var losts = 0;

//function - get random numbers
function getrandom(min, max) {
	return Math.floor(Math.random()*(max - min + 1) + min);
};


// start game
function startGame () {
	//reset earnedScore
	earnedScore = 0;
	targetScore = getrandom(19,120);

	crystals.red.value = getrandom(1,12);
	crystals.yellow.value = getrandom(1,12);
	crystals.green.value = getrandom(1,12);
	crystals.blue.value = getrandom(1,12);

	$("#earnedScore").text(earnedScore);
	$("#targetScore").text(targetScore);

	console.log("earnedscore" + earnedScore);
	console.log("targetScore" + targetScore);
	console.log("red" + crystals.red.value + "yellow" + crystals.yellow.value + "green" + crystals.green.value + "blue" + crystals.blue.value);
};

//one click handler for each image
$("#red").on('click', function() {
	// get value of red crystal
	var clickedvalue = crystals.red.value;
	// call addValues with the value of the crystal
	addValues(clickedvalue);
})
$("#blue").on('click', function() {
	// get value of blue crystal
	var clickedvalue = crystals.blue.value;
	// call addValues with the value of the crystal
	addValues(clickedvalue);
})
$("#yellow").on('click', function() {
	// get value of yellow crystal
	var clickedvalue = crystals.yellow.value;
	// call addValues with the value of the crystal
	addValues(clickedvalue);
})
$("#green").on('click', function() {
	// get value of green crystal
	var clickedvalue = crystals.green.value;
	// call addValues with the value of the crystal
	addValues(clickedvalue);
})

function addValues(value) {
	// Change currentScore
	earnedScore += value;
	// Change the HTML to reflect changes in currentScore
	$("#earnedScore").text(earnedScore);
	// Call the checkWin Function
	checkWin();
	// Testing Console
	console.log("Your Score: " + earnedScore);
}


// check win
function checkWin () {
	//win
	if (earnedScore === targetScore) {
		alert ("You Won!") ;
		// Add to the Win Counter
  	wins++;
  	// Change Win Count HTML
  	$("#wins").text(wins);
  	// Restart the game
  	startGame();
	}		else if (earnedScore > targetScore) {
		alert ("You Lost!");
		// add to losts
		losts ++ ;
		//Change losts HTML
		$('#losts').text(losts);
		// Restart the game
  	startGame();
	}
};

startGame();
