App.view = (function () {

	var init = function(){
		set();
		if(device.desktop()){
			$(window).on('resize', set);
		}
	};

	var set = function(){
		var windowHeight = $(window).height();
		$('.page').height(windowHeight);
	};

	return {
		init:init
	};

})();

