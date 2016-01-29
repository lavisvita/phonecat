angular.module('phonecatFilters', [])
    .filter('checkmark', function(){
       return function(input){
           return input ? '\u2713' : '\u2718';
       };
    });
var phonecatApp = angular.module('phonecatApp', ['ngRoute', 'phonecatFilters'])
    .config(['$routeProvider', function($routeProvider){
        $routeProvider
            .when('/phones', {
                templateUrl: '/phones',
                controller: 'PhoneListCtrl'
            })
            .when('/phones/:phoneId', {
                templateUrl: '/phone-detail',
                controller: 'PhoneDetailCtrl'
            })
            .otherwise({
                redirectTo: '/phones'
            });
    }]);
