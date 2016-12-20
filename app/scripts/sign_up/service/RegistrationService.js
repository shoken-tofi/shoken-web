'use strict';

/**
 * Registration Service
 */
angular.module('shokenWebApp')
  .factory('RegistrationService',
    ['$http', 'API', 'AuthenticationService',
    function ($http, API, AuthenticationService) {
      var instance = {};
      instance.sign_up = function (username, email, password, successCallback, errorCallback) {
        $http.post(
          API.register, {
            "username": username,
            "email": email,
            "password": password
          })
          .then(
            function () {
              AuthenticationService.setSession(username, password);

              if (successCallback) {
                successCallback();
              }
            },
            errorCallback);
      };

      return instance;
    }]);
