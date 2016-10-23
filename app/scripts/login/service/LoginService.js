'use strict';

/**
 * Login Service
 */
angular.module('shokenWebApp')
  .factory('LoginService',
    ['$http',
      function ($http) {

        var instance = {};
        instance.login = function (username, password, successCallback, errorCallback) {
          $http
            .get('http://localhost:8080')
            .then(successCallback, errorCallback);
        };

        return instance;

      }]);
