var img_con = $(".intro-image-container");
var image1 = $(".intro-image-2nd-page");
var image2 = $(".intro-image-3rd-page");
var image3 = $(".intro-image-4th-page");
var desc = $('.desc-sect');
var desc_pos = $(desc).position().top;
var desc_cont = $('.desc-sect-container');
var prod = $('.prod-sect');
var prod_pos = $(prod).position().top;
var lastScroll = 0;
var timer;
//if (navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)) {  

//var fade = [0,0]; //fade at 0 means hidden, 1 visible

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
            console.log("scroll height: " + scroll+" desc pos: " + $(desc).position().top +" lastscroll: " + lastScroll);

            //scroll moving down
            //scroll between top and desc
            if((scroll => 0) &&(scroll < desc_pos ) && (scroll > lastScroll)){
                scrollToDesc();
            }else if((scroll <= desc_pos*.95) && (scroll < lastScroll)){
                //scroll moving up
                //scroll just before desc
                scrollToLanding();
            }else if((scroll > desc_pos) && (scroll > lastScroll)){
                //past desc
                //scroll moving down
                //console.log("scroll: " + scroll + " desc_pos: " + desc_pos);
                fadeOutDesc();
                scrollToProd();
                //fadeOutImages();
            }else if((scroll >= desc_pos) && (scroll < lastScroll)){
                //past desc
                //going up
                //fadeInImages();
                scrollToDesc();
                //desc_cont.fadeIn(500);
            }else{
                //fadeInImages();
                //console.log("missed something");
            }
            lastScroll = scroll;
            //console.log( "Firing!" );
        }, 100);



        if((scroll>=0) && (scroll<desc_pos)){
            image2.css("clip", "rect(auto,auto," + scroll + ",auto)");
            image3.css("clip", "rect(auto,auto,0px,auto)");
        }else if(scroll >=desc_pos){
            var x = scroll - desc_pos;
            //console.log(x);
            image3.css("clip", "rect(auto,auto," + x + ",auto)");
        }
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
    if (navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)){
        window.scrollTo(0,0);
    }else{
    TweenLite.to(window, 1, {scrollTo:{y: 0}, ease: Power1.easeInOut, onComplete:showBorder});
    }
}

function scrollToDesc(){
    //console.log("scrollToDesc()");
    removeBorder();
    var diff = Math.abs(desc_pos - lastScroll);
    var duration = (diff/desc_pos).toFixed(2);
    if (navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)){
        window.scrollTo(0,desc_pos);
        showDesc();
    }else{
        TweenLite.to(window, duration, {scrollTo:{y: desc_pos}, ease: Power1.easeInOut, onComplete:showDesc});
    }
    //TweenLite.to(".desc-sect",0.5, {css:{opacity:1.0},delay:1});
}

function scrollToProd(){
    console.log("prod_pos: "+prod_pos+" prod height: "+prod.height());
    if (navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)){
        window.scrollTo(0,prod_pos+prod.height());
    }else{
        TweenLite.to(window, 1, {scrollTo:{y: prod_pos + prod.height()}, ease: Power1.easeInOut});
    }
}

function showDesc(){
    //console.log("showDesc()");
    //desc_cont.css({'opacity':'1.0'});
    desc_cont.fadeIn(500);
    //fade[0] = 1;
}

function fadeOutDesc(){
    //console.log("fadeOutDesc()");
    //fade[0] = 0;
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

function ScrollHere(x){
    TweenLite.to(window, 1, {scrollTo:{y: x}, ease: Power1.easeInOut});
}