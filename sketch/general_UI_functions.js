
var titleWords = ["Home","Pattern","Uses","Compute"];


//button parameters for navigation
var beginButtonsX = 30;
var endButtons = 450;
var buttonY = 20;
var buttonStep = 120;
var buttonWidth = 80;
var buttonHeight = 20;
var buttonTextSize = 10;

function drawSaveButton(){
	// push();
	// fill(0);
	// rect(beginButtons,endButtons,buttonWidth,buttonHeight);
	// pop();

	// push();
	// fill(255);
	// text("SAVE",beginButtons+10,endButtons+15);
	// pop();
}

function drawComputeButton(){
	// push();
	// fill(0);
	// rect(beginButtons,endButtons,buttonWidth,buttonHeight);
	// pop();

	// push();
	// fill(255);
	// text("SOLUTIONS",beginButtons+6,endButtons+15);
	// pop();
}

function drawRefreshButton(string){
	// var move = 350
	// push();
	// fill(0);
	// rect(beginButtons+move,endButtons,buttonWidth,buttonHeight);
	// pop();

	// push();
	// fill(255);
	// text(string,beginButtons+6+move,endButtons+15);
	// pop();
}

function drawNewButton(){
	// var buttonX = 400;
	// //var buttonY = 450;
	// push();
	// fill(0);
	// rect(beginButtons+buttonStep,endButtons,buttonWidth,buttonHeight);
	// pop();

	// push();
	// fill(255);
	// text("NEW",beginButtons+buttonStep+10,endButtons+15);
	// pop();
}

var startOfGrid = 0;
var endOfGrid = 350;


function constructGridofPoints(gridStep){
	var listOfPoints =[];
	for (i=startOfGrid;i<=endOfGrid;i+=gridStep){
		var subList = [];
		for(j=startOfGrid;j<=endOfGrid;j+=gridStep){
			subList.push([i,j]);
		}
	listOfPoints.push(subList);
	}
	return listOfPoints;
}


function drawGridDots(gridStep){
	var listOfPoints = constructGridofPoints(gridStep);
	
	push();	
	for (i=0;i<listOfPoints.length;i++){
		for (j=0;j<listOfPoints.length;j++){
			var xVal = i;
			var yVal = j+50;
			fill(0);
			stroke(50);
			ellipse(listOfPoints[i][j][0]+50,listOfPoints[i][j][1]+75,1,1);
		}	
	}
	pop();

}

function drawNavigationButtons(){

	push();
	noStroke();
	textSize(buttonTextSize);
	for(var i=0; i<titleWords.length; i++){
		var curWord = titleWords[i];
		if(curWord.toUpperCase() == mode){
			fill(255);			
		}
		else{
			fill(150);
		}
		text(curWord, 420, 85 + (i*25));
	}
	pop();

	// for(i=beginButtons;i<endButtons;i+=buttonStep){
	// 		push();
	// 		noFill();
	// 		stroke(30);
	// 		rect(i,buttonY,buttonWidth,buttonHeight);
	// 		pop();

	// 		// push();
	// 		// fill(255);
	// 		// textSize(buttonTextSize);
	// 		// textFont('Helvetica');
	// 		// text(titleWords[int(i/buttonStep)],i+10,buttonY+15);
	// 		// pop();
	// }
}

function highlightCurrentButton(){
	// for(i=0;i<titleWords.length;i++){
	// 	var curWord = titleWords[i];
	// 	if(curWord == mode){
	// 		push();
	// 		fill(100);
	// 		rect(beginButtons+(i*buttonStep),buttonY,buttonWidth,buttonHeight);
	// 		pop();
	// 	}
	// }
}
