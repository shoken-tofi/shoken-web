'use strict';

/**
 * BidsListCtrl
 * Controller of the shokenWebApp for bids list management
 */
angular.module('shokenWebApp')
  .controller('BidsListCtrl',
    ['$scope', '$uibModal', 'BidsListService', 'BetService', '$location',
      function ($scope, $uibModal, BidsListService, BetService, $location) {

        $scope.bids = [];
        $scope.deleteMode = false;
        var idsToDelete = [];

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

        $scope.deleteModeOn = function () {
          $scope.deleteMode = true;
        };

        $scope.reset = function () {
          $scope.deleteMode = false;
          idsToDelete = [];
        };

        $scope.toggleCheckbox = function(bidId) {
          var index = idsToDelete.indexOf(bidId);
          index > -1 ?
            idsToDelete.splice(index, 1)
            :
            idsToDelete.push(bidId);

          console.log(idsToDelete);
        };

        $scope.delete = function () {
          if(idsToDelete) {
            BidsListService.delete(
              idsToDelete,
              function () {
                $location.path("/bids");
              }
            );
          }

          $scope.reset();
        };

        var getListCallback = function (data) {
          $scope.bids = data;
        };

        BidsListService.getList(getListCallback);

      }]);
