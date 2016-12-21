'use strict';

/**
 * Login Service
 */
angular.module('shokenWebApp')
  .factory('LoginService',
    ['$http', 'API', 'AuthenticationService',
      function ($http, API, AuthenticationService) {

        var instance = {};
        instance.login = function (username, password, successCallback, errorCallback) {
          $http
            .post(API.login, {
              "username": username,
              "password": password
            }, {
              "headers": {
                "Content-Type": 'application/x-www-form-urlencoded'
              },
              "transformRequest": function (obj) {
                var str = [];
                for (var p in obj)
                  str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                return str.join("&");
              }
            })
            .then(
              function (response) {
                // AuthenticationService.setSession(username, password);
                // debugger;
                // if (successCallback) {
                //   successCallback();
                // }
              },
              function (response) {
                AuthenticationService.setSession(username, password);
                if (errorCallback) {
                  errorCallback(response.data, response.status);
                }
              })
        };

        return instance;

      }]);
