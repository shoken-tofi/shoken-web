'use strict';

/**
 * Users List Service
 */
angular.module('shokenWebApp')
  .factory('UsersListService',
    ['$http', 'API',
      function ($http, API) {
        var instance = {};

        instance.getList = function (successCallback, errorCallback) {
          var requestUrl = `${API.users}`;
          $http
            .get(requestUrl)
            .then(successCallback, errorCallback);
        };

        return instance;

      }]);
