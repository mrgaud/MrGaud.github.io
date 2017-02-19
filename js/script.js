$(document).ready(function(){
  console.log('ready');
  $('.normal-navs-scroll').hide();
  $(window).scroll(function(){
    if($(window).scrollTop()>10){
      $('.normal-navs').slideUp(500)
      $('.normal-navs-scroll').delay(550).slideDown(500);
      console.log(true);
    }else{

      console.log(false);
    }
  })
})
