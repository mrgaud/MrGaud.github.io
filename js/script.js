
$(document).ready(function(){
    $('.projects').hide();
    $('.contact').hide();
    $('.about-toggle').on('click', function(){
        $('.about').delay(800).slideToggle();
        $('.projects').slideUp();
        $('.contact').slideUp();
    });
    $('.contact-toggle').on('click', function(){
        $('.contact').delay(400).slideToggle();
        $('.projects').slideUp();
        $('.about').slideUp();
    });
    $('.project-toggle').on('click', function(){
        $('.projects').delay(800).slideToggle();
        $('.about').slideUp();
        $('.contact').slideUp();
    });
});
