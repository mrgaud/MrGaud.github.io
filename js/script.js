$(document).ready(function() {
    console.log('ready');
    $('.normal-navs-scroll').hide();
    $(window).scroll(function() {
        //controls navbar background toggle
        if ($(window).scrollTop() > 10) {
            $('.normal-navs').slideUp(500)
            $('.normal-navs-scroll').slideDown(500);
        } else {
            $('.normal-navs-scroll').slideUp()
            $('.normal-navs').slideDown()
        }
        if($('.text').isOnScreen(function(deltas){
  return deltas.top >= this.height() && deltas.bottom >= this.height();
})){
          $('.normal-home').removeClass("highlighted")
          $('.normal-about').addClass('highlighted')
        }else{
          $('.normal-home').addClass("highlighted")
          $('.normal-about').removeClass('highlighted')
        }
    })
    $(".normal-about").click(function() {
        $('html,body').animate({
                scrollTop: $(".aboutlink").offset().top
            },
            'slow');
    });
    $(".normal-home").click(function() {
        $('html,body').animate({
                scrollTop: $(".homelink").offset().top
            },
            'slow');
    });
})
