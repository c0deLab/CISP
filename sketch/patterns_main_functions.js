var pattern_lines = [];
var pattern_mode = "draw";
var pattern_color = [];
var pattern_displayPoints = [];
var lineToChangeIndex;
var reachedPattern = false;
var currentPattern = 0;
var patternNumber = 0;

function patterns_generatePage(){
	
	background(0);
	drawGridDots(10);
	drawNavigationButtons();

	if(reachedPattern == false){
		pattern_lines.push(new Line);
		pattern_color.push("P1");
		reachedPattern = true;
		patternNumber++;
	}

	push();
	noStroke();
	for(i=0;i<pattern_color.length;i++){
		if(i == currentPattern){
			fill(255);
		}
		else{
			fill(150);
		}
		var patternName = pattern_color[i];
		text(patternName,50,85+(i*20));
	}
	pop();

	for (z=0;z<pattern_lines.length;z++){
		pattern_lines[z].makePoints();
		if (pattern_lines[z].points.length>0){
			pattern_lines[z].makeLines();
			if(z == currentPattern){
				push();
				fill(255);
				text(pattern_color[z],pattern_lines[z].points[0][0],pattern_lines[z].points[0][1]+15);
				pop();
			}
			
		}
	}
}


function pattern_keyTyped(){
	if (lineToChangeIndex != "null"){
		pattern_color[lineToChangeIndex] = pattern_color[lineToChangeIndex]+key;
	}
	if(key == "n"){
		pattern_lines.push(new Line);
		patternNumber++;
		pattern_color.push("P" + str(patternNumber));
		currentPattern = patternNumber -1;
	}
	if(patternNumber > 0){
		if(key == "s"){
			if(currentPattern < patternNumber-1){
				currentPattern++;
			}
		}
		else if(key == "w"){
			if(currentPattern > 0){
				currentPattern--;
			}
		}
		else if(key == "d"){
			uses_mode = "draw";
		}
		if(key == "="){
			pattern_lines[currentPattern] = new Line;
		}
	}
}

function patterns_mousedPressed(){

	// if (pattern_mode === "define"){

	// 	if(mouseX>beginButtons && mouseY>endButtons && mouseX<beginButtons+buttonWidth && mouseY<endButtons+buttonHeight){
	// 		pattern_mode = "decide";
	// 	}

	// 	else{

	// 		for(q=0;q<pattern_lines.length;q++){
	// 			var cLine = pattern_lines[q];
	// 			var cPoint = cLine.points[0];

	// 			if(mouseX>cPoint[0]-20 && mouseY>cPoint[1]-20 && mouseX<cPoint[0]+20 && mouseY<cPoint[1]+20){
	// 				lineToChangeIndex = q;
	// 				pattern_color[lineToChangeIndex] = "";
	// 			}

	// 		}
	// 	}

	// }

	if (mouseX>40 && mouseY>75 && mouseX<410 && mouseY<425 ){
		patterns_drawOrtho();
	}



	// else{
	// 	lineToChangeIndex = "null";

	// 	var drawButtonX = 170;
	// 	var drawButtonY = 200;
	// 	if (mouseX>drawButtonX && mouseY>drawButtonY && mouseX<drawButtonX+150 && mouseY<drawButtonY+20 ){
	// 		background(0);
	// 		pattern_mode = "draw";

	// 	}

	// 	else if (mouseX>drawButtonX && mouseY>drawButtonY+50 && mouseX<drawButtonX+150 && mouseY<drawButtonY+20+50 ){
	// 		background(0);
	// 		pattern_mode = "define";

	// 	}

	// }

}
