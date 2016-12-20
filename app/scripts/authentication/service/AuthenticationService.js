'use strict';

/**
 * ModalProvider
 */
angular.module('shokenWebApp')
  .service('AuthenticationService',
    [ '$rootScope',
      function ($rootScope, $localStorage) {

        var authToken;

        this.setSession = function (username, password) {
          console.log("Session for user " + username + " was set.");
          authToken = username ? "Basic " + btoa(username + ":" + password) : "";
          $rootScope.logged = true;
          // $localStorage.authToken = authToken;
        };

        this.getAuthToken = function () {
          return authToken;
        };

        this.restoreAuthToken = function () {
          // authToken = $localStorage.authToken;
          if(authToken) {
            $rootScope.logged = true;
          }
        };

      }]);
