'use strict';

 /*
 * Main module of the application.
 */
angular
  .module('shokenWebApp', [
    'ngRoute'
  ])
  .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
          .when('/', {
            templateUrl: 'views/root/root.html',
            controller: 'RootCtrl',
            controllerAs: 'root'
          })
          .when('/login', {
            templateUrl: 'views/login/login.html',
            controller: 'LoginCtrl',
            controllerAs: 'login'
          })
          .when('/sign_up', {
            templateUrl: 'views/sign_up/sign_up.html',
            controller: 'RegistrationCtrl',
            controllerAs: 'sign_up'
          })
          .otherwise({
            redirectTo: '/'
          });
      }]);
