var mainApp = angular.module('mainApp');

mainApp.controller('homeCtrl', function($scope, $http) {
	
	$scope.tags = [
	];

	$scope.loadTags = function($query) {

	    return $http.get('symptoms.json', { cache: true}).then(function(response) {
	    	var symptoms = response.data;
			return symptoms.filter(function(symptom) {
	        	return symptom.text.toLowerCase().indexOf($query.toLowerCase()) != -1;
	        });
	    });
	};
	
});
