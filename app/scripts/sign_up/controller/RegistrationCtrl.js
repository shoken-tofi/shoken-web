'use strict';

/**
 * # RegistrationCtrl
 * Controller of the shokenWebApp
 */
angular.module('shokenWebApp')
  .controller('RegistrationCtrl',
    ['$scope', 'RegistrationService', 'ngNotify',
      function ($scope, RegistrationService, ngNotify) {
        $scope.form = {};
        $scope.form.username = '';
        $scope.form.email = '';
        $scope.form.password = '';
        $scope.form.password_confirmation = '';

        var valid = function () {
          if(!$scope.form) {
            console.log("err");
            return false;
          }

          var username = $scope.form.username;
          var email = $scope.form.email;
          var pass = $scope.form.password;
          var passConfirm = $scope.form.password_confirmation;

          var usernameRe = new RegExp("^[A-Za-z0-9]+(?:[_.-][A-Za-z0-9]+)*$");

          var emailRe = new RegExp("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?");

          var specRe = new RegExp("[!@#$%^&*+=?-_()/\".,<>~`;:]");
          var digitRe = /\d/g;
          var lowerRe = /[a-z]/g;
          var upperRe = /[A-Z]/g;
          var whitespaceRe = /\s/g;

          var usernameValid = username
            && usernameRe.test(username)
            && username.length >= 6
            && username.length <= 100;

          var emailValid = email
            && emailRe.test(email)
            && email.length <= 100;

          var passwordValid = pass
            && passConfirm
            && pass === passConfirm
            && pass.length >= 6 && pass.length <= 50
            && pass.match(digitRe)
            && pass.match(specRe)
            && pass.match(lowerRe)
            && pass.match(upperRe)
            && !pass.match(whitespaceRe);

          console.log("username " + usernameValid);
          console.log("email " + emailValid);
          console.log("pass " + passwordValid);

          return usernameValid && emailValid && passwordValid;
        };

        var success = function (response) {
          ngNotify.set('Sign up successeed.');
        };

        var error = function (response) {
          ngNotify('Sign up failed.', 'error');
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
            success,
            error);
        };

        $scope.submit = submit;
      }
  ]
);
