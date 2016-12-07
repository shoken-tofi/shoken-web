'use strict';

/**
 * # RegistrationCtrl
 * Controller of the shokenWebApp
 */
angular.module('shokenWebApp')
  .controller('RegistrationCtrl',
    ['$scope', 'RegistrationService', 'ngNotify',
      function ($scope, RegistrationService, ngNotify) {
        var success = function (response) {
          ngNotify.set('Sign up successeed.');
        };

        var error = function (response) {
          ngNotify('Sign up failed.', 'error');
        };

        $scope.submit = function () {
          if ($scope.registrationForm.$invalid) {
            console.log('Error in sign up form');
            return;
          }

          RegistrationService.sign_up(
            $scope.registrationForm.username.$modelValue,
            $scope.registrationForm.email.$modelValue,
            $scope.registrationForm.password.$modelValue,
            success,
            error);
        };
      }
  ]
);
