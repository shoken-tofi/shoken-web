'use strict';

/**
 * # RegistrationCtrl
 * Controller of the shokenWebApp
 */
angular.module('shokenWebApp')
  .controller('RegistrationCtrl',
    ['$scope', 'RegistrationService',
      function ($scope, RegistrationService) {
        $scope.form = {};
        $scope.form.username = '';
        $scope.form.email = '';
        $scope.form.password = '';
        $scope.form.password_confirmation = '';

        var valid = function () {
          //  TODO: add validation by length
          return $scope.form &&
            $scope.form.username &&
            $scope.form.email &&
            $scope.form.password &&
            $scope.form.password_confirmation;
        };

        var submit = function () {
          if(!valid()) {
            console.log('Error in sign up form');
            return;
          }

          RegistrationService.sign_up(
            $scope.form.username,
            $scope.form.email,
            $scope.form.password,
            $scope.form.password_confirmation,
            function (response) {
              console.log('Sign up successeed' + JSON.stringify(response.data));
            },
            function (response) {
              console.log('Sign up failed. ' + (response.data || ''));
            });
        };

        $scope.submit = submit;
      }
  ]
);
