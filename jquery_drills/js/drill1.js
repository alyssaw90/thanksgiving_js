$(function(){
	var ball = $('.ball');
	ball.on("click", function() {
		$(this).fadeOut(500, function(){

$(this).appendTo('div .stage').animate({
	/* ($('.stage').width()-$('.shape').width())
 	Subtracting the shape from the stage will keep the ball
	within the stage.
	*/
	'left': (Math.floor(Math.random() * ($('.stage').width()-$('.shape').width()))),
	'top': (Math.floor(Math.random() * ($('.stage').height()-$('.shape').height())))
	}).fadeIn(500);

		})
	})    
});
	
    // console.log('The dom is ready! (drill 1)');


