var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {

  //routes
    $routeProvider
        .when ('/home', {
          templateUrl: '/views/home-view.html',
          controller: 'HomeController',
          controllerAs: 'home'
        })
        .when ('/budget', {
            templateUrl: '/views/budget-view.html',
            controller: 'BudgetController',
            controllerAs: 'bc'
        })
        .otherwise ( {
            redirectTo: '/home'
        });
}]);
