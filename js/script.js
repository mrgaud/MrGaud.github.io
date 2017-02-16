$(document).ready(function(){
  $('.info').hide(0)
  $('.navDD').on('click',function(){
    $('.ddNavs').slideToggle(800);
    if($('.navDD').hasClass('down')){
      $(".navDD").removeClass('down')
      $(".navDD").html("<i class='fa fa-caret-up'></i>")
    }else{
      $(".navDD").addClass('down')
      $(".navDD").html("<i class='fa fa-caret-down'></i>")
    }
  })
  $('.contact-button').on('click', function(){
    if($('.info').hasClass('hidden')){
      $('.info').removeClass('hidden')
      $('.info').show(800);
    }else{
      $('.info').addClass('hidden')
      $('.info').hide(800);
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
