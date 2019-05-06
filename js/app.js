$(function(){

  function whenIsLoaded(){
    $('.loading').addClass('fadeOut');
    setTimeout(function(){
      $('header, .hero-inner h1, .hero-inner h5, .hero-inner a').removeClass('d-none');
      $('body').removeClass('overflow-block');
    }, 1000);

    new WOW().init();

    // $('.gallery').masonry({
    //   itemSelector : '.item'
    // });
  }

  window.onload = whenIsLoaded();

});
