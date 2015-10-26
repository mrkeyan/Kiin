//if icon 1 or 2 are clicked, remove the selected class from all
//add the selected class to the icon clicked
//animate this transition
$( "#icon-image-1, #icon-image-2" ).on("click", function(){
    var img_src = $(this).attr("data-src");
    $( ".icon-image").each(function(){
        $(this).removeClass("selected");
        $(this).addClass("icon-shadow-selected");
    });
    $(this).addClass("selected");
    $( "#main-image" ).attr("src",img_src);
    if($(this).hasClass("selected")){
        $(this).removeClass("icon-shadow-selected");
    }else{
           
    }
    
    
});

//change the zoomed in image to the pointer's data-zoom src
//will want to animate this to smooth out the transition
$( "#pointer-1" ).on("click", function(){
    var zoom_src = $( ".selected" ).attr("data-zoom");
    var img_num = $( ".selected" ).attr("data-num");
    $( "#zoomed_selection" ).attr("src", zoom_src);
    
    var prod_info = $( "#product-info-text" );
    $(".info-image").each(function(){
       $(this).removeClass("selected-text");
        $(this).addClass("hidden-text");
    });
    if(img_num == "info-image-1"){
        $(".info-image-1").addClass("selected-text");
        $(".info-image-1").removeClass("hidden-text");
    }else if(img_num =="info-image-2"){
        $(".info-image-2").addClass("selected-text");
        $(".info-image-2").removeClass("hidden-text");
    }else{
        $(".info-image-0").addClass("selected-text");
        $(".info-image-0").removeClass("hidden-text");
    }
});

$( "#enter_site_btn" ).click(function(){
    var cover = $( "#enter_cover" );
    cover.slideUp(1000);
});

var eventPosition = 550;

$(window).scroll(function(e){
    console.log("y position: " + screenY);
    console.log($(body).scrollTop());
    if (window.screenY >= eventPosition){
        fireEvent();
    }
});

function fireEvent(){
    $(".nav-bar").hide();
};