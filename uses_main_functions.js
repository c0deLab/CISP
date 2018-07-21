
var allUses = []; //container to store all current uses
var allUsesNames = []; // container to store each use definition
var uses_mode = "list"; // begins with mode "list" - which means that the system is intiially ready to create a new use and display the list of all uses
var currentUse; // initialize "current use" variable which is the container to modify the use which is currently being operated upon by the user
var useStartPointX = 100; // this outlines the margin from the edge of the screen for the use definition
var useStartPointY = 100;
var currentUsePointIndex; // record of index of a point on a use that has been clicked to be defined
var useNumber = 0; // record of total number of uses in memory



///////////////////////////////////////////////////////////////////////////////
/////////////////////////// VIEWER /////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

function uses_generatePage(){
//In listing mode - this mode shows all the uses currently defined by the user, theres essentially a for loop creating
//the representation of such.
	if (uses_mode == "list"){
		push();
		stroke(255);
		highlightCurrentButton();
		drawNavigationButtons();
		pop();

		uses_drawNewButton();
//for loop which draws the list of uses out
		for(i=0;i<allUses.length;i++){
			push();
			stroke(255);
			line(useStartPointX,i*50+(useStartPointY+35),500-useStartPointX,i*50+(useStartPointY+35));
			pop();

			push();
			fill(0);
			stroke(255);
			rect(useStartPointX+200,useStartPointY+i*50,70,20);
			pop();

			push();
			fill(255);
			stroke(255);
			var useName = allUsesNames[i];
			text(useName,useStartPointX+5,useStartPointY+15+i*50);
			text("DEFINE",useStartPointX+205,useStartPointY+15+i*50);
			pop();
		}
	}

// This is the draw mode - where the user is able to draw and define the respective use. Here, the current use is displayed
//through the Line class's built in "make" function.

	else if (uses_mode == "draw"){

		backgrounGrid();
		drawGridDots(20);
		drawSaveButton();
		highlightCurrentButton();
		drawNavigationButtons();
		drawRefreshButton("REFRESH");

		if (currentUse.points.length>0){
			currentUse.findLabelPoints();
			push();
			stroke(255);
			fill(255);
			currentUse.makePoints();
			currentUse.makeLabels();
			currentUse.makeLines();
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
		currentUse.labels[currentUsePointIndex] += key; // here the user is allowed to insert multiple symbols into the box
}

function uses_MousedPressed(){

//////////////////////////// START OF MODE LIST ///////////////////////////////
// the List mode interaction is essentially for the user to either initialize a new use, or for them to begin to modify a current one.

	if (uses_mode == "list"){

		//IF USER CLICKS ON NEW BUTTON - MAKE A NEW USE
		if(mouseX>350 && mouseY>420 && mouseX<450 && mouseY<440){
			allUses.push(new Line);
			useNumber+=1;
			allUsesNames.push("U" + str(useNumber))
		}

		// IF USER CLICKS ON INDIVIDUAL USE "DEFINE" BUTTON - CHANGE MODE TO "DRAW" FOR THE MODIFICATION OF A CURRENT USE
		else{
			for(i=0;i<allUses.length;i++){
				var curUse = allUses[i];
				var defCurX = useStartPointX+200;
				var defCurY = useStartPointY+i*50;
				if(mouseX>defCurX && mouseY>defCurY && mouseX<defCurX+70 && mouseY<defCurY+20){
					currentUse = allUses[i];
					uses_mode = "draw";
				}
			}
		}

	}
///////////////////////////////////////////////////////////////////////////////

//////////////////////////// START OF MODE DRAW ///////////////////////////////

//here the user is able to draw the new use, the drawing is constrained to Orthogonal geometry only, through the
//drawOrtho function - this function is the crux of the drawing system.
	else if (uses_mode == "draw"){

		// MAIN INTERACTION - WHERE USER DRAWS THE GEOMETRY
			if (mouseX>50 && mouseY>50 && mouseX<450 && mouseY<450 ){
				// until the use is closed, the user is not allowed to label any of the sides
						if (currentUse.isClosed() == false){
									uses_drawOrtho();
						}

				//once the use is closed, the user can click on the square in the middle of the line, and if he clicks on it,
				//the system checks which one and stores it to the "currentUsePointIndex" variable - this is then used in keypressed
						else{
									for(var i=0;i<currentUse.labelPoints.length;i++){
										var use_cPoint = currentUse.labelPoints[i];
										if(mouseX>use_cPoint[0]-20 && mouseY>use_cPoint[1]-20 && mouseX<use_cPoint[0]+20 && mouseY<use_cPoint[1]+20){
											currentUsePointIndex = i;
											currentUse.labels[i] = "";
										}
									}
						}
		}

		//IF SAVE BUTTON IS CLICKED - GO BACK TO LIST MODE
		else if(mouseX>beginButtons && mouseY>endButtons && mouseX<beginButtons+100 && mouseY<endButtons+20){
			uses_mode = "list";
		}

		// IF REFRESH BUTTON IS CLICKED - CHANGE CURRENT USE TO NEW USE
		else if(mouseX>beginButtons+350 && mouseY>endButtons && mouseX<beginButtons+350+100 && mouseY<endButtons+30){
				for(var i=0; i<allUses.length; i++){
					var curUse = allUses[i];
					if(curUse === currentUse){
							allUses[i] = new Line;
							uses_mode = "list";
							break;
					}
				}

		}
	}
}
