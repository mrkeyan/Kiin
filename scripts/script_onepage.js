$( "#icon-image-1, #icon-image-2" ).on("click", function(){
    var img_src = $(this).attr("data-src");
    $( ".icon-image").each(function(){
        $(this).removeClass("selected");
    });
    $(this).addClass("selected");
    $( "#main-image" ).attr("src",img_src);
    
    
});

$( "#pointer-1" ).on("click", function(){
    var zoom_src = $( ".selected" ).attr("data-zoom");
    $( "#zoomed_selection" ).attr("src", zoom_src);
});
