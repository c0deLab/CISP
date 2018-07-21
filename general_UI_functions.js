
var titleWords = ["HOME","PATTERN","USES","COMPUTE"];


//button parameters for navigation
var beginButtons = 30;
var endButtons = 450;
var buttonY = 20;
var buttonStep = 120;
var buttonWidth = 80;
var buttonHeight = 20;
var buttonTextSize = 10;

function drawSaveButton(){
	push();
	fill(0);
	rect(beginButtons,endButtons,buttonWidth,buttonHeight);
	pop();

	push();
	fill(255);
	text("SAVE",beginButtons+10,endButtons+15);
	pop();
}

function drawComputeButton(){
	push();
	fill(0);
	rect(beginButtons,endButtons,buttonWidth,buttonHeight);
	pop();

	push();
	fill(255);
	text("SOLUTIONS",beginButtons+6,endButtons+15);
	pop();
}

function drawRefreshButton(string){
	var move = 350
	push();
	fill(0);
	rect(beginButtons+move,endButtons,buttonWidth,buttonHeight);
	pop();

	push();
	fill(255);
	text(string,beginButtons+6+move,endButtons+15);
	pop();
}



function drawNewButton(){
	var buttonX = 400;
	//var buttonY = 450;
	push();
	fill(0);
	rect(beginButtons+buttonStep,endButtons,buttonWidth,buttonHeight);
	pop();

	push();
	fill(255);
	text("NEW",beginButtons+buttonStep+10,endButtons+15);
	pop();
}


function drawNavigationButtons(){
	for(i=beginButtons;i<endButtons;i+=buttonStep){
			push();
			noFill();
			rect(i,buttonY,buttonWidth,buttonHeight);
			pop();

			push();
			fill(255);
			textSize(buttonTextSize);
			textFont('Helvetica');
			text(titleWords[int(i/buttonStep)],i+10,buttonY+15);
			pop();
	}
}

function highlightCurrentButton(){
	for(i=0;i<titleWords.length;i++){
		var curWord = titleWords[i];
		if(curWord == mode){
			push();
			fill(100);
			rect(beginButtons+(i*buttonStep),buttonY,buttonWidth,buttonHeight);
			pop();
		}
	}
}
