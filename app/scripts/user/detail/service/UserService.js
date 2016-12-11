'use strict';

/**
 * Bid service
 */
angular.module('shokenWebApp')
  .factory('UserService',
    ['$http', 'API',
      function ($http, API) {
        var instance = {};

        instance.get = function (id, successCallback, errorCallback) {
          var requestUrl = `${API.users}/${id}`;

          console.log(requestUrl);

          $http
            .get(requestUrl)
            .then(successCallback, errorCallback);
        };
        return instance;
      }]);
