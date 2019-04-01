function home_generatePage(){
	background(0);
	push();
	stroke(255);
	drawNavigationButtons();
	pop();

	
	var CISPTitle = "CISP\nComputer Implemented Site Planning"
	var CISPText = "Welcome to a software reconstruction of CISP, a pioneering software for generative urban design developed at CMU in 1972 by Christos Yessios.";
	var CISPPoints = "Instructions: \n\n- To define a path for buildings to be allocated, press the 'Patterns' key on the keypad, and use the stylus on the trackpad.\n\n- To draw a building shape, press the 'Uses' key on the keypad, and use the stylus on the trackpad.\n\n- You can ask CISP to consider walls as windows (V), or as access (A) by pressing with the stylus on the small box next to the wall.\n\n- To ask CISP to find a design solution, press 'Compute' and then press 'Solve'. CISP will try to create a design that satisfies the geometric and functional constraints you entered.\n\n- If CISP is unable to create a design, try changing some of the parameters of your design."


	push();
	noStroke();
	fill(255);
	textSize(40);
	text(CISPTitle,100,250,1000,100);
	pop();

	push();
	noStroke();
	fill(200);
	textSize(35);
	text(CISPText,100,400,1000,500);
	pop();


	push();
	noStroke();
	fill(200);
	textSize(30);
	text(CISPPoints,100,600,1000,1300);
	pop();

	if(help){		
		showHelp("To get started, please click on the button that says 'Pattern' and look at this area for what to do next.");
	}

}

function showHelp(helpString){
	var helpTopX = 1200;
	var helpTopY = 650;
	var helpWidth = 250;
	var helpHeight = 800;


	push();
	noStroke();
	fill(255);
	textSize(40);
	text("Help", helpTopX, helpTopY+35);
	pop();

	push()
	noStroke();
	noStroke();
	fill(255);
	textSize(20);
	text(helpString, helpTopX, helpTopY+80, helpWidth-10, helpHeight);
	pop();
}

function home_MousedPressed(){

}