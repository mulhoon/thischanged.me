// GENERIC TOOLS
/* ------------------------------------------------------------ */


// LOAD ALL SCRIPTS AND INITIATE THE APP
/* ------------------------------------------------------------ */


head.js(
	"//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js",
	"js/vendor/transparency.min.js"
).ready(App.view.init);


// Disable Console if not available;
window.console = window.console || { log: function (d) {} };