'use strict';

/**
 * BidsListCtrl
 * Controller of the shokenWebApp for bids list management
 */
angular.module('shokenWebApp')
  .controller('BidsListCtrl',
    ['$scope', '$uibModal', 'BidsListService', 'BetService',
      function ($scope, $uibModal, BidsListService, BetService) {

        $scope.bids = [];

        var modalInstance;

        $scope.open = function (step, value, bidId, investorId) {
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

        $scope.bet = $scope.open;

        var getListCallback = function (data) {
          $scope.bids = data;
        };

        BidsListService.getList(getListCallback);

      }]);
