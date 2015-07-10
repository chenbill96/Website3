(function(){
	var app = angular.module('angular', [ ]);

	app.controller('FancarController', function(){
		this.product = fancar;
	});

	// ~~~~~~~~~~~~~~ Tab Content: FANCAR ~~~~~~~~~~~~~~~~~//
	var fancar = {
		name: "Fancar 2.0",
		moreDetail: "description",
		descriptionImage: "media/images/Projects/email-logo.jpg",
		tldr: "tl;dr: I made an electric powered longbaord.",
		summary: "In early November 2014, I stumbled upon a kickstarter campaign for electric longboards. I thought it would be nice to try to see if I can replicate it."
	}

})();
