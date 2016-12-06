'use strict';

/**
 * SellerProfileCtrl
 * Controller of the shokenWebApp for bids list management
 */
angular.module('shokenWebApp')
  .controller('SellerProfileCtrl',
    ['$scope', '$routeParams', 'BidsListService', 'ngNotify',
      function ($scope, $routeParams, BidsListService, ngNotify) {

        var tab = $routeParams.tab;
        $scope.bids = [];

        console.log("loading " + tab);

        var getBidsListCallback = function (response) {
          $scope.bids = response ? response.data.bids || [] : [];
        };

        var error = function (response) {
          ngNotify.set('Failed to get bids list. Try later.', 'error');
        };

        if(tab) {
          BidsListService.getList($scope.currentPage, {}, getBidsListCallback, error);
        }
      }]);
