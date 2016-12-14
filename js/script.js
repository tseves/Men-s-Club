
$(document).scroll(function() {

	const scrollBreak = 318;
	var y = $(document).scrollTop();
	//console.log(y)
	
	var opacity = (-1/scrollBreak)*y + 1;
	//console.log(opacity)
	
	var textColorOriginal = [42, 62, 27];
	var textColorNew = [];
	for (var i=0; i<textColorOriginal.length; i++) {
		textColorNew[i] = parseInt(((255-textColorOriginal[i])/scrollBreak)*y + textColorOriginal[i]);
	}
	var textColorString = "rgb(" + textColorNew[0] + "," + textColorNew[1] + "," + textColorNew[2] + ")";
    console.log(textColorString)
    
  	if (y > scrollBreak) {
    	$(".nav").addClass("fix-nav");
    	$(".bottom").addClass("bottom-margin");
    	$("#golfcourseImg").css("opacity",0);
    	$("#h1Fade").css("color","#ffffff");

  	} 
  	else {
   	 	$(".nav").removeClass("fix-nav");
    	$(".bottom").removeClass("bottom-margin");
    	$("#golfcourseImg").css("opacity",opacity);
    	$("#h1Fade").css("color",textColorString);

  	}
  
	});
	
$(document).ready(function() {

	var animation = ["jump", "zoom"];
	
	var number = animation[Math.floor(Math.random() * animation.length)];

	$("#arrow").addClass(number);

});	
