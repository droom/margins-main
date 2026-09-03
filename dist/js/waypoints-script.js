var root = document.getElementsByTagName( 'html' )[0]; // '0' to assign the first (and only `HTML` tag)
root.setAttribute( 'class', 'js' );


$(".to_fade_up").waypoint(function(){
  $(this[0,'element']).addClass("fade_up");
}, {
  triggerOnce: true,
  offset: '75%'
});
$(".to_fade_from_left").waypoint(function(){
  $(this[0,'element']).addClass("fade_from_left");
}, {
  triggerOnce: true,
  offset: '75%'
});
$(".to_fade_from_right").waypoint(function(){
  $(this[0,'element']).addClass("fade_from_right");
}, {
  triggerOnce: true,
  offset: '75%'
});