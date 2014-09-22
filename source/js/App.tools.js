// GENERIC TOOLS
/* ------------------------------------------------------------ */

// Load scripts and initiate the app
var ready = function(){
	head.js.apply(window, scripts).ready('transparency', function(){
		checkDevice();
		App.view.init();
	});
};

if(!window.cordova){ 
	ready();
}else{ // if Cordova wait for device
    document.addEventListener("deviceready", ready, false);
}

// Disable Console if not available;
window.console = window.console || { log: function (d) {} };

// Check if mobile device
var checkDevice = function(){
	if(device.desktop()) {
	    event_down 		= "mousedown";
	    event_move 		= "mousemove";
	    event_release	= "mouseup";
	}else{
		event_down 		= "touchstart";
	    event_move 		= "touchmove";
	    event_release 	= "touchend";
	}
};
