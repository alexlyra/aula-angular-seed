'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', viewConfig])

.controller ('View1Ctrl', [function() {

}]);


	function viewConfig($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}


viewConfig['$inject'] = ['$routeProvider'];

