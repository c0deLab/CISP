var pattern_lines = [];
var pattern_mode;
var pattern_color = [];
var pattern_displayPoints = [];
var lineToChangeIndex;

function patterns_generatePage(){

	if (pattern_mode === "define"){

		background(0);
		backgrounGrid();
		highlightCurrentButton();
		drawNavigationButtons();
		drawGridDots(5);
		drawSaveButton();


		for (z=0;z<pattern_lines.length;z++){

			pattern_lines[z].makePoints();

			if (pattern_lines[z].points.length>0){
				pattern_lines[z].makeLines();
				push();
				fill(0);
				rect(pattern_lines[z].points[0][0],pattern_lines[z].points[0][1],15,15);
				pop();

				push();
				fill(255);
				text(pattern_color[z],pattern_lines[z].points[0][0],pattern_lines[z].points[0][1]+15);
				pop();
			}
		}
	}


	else if (pattern_mode === "draw"){
			background(0);
			backgrounGrid();
			drawSaveButton();
			drawNewButton();
			highlightCurrentButton();
			drawNavigationButtons();
			drawGridDots(5);
			drawRefreshButton("RESTART")


			for (z=0;z<pattern_lines.length;z++){

				pattern_lines[z].makePoints();

				if (pattern_lines[z].points.length>0){
					pattern_lines[z].makeLines();
					push();
					fill(0);
					rect(pattern_lines[z].points[0][0],pattern_lines[z].points[0][1],15,15);
					pop();

					push();
					fill(255);
					textSize(10);
					text(pattern_color[z],pattern_lines[z].points[0][0],pattern_lines[z].points[0][1]+15);
					pop();
				}
			}
	}

	else {

		var x = 170;
		var y = 200;

		background(0);
		stroke(255);
		highlightCurrentButton();
		drawNavigationButtons();
		drawDrawButton();

		function drawDrawButton(){
			push();
			fill(0);
			stroke(255);
			rect(x,y,150,20);
			rect(x,y+50,150,20)
			pop();

			push();
			fill(255);
			stroke(255);
			text("Draw Pattern Curves",x+10,y+15);
			text("Define Pattern Curves",x+10,y+50+15);
			pop();
		}

	}
}

function pattern_keyTyped(){
	if (typeof lineToChangeIndex != "null"){
		pattern_color[lineToChangeIndex] = pattern_color[lineToChangeIndex]+key;

	}
}

function patterns_mousedPressed(){

	if (pattern_mode === "define"){

		if(mouseX>beginButtons && mouseY>endButtons && mouseX<beginButtons+buttonWidth && mouseY<endButtons+buttonHeight){
			pattern_mode = "decide";
		}

		else{

			for(q=0;q<pattern_lines.length;q++){
				var cLine = pattern_lines[q];
				var cPoint = cLine.points[0];

				if(mouseX>cPoint[0]-20 && mouseY>cPoint[1]-20 && mouseX<cPoint[0]+20 && mouseY<cPoint[1]+20){
					lineToChangeIndex = q;
					pattern_color[lineToChangeIndex] = "";
				}

			}
		}

	}

	else if (pattern_mode === "draw"){
		lineToChangeIndex = "null";

		//then run algorithm to figure out where next points should go
		var newButtonX = beginButtons+buttonStep;
		var newButtonY = endButtons;
		if (mouseX>startOfGrid && mouseY>startOfGrid && mouseX<endOfGrid && mouseY<endOfGrid ){
			patterns_drawOrtho();
		}

		else if(mouseX>beginButtons && mouseY>endButtons && mouseX<beginButtons+buttonWidth && mouseY<endButtons+buttonHeight){
			pattern_mode = "decide";
		}


		else if(mouseX>newButtonX && mouseY>newButtonY && mouseX<newButtonX+buttonWidth && mouseY<newButtonY+buttonHeight){
			pattern_lines.push(new Line);
			pattern_color.push("U1");
		}

		else if(mouseX>beginButtons+350 && mouseY>endButtons && mouseX<beginButtons+350+100 && mouseY<endButtons+30){
			try{
				pattern_lines.pop();
			}

			catch{
				console.log ("TED, you cannot do that")
			}

		}

	}

	else{
		lineToChangeIndex = "null";

		var drawButtonX = 170;
		var drawButtonY = 200;
		if (mouseX>drawButtonX && mouseY>drawButtonY && mouseX<drawButtonX+150 && mouseY<drawButtonY+20 ){
			background(0);
			pattern_mode = "draw";

		}

		else if (mouseX>drawButtonX && mouseY>drawButtonY+50 && mouseX<drawButtonX+150 && mouseY<drawButtonY+20+50 ){
			background(0);
			pattern_mode = "define";

		}

	}

}
