'use strict';

/**
 * BidCtrl
 * Controller of the shokenWebApp for bid details
 */
angular.module('shokenWebApp')
  .controller('BidCtrl',
    ['$scope', '$routeParams', 'BidService',
      function ($scope, $routeParams, BidService) {

        $scope.bidDetailed = {};

        var id = $routeParams.id;

        var getBidCallback = function (data) {
          $scope.bidDetailed = data;
        };

        BidService.get(id, getBidCallback);

      }]);
