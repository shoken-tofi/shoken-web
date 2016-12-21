'use strict';

/**
 * Login Service
 */
angular.module('shokenWebApp')
  .factory('LoginService',
    ['$http', 'API', 'AuthenticationService', '$rootScope',
      function ($http, API, AuthenticationService, $rootScope) {

        var instance = {};
        instance.login = function (username, password, successCallback, errorCallback) {
          $http
            .post(API.login, {
              "username": username,
              "password": password
            }, {
              "headers": {
                "Content-Type": 'application/x-www-form-urlencoded',
                "Access-Control-Allow-Origin": '*'
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
              },
              function (response) {
                AuthenticationService.setSession(username, password, function () {
                  if($rootScope && $rootScope.role && $rootScope.role !== 'ANONYMUS') {
                    if(successCallback) {
                      successCallback(response);
                    }
                  } else {
                    if (errorCallback) {
                      errorCallback(response);
                    }
                  }
                });
              })
        };

        return instance;

      }]);
