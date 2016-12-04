'use strict';

/**
 * # LoginCtrl
 * Controller of the shokenWebApp
 */
angular.module('shokenWebApp')
  .controller('LoginCtrl',
    ['$scope', 'LoginService', 'ngNotify',
      function ($scope, LoginService, ngNotify) {

        $scope.form = {};
        $scope.form.username = '';
        $scope.form.password = '';

        var valid = function () {
          //  TODO: add validation by length
          return $scope.form &&
            $scope.form.username &&
            $scope.form.password;
        };

        var submit = function () {
          if(!valid()) {
            console.log('Error in login form');
            return;
          }

          LoginService.login(
            $scope.form.username,
            $scope.form.password,
            function (response) {
              console.log('Login successeed' + JSON.stringify(response.data));
            },
            function (response) {
              ngNotify.set('Login failed. Please, check your username and password.', 'error');
              console.log('Login failed. ' + (response.data || ''));
            });
        };

        $scope.submit = submit;

      }]);
