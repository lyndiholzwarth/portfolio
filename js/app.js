$(document).ready(function(){
	$('.skills').hide();

	$('.hover-area').mouseenter(function(){
		$(this).fadeTo( "slow", 0.3 );
		$('.skills').fadeTo("slow", 1);
	});

	$('.hover-area').mouseleave(function(){
		$(this).fadeTo("slow", 1);
		$('.skills').fadeTo("slow", 0);
	});
});