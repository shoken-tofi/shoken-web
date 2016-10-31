'use strict';

/**
 * BidCtrl
 * Controller of the shokenWebApp for bid details
 */
angular.module('shokenWebApp')
  .controller('BidCtrl',
    ['$scope', '$routeParams', 'BidService',
      function ($scope, $routeParams, BidService) {

        $scope.bid = {};

        var id = $routeParams.id;

        var getBidCallback = function (data) {
          console.log(data);
          $scope.bid = data;
          console.log($scope.bid.name);
        };

        BidService.get(id, getBidCallback);

      }]);
