$(function(){
	var ball = $('.ball');
	ball.on("click", function() {
		$(this).fadeOut(2000, function(){

$(this).appendTo('div .stage').animate({
	'left': (Math.random() * 600),
	'top': (Math.random() * 600)
	}).fadeIn(2000);

		})
	})    
});
	
    // console.log('The dom is ready! (drill 1)');


