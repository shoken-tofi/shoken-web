'use strict';

/**
 * # LoginCtrl
 * Controller of the shokenWebApp
 */
angular.module('shokenWebApp')
  .controller('LoginCtrl',
    ['$scope', 'LoginService', 'ngNotify', '$location',
      function ($scope, LoginService, ngNotify, $location) {
        var success = function (response) {};

        var error = function (data, status) {
          console.log(status);
          $location.path("/bids");
        };

        $scope.submit = function () {
          if ($scope.loginForm.$invalid) {
            console.log('Error in login form');
            return;
          }

          LoginService.login(
            $scope.loginForm.username.$modelValue,
            $scope.loginForm.password.$modelValue,
            success,
            error);
        };
      }]);
