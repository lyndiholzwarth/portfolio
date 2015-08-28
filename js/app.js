$(document).ready(function(){
	//sticky header, with size adjustment
	$(window).scroll(function() {
	if ($(this).scrollTop() > 653){  
	    $('.homeNav').addClass("navbar-fixed-top");
	    $('.about').addClass("fixed-nav");
	  }
	  else{
	    $('.homeNav').removeClass("navbar-fixed-top");
		$('.about').removeClass("fixed-nav");
	  }
	});

	//modals

});