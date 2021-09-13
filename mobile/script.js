$(document).ready(function(){
    $('.bar').click(function(){
        $('header>nav').animate({left: 0}, 800);
    });

    $('.close').click(function(){
        $('header>nav').animate({left: '-80%'}, 800);
    });
});