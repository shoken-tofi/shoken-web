'use strict';

/**
 * BidCreateCtrl
 * Controller of the shokenWebApp for bid creation
 */
angular.module('shokenWebApp')
  .controller('BidCreateCtrl',
    ['$scope', '$routeParams', 'BidCreateService', '$location',
      function ($scope, $routeParams, BidCreateService, $location) {

        $scope.newBid = {};
        $scope.newBid.sellerId = 333;
        $scope.newBid.quantity = 1;

        var success = function () {
          console.log("Bid was successfully created");

          $location.path("/bids");
        };

        var error = function () {
          console.log("An error occured during bid saving");
        };

        var save = function () {
          console.log("Saving bid..");
          console.log($scope.newBid);
          BidCreateService.save($scope.newBid, success, error);
        };

        $scope.submit = save;

      }]);
