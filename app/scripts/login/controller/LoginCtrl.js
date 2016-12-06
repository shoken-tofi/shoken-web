'use strict';

/**
 * # LoginCtrl
 * Controller of the shokenWebApp
 */
angular.module('shokenWebApp')
  .controller('LoginCtrl',
    ['$scope', 'LoginService', 'ngNotify',
      function ($scope, LoginService, ngNotify) {
        $scope.submit = function () {
          if ($scope.loginForm.$invalid) {
            console.log('Error in login form');
            return;
          }

          LoginService.login(
            $scope.loginForm.username.$modelValue,
            $scope.loginForm.password.$modelValue,
            function (response) {
              console.log('Login successeed' + JSON.stringify(response.data));
            },
            function (response) {
              ngNotify.set('Login failed. Please, check your username and password.', 'error');
              console.log('Login failed. ' + (response.data || ''));
            });
        };
      }]);
