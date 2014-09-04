// GENERIC TOOLS
/* ------------------------------------------------------------ */

// Load scripts and initiate the app
head.js.apply(window, scripts).ready('transparency', App.view.init);

// Disable Console if not available;
window.console = window.console || { log: function (d) {} };


// Check if mobile device
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
	event_down =  "touchstart";
    event_move = "touchmove";
    event_release =  "touchend";
    mobile = true;
}else{
    event_down = "mousedown";
    event_move = "mousemove";
    event_release =  "mouseup";
}
