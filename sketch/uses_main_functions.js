
var allUses = []; //container to store all current uses
var allUsesNames = []; // container to store each use definition
var uses_mode = "list"; // begins with mode "list" - which means that the system is intiially ready to create a new use and display the list of all uses
var currentUse = 0; // initialize "current use" variable which is the container to modify the use which is currently being operated upon by the user
var currentUsePointIndex; // record of index of a point on a use that has been clicked to be defined
var useNumber = 0; // record of total number of uses in memory
var reached = false;



///////////////////////////////////////////////////////////////////////////////
/////////////////////////// VIEWER /////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

function uses_generatePage(){
//In listing mode - this mode shows all the uses currently defined by the user, theres essentially a for loop creating
//the representation of such.
	push();
	stroke(255);
	drawNavigationButtons();
	pop();
	
	if(reached == false){
		allUses.push(new Line);
		useNumber++;
		allUsesNames.push("U" + str(useNumber));
		reached = true;
	}

	push();
	noStroke();
	for(i=0;i<allUses.length;i++){
		if(i == currentUse){
			fill(255);
		}
		else{
			fill(150);
		}
		var useName = allUsesNames[i];
		text(useName,50,85+(i*20));
	}
	pop();

	if(allUses.length > 0){
		drawGridDots(10);
		drawNavigationButtons();
		if (allUses[currentUse].points.length>0){
			allUses[currentUse].findLabelPoints();
			push();
			stroke(255);
			fill(255);
			allUses[currentUse].makePoints();
			allUses[currentUse].makeLabels();
			allUses[currentUse].makeLines();
			pop();
		}
	}

}

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////////////////////////
/////////////////////////// CONTROLLER ////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

// WHENEVER THE BOX ON THE LINE IS CLICKED, KEYTPED TRIGGERS
function use_keyTyped(){
	//  // here the user is allowed to insert multiple symbols into the box

	if(key == "n"){
		allUses.push(new Line);
		useNumber++;
		allUsesNames.push("U" + str(useNumber));
		currentUse = useNumber - 1;
	}
	if(useNumber > 0){
		if(key == "s"){
			if(currentUse < useNumber-1){
				currentUse++;
			}
		}
		else if(key == "w"){
			if(currentUse > 0){
				currentUse--;
			}
		}
		else if(key == "d"){
			uses_mode = "draw";
		}
	}

	if(key == "v"){
		allUses[currentUse].labels[currentUsePointIndex] += key;
	}

		
}

function uses_MousedPressed(){

	// MAIN INTERACTION - WHERE USER DRAWS THE GEOMETRY

	if (mouseX>80 && mouseY>100 && mouseX<390 && mouseY<350){
	// until the use is closed, the user is not allowed to label any of the sides
		if (allUses[currentUse].isClosed() == false){
			uses_drawOrtho();
		}

	//once the use is closed, the user can click on the square in the middle of the line, and if he clicks on it,
	//the system checks which one and stores it to the "currentUsePointIndex" variable - this is then used in keypressed
		else{
			for(var i=0;i<allUses[currentUse].labelPoints.length;i++){
				var use_cPoint = allUses[currentUse].labelPoints[i];
				if(mouseX>use_cPoint[0]-20 && mouseY>use_cPoint[1]-20 && mouseX<use_cPoint[0]+20 && mouseY<use_cPoint[1]+20){
					currentUsePointIndex = i;
					allUses[currentUse].labels[i] = "";
				}
			}
		}
	}
	
}
