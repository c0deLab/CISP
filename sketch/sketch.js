
var mode = "HOME"; // Starting state of entire system

var beginButtons = 30; //the starting x value for the top row of buttons
var endButtons = 450; // the ending x value for the top row of buttons
var buttonY = 20; // the y value for top row
var buttonStep = 120; // distance between buttons
var buttonWidth = 80; // width of each button
var buttonHeight = 20; // height of each button
var buttonTextSize = 10; // text height in px

////////////////////////////////////// VIEW //////////////////////////////////////////////////////////////

function setup() {
  createCanvas(1500,1500);
  background(0);
}

function draw() {
cursor(CROSS);
	//THIS IS THE STATE SWITCH FOR CALLING THE RESPECTIVE DRAWING FUNCTIONS -
  //THE VARIABLE MODE DETERMINES THE STATE WHICH GETS MODIFIED VIA MOUSEPRESSED
	if (mode == "PATTERN"){
		patterns_generatePage();
	}
	else if (mode =="USES"){
		background(0);
		uses_generatePage();
	}
	else if(mode=="HOME"){
		background(0);
		home_generatePage();
	}

	else if(mode == "COMPUTE"){
		background(0);
		compute_generatePage();
	}

}

//////////////////////////////////// CONTROLLER ////////////////////////////////////////////////////////////////


function keyTyped(){
	if(key == "1"){
		mode = "HOME";
	}
	else if(key == "2"){
		mode = "PATTERN";
	}
	else if(key == "3"){
		mode = "USES";
	}
	else if(key == "4"){
		mode = "COMPUTE";
	}
	if(mode == "PATTERN"){
		pattern_keyTyped();
	}
	else if(mode == "USES"){
		use_keyTyped();
	}
	else if(mode == "COMPUTE"){
		compute_keyTyped();
	}

}

function mousePressed(){

	if (mode == "PATTERN"){
		patterns_mousedPressed();
	}
	else if (mode=="USES"){
		uses_MousedPressed();
	}

}
