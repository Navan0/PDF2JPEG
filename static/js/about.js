 $.fn.is_on_screen = function(){
    var win = $(window);
    var viewport = {
        top : win.scrollTop(),
        left : win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();

    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();

    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
};

if( $('#charts').length > 0 ) { // if target element exists in DOM
	if( $('#charts').is_on_screen() ) { // if target element is visible on screen after DOM loaded

			 $('.html_chart').addClass('html');
			 $('.css_chart').addClass('css');
			 $('.js_chart').addClass('js');
			 $('.php_chart').addClass('php');
			 $('.mysql_chart').addClass('mysql');
			 $('.ps_chart').addClass('ps');
			 $('.corel_chart').addClass('corel');
			 $('.max_chart').addClass('max');
	} else {
			 $('.html_chart').removeClass('html');
			 $('.css_chart').removeClass('css');
			 $('.js_chart').removeClass('js');
			 $('.php_chart').removeClass('php');
			 $('.mysql_chart').removeClass('mysql');
			 $('.ps_chart').removeClass('ps');
			 $('.corel_chart').removeClass('corel');
			 $('.max_chart').removeClass('max');
	}
}
$(window).scroll(function(){ // bind window scroll event
	if( $('#charts').length > 0 ) { // if target element exists in DOM
		if( $('#charts').is_on_screen() ) { // if target element is visible on screen after DOM loaded

			 $('.html_chart').addClass('html');
			 $('.css_chart').addClass('css');
			 $('.js_chart').addClass('js');
			 $('.php_chart').addClass('php');
			 $('.mysql_chart').addClass('mysql');
			 $('.ps_chart').addClass('ps');
			 $('.corel_chart').addClass('corel');
			 $('.max_chart').addClass('max');

		} else {

			 $('.html_chart').removeClass('html');
			 $('.css_chart').removeClass('css');
			 $('.js_chart').removeClass('js');
			 $('.php_chart').removeClass('php');
			 $('.mysql_chart').removeClass('mysql');
			 $('.ps_chart').removeClass('ps');
			 $('.corel_chart').removeClass('corel');
			 $('.max_chart').removeClass('max');

		}
	}
});



 var $animation_elements = $('.animation-element');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    } else {
      $element.removeClass('in-view');
    }
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');


var map;
     function initMap() {

       var styledMapType = new google.maps.StyledMapType(
         [
       {
         "elementType": "geometry",
         "stylers": [
           {
             "color": "#f5f5f5"
           }
         ]
       },
       {
         "elementType": "labels.icon",
         "stylers": [
           {
             "visibility": "off"
           }
         ]
       },
       {
         "elementType": "labels.text.fill",
         "stylers": [
           {
             "color": "#616161"
           }
         ]
       },
       {
         "elementType": "labels.text.stroke",
         "stylers": [
           {
             "color": "#f5f5f5"
           }
         ]
       },
       {
         "featureType": "administrative",
         "elementType": "geometry",
         "stylers": [
           {
             "visibility": "off"
           }
         ]
       },
       {
         "featureType": "administrative.land_parcel",
         "elementType": "labels.text.fill",
         "stylers": [
           {
             "color": "#bdbdbd"
           }
         ]
       },
       {
         "featureType": "poi",
         "stylers": [
           {
             "visibility": "off"
           }
         ]
       },
       {
         "featureType": "poi",
         "elementType": "geometry",
         "stylers": [
           {
             "color": "#eeeeee"
           }
         ]
       },
       {
         "featureType": "poi",
         "elementType": "labels.text.fill",
         "stylers": [
           {
             "color": "#757575"
           }
         ]
       },
       {
         "featureType": "poi.park",
         "elementType": "geometry",
         "stylers": [
           {
             "color": "#e5e5e5"
           }
         ]
       },
       {
         "featureType": "poi.park",
         "elementType": "labels.text.fill",
         "stylers": [
           {
             "color": "#9e9e9e"
           }
         ]
       },
       {
         "featureType": "road",
         "stylers": [
           {
             "visibility": "off"
           }
         ]
       },
       {
         "featureType": "road",
         "elementType": "geometry",
         "stylers": [
           {
             "color": "#ffffff"
           }
         ]
       },
       {
         "featureType": "road",
         "elementType": "labels.icon",
         "stylers": [
           {
             "visibility": "off"
           }
         ]
       },
       {
         "featureType": "road.arterial",
         "elementType": "labels.text.fill",
         "stylers": [
           {
             "color": "#757575"
           }
         ]
       },
       {
         "featureType": "road.highway",
         "elementType": "geometry",
         "stylers": [
           {
             "color": "#dadada"
           }
         ]
       },
       {
         "featureType": "road.highway",
         "elementType": "labels.text.fill",
         "stylers": [
           {
             "color": "#616161"
           }
         ]
       },
       {
         "featureType": "road.local",
         "elementType": "labels.text.fill",
         "stylers": [
           {
             "color": "#9e9e9e"
           }
         ]
       },
       {
         "featureType": "transit",
         "stylers": [
           {
             "visibility": "off"
           }
         ]
       },
       {
         "featureType": "transit.line",
         "elementType": "geometry",
         "stylers": [
           {
             "color": "#e5e5e5"
           }
         ]
       },
       {
         "featureType": "transit.station",
         "elementType": "geometry",
         "stylers": [
           {
             "color": "#eeeeee"
           }
         ]
       },
       {
         "featureType": "water",
         "stylers": [
           {
             "color": "#e01818"
           }
         ]
       },
       {
         "featureType": "water",
         "elementType": "geometry",
         "stylers": [
           {
             "color": "#c9c9c9"
           }
         ]
       },
       {
         "featureType": "water",
         "elementType": "geometry.fill",
         "stylers": [
           {
             "color": "#12ccf1"
           }
         ]
       }
     ],
           {name: 'Styled Map'});




       map = new google.maps.Map(document.getElementById('map'), {
         center: {lat: 11.395577, lng: 75.713551},
         zoom: 8,
         mapTypeControlOptions: {
           mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
                   'styled_map']
         }
       });
     }
$(document).ready(function(){
  $('.img-wrap').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows:true,
    dots:false,
    nextArrow:('<i class="fa fa-chevron-right arrow-right"></i>'),
    prevArrow:('<i class="fa fa-chevron-left arrow-left"></i>'),
    responsive:[{
      breakpoint:991,
      settings:{
        slidesToScroll:1,
        slidesToShow:1,
      },
    }]
  });
});