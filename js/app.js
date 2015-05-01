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
	$('.left-align').delay( "2000" )
		.animate({top: '-100px'}, "6000")
		.delay( "1000" )
		.animate({top:"0px"}, "6000");

	$('.center-align').delay( "4000" )
		.animate({top: '-100px'}, "6000")
		.delay( "1000" )
		.animate({top:"0px"}, "6000");

	$('.right-align').delay( "6000" )
		.animate({top: '-100px'}, "6000")
		.delay( "1000" )
		.animate({top:"0px"}, "6000");
	}

jumpingImg()



	//$(function(){setInterval('rotateImgAd()', 3000);
	//});
//.animate({params},speed,callback);
//	$(function(){setInterval('rotateImg()', 3000);
//	});

// function rotateImgPoster(main, first, current, previous){
//     var curPostImg = $(main);
//     var nxtPostImg = curPostImg.next();
//     if(nxtPostImg.length==0)
//         nxtPostImg = $(first);
        
//     curPostImg.removeClass(current).addClass(previous);
//     nxtPostImg.addClass(current).animate({opacity: 1.0}, 1000,
//         function(){
//             curPostImg.removeClass(previous);
//         });

//rotateImg(#poster-scroll div.current-p, #poster-scroll div:first, current-p, previous-p);


});

//	function rotateImgAd(){
//		var curAdImg = $('#ad-scroll div.current-a');
//		var nxtAdImg = curAdImg.next();
//		if(nxtAdImg.length==0)
//			nxtAdImg = $('#ad-scroll div:first');
//
//		curAdImg.removeClass('current-a').addClass('previous-a');
//		nxtAdImg.addClass('current-a').animate({opacity: 1.0}, 1000,
//			function(){
//				curAdImg.removeClass('previous-a');
//			});
//
//	};

//	function rotateImgPoster(){
//		var curPostImg = $('#poster-scroll div.current-p');
//		var nxtPostImg = curPostImg.next();
//		if(nxtPostImg.length==0)
//			nxtPostImg = $('#poster-scroll div:first');
//
//		curPostImg.removeClass('current-p').addClass('previous-p');
//		nxtPostImg.addClass('current-p').animate({opacity: 1.0}, 1000,
//			function(){
//				curPostImg.removeClass('previous-p');
//			});

//	};	



	// function rotateImg(main, first, current, previous){
 //   var curImg = $(main);
 //    var nxtImg = curImg.next();
 //   if(nxtImg.length==0)
 //       nxtImg = $(first);
        
 //   curImg.removeClass(current).addClass(previous);
 //   nxtImg.addClass(current).animate({opacity: 1.0}, 1000,
 //       function(){
 //           curImg.removeClass(previous);
 //        });

  //  rotateImg('#poster-scroll div.current-p', '#poster-scroll div:first', 'current-p', 'previous-p');

// function rotateImgPoster(main, first, current, previous){
//     var curPostImg = $(main);
//     var nxtPostImg = curPostImg.next();
//     if(nxtPostImg.length==0)
//         nxtPostImg = $(first);
        
//     curPostImg.removeClass(current).addClass(previous);
//     nxtPostImg.addClass(current).animate({opacity: 1.0}, 1000,
//         function(){
//             curPostImg.removeClass(previous);
//         });

 
// Example Calls:
 	// main = '#poster-scroll div.current-p'
	 //    first = '#poster-scroll div:first'
  // 	current = 'current-p'
	 //    previous = 'previous-p'
  //	rotateImgPoster(main, first, current, previous);
// 2.   rotateImgPoster('#ad-scroll div.current-a', '#ad-scroll div:first', 'current-a', 'previous-a');

// };