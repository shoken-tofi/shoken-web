'use strict';

/**
 * ModalProvider
 */
angular.module('shokenWebApp')
  .service('AuthenticationService',
    [ '$rootScope', '$localStorage',
      function ($rootScope, $localStorage) {

        var authToken;

        this.init = function () {
          authToken = $localStorage.authToken;
          if(authToken) {
            $rootScope.logged = true;
          }
        };

        this.setSession = function (username, password) {
          console.log("Session for user " + username + " was set.");
          authToken = username ? "Basic " + btoa(username + ":" + password) : "";
          $rootScope.logged = true;
          $localStorage.authToken = authToken;
        };

        this.getAuthToken = function () {
          return authToken;
        };

        $rootScope.logout = function () {
          authToken = undefined;
          $rootScope.logged = false;
          $localStorage.$reset();
        };

      }]);
