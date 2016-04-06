//define app module with dependency
var app = angular.module("MyApp", ["LiveSearch"]);
app.controller("MyController", function($scope, $http, $q, $window) {
   $scope.search1 = "";
   //your search callback
   $scope.mySearchCallback = function () {
      var defer = $q.defer();
      defer.resolve([
        { city: "nailuva", state: "ce", country: "fiji"},
        { city: "suva", state: "ce", country: "fiji"}
      ]);
      return defer.promise;
   };
});