$(function(){

  // Scroll -> Link To
  $('#link-1').click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
  });

  // Animations Scroller
  $(window).scroll(function() {
      // var scroll = $(window).scrollTop();
      // var preFeatures = $('.hero').offset().top + 200;
      // var preAbout = $('.features-inner').offset().top - 200;
      // var preNews = $('.about').offset().top - 200;
      // var preOpaline = $('.news').offset().top - 200;
      // var preTeam = $('.opaline').offset().top - 200;
      // var preGallery = $('.team').offset().top - 200;
      // // var preSponsors = $('.gallery').offset().top + 400;
      // var prePreFooter = $('.gallery').offset().top + 400;
      //
      // if(scroll > preFeatures){
      //     $('.features-inner').addClass('fadeIn');
      // }
      // if(scroll > preAbout){
      //   $('.about-content-inner').addClass('fadeIn');
      // }
      // if(scroll > preNews){
      //   $('.news-inner').addClass('fadeIn');
      // }
      // if(scroll > preOpaline){
      //   $('.opaline-content-inner').addClass('fadeIn');
      // }
      // if(scroll > preTeam){
      //   $('.team-inner').addClass('fadeIn');
      // }
      // if(scroll > preGallery){
      //   $('.gallery-inner').addClass('fadeIn');
      // }
      // // if(scroll > preSponsors){
      // //   $('.sponsors-inner').addClass('fadeIn');
      // // }
      // if(scroll > prePreFooter){
      //   $('.prefooter-inner .row').addClass('fadeIn');
      // }

  });

  new WOW().init();

  $('.gallery').masonry({
    // options
    itemSelector : '.item'
  });

});
