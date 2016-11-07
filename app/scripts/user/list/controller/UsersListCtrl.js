'use strict';

/**
 * UsersListCtrl
 * Controller of the shokenWebApp for users list management
 */
angular.module('shokenWebApp')
  .controller('UsersListCtrl',
    ['$scope', 'UsersListService',
      function ($scope, UsersListService) {

        $scope.users = [];

        var getListCallback = function (data) {
          $scope.users = data;
        };

        UsersListService.getList(getListCallback);

      }]);
