// Setup App namespace
var App = App || {};

// Load scripts
/* ------------------------------------------------------------ */
var scripts = [
	"//ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js",
	"js/vendor/jquery.velocity.min.js"
	"js/vendor/transparency.min.js"
];


// Globals
/* ------------------------------------------------------------ */

var mobile,
	event_down, 
	event_move, 
	event_release, 
	mobile,
	transition = "transitionend webkitTransitionEnd",
	animation = "animationend webkitAnimationEnd";


