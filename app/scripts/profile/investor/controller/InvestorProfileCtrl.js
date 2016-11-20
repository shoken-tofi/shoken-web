'use strict';

/**
 * InvestorProfileCtrl
 * Controller of the shokenWebApp for bids list management
 */
angular.module('shokenWebApp')
  .controller('InvestorProfileCtrl',
    ['$scope', '$routeParams', 'BidsListService',
      function ($scope, $routeParams, BidsListService) {

        var tab = $routeParams.tab;

        $scope.ableToBet = tab && tab === 'active';
        $scope.bids = [];

        console.log("loading " + tab);

        var getBidsListCallback = function (bids) {
          $scope.bids = bids;
        };

        BidsListService.getList(getBidsListCallback);
      }]);
