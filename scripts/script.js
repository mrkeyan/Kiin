var mySwiper = new Swiper ('.swiper-container', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    autoplay: 5500,
    loop: true,
    direction: 'horizontal',
    effect: 'fade'
});

/*doesn't work yet, want to switch off of jquery */

$(function(){
    var $navBar;
    if(document.documentElement.clientWidth < 999) {
        $navBar = $("#mobile-navBar");
    } else {
        $navBar = $("#navBar");
    }

    $navBar.on("click","a", function(e){
        e.preventDefault();

        var $this = $(this),
            href = $this.attr("href"),
            topY = $(href).position().top;
        TweenLite.to(window, 1, {scrollTo:{y: topY, autoKill: true}});

    });  
});


/*scroll to top of page*/
document.getElementById("scroll-top").addEventListener("click", function() {
    TweenLite.to(window, 1, {scrollTo:{y:0, autoKill: true}}); 
});

/*Mobile function*/

var navMenuIcon = document.getElementById( "nav-toggle" );
var navMenu = document.getElementById( "mobile-menu-container" );
var navBar = document.getElementById( "mobile-navBar" );
document.getElementById( "header-nav-toggle" ).addEventListener( "click", function() {
    navMenuIcon.classList.toggle( "active" );
    if(navMenuIcon.classList.contains("active")){
        navMenu.style.display ="flex";
    }else{
        navMenu.style.display = "none";  
    }

});

navBar.addEventListener("click", function(){
    navMenuIcon.classList.toggle( "active" );
    if(navMenuIcon.classList.contains("active")){
        navMenu.style.display ="flex";
    }else{
        navMenu.style.display = "none";  
    }
            });