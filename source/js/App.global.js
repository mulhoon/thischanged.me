/*
*	
*	Script written by Nic Mulvaney
*
*/

// Setup App namespace
var App = App || {};

// Load scripts
/* ------------------------------------------------------------ */
var scripts = [
	"//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js",
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


