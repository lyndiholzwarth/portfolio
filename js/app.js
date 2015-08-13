$(document).ready(function(){
	//sticky header, with size adjustment
	$(window).scroll(function() {
	if ($(this).scrollTop() > 653){  
	    $('.navbar').addClass("navbar-fixed-top");
	    $('.about').addClass("fixed-nav");
	  }
	  else{
	    $('.navbar').removeClass("navbar-fixed-top");
		$('.about').removeClass("fixed-nav");
	  }
	});

	//modals

});