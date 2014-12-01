$(function(){
	
	var ball = $('.ball')

	ball.hover(
		function() {
			$(this).removeClass('ball');
			$(this).css({backgroundColor: '#fff786'});
		},
		function() {
			$(this).addClass('ball');
			$(this).css({backgroundColor: '#4444cc'});
		});	
});
    // console.log('The dom is ready! (drill 3)');
    


