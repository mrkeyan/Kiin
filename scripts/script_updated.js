var img_con = $(".intro-image-container");
var image1 = $(".intro-image-2nd-page");
var image2 = $(".intro-image-3rd-page");
var desc = $('.desc-sect');
var lastScroll = 0;

//fade the logo out after 2 seconds
$(window).load(function () {
    //$('html').css("overflow","hidden");
    if($(this).innerWidth() > 700){
        $('.landing-page').delay(2000).fadeOut(1000);
    }
});

$(window).scroll(function(event){
    if($(window).innerWidth()>700){
        var scroll = $(this).scrollTop();
        //var desc = $(".desc-sect-words").offset().top;
        var image_h = img_con.height();
        var image1_h = image1.height();
        //console.log("scroll value: " + scroll);
        //console.log("scroll desc: " + desc);
        //console.log("image height: " + image1_h);
        //console.log("image height: " + image_h);

        if((scroll > 0) &&(scroll < image1_h*1.25) && (scroll > lastScroll)){
            scrollToDesc(image1.height()/3);
        }
        if(scroll > image1_h*1.25){
            image1.fadeOut(500);
            image2.fadeOut(500);
        }else{
            image1.fadeIn(500);
            image2.fadeIn(500);
        }
        if(scroll == 0){
            showBorder();
        }
        lastScroll = scroll;

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
    var x;
    if(($(window).innerWidth()>700) && ($(window).innerWidth()< 999)){
        x = image1.height()/3;
    }else{
        x = 0;
    }
    scrollToDesc(x);
    //showDesc();
});





//functions

function removeBorder(){
    $('.intro-image-border').css("visibility","hidden");    
}
function showBorder(){
    $('.intro-image-border').css("visibility","visible");
}

function scrollToDesc(x){
    removeBorder();
    var topY = $(desc).position().top - x;
    //showDesc();
    TweenLite.to(window, 2, {scrollTo:{y: topY, autoKill: true}});
    TweenLite.to(".desc-sect",0.5, {css:{opacity:1.0},delay:2});
}

function showDesc(){
    desc.css({'visibility':'visible'});
}