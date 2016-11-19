'use strict';

/**
 * BidsListCtrl
 * Controller of the shokenWebApp for bids list management
 */
angular.module('shokenWebApp')
  .controller('BidsListCtrl',
    ['$scope', '$uibModal', 'BidsListService',
      function ($scope, $uibModal, BidsListService) {

        $scope.bids = [];

        var modalInstance;

        $scope.open = function () {

          modalInstance = $uibModal.open({
            templateUrl: 'views/bid/list/modal/bet-modal.html',
            controller: ModalInstanceCtrl,
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

var ModalInstanceCtrl = function ($scope, $uibModalInstance) {

  $scope.ok = function () {
    $uibModalInstance.close();
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
};
