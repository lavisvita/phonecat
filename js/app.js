angular.module('phonecatFilters', [])
    .filter('checkmark', function(){
       return function(input){
           return input ? '\u2713' : '\u2718';
       };
    });
var phonecatApp = angular.module('phonecatApp', ['ngRoute', 'phonecatFilters', 'phonecatServices'])
    .config(['$routeProvider', function($routeProvider){
        $routeProvider
            .when('/phones', {
                templateUrl: './phone-list.html',
                controller: 'PhoneListCtrl'
            })
            .when('/phones/:phoneId', {
                templateUrl: './phone-detail.html',
                controller: 'PhoneDetailCtrl'
            })
            .otherwise({
                redirectTo: '/phones'
            });
    }]);