$(function(){


    console.log('The dom is ready! (drill 2)');

    $(document).on('keyup',function(event){
        //output to console which key was pressed
        var box = $(".stage"),
        left = 37,
        up = 38,
        right = 39,
        down = 40,
        s = 83
        event.stopPropagation();
        event.preventDefault();
        if (event.keyCode == left) {
        	box.animate({left: "-=50"}, 0);
        }
        if (event.keyCode == up) {
        	box.animate({top: "-=50"}, 0);
        }
        if (event.keyCode == right) {
        	box.animate({left: "+=50"}, 0);
        }
        if (event.keyCode == down) {
        	box.animate({top: "+=50"}, 0);
        }
        if (event.keyCode == s) {
        	box.animate("shake");
        }
        console.log('The user pressed key: ',event.which);
    });

});

