'use strict';

 /*
 * Main module of the application.
 */
angular
  .module('shokenWebApp', [
    'ngRoute',
    'ui.bootstrap',
    'ui.bootstrap.datetimepicker',
    'ngNotify',
    'ngMessages'
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
          .when('/bid/new', {
            templateUrl: 'views/bid/create/bid-create.html',
            controller: 'BidCreateCtrl',
            controllerAs: 'bidCreate',
            tab: 'bids'
          })
          .when('/bid/:id', {
            templateUrl: 'views/bid/detail/bid.html',
            controller: 'BidCtrl',
            controllerAs: 'bid',
            tab: 'bids'
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
            controllerAs: 'usersList',
            tab: 'users'
          })
          .when('/seller', {
            templateUrl: 'views/profile/seller/seller-profile.html',
            controller: 'SellerProfileCtrl',
            controllerAs: 'sellerProfile',
            tab: 'seller'
          })
          .when('/seller/:tab', {
            templateUrl: 'views/profile/seller/seller-profile.html',
            controller: 'SellerProfileCtrl',
            controllerAs: 'sellerProfile',
            tab: 'seller'
          })
          .when('/investor', {
            templateUrl: 'views/profile/investor/investor-profile.html',
            controller: 'InvestorProfileCtrl',
            controllerAs: 'investorProfile',
            tab: 'investor'
          })
          .when('/investor/:tab', {
            templateUrl: 'views/profile/investor/investor-profile.html',
            controller: 'InvestorProfileCtrl',
            controllerAs: 'investorProfile',
            tab: 'investor'
          })
          .otherwise({
            redirectTo: '/'
          });
      }])
  .run(['ngNotify', function (ngNotify) {
    ngNotify.config({
      theme: 'pitchy',
      position: 'top',
      duration: 2000,
      sticky: false,
      html: true
    });
  }]);
