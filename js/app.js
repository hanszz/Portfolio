



$(document).foundation();



//Image Gallery//
// var currentIndex = 0,
//   items = $('.img-container div'),
//   itemAmt = items.length;

// function cycleItems() {
//   var item = $('.img-container div').eq(currentIndex);
//   items.hide();

//   item.fadeIn();
// }

// $('.next').click(function() {
//   currentIndex += 1;
//   if (currentIndex > itemAmt - 1) {
//     currentIndex = 0;
//   }
//   cycleItems();
// });

// $('.prev').click(function() {
//   currentIndex -= 1;
//   if (currentIndex < 0) {
//     currentIndex = itemAmt - 1;
//   }
//   cycleItems();
// });

jQuery('#ebill-slider').slippry({
  // general elements & wrapper
  slippryWrapper: '<div class="sy-box ebill-slider" />', // wrapper to wrap everything, including pager

  // options
  adaptiveHeight: false, // height of the sliders adapts to current slide
  start: 'random', // num (starting from 1), random
  loop: false, // first -> last & last -> first arrows
  captionsSrc: 'li',
  captions: 'custom', // Position: overlay, below, custom, false
  captionsEl: '.external-captions',

  // transitions
  transition: 'horizontal', // fade, horizontal, kenburns, false
  easing: 'linear', // easing to use in the animation [(see... [jquery www])]
  continuous: false,

  // slideshow
  auto: false
});
jQuery('#iteration-slider').slippry({
  // general elements & wrapper
  slippryWrapper: '<div class="sy-box iteration-slider" />', // wrapper to wrap everything, including pager

  // options
  adaptiveHeight: true, // height of the sliders adapts to current slide
  start: 'random', // num (starting from 1), random
  loop: false, // first -> last & last -> first arrows
  captionsSrc: 'li',
  captions: 'custom', // Position: overlay, below, custom, false
  captionsEl: '.external-captions',

  // transitions
  transition: 'horizontal', // fade, horizontal, kenburns, false
  easing: 'linear', // easing to use in the animation [(see... [jquery www])]
  continuous: false,

  // slideshow
  auto: false
});
jQuery('#final-slider').slippry({
  // general elements & wrapper
  slippryWrapper: '<div class="sy-box final-slider" />', // wrapper to wrap everything, including pager

  // options
  adaptiveHeight: true, // height of the sliders adapts to current slide
  start: 'random', // num (starting from 1), random
  loop: false, // first -> last & last -> first arrows
  captionsSrc: 'li',
  captions: 'custom', // Position: overlay, below, custom, false
  captionsEl: '.external-captions',

  // transitions
  transition: 'horizontal', // fade, horizontal, kenburns, false
  easing: 'linear', // easing to use in the animation [(see... [jquery www])]
  continuous: false,

  // slideshow
  auto: false
});

var heightToggle = 0
$( document ).ready(function() {
    $(function() {
    $("img.lazy").lazyload({
        threshold : 400,
        effect: 'fadeIn'
    });


    $( "a.right" ).click(function() {
    if (heightToggle == 0){
    	$('.top-bar-subtle').css( "height", "300" );
    	heightToggle = 1;
    }else{
    	$('.top-bar-subtle').css( "height", "60" );
    	heightToggle = 0;
    }

    
});
    // Back to Top
    var offset = 250;
    var duration = 300;
    jQuery(window).scroll(function(){
      if ($(this).scrollTop() > offset) {
        $('.back-to-top').fadeIn(duration);
      } else {
        $('.back-to-top').fadeOut(duration);
      }
    });
    $('.back-to-top').click(function(event){
      event.preventDefault();
      $('html, body').animate({scrollTop: 0}, duration);
      return false;
    })
	});
});