'use strict';

/**
 * BidsListCtrl
 * Controller of the shokenWebApp for bids list management
 */
angular.module('shokenWebApp')
  .controller('BidsListCtrl',
    ['$scope', '$uibModal', 'BidsListService', 'BetService', '$location',
      function ($scope, $uibModal, BidsListService, BetService, $location) {

        var reset = function () {
          console.log("reset");
          $scope.bids = [];
          $scope.filteredBids = [];

          $scope.itemsPerPage = 10;
          $scope.currentPage = 1;
        }();

        $scope.setPage = function (pageNo) {
          $scope.currentPage = pageNo;
        };

        var modalInstance;

        var open = function (step, value, bidId, investorId) {
          BetService.setBetManagement(step, value, bidId, investorId);
          modalInstance = $uibModal.open({
            size: 'sm',
            templateUrl: 'views/bid/list/modal/bet-modal.html',
            controller: 'BetModalCtrl',
            resolve: {
            }
          });

          modalInstance.result.then(
            function () {
            },
            function () {
              console.log('Modal dismissed at: ' + new Date());
            });
        };

        $scope.bet = open;

        $scope.$watch("currentPage + itemsPerPage", function() {
          var begin = (($scope.currentPage - 1) * $scope.itemsPerPage),
              end   = begin + $scope.itemsPerPage;

          $scope.filteredBids = $scope.bids.slice(begin, end);
        });

        var success = function (response) {
          var bids = response ? response.data.bids || [] : [];
          console.log(bids);
          $scope.filteredBids = bids;
          console.log($scope.filteredBids);
          $scope.totalItems = bids.length;
        };

        var error = function (err) {
          console.log(err);
          reset();
        };

        BidsListService.getList(success);

      }]);
