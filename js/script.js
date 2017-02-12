$(document).ready(function(){

  $('.navDD').on('click',function(){
    $('.ddNavs').slideToggle();
    if($('.navDD').hasClass('down')){
      $(".navDD").removeClass('down')
      $(".navDD").html("<i class='fa fa-caret-up'></i>")
    }else{
      $(".navDD").addClass('down')
      $(".navDD").html("<i class='fa fa-caret-down'></i>")
    }
  })

  $(window).scroll(function(){
    if($(window).scrollTop()>10){
      $('.navContainer').addClass('navContainer-scroll')
    }
    else{
      $('.navContainer').removeClass('navContainer-scroll')
    }
  })

})
