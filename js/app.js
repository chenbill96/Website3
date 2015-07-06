(function(){
	var app = angular.module('buttons', []);

	app.controller('projectController', function(){
		this.product = projects;	//set projects as a property of this controller
	});

	app.controller('projectTabController', function(){
		this.tab = 1;	

		this.selectTab = function(setTab){
			this.tab = setTab;
		};

		this.isSelected = function(checkTab){
			return this.tab === checkTab;
		};

	});
	// var projects = [
	// 	{
	// 	ngclick: 'item.selectItem(1)',
	// 	ngshow: 'item.isSelected(1)',
	// 	name: 'fan car',
	// 	description: '',
	// 	dates: '',
	// 	tldr:'',
	// 	images:[
	// 		{
	// 		main:"media/images/Projects/email-logo.jpg",
	// 		thumbnail:""
	// 		},
	// 		{
	// 		main:"media/images/Projects/email-logo.jpg",
	// 		thumbnail:""
	// 		}
	// 	]
	// 	},

	// 	{
	// 	ngclick: 'item.selectItem(2)',
	// 	ngshow: 'item.isSelected(2)',
	// 	name: 'printinerrr',
	// 	description: '',
	// 	dates: '',
	// 	picture: '',
	// 	thumbnail: '',
	// 	tldr:'',
	// 	images:[
	// 		{
	// 		main:"media/images/Projects/linkedin.jpg",
	// 		thumbnail:""
	// 		},
	// 		{
	// 		main:"media/images/Projects/linkedin.jpg",
	// 		thumbnail:""
	// 		}
	// 	]
	// 	}
	// ];

})();