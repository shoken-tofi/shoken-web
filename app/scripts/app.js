'use strict';

 /*
 * Main module of the application.
 */
angular
  .module('shokenWebApp', [
    'ngRoute'
  ])
  // .config(['$locationProvider', function($locationProvider) {
  //
  //   //  For route handling: path/to/someparam
  //   $locationProvider.html5Mode({
  //     enabled: true,
  //     requireBase: false
  //   });
  //
  // }])
  .config(['$routeProvider', function ($routeProvider) {

        $routeProvider
          .when('/', {
            templateUrl: 'views/root/root.html',
            controller: 'RootCtrl',
            controllerAs: 'root',
            tab: ''
          })
          .when('/login', {
            templateUrl: 'views/login/login.html',
            controller: 'LoginCtrl',
            controllerAs: 'login',
            tab: 'login'
          })
          .when('/bids', {
            templateUrl: 'views/bid/list/bids-list.html',
            controller: 'BidsListCtrl',
            controllerAs: 'bidsList',
            tab: 'bids'
          })
          .when('/bid/:id', {
            templateUrl: 'views/bid/detail/bid.html',
            controller: 'BidCtrl',
            controllerAs: 'bid',
            tab: 'bid'
          })
          .when('/sign_up', {
            templateUrl: 'views/sign_up/sign_up.html',
            controller: 'RegistrationCtrl',
            controllerAs: 'sign_up',
            tab: 'sign_up'
          })
          .when('/users', {
            templateUrl: 'views/user/list/users-list.html',
            controller: 'UsersListCtrl',
            controllerAs: 'usersList'
          })
          .otherwise({
            redirectTo: '/'
          });

      }]);
