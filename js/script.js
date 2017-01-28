
$(document).ready(function(){
    $('.projects').hide();
    $('.contact').hide();
    $('.about-toggle').on('click', function(){
        $('.about').slideToggle();
        $('.projects').slideUp();
        $('.contact').slideUp();
    });
    $('.contact-toggle').on('click', function(){
        $('.contact').slideToggle();
        $('.projects').slideUp();
        $('.about').slideUp();
    });
    $('.project-toggle').on('click', function(){
        $('.projects').slideToggle();
        $('.about').slideUp();
        $('.contact').slideUp();
    });
});
