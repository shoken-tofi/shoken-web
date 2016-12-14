'use strict';

/**
 * Login Service
 */
angular.module('shokenWebApp')
  .factory('LoginService',
    ['$http', 'API',
      function ($http, API) {

        var instance = {};
        instance.login = function (username, password, successCallback, errorCallback) {
          $http
            .get(API.login)
            .then(successCallback, errorCallback);
        };

        return instance;

      }]);
