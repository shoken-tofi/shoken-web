'use strict';

/**
 * BidsListCtrl
 * Controller of the shokenWebApp for bids list management
 */
angular.module('shokenWebApp')
  .controller('BidsListCtrl',
    ['$scope', 'BidsListService', 'BetService', '$location', 'ModalService', 'ngNotify',
      function ($scope, BidsListService, BetService, $location, ModalService, ngNotify) {

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

        $scope.bet = function (step, value, bidId) {
          BetService.setBetManagement(step, value, bidId, 333);

          ModalService.show({
            size: 'sm',
            templateUrl: 'views/bid/list/modal/bet-modal.html',
            controller: 'BetModalCtrl',
            resolve: {}
          },
          function () {
            console.log('Modal dismissed at: ' + new Date());
          });
        };

        var success = function (response) {
          var bids = response ? response.data.bids || [] : [];
          console.log(bids);
          $scope.filteredBids = bids;
          console.log($scope.filteredBids);
          $scope.totalItems = bids.length;
        };

        var error = function (err) {
          ngNotify.set('An error occured during fetching bids list.', 'error');
          reset();
        };

        $scope.$watch("currentPage + itemsPerPage", function() {
          // var begin = (($scope.currentPage - 1) * $scope.itemsPerPage),
          //     end   = begin + $scope.itemsPerPage;
          //
          // $scope.filteredBids = $scope.bids.slice(begin, end);

          BidsListService.getList($scope.currentPage, success, error);
        });

        BidsListService.getList($scope.currentPage, success, error);

      }]);
