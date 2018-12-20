/* Swapnil Sharma*/
var cross_elem = document.getElementById("cross");
$(function() {

    var anim_id;

    //saving dom objects to variables
    var container = $('#container');
    var car = $('#car');

        var car_1 = $('#car_1');
    var car_2 = $('#car_2');
    var car_3 = $('#car_3');
    var bar_1 = $('#bar_1');
    var bar_2 = $('#bar_2');
    var bar_3 = $('#bar_3');
    var line_1 = $('#line_1');
    var line_2 = $('#line_2');
    var line_3 = $('#line_3');
    var restart_div = $('#restart_div');
    var restart_btn = $('#restart');
    var score = $('#score');
    var left_bar = $('#left_bar');
    //var top_bar = $('#bar_1');
    var cross_elem = document.getElementById("cross");
    //saving some initial setup
    var container_left = parseInt(container.css('left'));
    var container_width = parseInt(container.width());
    var container_height = parseInt(container.height());
    var car_width = parseInt(car.width());
    var car_height = parseInt(car.height());

    //some other declarations
    var game_over = false;

    var score_counter = 1;

    var speed = 2;
    var line_speed = 5;

    var move_right = false;
    var move_left = false;
    var move_up = false;
    var move_down = false;

    /* ------------------------------GAME CODE STARTS HERE------------------------------------------- */

    /* Move the cars */
    $(document).on('keydown', function(e) {
        if (game_over === false) {
            var key = e.keyCode;
            if (key === 37 && move_left === false) {
                move_left = requestAnimationFrame(left);
            } else if (key === 39 && move_right === false) {
                move_right = requestAnimationFrame(right);
            } else if (key === 38 && move_up === false) {
                move_up = requestAnimationFrame(up);
            } else if (key === 40 && move_down === false) {
                move_down = requestAnimationFrame(down);
            }
        }
    });

    $(document).on('keyup', function(e) {
        if (game_over === false) {
            var key = e.keyCode;
            if (key === 37) {
                cancelAnimationFrame(move_left);
                move_left = false;
            } else if (key === 39) {
                cancelAnimationFrame(move_right);
                move_right = false;
            } else if (key === 38) {
                cancelAnimationFrame(move_up);
                move_up = false;
            } else if (key === 40) {
                cancelAnimationFrame(move_down);
                move_down = false;
            }
        }
    });

var current_degree = 0;
function rotate_right(){
    el = "cross";
    var degree_speed = 2;
    current_degree+=degree_speed;
    

    var looper;
    elem = document.getElementById(el);
    if(navigator.userAgent.match("Chrome")){
        elem.style.WebkitTransform = "rotate("+current_degree+"deg)";
    } else if(navigator.userAgent.match("Firefox")){
        elem.style.MozTransform = "rotate("+current_degree+"deg)";
    } else if(navigator.userAgent.match("MSIE")){
        elem.style.msTransform = "rotate("+current_degree+"deg)";
    } else if(navigator.userAgent.match("Opera")){
        elem.style.OTransform = "rotate("+current_degree+"deg)";
    } else {
        elem.style.transform = "rotate("+current_degree+"deg)";
    }
    
    //document.getElementById("status").innerHTML = "rotate("+degrees+"deg)";
}

var current_degree = 0;
function rotate_right(){
    el = "cross";
    var degree_speed = 2;
    current_degree+=degree_speed;
    

    var looper;
    elem = document.getElementById(el);
    if(navigator.userAgent.match("Chrome")){
        elem.style.WebkitTransform = "rotate("+current_degree+"deg)";
    } else if(navigator.userAgent.match("Firefox")){
        elem.style.MozTransform = "rotate("+current_degree+"deg)";
    } else if(navigator.userAgent.match("MSIE")){
        elem.style.msTransform = "rotate("+current_degree+"deg)";
    } else if(navigator.userAgent.match("Opera")){
        elem.style.OTransform = "rotate("+current_degree+"deg)";
    } else {
        elem.style.transform = "rotate("+current_degree+"deg)";
    }
    
    //document.getElementById("status").innerHTML = "rotate("+degrees+"deg)";
}

function rotate_left(){
    el = "cross";
    var degree_speed = 2;
    current_degree-=degree_speed;
    

    var looper;
    elem = document.getElementById(el);
    if(navigator.userAgent.match("Chrome")){
        elem.style.WebkitTransform = "rotate("+current_degree+"deg)";
    } else if(navigator.userAgent.match("Firefox")){
        elem.style.MozTransform = "rotate("+current_degree+"deg)";
    } else if(navigator.userAgent.match("MSIE")){
        elem.style.msTransform = "rotate("+current_degree+"deg)";
    } else if(navigator.userAgent.match("Opera")){
        elem.style.OTransform = "rotate("+current_degree+"deg)";
    } else {
        elem.style.transform = "rotate("+current_degree+"deg)";
    }
    
    //document.getElementById("status").innerHTML = "rotate("+degrees+"deg)";
}
    function left() {
        if (game_over === false ) {
            rotate_left();
            move_left = requestAnimationFrame(left);
        }
    }

    function right() {
        if (game_over === false){ //&& parseInt(car.css('left')) < container_width - car_width) {
            //car.css('left', parseInt(car.css('left')) + 5);
            rotate_right();
            move_right = requestAnimationFrame(right);
        }
    }

    function up() {
        if (game_over === false && parseInt(car.css('top')) > 0) {
            car.css('top', parseInt(car.css('top')) - 3);
            move_up = requestAnimationFrame(up);
        }
    }

    function down() {
        if (game_over === false && parseInt(car.css('top')) < container_height - car_height) {
            car.css('top', parseInt(car.css('top')) + 3);
            move_down = requestAnimationFrame(down);
        }
    }

    /* Move the cars and lines */
    anim_id = requestAnimationFrame(repeat);

    var min_gap =  parseInt(getComputedStyle(document.getElementById('cross')).width)/1.41 + 30;
    var max_gap = parseInt(getComputedStyle(document.getElementById('cross')).width) + 30;
    //console.log(gap);
    //alert(gap);
    function repeat() {
        /*if (collision(car, car_1) || collision(car, car_2) || collision(car, car_3)) {
            stop_the_game();
            return;
        }
        */
        score_counter++;

        if (score_counter % 20 == 0) {
            score.text(parseInt(score.text()) + 1);
        }
        if (score_counter % 1000 == 0) {
            speed++;
            line_speed++;
        }

        car_down(car_1);
        car_down(car_2);
        car_down(car_3);

        //alert(left_bar);
        //alert(cross_elem);
        var p = false;
        /*if( left_bar && cross_elem){ 
            p = overlap(left_bar, cross_elem );
            if(p){
                alert("collided");
            }
        }*/
    

        top_bar_down(bar_1);
        top_bar_down(bar_2);
        top_bar_down(bar_3);
        anim_id = requestAnimationFrame(repeat);
    }

    function car_down(car) {
        var car_current_top = parseInt(car.css('top'));
        if (car_current_top > container_height) {
            car_current_top = -200;
            var car_left = parseInt(Math.random() * (container_width - car_width));
            car.css('left', car_left);
        }
        car.css('top', car_current_top + speed);
    }
    function top_bar_down(top_bar) {
        //console.log("here");
        var top_bar_current_top = parseInt(top_bar.css('top'));
        //console.log( top_bar_current_top );

        if (top_bar_current_top > container_height) {
            top_bar_current_top = -200;


            //randomize bar divs
            randomize();
            //left_bar.css('left', left_bar_left);
        }
        top_bar.css('top', top_bar_current_top + speed);
        
    }

    function bar_down(top_bar) {
        //console.log("here");
        var top_bar_current_top = parseInt(top_bar.css('top'));
        //console.log( top_bar_current_top );

        
        top_bar.css('top', top_bar_current_top + speed);
        
    }
    


    function line_down(line) {
        var line_current_top = parseInt(line.css('top'));
        if (line_current_top > container_height) {
            line_current_top = -300;
        }
        line.css('top', line_current_top + line_speed);
    }

    restart_btn.click(function() {
        location.reload();
    });
    function randomize(){
        
        var array_type = [];
        var array_gap = [];
        for( var i = 0; i < 3; i++){
            if( Math.random() > 0.5){
                array_type.push(1);
            }
            else{
                array_type.push(0);
                
            }
            array_gap.push(Math.round(min_gap + (max_gap - min_gap)*Math.random()));
            //console.log(array_gap[i].toString()+"px");

        }
        
        for( var i = 0; i < 3; i++){
            st = "bar_"+(i+1).toString();
            if( array_type[i]){
                
                document.getElementById(st).classList.toggle('r_bar');
                var p = document.getElementById(st);
                p.style.marginBottom = array_gap[i].toString()+"px";
                //p.css('top', array_gap[0]);
            }
            else{
                document.getElementById(st).classList.toggle('l_bar');
                var p = document.getElementById(st);
                p.style.marginBottom = array_gap[i].toString()+"px";
                //p.style.margin = array_gap[0].toString()+"px";
                //p.css('top', array_gap[0]);
            }
        }

        
        //console.log(array_type);
    }
    function stop_the_game() {
        game_over = true;
        cancelAnimationFrame(anim_id);
        cancelAnimationFrame(move_right);
        cancelAnimationFrame(move_left);
        cancelAnimationFrame(move_up);
        cancelAnimationFrame(move_down);
        restart_div.slideDown();
        restart_btn.focus();
    }

    /* ------------------------------GAME CODE ENDS HERE------------------------------------------- */


    function collision($div1, $div2) {
        var x1 = $div1.offset().left;
        var y1 = $div1.offset().top;
        var h1 = $div1.outerHeight(true);
        var w1 = $div1.outerWidth(true);
        var b1 = y1 + h1;
        var r1 = x1 + w1;
        var x2 = $div2.offset().left;
        var y2 = $div2.offset().top;
        var h2 = $div2.outerHeight(true);
        var w2 = $div2.outerWidth(true);
        var b2 = y2 + h2;
        var r2 = x2 + w2;

        if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
        return true;
    }



});

$(document).ready(function() {
    $('#clicker').click(function() {
        $('#cross').toggleClass('rotated');
    });
});


