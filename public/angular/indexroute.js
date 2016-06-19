var myApp = angular.module('myModule', ['ngRoute']);
myApp.config(function ($routeProvider)
{
    $routeProvider
        .when('/login',
            {
                templateUrl: '/login.jade',
                controller: 'loginCtrl'
            })
        .when('/register',
            {
                templateUrl: '/signup.jade',
                controller: 'registerCtrl'
            })
        .otherwise(
            {
                redirectTo: '/'
            });
});
