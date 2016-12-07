'use strict';

/**
 * # LoginCtrl
 * Controller of the shokenWebApp
 */
angular.module('shokenWebApp')
  .controller('LoginCtrl',
    ['$scope', 'LoginService', 'ngNotify',
      function ($scope, LoginService, ngNotify) {
        var success = function (response) {
          ngNotify.set('Login successeed.');
        };

        var error = function (response) {
          ngNotify('Login failed. Please, check your username and password.', 'error');
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
