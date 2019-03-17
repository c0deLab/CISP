function home_generatePage(){
	background(0);
	push();
	stroke(255);
	drawNavigationButtons();
	pop();

	var CISPText = "The work presented here is part of a more general research project for Computer Implemented Site Planning (CISP), currently under development at the Institute of Physical Planning, CMU. CISP is designed to respond to the typical site planning problem where the description of a site and the definitions of a set of uses (including relations and/or constraints to he satisfied) are given and we want to derive a plan of the uses for the site. Modeling the intuitive processes as they evolved in professional practice, the CISP system consists of four major parts. The first derives a space diagram which is a model of the site. The second a functional diabram which is a model of the uses arranged according to the given conditions and regardless of any site considerations. The third part matches the space and the functional diagrams and derives a pattern diagram which is a diagrammatic solution to the problem. Finally, the fourth part translates the pattern diagram into a site plan. The first two parts have an analytic flavor; the third and fourth are synthetic and constitute the actual problem solvers of the overall system. The pattern diagram is the output of a process which resolves global constraints and relations. The derivation of the site plan is based on the resolution of conditions of a rather local character.";
	
	push();
	noStroke();
	fill(200);
	textSize(35);
	text(CISPText,100,250,1000,1250);
	pop();

}

function home_MousedPressed(){

}