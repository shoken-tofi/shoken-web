'use strict';

/**
 * InvestorProfileCtrl
 * Controller of the shokenWebApp for bids list management
 */
angular.module('shokenWebApp')
  .controller('InvestorProfileCtrl',
    ['$scope', '$routeParams', 'BidsListService','$uibModal', 'BetService', 'ngNotify',
      function ($scope, $routeParams, BidsListService, $uibModal, BetService, ngNotify) {

        var tab = $routeParams.tab;

        $scope.ableToBet = tab && tab === 'active';
        $scope.bids = [];

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

        console.log("loading " + tab);

        var getBidsListCallback = function (response) {
          $scope.bids = response ? response.data.bids || [] : [];
        };

        var error = function (response) {
          ngNotify.set('Failed to get bids list. Try later.', 'error');
        };

        if(tab) {
          BidsListService.getList($scope.currentPage, getBidsListCallback, error);
        }
      }]);
