//menu
var runGame = function(){
    document.getElementById("newGame").style.display = "none";
    document.getElementById("theHead").style.display = "none";
	document.getElementById("ints").style.display = "none";
    document.getElementById("main").style.display = "none";
    document.getElementById("intsBtn").style.display = "none";
	document.getElementById("playAudio").style.display = "none";
	document.getElementById("pauseAudio").style.display = "none";
	document.getElementById("playAgain").style.display = "block";
    update();
      };
	  
var showints = function(){
    document.getElementById("theHead").style.display = "none";
    document.getElementById("intsBtn").style.display = "none";
	document.getElementById("newGame").style.display = "none";
    document.getElementById("ints").style.display = "block";
    document.getElementById("backBtn").style.display = "block";
	document.getElementById("playAudio").style.display = "none";
	document.getElementById("pauseAudio").style.display = "none";
	document.getElementById("playAgain").style.display = "none";
     };
      
var goBack = function(){
    document.getElementById("backBtn").style.display = "none";
    document.getElementById("ints").style.display = "none";
    document.getElementById("theHead").style.display = "block";
    document.getElementById("newGame").style.display = "block";
    document.getElementById("intsBtn").style.display = "block";
	document.getElementById("playAudio").style.display = "block";
	document.getElementById("pauseAudio").style.display = "block";
	document.getElementById("playAgain").style.display = "none";
     };
	 
//hudba
var x = document.getElementById("myAudio"); 

	function playAudio() { 
	x.play(); 
	} 

	function pauseAudio() { 
	x.pause(); 
	} 
