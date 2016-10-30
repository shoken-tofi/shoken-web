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
          .otherwise({
            redirectTo: '/'
          });
      }])
  .value('activeTab', '');
