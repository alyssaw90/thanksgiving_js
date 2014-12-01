$(function(){


    // console.log('The dom is ready! (drill 2)');

    $(document).on('keyup',function(event){
        //output to console which key was pressed
        var box = $(".shape"),
        left = 37,
        up = 38,
        right = 39,
        down = 40,
        s = 83
        if (event.keyCode == s) {
        box.effect("shake");
        }
        else if (event.keyCode == left) {
        	box.animate({left: "-=50"}, 0);
        }
        else if (event.keyCode == up) {
        	box.animate({top: "-=50"}, 0);
        }
        else if (event.keyCode == right) {
        	box.animate({left: "+=50"}, 0);
        }
        else if (event.keyCode == down) {
        	box.animate({top: "+=50"}, 0);
        }

        console.log('The user pressed key: ',event.which);
    });

});

