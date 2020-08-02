$(function(){
  $('.slider').slick({
    nextArrow:'<button class="slick-arrow slick-next"><img src="img/arrow-next.svg" alt="next arrow"></button>',
    prevArrow:'<button class="slick-arrow slick-prew"><img src="img/arrow-prev.svg" alt="prew arrow"></button>',
    arrows: true,
    fade: true,
     dots: true
  });

  $('.header-btn').on('click', function(){
    $('.menu').addClass('active');
  });

  $('.close__btn').on('click', function(){
  $('.menu').removeClass('active');
  });

});

