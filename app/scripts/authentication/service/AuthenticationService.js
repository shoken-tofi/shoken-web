'use strict';

/**
 * ModalProvider
 */
angular.module('shokenWebApp')
  .service('AuthenticationService',
    [ '$rootScope', '$localStorage', 'API', '$http',
      function ($rootScope, $localStorage, API, $http) {

        var authToken;

        this.getAuthToken = function () {
          return authToken;
        };

        this.me = function (callback) {
          $http.get(
            API.me, {
              "headers": {
                "authorization": authToken
              }
            })
            .then(
              function (response) {
                $rootScope.role = response.data ? response.data[0] : undefined;
                if(callback) {
                  callback();
                }
              },
              function (response) {
                $rootScope.role = undefined;
                if(callback) {
                  callback();
                }
              }
            );
        };

        this.setSession = function (username, password, callback) {
          console.log("Session for user " + username + " was set.");
          authToken = username ? "Basic " + btoa(username + ":" + password) : "";
          $rootScope.logged = true;
          $localStorage.authToken = authToken;

          this.me(callback);
        };

        $rootScope.logout = function () {
          authToken = undefined;
          $rootScope.logged = false;
          $rootScope.role = undefined;
          $localStorage.$reset();
        };

        this.init = function () {
          authToken = $localStorage.authToken;
          if(authToken) {
            $rootScope.logged = true;
            this.me();
          }
        };

      }]);
