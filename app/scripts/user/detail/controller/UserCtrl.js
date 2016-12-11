'use strict';

/**
 * UserCtrl
 * Controller of the shokenWebApp for bid details
 */
angular.module('shokenWebApp')
  .controller('UserCtrl',
    ['$scope', '$routeParams', 'UserService',
      function ($scope, $routeParams, UserService) {
        $scope.userDetailed = {};

        var success = function (response) {
          $scope.userDetailed = response.data;
        };

        var error = function (response) {
          ngNotify("Couldn't find user", 'error');
        };

        UserService.get($routeParams.id, success, error);
      }]);
