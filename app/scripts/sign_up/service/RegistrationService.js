'use strict';

/**
 * Registration Service
 */
angular.module('shokenWebApp')
  .factory('RegistrationService',
    ['$http', 'API',
    function ($http, API) {
      var instance = {};
      instance.sign_up = function (username, email, password, successCallback, errorCallback) {
        $http.post(
          API.register,
          {
            "username": username,
            "email": email,
            "password": password
          })
          .then(successCallback, errorCallback);
      };

      return instance;
    }]);
