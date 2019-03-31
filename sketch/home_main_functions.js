function home_generatePage(){
	background(0);
	push();
	stroke(255);
	drawNavigationButtons();
	pop();

	var CISPText = "Welcome to CISP! To get started, please click on the button that says 'Pattern' and look at this area for what to do next.";
	
	push();
	noStroke();
	fill(200);
	textSize(35);
	text(CISPText,100,250,1000,1250);
	pop();

	if(help){		
		showHelp("Welcome to CISP! To get started, please click on the button that says 'Pattern' and look at this area for what to do next.");
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