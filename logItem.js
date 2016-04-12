

// this is an item
angular.module("logItem",[])
	.controller('firstAngularController',function ($scope){

		$scope.item = {
			type: "", 
			// clarifies the type of item
			today: false,
			// whether it is designated for today, set default
			title: "",
			// title of the item
			aim: "",
			// set default item aim
			checkInContents: "none",
			// track check in contents here
		};
	});