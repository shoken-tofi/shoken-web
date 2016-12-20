'use strict';

/**
 * # RootCtrl
 * Controller of the shokenWebApp
 */
angular.module('shokenWebApp')
  .controller('RootCtrl',
    ['AuthenticationService',
      function (AuthenticationService) {
        AuthenticationService.restoreAuthToken();
      }
  ]);
