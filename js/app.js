$(document).ready(function(){


	$('.skills').hide();

	$('.hover-area').mouseenter(function(){
		$(this).fadeTo( "slow", 0.3 );
		$(this).next().fadeTo("slow", 1);

	});

	$('.hover-area').mouseleave(function(){
		$(this).fadeTo("slow", 1);
		$(this).next().fadeTo("slow", 0);
	});

//quote typing
//add text, one letter at a time



function jumpingImg(){
	$('#left-align').delay( "4000" )
		.animate({top: '-100px'}, "6000")
		.delay( "1000" )
		.animate({top:"0px"}, "6000");

	$('#center-align').delay( "6000" )
		.animate({top: '-100px'}, "6000")
		.delay( "1000" )
		.animate({top:"0px"}, "6000");

	$('#right-align').delay( "8000" )
		.animate({top: '-100px'}, "6000")
		.delay( "1000" )
		.animate({top:"0px"}, "6000");
	}

jumpingImg()

});