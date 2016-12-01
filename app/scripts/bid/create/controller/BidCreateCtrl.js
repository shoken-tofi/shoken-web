'use strict';

/**
 * BidCreateCtrl
 * Controller of the shokenWebApp for bid creation
 */
angular.module('shokenWebApp')
  .controller('BidCreateCtrl',
    ['$scope', '$routeParams', 'BidCreateService', '$location', 'ngNotify',
      function ($scope, $routeParams, BidCreateService, $location, ngNotify) {

        $scope.newBid = {};
        $scope.newBid.sellerId = 333;
        $scope.newBid.quantity = 1;

        var success = function () {
          ngNotify.set("Bid was successfully created");

          //  TODO: transfer as a param
          $location.path("/bids");
        };

        var error = function () {
          ngNotify.set('An error occurred during bid saving!', 'error');
        };

        var save = function () {
          console.log("Saving bid..");
          console.log($scope.newBid);
          BidCreateService.save($scope.newBid, success, error);
        };

        $scope.submit = save;

      }]);
