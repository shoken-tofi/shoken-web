'use strict';

/**
 * BetCtrl
 * Controller of the shokenWebApp for bet management
 */
angular.module('shokenWebApp')
  .controller('BetCtrl',
    ['$scope', 'BidService', 'BetService',
      function ($scope, BidService, BetService) {

        $scope.bet = BetService.getBet();
        $scope.betManagement = BetService.getBetManagement();

        console.log($scope.bet);
        console.log($scope.betManagement);

        var up = function (up) {
          if(!up && $scope.betManagement.delta <= $scope.betManagement.step) {
            return;
          }

          $scope.betManagement.delta += up ? $scope.betManagement.step
            : -$scope.betManagement.step;
          $scope.betManagement.delta = parseFloat($scope.betManagement.delta.toFixed(2));

          $scope.bet.value = $scope.betManagement.startPrice;
          $scope.bet.value += up ? $scope.betManagement.delta
            : -$scope.betManagement.delta;
          $scope.bet.value = parseFloat($scope.bet.value.toFixed(2));
        };

        $scope.up = up;

        var betForBid = function () {
          console.log("bet: " + JSON.stringify($scope.bet));
          BidService.bet($scope.bet);

          if($scope.ok) {
            $scope.ok();
          }
        };

        $scope.betForBid = betForBid;

      }]);
