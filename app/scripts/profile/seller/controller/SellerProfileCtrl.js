'use strict';

/**
 * SellerProfileCtrl
 * Controller of the shokenWebApp for bids list management
 */
angular.module('shokenWebApp')
  .controller('SellerProfileCtrl',
    ['$scope', '$routeParams', 'BidsListService',
      function ($scope, $routeParams, BidsListService) {

        var tab = $routeParams.tab;
        $scope.bids = [];

        console.log("loading " + tab);

        var getBidsListCallback = function (bids) {
          $scope.bids = bids;
        };

        if(tab) {
          BidsListService.getList(getBidsListCallback);
        }
      }]);
