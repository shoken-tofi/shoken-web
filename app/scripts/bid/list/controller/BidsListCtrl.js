'use strict';

/**
 * BidsListCtrl
 * Controller of the shokenWebApp for bids list management
 */
angular.module('shokenWebApp')
  .controller('BidsListCtrl',
    ['$scope', 'BidsListService',
      function ($scope, BidsListService) {

        $scope.bids = [];

        var getListCallback = function (data) {
          $scope.bids = data;
        };

        BidsListService.getList(getListCallback);

      }]);
