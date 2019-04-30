$(function(){

  // Scroll -> Link To
  // $('#link-1').click(function(){
  //   $('html, body').animate({
  //       scrollTop: $( $.attr(this, 'href') ).offset().top
  //   }, 500);
  //   return false;
  // });

  new WOW().init();

  $('.gallery').masonry({
    itemSelector : '.item'
  });

});
