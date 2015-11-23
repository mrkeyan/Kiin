var img1 = $(".intro-image-2nd-page");
var img2 = $(".intro-image-3rd-page");
var img3 = $(".intro-image-4th-page");
var img4 = $(".intro-image-5th-page");
var img5 = $(".intro-image-6th-page");

var sect1 = $(".intro-sect").position().top;
var sect2 = $(".desc-sect").position().top;
var sect3 = $(".animation-sect").position().top;
var sect4 = $(".prod-sect").position().top;
var sect5 = $(".detail-sect").position().top;

var desc_cont = $('.desc-sect-container');
var img_border = $('.intro-image-border');

var sects = []; //array of the section positions, used for scrolling
var sect = 0; //the current section, default 0 so lines up with array sections

var lastScroll = 0;
var timer;
var timeout = 1000;

$(document).ready(function(){
    sects = [sect1, sect2, sect3, sect4, sect5];
    $('.landing-page').delay(2000).fadeOut(1000);
    hideDesc();
    if($(window).scrollTop() != 0){
        hideBorder();   
    }
    //need to check position of scroll and set position var
});

//scrolling function, handles sections and images
$(window).scroll(function(e){

    if($(window).innerWidth()>700){

        var scroll = $(this).scrollTop();

        if(timer) {
            window.clearTimeout(timer);
        }
        timer = window.setTimeout(function() {
            if (scroll > lastScroll){

                if((scroll => 0) && (scroll < sects[1]) && (scroll > lastScroll)){
                    
                    scrollToSect1();

                }else if((scroll => sects[1]) && ( scroll < sects[2]) && (scroll > lastScroll)){
                   
                    scrollToSect2();

                }else if((scroll => sects[2]) && ( scroll < sects[3]) && (scroll > lastScroll)){
                    scrollToSect3();

                }else if((scroll => sects[3]) && ( scroll < sects[4]) && (scroll > lastScroll)){
                    scrollToSect4();

                }
                //scrollToNext();
            }

            if(scroll < lastScroll){
                if(scroll > sects[3]){
                    scrollToSect3();
                }else if (scroll > sects[2]){
                    scrollToSect2();   
                }else if(scroll > sects[1]){
                    scrollToSect1();   
                }else if(scroll > sects[0]){
                    scrollToSectIntro();
                }

                //scrollToPrev();
            }
            else{
                //console.log("scroll is the same?");   
            }

            lastScroll = scroll;
        },100);

        if((scroll => 0) && (scroll < sects[1])){
            img2.css("clip", "rect(auto,auto,"+scroll+"px,auto)");
            //img3.css("clip", "rect(auto,auto,0px,auto)");

        }else if((scroll => sects[1]) && (scroll < sects[2])){
            img3.css("clip", "rect(auto,auto," + (scroll - sects[1]) + "px,auto)");

        }else if((scroll => sects[2]) && (scroll < sects[3])){
            img4.css("clip", "rect(auto,auto," + (scroll - sects[2]) + "px,auto)");

        }else if((scroll => sects[3]) && (scroll < sects[4])){
            img5.css("clip", "rect(auto,auto," + (scroll - sects[3]) + "px,auto)");
        }

        //image changing on scroll
    }
});
//functions

//borders


//scrolling
function scrollToSectIntro(){
    if (navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)){
        window.scrollTo(0,sects[0]);
    }else{
        TweenLite.to(window, 1, {scrollTo:{y: sects[0]}, ease: Power1.easeInOut, onComplete:stopScroll});
    }
    showBorder();
    hideDesc();
}

function scrollToSect1(){
    if (navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)){
        window.scrollTo(0,sects[1]);
    }else{
        TweenLite.to(window, 1, {scrollTo:{y: sects[1]}, ease: Power1.easeInOut, onComplete:stopScroll});
    }
    showDesc();
    hideBorder();
}

function scrollToSect2(){
    if (navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)){
        window.scrollTo(0,sects[2]);
    }else{
        TweenLite.to(window, 1, {scrollTo:{y: sects[2]}, ease: Power1.easeInOut, onComplete:stopScroll});
    }
    hideDesc();

}

function scrollToSect3(){
    if (navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)){
        window.scrollTo(0,sects[3]);
    }else{
        TweenLite.to(window, 1, {scrollTo:{y: sects[3]}, ease: Power1.easeInOut, onComplete:stopScroll});
    }
}

function scrollToSect4(){
    if (navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)){
        window.scrollTo(0,sects[4]);
    }else{
        TweenLite.to(window, 1, {scrollTo:{y: sects[4]}, ease: Power1.easeInOut, onComplete:stopScroll});
    }
}

function scrollToNext(){
    //var diff = Math.abs(desc_pos - lastScroll);
    //var duration = (diff/desc_pos).toFixed(2);
    if (navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)){
        window.scrollTo(0,sects[sect]);
    }else{

        console.log("next: " + sect);
        TweenLite.to(window, 1, {scrollTo:{y: sects[sect+1]}, ease: Power1.easeInOut, onComplete: stopScroll});
        sect = sect+1;
    }
}

function scrollToPrev(){
    //var diff = Math.abs(desc_pos - lastScroll);
    //var duration = (diff/desc_pos).toFixed(2);
    if (navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)){
        window.scrollTo(0,sects[sect]);
    }else{
        console.log("prev: " + sect);
        TweenLite.to(window, 1, {scrollTo:{y: sects[sect-1]}, ease: Power1.easeInOut, onComplete: stopScroll});
        sect = sect - 1;
    }

}

function stopScroll(){
    lastScroll = $(this).scrollTop();
}

function showDesc(){
    desc_cont.fadeIn(500);  
}

function hideDesc(){
    desc_cont.fadeOut(500);
}

function hideBorder(){
    img_border.fadeOut(500);
}
function showBorder(){
    img_border.fadeIn(500);
}

img_border.click(function(){
    scrollToSect1();
    hideBorder();
});

$(".hotspot").click(function(){
    $(".info").css("opacity","0.0");
    var x = $(this).attr("class").split(" ")[1];
    $("#"+x+"").css("opacity","1.0");
});