$(function(){

  function whenIsLoaded(){
    setTimeout(function(){
      $('.loading').addClass('fadeOut');
      setTimeout(function(){
        $('header, .hero-inner h1, .hero-inner h5, .hero-inner a').removeClass('d-none');
        $('body').removeClass('overflow-block');
      }, 1000);
    }, 1000);

    new WOW().init();

    function Parallax() {
    	scrollPos = $(this).scrollTop();

    	$('.hero').css({
    		'background-position': '50% ' + (30-scrollPos/10)+'%'
    	});
    }

    $(window).scroll(function() {
  		Parallax();
  	});
  }

  window.onload = whenIsLoaded();

});
