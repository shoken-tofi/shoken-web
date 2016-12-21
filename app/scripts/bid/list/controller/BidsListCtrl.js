'use strict';

/**
 * BidsListCtrl
 * Controller of the shokenWebApp for bids list management
 */
angular.module('shokenWebApp')
  .controller('BidsListCtrl',
    ['$scope', 'BidsListService', 'BetService', '$location', 'ModalService', 'ngNotify', 'OPTIONS',
      function ($scope, BidsListService, BetService, $location, ModalService, ngNotify, OPTIONS) {

        var resetFilter = function () {
          console.log("reset filter");
          $scope.filter = {};

          $scope.query = null;

          $scope.filter.minBetPrice = null;
          $scope.filter.maxBetPrice = null;

          $scope.filter.recent = false;
          $scope.filter.progress = false;
          $scope.filter.expiring = false;

          $scope.filter.type = null;

          $scope.filterConfig = {};
          $scope.filterConfig.typeOptions = OPTIONS.typeOptions;
        };

        var reset = function () {

          $scope.bids = [];
          $scope.filteredBids = [];

          $scope.itemsPerPage = 10;
          $scope.currentPage = 1;
        };

        var success = function (response) {
          var bids = response ? response.data.bids || [] : [];
          console.log(bids);
          $scope.filteredBids = bids;
          console.log($scope.filteredBids);
          $scope.totalItems = response.data.totalElements;
        };

        var error = function (err) {
          ngNotify.set('An error occured during fetching bids list.', 'error');
          reset();
        };

        var filter = function () {
          console.log("filter from bidsListCtrl");
          BidsListService.getList($scope.currentPage, $scope.filter, success, error);
        };

        $scope.$watch("currentPage + itemsPerPage", function() {
          BidsListService.getList($scope.currentPage, $scope.filter, success, error);
        });

        $scope.setPage = function (pageNo) {
          $scope.currentPage = pageNo;
        };

        $scope.bet = function (step, value, bidId) {
          console.log("betManagement");
          console.log(bidId);
          BetService.setBetManagement(step, value, bidId);

          ModalService.show({
              size: 'sm',
              templateUrl: 'views/bid/list/modal/bet-modal.html',
              controller: 'BetModalCtrl',
              resolve: {
              }
            },
            function () {
              console.log('Modal dismissed at: ' + new Date());
            });
        };

        $scope.filterList = filter;

        $scope.resetFilter = resetFilter;

        reset();
        resetFilter();

        BidsListService.getList($scope.currentPage, $scope.filter, success, error);

      }]);
