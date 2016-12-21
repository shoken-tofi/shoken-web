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

        this.me = function () {
          $http.get(
            API.me, {
              "headers": {
                "authorization": authToken
              }
            })
            .then(
              function (response) {
                debugger;
                $rootScope.role = response.data ? response.data[0] : undefined;
              },
              function (response) {
                debugger;
                $rootScope.role = undefined;
              }
            );
        };

        this.setSession = function (username, password) {
          console.log("Session for user " + username + " was set.");
          authToken = username ? "Basic " + btoa(username + ":" + password) : "";
          $rootScope.logged = true;
          $localStorage.authToken = authToken;

          this.me();
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
