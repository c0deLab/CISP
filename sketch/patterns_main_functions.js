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
	drawGridDots(25);
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
		textSize(30);
		text(patternName,100,275+(i*50));
	}
	pop();

	for (z=0;z<pattern_lines.length;z++){
		pattern_lines[z].makePoints();
		if (pattern_lines[z].points.length>0){
			pattern_lines[z].makeLines();
			if(z == currentPattern){
				push();
				fill(255);
				textSize(30);
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

	if (mouseX>100 && mouseY>250 && mouseX<1100 && mouseY<1250 ){
		patterns_drawOrtho();
	}


}
