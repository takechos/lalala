$(function(){
  $('#checked-slide').on('click', function(){
  $(this).toggleClass('open');
    if ($(this).hasClass('open')) {
      $('.slick_slide').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
      });
    } else {
      $('.slick_slide').visibility ="hidden";
    }
  });
  
  $('#pagetop').on('click', function(){
    $('html, body').animate({scrollTop:0}, 1000, 'swing');
    return false;
  });

  $('.trigger').on('click', function(){
    if ($(this).next().not(':animated').length >= 1) {
        $(this).toggleClass('open');
        $('.menu').slideToggle(100);
        if ($(this).hasClass('open')) {
            $('.trigger span').text('LA LA LAND を視聴する　△');    
        } else {
            $('.trigger span').text('LA LA LAND を視聴する　▼');
        }
    }
    });

  });