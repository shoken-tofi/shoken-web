'use strict';

/**
 * BidsListCtrl
 * Controller of the shokenWebApp for bids list management
 */
angular.module('shokenWebApp')
  .controller('FilterCtrl',
    ['$scope', 'OPTIONS', 'ngNotify',
      function ($scope, OPTIONS, ngNotify) {
        $scope.filter = {};

        $scope.filter.price = {
          from: null,
          to: null
        };

        $scope.filter.recent = false;
        $scope.filter.progress = false;
        $scope.filter.expiring = false;

        $scope.filter.type = null;

        $scope.filterConfig = {};
        $scope.filterConfig.typeOptions = OPTIONS.typeOptions;

        var filter = function () {
          console.log($scope.filter);
          ngNotify.set(JSON.stringify($scope.filter));
        };

        $scope.filterList = filter;
      }]);
