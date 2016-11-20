'use strict';

/**
 * BidCtrl
 * Controller of the shokenWebApp for bid details
 */
angular.module('shokenWebApp')
  .controller('BidCtrl',
    ['$scope', '$routeParams', 'BidService', 'BetService',
      function ($scope, $routeParams, BidService, BetService) {

        $scope.bidDetailed = {};

        var id = $routeParams.id;

        var getBidCallback = function (data) {
          $scope.bidDetailed = data;

          BetService.setBetManagement(
            $scope.bidDetailed.price.step,
            $scope.bidDetailed.price.value,
            $scope.bidDetailed.id,
            333);
        };

        BidService.get(id, getBidCallback);

      }]);
