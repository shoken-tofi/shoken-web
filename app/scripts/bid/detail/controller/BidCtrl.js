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
        $scope.bet = {};
        $scope.betManagement = {};

        var up = function (up) {
          if (!up && $scope.betManagement.delta <= $scope.betManagement.step) {
            return;
          }

          $scope.betManagement.delta += up ? $scope.betManagement.step
            : -$scope.betManagement.step;
          $scope.betManagement.delta = parseFloat($scope.betManagement.delta.toFixed(2));

          $scope.bet.value = $scope.bidDetailed.price.value;
          $scope.bet.value += up ? $scope.betManagement.delta
            : -$scope.betManagement.delta;
          $scope.bet.value = parseFloat($scope.bet.value.toFixed(2));
        };

        $scope.up = up;

        var betForBid = function () {
          console.log("bet");
          BidService.bet($scope.bet);
        };

        $scope.betForBid = betForBid;

        var id = $routeParams.id;

        var getBidCallback = function (response) {
          $scope.bidDetailed = response.data;
          console.log($scope.bidDetailed);

          BetService.setBetManagement(
            $scope.bidDetailed.price.step,
            $scope.bidDetailed.price.value,
            $scope.bidDetailed.id);
        };

        BidService.get(id, getBidCallback);

      }]);
