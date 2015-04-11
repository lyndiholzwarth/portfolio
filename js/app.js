$(document).ready(function(){
	$('.skills').hide();

	$('.hover-area').mouseenter(function(){
		$(this).fadeTo( "slow", 0.3 );
		$('.skills', this).fadeTo("slow", 1);
	});

	$('.hover-area').mouseleave(function(){
		$(this).fadeTo("slow", 1);
		$('.skills').fadeTo("slow", 0);
	});

	$(function(){setInterval('rotateImgAd()', 3000);
	});

	$(function(){setInterval('rotateImgPoster()', 3000);
	});

});

	function rotateImgAd(){
		var curAdImg = $('#ad-scroll div.current-a');
		var nxtAdImg = curAdImg.next();
		if(nxtAdImg.length==0)
			nxtAdImg = $('#ad-scroll div:first');

		curAdImg.removeClass('current-a').addClass('previous-a');
		nxtAdImg.addClass('current-a').animate({opacity: 1.0}, 1000,
			function(){
				curAdImg.removeClass('previous-a');
			});

	};

	function rotateImgPoster(){
		var curPostImg = $('#poster-scroll div.current-p');
		var nxtPostImg = curPostImg.next();
		if(nxtPostImg.length==0)
			nxtPostImg = $('#poster-scroll div:first');

		curPostImg.removeClass('current-p').addClass('previous-p');
		nxtPostImg.addClass('current-p').animate({opacity: 1.0}, 1000,
			function(){
				curPostImg.removeClass('previous-p');
			});

	};	