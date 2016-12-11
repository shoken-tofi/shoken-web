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
        $scope.filteredUsers = [];

        $scope.itemsPerPage = 15;
        $scope.currentPage = 1;

        $scope.setPage = function (pageNo) {
          $scope.currentPage = pageNo;
        };

        var getListCallback = function (response) {
          $scope.users = response.data.users;
          $scope.totalItems = response.data.users.length;
        };

        $scope.$watch("users + currentPage + itemsPerPage", function() {
          var begin = (($scope.currentPage - 1) * $scope.itemsPerPage),
              end   = begin + $scope.itemsPerPage;

          $scope.filteredUsers = $scope.users.slice(begin, end);
        });

        UsersListService.getList(getListCallback);

      }]);
