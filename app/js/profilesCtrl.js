var mainApp = angular.module('mainApp');

mainApp.controller('profilesCtrl', function($scope) {

	$scope.ageGroup = [
		{ age: "0-12" },
		{ age: "13-24" },
		{ age: "25-39" },
		{ age: "40-64" },
		{ age: "65+" }
	];

});
