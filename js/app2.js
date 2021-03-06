



$(document).foundation();
// create the slippy map
    var map = L.map('image-map', {
      minZoom: -2,
      maxZoom: 1,
      center: [400, 0],
      zoom: -.5,
      crs: L.CRS.Simple
    });
    // dimensions of the image
    var w = 6043,
        h = 4162,
        url = '../img/stressit/Flow.jpg';
    // calculate the edges of the image, in coordinate space
    var southWest = map.unproject([0, h], map.getMaxZoom()-1);
    var northEast = map.unproject([w, 0], map.getMaxZoom()-1);
    var bounds = new L.LatLngBounds(southWest, northEast);
    // add the image overlay, 
    // so that it covers the entire map
    L.imageOverlay(url, bounds).addTo(map);
    // tell leaflet that the map is exactly as big as the image
    map.setMaxBounds(bounds);



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
	});
});