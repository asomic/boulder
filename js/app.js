$(function(){

  function whenIsLoaded(){
    setTimeout(function(){
      $('.loading').addClass('fadeOut');
      setTimeout(function(){
        $('header, .hero-inner h1, .hero-inner h5, .hero-inner a').removeClass('d-none');
        // $('body').removeClass('overflow-block');
        $('body').css({
          'overflow': 'auto'
        });
      }, 1000);
    }, 1000);

    new WOW().init();

    // function Parallax() {
    // 	scrollPos = $(this).scrollTop();
    //
    // 	$('.hero').css({
    // 		'background-position': '50% ' + (30-scrollPos/10)+'%'
    // 	});
    // }
    //
    // $(window).scroll(function() {
  	// 	Parallax();
  	// });
  }

  var hero = $('.hero');

  // $('.hero').load(function(){
  //   hero.onload = whenIsLoaded();
  // });

  hero.onload = whenIsLoaded();

  // $('#scroll-down').click(){
  //   document.getElementById('youridhere').scrollIntoView();
  // }
  $('#scroll-down').click(function(){
    var target = $('#servicios');

    var top = target.offset().top;
    $('html,body').animate({scrollTop: top}, 100);
    return false;

  });


});
