var mainApp = angular.module("mainApp", ['ngRoute', 'ngTagsInput']);

mainApp.config(['$routeProvider', function($routeProvider) {
	
	$routeProvider.
		when('/profiles', {
   			controller: 'profilesCtrl',
   			templateUrl: 'partials/profiles.html'
		}).

		when('/mainPage', {
   			controller: 'homeCtrl',
   			templateUrl: 'partials/mainPage.html'
		}).

		when('/diagnosis', {
			controller: 'diagnosisCtrl',
   			templateUrl: 'partials/diagnosis.html',
		}).

		otherwise({
   			redirectTo: '/mainPage'
		});

}]);


