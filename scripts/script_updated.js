var img_con = $(".intro-image-container");
var image1 = $(".intro-image-2nd-page");
var image2 = $(".intro-image-3rd-page");
var desc = $('.desc-sect');
var desc_cont = $('.desc-sect-container');
var lastScroll = 0;
var timer;
var fade = [0,0]; //fade at 0 means hidden, 1 visible

//fade the logo out after 2 seconds
$(window).load(function () {
    //$('html').css("overflow","hidden");
    if($(this).innerWidth() > 700){
        $('.landing-page').delay(2000).fadeOut(1000);
        fadeOutDesc();
    }
});

$(window).scroll(function(event){
    if($(window).innerWidth()>700){

        var scroll = $(this).scrollTop();
        //var image_h = img_con.height();
        //var image1_h = image1.height();

        if(timer) {
            window.clearTimeout(timer);
        }
        timer = window.setTimeout(function() {
            // actual code here. Your call back function.
/*            console.log("scroll height: " + scroll);
            console.log("desc pos: " + $(desc).position().top);
            console.log("lastscroll: " + lastScroll);
            console.log("fade[0]: " + fade[0]);*/
            
            //scroll moving down
            //scroll between top and desc
            if((scroll => 0) &&(scroll < $(desc).position().top ) && (scroll > lastScroll)){
                scrollToDesc();
            }else if((scroll <= $(desc).position().top*.9) && (scroll < lastScroll)){
                //scroll moving up
                //scroll just before desc
                scrollToLanding();
            }else if((scroll > $(desc).position().top) && (scroll > lastScroll)){
                //past desc
                //scroll moving down
                fadeOutDesc();
                fadeOutImages();
            }else if((scroll >= $(desc).position().top) && (scroll < lastScroll)){
                //past desc
                //going up
                fadeInImages();
                scrollToDesc();
                //desc_cont.fadeIn(500);
            }else{
                fadeInImages();
                console.log("missed something");
            }
            lastScroll = scroll;
            console.log( "Firing!" );
        }, 100);




        image2.css("clip", "rect(auto,auto," + scroll + ",auto)");
    }
});


//when the mouse moves, add the white border/image around the undershirt
$('body').one('mousemove', function(){
    if($(this).innerWidth() > 700){
        setTimeout(function(){
            $('.intro-image-border').css("visibility","visible").fadeIn(500);

        },1000);
    }
});

/*
//once scrolling starts, remove the above added border
$(window).one('scroll', function(){
    removeBorder();
    undershirtMove();
});
*/

//scroll to the next part of the page
$('.intro-image-border').click(function(){
    scrollToDesc();
    //showDesc();
});





//functions

function removeBorder(){
    $('.intro-image-border').fadeOut(500);    
}
function showBorder(){
    $('.intro-image-border').fadeIn(500);
}

function scrollToLanding(){
    //console.log("scrollToLanding()");
    fadeOutDesc();
    TweenLite.to(window, 1, {scrollTo:{y: 0}, ease: Power1.easeInOut, onComplete:showBorder});
}

function scrollToDesc(){
    //console.log("scrollToDesc()");
    removeBorder();
    var topY = $(desc).position().top;
    TweenLite.to(window, 2, {scrollTo:{y: topY}, ease: Power1.easeInOut, onComplete:showDesc});
    //TweenLite.to(".desc-sect",0.5, {css:{opacity:1.0},delay:1});
}

function showDesc(){
    //console.log("showDesc()");
    //desc_cont.css({'opacity':'1.0'});
    desc_cont.fadeIn(500);
    fade[0] = 1;
}

function fadeOutDesc(){
    //console.log("fadeOutDesc()");
    fade[0] = 0;
    desc_cont.fadeOut(500);
}

function fadeInImages(){
    //console.log("fadeInImages()");
    image1.fadeIn(500);
    image2.fadeIn(500);
}
function fadeOutImages(){
    //console.log("fadeOutImages()");
    image1.fadeOut(500);
    image2.fadeOut(500);
}