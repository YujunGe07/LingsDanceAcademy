
var navOffset = $('#about').offset().top;

$(window).scroll(function() {
    var scrollPos = $(window).scrollTop();   
    
    if(scrollPos > navOffset){
        $('nav').addClass('dark-background logoBar');
    }else{
        $('nav').removeClass('dark-background logoBar');
    }
});