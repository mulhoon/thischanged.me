/*
*	
*	---
*	Written by Nic Mulvaney
*
*/


// Setup App namespace
var App = App || {};

// Globals
var mobile,
	ua = navigator.userAgent,
	event_down, 
	event_move, 
	event_release, 
	mobile,
	transition = "transitionend webkitTransitionEnd",
	animation = "animationend webkitAnimationEnd";

// CHECK BROWSER
/* ------------------------------------------------------------ */

if( ua.match(/iPhone/i) || ua.match(/iPad/i) || ua.match(/Android/i) ){
	event_down =  "touchstart";
    event_move = "touchmove";
    event_release =  "touchend";
    mobile = true;
}else{
    event_down = "mousedown";
    event_move = "mousemove";
    event_release =  "mouseup";
}

