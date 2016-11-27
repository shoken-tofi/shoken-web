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

        var getBidsListCallback = function (response) {
          $scope.bids = response ? response.data.bids || [] : [];
        };

        if(tab) {
          BidsListService.getList(getBidsListCallback);
        }
      }]);
