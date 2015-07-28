function fancarSpecifications($scope){
	$scope.specifications=[
		{	name: "Top Speed",
			info: "30km/h"},
		{
			name: "Number of Motors",
			info: "1 on right rear wheel"},
		{
			name: "Battery Life",
			info: "20km"},
		{
			name: "Controls",
			info: "Bluetooth or Radio Controlled"},
		{
			name: "Weight",
			info: "16lbs"},
		{
			name: "Charging Speed",
			info: "2-4 hours"},
	];
}

function fancarInspiration($scope){
	$scope.info=[
		{	main: "I've been longboarding for over four years. My first board was a Sector 9 pintail that I bought some time during the summer of 2011. About a year later, I added another board to my quiver, the Rayne Rival, a sweet bamboo/fiberglass board that I used for sliding and free riding (though the constant bruising and scrapes eventually drove me away from doing longboarding stunts). I threw in a random Churchill MFG penny board for the kicks and giggles after marveling at my friend Phillip's insane penny-boarding skills. Never would I even think of slapping a motor onto a longboard, until I stumbled upon Boosted Board's kickstarter campaign.",
			quote: "The Boosted Dual, a two wheeled electricity powered longboard with over 7 miles of range, top speed of 20mph, weighing in at 15 pounds: $1299 + Tax and Shipping.",
			post: "Damn. That's all of my OSAP money for the next two terms. That's more than 260 reggae kitchen meals. Guess it's time for a DIY. And thus, the FANCAR 2.0 (Fast And Nimble...Cat Apple Relish 2.0) was born. Named after the infamous fan powered car that a curious Waterloo Physics student from the 1900s built to make the commute from his home to/from campus more convenient  (but failed after realizing what conservation of momentum was)."
			}
	];
}

function fancarMedia($scope) {
    $scope.events=[
        ////////////////////////////////////////////////////////Archery////////////////////////////////////////////////////////////////
        {title:"It's Alive!",
        date:"December 16th, 2014",
        description: "Bought a second hand longboard via Kijiji, decided to make an aluminum mount for it. This was the result after putting everything together. Note: Still radio controlled.",
        link: '<iframe width="560" height="315" src="https://www.youtube.com/embed/DpUNV7wdDeQ" frameborder="0" allowfullscreen></iframe>',
        youtube: "https://www.youtube.com/embed/DpUNV7wdDeQ",
        id:"1"},
        
        ////////////////////////////////////////////////////////Macaroon////////////////////////////////////////////////////////////////
        {title:"First Successful batch of Macaroons",
        date:"March 20th",
        description: "I'm too lazy to write content",
        quote: "Aspiring quote about being a rapper",
        person: "Someone",
        link: "../images/highlights/babymacaroon.png",
        id:"2"},
        
        ////////////////////////////////////////////////////////Nanobot////////////////////////////////////////////////////////////////
        {title:"Our Nanobot",
        date:"March 17th",
        description: "I'm too lazy to write content",
        quote: "Aspiring quote about being a rapper",
        person: "Someone",
        link: "../images/highlights/nanobot.png",
        id:"3"},
        
        ////////////////////////////////////////////////////////Bow and Dart Board////////////////////////////////////////////////////////////////
        {title:"Not a good idea",
        date:"March 14th",
        description: "description",
        quote: "Aspiring quote about being a rapper",
        person: "Someone",
        link: "../images/highlights/bowdart.png",
        id:"4"}, //Dont forget to change this
    ];
}