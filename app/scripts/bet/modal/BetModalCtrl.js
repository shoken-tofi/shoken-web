'use strict';

/**
 * BetModalCtrl
 * Controller of the shokenWebApp for bet popup
 */
angular.module('shokenWebApp')
  .controller('BetModalCtrl',
    ['$scope', '$uibModalInstance',
      function ($scope, $uibModalInstance) {

        $scope.ok = function () {
          $uibModalInstance.close();
        };

        $scope.cancel = function () {
          $uibModalInstance.dismiss('cancel');
        };

      }]);
