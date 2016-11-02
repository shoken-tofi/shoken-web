'use strict';

/**
 * Registration Service
 */
angular.module('shokenWebApp')
  .factory('RegistrationService',
    ['$http', 'API',
    function ($http, API) {
      var instance = {};
      instance.sign_up = function (username, email, password, password_confirmation, successCallback, errorCallback) {
        $http
          .get(API.url)
          .then(successCallback, errorCallback);
      };

      return instance;
    }])
