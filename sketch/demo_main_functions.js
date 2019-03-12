var demoMode = "COMPUTE";
var s;

function demo_generatePage(){

    //first open the home page 

    var homeEnd = second()+4;
    home_generatePage();
    background(0);




    var pattern_end = homeEnd+4;
    //second open the patterns page 
        //draw a pattern
    patterns_generatePage();
    var linePoints = [[250, 450],[250, 675],[375, 850],[625, 925],[900, 800],[950, 550],[825, 450]];
    for(var i=0; i<linePoints.length; i++){
        pattern_lines[0].points.push(linePoints[i]);
    }
    pattern_lines[0].close = false;
    patterns_generatePage();
    background(0);





    var use_end = pattern_end+4;
    //third open the uses page 
        //draw a use
    uses_generatePage();
    var usePoints = [[350,400],[350,800],[800,800],[800,400]];
    for(var i=0; i<usePoints.length; i++){
        var finalPoint = usePoints[i];
        allUses[0].points.push(finalPoint);
        allUses[0].labelPoints.push([finalPoint[0],finalPoint[1]]);
        if(i==0){
            allUses[0].labels.push("v");
        }
        allUses[0].labels.push(" ");
    }
    uses_generatePage();
    background(0);




    var compute_end = use_end+4;
    //fourth open the compute page
        //compute a solution

    compute_generatePage();
    demoMode = "COMPUTE";
    console.log("Please click on the compute button");
    compute_generatePage();


    noLoop();
    pattern_lines = [];
    pattern_mode = "draw";
    pattern_color = [];
    reachedPattern = false;
    allUses = [];
    reached = false;
}



function demo_keyTyped(){
    if(demoMode == "COMPUTE"){
        compute_keyTyped();
    }
}